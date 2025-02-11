import { Loader } from "lucide-react";
import React from "react";

type submitButtonProps = {
  title: string;
  type?: "submit" | "reset" | "button" | undefined;
  isLoading: boolean;
  titleLoading:string
};

export default function SubmitButton({
  title,
  type = "submit",
  isLoading = false,
  titleLoading
}: submitButtonProps) {
  return (
    <>
      {isLoading ? (
        <button
          disabled
          type={type}
          className="flex items-center w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          <Loader className="w-4 h-4 mr-2 flex-shrink-0 animate-spin" />{" "}
          {titleLoading}
        </button>
      ) : (
        <button
          type={type}
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          {title}
        </button>
      )}
    </>
  );
}
