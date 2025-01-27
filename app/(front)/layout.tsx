import MegaMenu from "@/components/Frontend/MegaMenu";
import Navbar from "@/components/Frontend/Navbar";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="bg-white mx-auto py-4 fixed top-[72.5px] w-full pl-10 z-50 max-sm:hidden">
        <MegaMenu />
      </div>
      <div className="mt-[138px]">
      {children}
      </div>
    </div>
  );
}
