"use client";
import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Footer() {
  const footerNavs = [
    {
      label: "company",
      items: [
        {
          href: "/join/doctors",
          name: "List your doctors",
        },
        {
          href: "javascript:void()",
          name: "Support",
        },
        {
          href: "javascript:void()",
          name: "Documentation",
        },
        {
          href: "javascript:void()",
          name: "Pricing",
        },
      ],
    },
    {
      label: "About",
      items: [
        {
          href: "javascript:void()",
          name: "Terms",
        },
        {
          href: "javascript:void()",
          name: "License",
        },
        {
          href: "javascript:void()",
          name: "Privacy",
        },
        {
          href: "javascript:void()",
          name: "About US",
        },
      ],
    },
    {
      label: "Explore",
      items: [
        {
          href: "javascript:void()",
          name: "Showcase",
        },
        {
          href: "javascript:void()",
          name: "Roadmap",
        },
        {
          href: "javascript:void()",
          name: "Languages",
        },
        {
          href: "javascript:void()",
          name: "Blog",
        },
      ],
    },
    {
      label: "Company",
      items: [
        {
          href: "javascript:void()",
          name: "Partners",
        },
        {
          href: "javascript:void()",
          name: "Team",
        },
        {
          href: "javascript:void()",
          name: "Careers",
        },
      ],
    },
  ];
  const socialMediaLinks = [
    {
      title: "Linkedin",
      href: "http://www.linkedin.com/company/medical-app",
      icon: Linkedin,
      color: "text-blue-400",
      hover : "hover:text-blue-600"
    },
    {
      title: "Youtube",
      href: "http://www.youtube.com/company/medical-app",
      icon: Youtube,
      color: "text-red-500",
      hover : "hover:text-red-700"
    },
    {
      title: "Twitter",
      href: "http://www.facebook.com/company/medical-app",
      icon: Twitter,
      color: "text-blue-400",
      hover : "hover:text-blue-600"
    },
    {
      title: "Instagram",
      href: "http://www.facebook.com/company/medical-app",
      icon: Instagram,
      color: "text-pink-400",
      hover : "hover:text-pink-600"
    },
  ];

  return (
    <footer className="pt-10 bg-slate-100">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="justify-between items-center gap-12 md:flex">
          <div className="flex-1 max-w-lg">
            <img src="\logo.jpg" className="w-32 rounded-full" />
            <p className="leading-relaxed mt-2 text-[15px]">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s.
            </p>
          </div>
        </div>
        <div className="flex-1 mt-16 space-y-6 justify-between sm:flex md:space-y-0">
          {footerNavs.map((item, idx) => (
            <ul className="space-y-4 text-gray-600" key={idx}>
              <h4 className="text-gray-800 font-semibold sm:pb-2">
                {item.label}
              </h4>
              {item.items.map((el, idx) => (
                <li key={idx}>
                  <a
                    href={el.href}
                    className="hover:text-gray-800 duration-150"
                  >
                    {el.name}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>
        <div className="mt-10 py-10 border-t items-center justify-between sm:flex">
          <p className="text-gray-600">
            &copy; <span >{(new Date).getFullYear()}</span> Float UI Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-x-6 text-gray-400 mt-6">
            {socialMediaLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <Link key={index} href={link.href} className={`flex flex-col items-center justify-center ${link.color} ${link.hover}`}>
                  <Icon className={`w-6 h-6 duration-150`} />
                  <span className={`text-center font-semibold`}>{link.title}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
