import React from "react";
import SectionHeading from "./SectionHeading";
import ToggleButton from "./ToggleButton";
import Link from "next/link";
import { Map } from "lucide-react";
import DoctorsListCarousel from "./DoctorsListCarousel";

export default function DoctorsList({
  title = "Telehealth Visit",
  isInPerson,
  className = "bg-pink-100 py-10 lg:py-28",
}: {
  title?: string;
  isInPerson?: boolean;
  className?: string;
}) {
  const doctors = [
    {
      name: "jone",
    },
    {
      name: "Mice",
    },
    {
      name: "Sara",
    },
    {
      name: "Ahmed",
    },
    {
      name: "Ali",
    },
    {
      name: "Mahmoud",
    },
    {
      name: "Awad",
    },
    {
      name: "Nada",
    },
    {
      name: "Yasmeen",
    },
    {
      name: "Abdullah",
    },
    {
      name: "Omar",
    },
  ];
  return (
    <div className={className}>
      <div className="max-w-6xl mx-auto">
        <SectionHeading title={title} />
        <div className="py-4 flex items-center justify-between">
          {isInPerson ? (
            <Link
              href="#"
              className="text-purple-700 font-semibold flex text-sm items-center "
            >
              <Map className="mr-2 flex-shrink-0 w-4 h-4" />
              <span>Map View</span>
            </Link>
          ) : (
            <ToggleButton />
          )}
          <Link
            href="#"
            className="border border-blue-700 py-2 px-6 
          hover:bg-blue-700 hover:text-white duration-150 font-bold "
          >
            See All <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
        <div>
          <DoctorsListCarousel isInPerson={isInPerson} doctors={doctors} />
        </div>
      </div>
    </div>
  );
}
