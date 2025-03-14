import Footer from "@/components/Frontend/Footer";
import MegaMenu from "@/components/Frontend/MegaMenu";
import Navbar from "@/components/Frontend/Navbar";
import { SiteHeader } from "@/components/sit-header";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <div className="">
      {/* <div className="bg-white mx-auto py-4 fixed top-[72.5px] w-full pl-10 z-50 max-sm:hidden">
        <MegaMenu />
        </div> */}
        <SiteHeader session={session} />

      {children}
      {/* <SiteFooter /> */}
      <Footer />
    </div>
  );
}
