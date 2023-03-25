"use client";

import useAutosizeTextArea from "@/hooks/useAutosizeTextArea";
import { cn } from "@/lib/utils";
import { FileImage } from "lucide-react";
import { useRef, useState } from "react";

export interface TextareaProps {
  textareaClassName?: string;
}

const BarkWizardForm = ({ textareaClassName }: TextareaProps) => {
  const [value, setValue] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useAutosizeTextArea(textAreaRef.current, value);

  const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = evt.target?.value;

    setValue(val);
  };

  return (
    <div className="flex flex-col grow">
      <textarea
        onChange={handleChange}
        placeholder="What we feeling today?"
        className={cn(
          "grow bg-transparent text-lg py-2 resize-none outline-none scrollbar-hide",
          value && "border-b border-slate-200 mb-2",
          textareaClassName
        )}
        ref={textAreaRef}
        maxLength={250}
        rows={1}
        value={value}
      />
      <div className="flex w-full items-center justify-between">
        <div className="rounded-full p-2 hover:bg-indigo-100 cursor-pointer duration-150">
          <FileImage size={20} className="text-indigo-600" />
        </div>
        <button className="text-center px-6 py-2 bg-indigo-600 hover:bg-indigo-700 duration-150 text-white font-semibold rounded-full">
          Bark
        </button>
      </div>
    </div>
  );
};

export default BarkWizardForm;
