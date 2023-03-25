import NextAuth, { AuthOptions, DefaultUser, Profile } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

import { DefaultSession } from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user?: {
      id: string;
      tag: string;
    } & DefaultSession["user"];
  }
  interface User extends DefaultUser {
    profile?: Profile;
  }

  interface Profile {
    id?: string;
    name?: string;
    email?: string;
    image?: string;
    discriminator?: string;
  }
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    /** OpenID ID Token */
    profile?: Profile;
  }
}

// TODO add tag to the database

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
      authorization: { params: { scope: "identify" } },
    }),
  ],

  callbacks: {
    async session({ session, user, token }) {
      if (session.user && token.profile) {
        session.user.id = user?.id ?? token.sub;
        session.user.tag = token.profile?.discriminator ?? "";
      }

      return session;
    },
    async jwt({ token, profile, isNewUser }) {
      if (profile) {
        token.profile = profile;

        const email = token.email ?? "";

        if (isNewUser) {
          await prisma.user.update({
            where: { email: email },
            data: {
              tag: profile.discriminator,
            },
          });
        }
      }
      return token;
    },
  },
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
