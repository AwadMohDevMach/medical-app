import DoctorDetails from "@/components/DoctorDetails";
import FixedBookButton from "@/components/FixedBookButton";
import { LocateIcon, Stethoscope } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="bg-slate-300 min-h-screen py-5">
      <div className="bg-white border border-gray-200 max-w-4xl mx-auto shadow-2xl py-10  ">
        <div className="flex px-5">
          <Image
            className="w-28 h-28 rounded-full"
            src="/doctor-card.jpg"
            alt="profile"
            width={243}
            height={207}
          />
          <div className="flex flex-col ml-20 gap-2 ">
            <h2 className="text-2xl font-bold">Dr. Matthew Pabis, MD</h2>
            <div className="flex items-center flex-1">
              <p className="flex text-md mr-10 text-slate-500 items-center">
                <Stethoscope className="w-4 h-4 mr-2 text-slate-500" /> Family
                medicine
              </p>
              <p className="flex text-md text-slate-500 items-center">
                <LocateIcon className="w-4 h-4 mr-2 text-slate-500" /> 57 St.
                Marks Place, New York, NY 10003
              </p>{" "}
            </div>
            <p className="text-md text-slate-400 ">
              "Great customer service! Love the doctors and the entire staff"{" "}
            </p>
          </div>
        </div>
        <h1 className="ml-5 mt-10 text-2xl font-bold">
          In-person doctor visit
        </h1>
        <div className="py-5">
          <DoctorDetails />
        </div>
      </div>
      <FixedBookButton />

    </div>
  );
}
