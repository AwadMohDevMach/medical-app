
import Navbar from "@/components/Dashboard/NavBar";
import Sidebar from "@/components/Dashboard/SideBar";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

export default async function Layout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions)
  if(!session){
    redirect("/login")
  }
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <div className="flex flex-col">
        <Navbar session={session}/>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}
