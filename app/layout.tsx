import { getServerSession } from "next-auth";
import "./globals.css";
import { Inter } from "next/font/google";
import AuthContext from "./AuthContext";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en" className={inter.className}>
      <head>
        <title>Dogville</title>
      </head>
      <body className="text-slate-900">
        <AuthContext session={session}>{children}</AuthContext>
      </body>
    </html>
  );
}
