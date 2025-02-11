"use client";

import React from "react";
import { Calendar } from "@/components/ui/calendar";
import Link from "next/link";

export default function Availability() {
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
    {
      time: "12:30",
      period: "pm",
    },
    {
      time: "12:30",
      period: "pm",
    },
    {
      time: "12:30",
      period: "pm",
    },
    {
      time: "12:30",
      period: "pm",
    },
    {
      time: "12:30",
      period: "pm",
    },
    {
      time: "12:30",
      period: "pm",
    },
    {
      time: "12:30",
      period: "pm",
    },
  ];
  const [bookDate, setBookDate] = React.useState<Date | undefined>(new Date());

  const date = `${bookDate?.toString().split(" ").slice(0, 4).join(" ")} - GMT${
    bookDate?.toString().split("GMT")[1].split(" ")[0]
  }`;
  console.log(date, "date");
  console.log(bookDate);
  return (
    <div className="mb-[100px]">
      <h2 className="font-bold py-4 text-2xl text-slate-500 uppercase tracking-wider">
        Select A Date and Time
      </h2>
      <div className="grid grid-cols-2">
        <div className="sm:col-span-1 col-span-full">
          <Calendar
            mode="single"
            selected={bookDate}
            onSelect={setBookDate}
            className="rounded-md border shadow "
          />
        </div>
        <div className="sm:col-span-1 col-span-full max-sm:mt-10 ">
          <div className="px-4">
            <h2 className="pb-4 font-semibold text-center border border-blue-500 text-blue-700 py-3 px-4 text-xl">
              {date}
            </h2>
            <div className="pt-3 grid grid-cols-3 gap-2">
              {times.slice(0).map((time, i) => {
                return (
                  <Link
                    href="#"
                    key={i}
                    className="bg-blue-700 text-center text-white py-1 px-3 rounded-full hover:bg-blue-600"
                  >
                    {time.time}
                    {time.period}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* calender */}
      {/* avilable time */}
    </div>
  );
}
