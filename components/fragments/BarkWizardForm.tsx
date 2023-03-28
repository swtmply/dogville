"use client";

import useAutosizeTextArea from "@/hooks/useAutosizeTextArea";
import { BarkWithUserId } from "@/lib/requests/barks";
import { cn } from "@/lib/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FileImage } from "lucide-react";
import { Session } from "next-auth";
import { useRef } from "react";
import { Resolver, useForm } from "react-hook-form";

export interface TextareaProps {
  textareaClassName?: string;
  session: Session | null;
}

const resolver: Resolver<BarkWithUserId> = async (values) => {
  return {
    values,
    errors: {},
  };
};

const BarkWizardForm = ({ textareaClassName, session }: TextareaProps) => {
  const queryClient = useQueryClient();
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
  const { register, handleSubmit, watch, reset } = useForm<BarkWithUserId>({
    resolver,
  });
  const content = watch("content");
  const { ref, ...rest } = register("content");

  const onSubmit = handleSubmit((data) => {
    mutate({ ...data, authorId: session?.user?.id ?? "" });
    reset();
  });

  const { mutate, isLoading } = useMutation(
    async (data: BarkWithUserId) => {
      return await fetch("/api/barks", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    {
      onSuccess() {
        queryClient.invalidateQueries(["barks"]);
      },
    }
  );

  useAutosizeTextArea(textAreaRef.current, content);

  return (
    <form className="flex flex-col grow" onSubmit={onSubmit}>
      <textarea
        placeholder="What we feeling today?"
        className={cn(
          "grow bg-transparent text-lg py-2 resize-none outline-none scrollbar-hide",
          content && "border-b border-slate-200 mb-2",
          textareaClassName
        )}
        rows={1}
        {...{ ...rest, maxLength: 250 }}
        ref={(e) => {
          ref(e);
          textAreaRef.current = e;
        }}
      />
      <div className="flex w-full items-center justify-between">
        <div className="rounded-full p-2 hover:bg-indigo-100 cursor-pointer duration-150">
          <FileImage size={20} className="text-indigo-600" />
        </div>
        <button
          disabled={!content || isLoading}
          className="text-center px-6 py-2 disabled:bg-slate-200 disabled:text-slate-300 bg-indigo-600 hover:bg-indigo-700 duration-150 text-white font-semibold rounded-full"
        >
          Bark
        </button>
      </div>
    </form>
  );
};

export default BarkWizardForm;
