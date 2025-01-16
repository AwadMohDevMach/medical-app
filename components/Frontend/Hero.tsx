import React from "react";
import Image from "next/image";
import image from "@/Images/hero.jpg";
import Link from "next/link";
import SearchBar from "./SearchBar";
import TransitionalText from "./TransitionalText";
import { Pill } from "lucide-react";

const TEXTS = [
  "Acuppunctuer",
  "Massage",
  "Chiropractor",
  "Dental",
  "Cosmetic",
  "Dietitian",
  "Speach Therapist",
  "Occupational",
  "Therapist",
  "Acupunctursit",
];

const Hero = () => {
  return (
    <div className="bg-blue-950 h-[100vh]">
      <div className="relative  pb-[110px] pt-[50px] dark:bg-dark lg:pt-[50px] max-w-6xl mx-auto">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-5/12">
              <div className="hero-content">
                <h1 className="flex flex-wrap gap-3 mb-5 text-5xl font-bold !leading-[1.208] text-gray-50 dark:text-white sm:text-[42px] lg:text-[40px] xl:text-5xl">
                  <span>Book your </span>{" "}
                  <TransitionalText
                    TEXTS={TEXTS}
                    className=" text-blue-500"
                  />
                  <br />
                  <span>session now,</span>
                </h1>
                <p className="mb-8 max-w-[480px] text-base text-gray-200 dark:text-gray-50-6">
                Health shoudn't be a puzzle, we are cutting through B.S to bring you simple,
                affordable, and transparent healethcare 
                </p>
                <SearchBar />
                <ul className="flex flex-wrap items-center">
                  <li>
                    <Link
                      href="/#"
                      className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-center text-base font-medium text-white hover:bg-blue-700 lg:px-7"
                    >
                      Need Doctor Urgently
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#"
                      className=" inline-flex items-center justify-center px-5 py-3 text-center text-base font-medium text-gray-50 hover:text-blue-500 dark:text-white"
                    >
                      <span className="mr-2">
                        <Pill className="flex-shrink-0 h-4 w-4 text-blue-500" />
                      </span>
                      Need  a Refill
                    </Link>
                  </li>
                </ul>
                <div className="py-4 pt-8 flex gap-4">
                  <div className="flex flex-col justify-center items-center">
                    <span className="font-bold text-gray-50">600</span>
                    <span className="text-sm text-gray-500">
                      Active Statistics 
                    </span>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <span className="font-bold text-gray-50">1800</span>
                    <span className="text-sm text-gray-500">
                      Active Patients 
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden px-4 lg:block lg:w-1/12"></div>
            <div className="w-full px-4 lg:w-5/12">
              <div className="lg:ml-auto lg:text-right">
                <div className="relative z-10 inline-block pt-11 lg:pt-0">
                  <Image
                    src={image}
                    alt="hero"
                    className="max-w-md rounded-tl-[100px] rounded-tr-[10px] h-[400px] w-[350px] lg:ml-auto"
                  />
                  <span className="absolute -bottom-8 -left-8 z-[-1]">
                    <svg
                      width="93"
                      height="93"
                      viewBox="0 0 93 93"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
