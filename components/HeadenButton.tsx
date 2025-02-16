import React from "react";

export default function HeadenButton({ text }: { text: string }) {
  return (
    <h1
      className="relative border border-blue-600 
    mx-auto py-2 px-8 w-fit cursor-pointer
    z-20
    before:absolute 
    before:left-[-50%] before:top-[50%] 
    before:translate-y-[-50%]
    before:w-5 
    before:h-5 before:bg-blue-600
    before:rounded-full
    before:transition-all
    hover:before:h-[100%] hover:before:w-[50%] hover:before:left-[0] hover:before:z-[-1] hover:before:rounded-none 
    after:absolute 
    after:right-[-50%] after:top-[50%] 
    after:translate-y-[-50%]
    after:w-5 
    after:h-5 after:bg-blue-600
    after:rounded-full
    after:transition-all
    hover:after:h-[100%] hover:after:w-[50%] hover:after:right-[0] hover:after:z-[-1] hover:after:rounded-none 
    hover:text-gray-50 font-bold text-xl
    "
    >
      {text}
    </h1>
  );
}
