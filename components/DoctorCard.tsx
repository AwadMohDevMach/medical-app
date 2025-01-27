import { Stethoscope, Video } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function DoctorCard({ isInPerson = false, doctor}: { isInPerson?: boolean,doctor:{name:string} }) {
  const times = [
    {
      time: "8:30",
      period: "am",
    },
    {
      time: "9:30",
      period: "am",
    },
    {
      time: "10:30",
      period: "am",
    },
    {
      time: "11:30",
      period: "am",
    },
    {
      time: "12:30",
      period: "pm",
    },
  ];
  return (
    <div className="bg-white border border-gray-300 inline-flex rounded-md py-6 px-4 max-w-[320px] flex-col hover:border-gray-400/80 duration-300 transition-all">
      <Link href="/doctors/slug" className=" flex-col rounded-md">
        <h2 className="capitalize font-bold text-[20px]">
          {`Dr.${doctor.name} Pabis, MD`} 
        </h2>
        {isInPerson ? (
          <p className="py-1 text-[14px] text-gray-600">
            57 St. Marks Place, New York, NY 10003
          </p>
        ) : (
          ""
        )}

        <div className="flex items-center gap-4 py-4">
          <div className="relative">
            <Image
              src="/doctor-card.jpg"
              alt="doctor"
              width={243}
              height={207}
              className="w-20 h-20 rounded-full object-cover"
            />
            {isInPerson ? (
              <p className="w-10 h-10 flex items-center justify-center rounded-full absolute right-[0] top-[54px] bg-gray-200 text-purple-700">
                <Video className="w-6 h-6" />
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="flex flex-col gap-2">
            <p className="flex items-center text-sm">
              <Stethoscope className="w-4 h-4 mr-2 flex-shrink-0" />
              <span>Family Medcine</span>
            </p>
            <p
              className="bg-[#baffd6] py-1 px-2 text-center capitalize text-[12px] 
          text-[#106047]"
            >
              Available Tody
            </p>
          </div>
        </div>
        <p className="py-2 text-[12px] text-gray-500">
          Great customer service! Love the doctors and the entire staff
        </p>
      </Link>
      <div className="py-2 border-t border-gray-300 text-[15px] flex justify-between font-bold">
        <span>Thu, Jan 23</span>
        <span className="text-purple-700">$134</span>
      </div>
      <div className="pt-3 grid grid-cols-3 gap-2">
        {times.slice(0, 5).map((time, i) => {
          return (
            <Link
              href="#"
              key={i}
              className="bg-purple-700 text-center text-white py-1 px-3 rounded-full hover:bg-purple-600"
            >
              {time.time}
              {time.period}
            </Link>
          );
        })}
        <Link
          className="bg-purple-300 text-center text-purple-700 py-1 px-3 rounded-full hover:bg-purple-600 hover:text-white"
          href="#"
        >
          More...
        </Link>
      </div>
    </div>
  );
}
