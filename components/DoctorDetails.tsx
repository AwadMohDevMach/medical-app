"use client";
import React, { useState } from "react";

export default function DoctorDetails() {
  const [isActive, setIsActive] = useState("avialability");
  return (
    <div className="">
      <div className="flex items-center justify-between mx-auto">
        <button
          onClick={() => setIsActive("details")}
          className={
            isActive === "details"
             ?"py-4 px-8 w-full bg-blue-600 text-white border-blue-600"
              : "border border-gray-200 py-4 bg-slate-50 w-full text-slate-800"
              
          }
        >
          Service Details
        </button>
        <button
          onClick={() => setIsActive("avialability")}
          className={
            isActive === "avialability"
             ?"py-4 px-8 w-full bg-blue-600 text-white border border-blue-600"
              : "border border-gray-200 py-4 bg-slate-50 w-full text-slate-800"
              
          }
        >
          Availbility
        </button>
      </div>
      <div className="py-4 px-8">
        {isActive === "avialability" ? (
          <div className="d">Avialable Details component</div>
        ) : (
          <div className="d">service Details component</div>
        )}
      </div>
    </div>
  );
}
