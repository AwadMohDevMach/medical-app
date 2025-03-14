"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function FixedBookButton() {
  return (
    <div className="fixed bottom-0 w-full shadow-2xl py-8  bg-white dark:bg-slate-700">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <div>
          <p className="text-2xl font-bold text-blue-700">$56</p>
          <p className="font-semibold text-sm">Mon, Jan 27 - 11:15 AM EST</p>
          <p className="text-slate-600 dark:text-slate-400 text-[10x]">You won’t be charged yet</p>
        </div>
        <Button
          variant="outline"
          className="px-6 py-3"
        >
          <Plus className="w-5 h-5 mr-1" />
          Book
        </Button>
      </div>
    </div>
  );
}
