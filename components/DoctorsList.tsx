import React from "react";
import SectionHeading from "./SectionHeading";
import ToggleButton from "./ToggleButton";
import Link from "next/link";
import { ArrowUpRight, Map } from "lucide-react";
import DoctorsListCarousel from "./DoctorsListCarousel";
import { Button } from "./ui/button";

export default function DoctorsList({
  title = "Telehealth Visit",
  isInPerson,
  className = "bg-pink-100 dark:bg-blue-950 py-10 lg:py-28",
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
          <Button>
            <Link
              href="#"
              className=" font-bold dark flex"
            >
              See All 
              <ArrowUpRight className="w-4 h-4 flex-shrink-0 ms-2"/>
            </Link>
          </Button>
        </div>
        <div>
          <DoctorsListCarousel isInPerson={isInPerson} doctors={doctors} />
        </div>
      </div>
    </div>
  );
}
