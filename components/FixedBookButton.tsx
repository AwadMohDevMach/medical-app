"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function FixedBookButton() {
  return (
    <div className="fixed bottom-0 w-full shadow-2xl py-8 rounded-md bg-white">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <div>
          <p className="text-2xl font-bold text-slate-800">$56</p>
          <p className="font-semibold text-sm">Mon, Jan 27 - 11:15 AM EST</p>
          <p className="text-slate-600 text-[10x]">You won’t be charged yet</p>
        </div>
        <Button
          variant="outline"
          className="inline-flex items-center justify-center  px-8 py-6
       text-md font-semibold leading-5 text-white transition-all duration-200 
       bg-slate-800 border border-transparent rounded-full focus:outline-none 
       focus:ring-2 focus:ring-offset-2 focus:ring-slate-800 hover:bg-slate-700 
       hover:text-slate-50 text-center w-[50%]"
        >
          <Plus className="w-5 h-5 mr-1" />
          Book
        </Button>
      </div>
    </div>
  );
}
