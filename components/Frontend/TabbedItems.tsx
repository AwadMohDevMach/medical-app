"use client";

import { Tabs } from "flowbite-react";
import { Activity, Microscope, Stethoscope, Syringe, X } from "lucide-react";
import { MdDashboard } from "react-icons/md";
import ServicesList from "./Services/ServicesList";
import LinkCards from "./Doctors/LinkCards";

// Dermatology
// Pediatrics
// Men’s health
// Women’s health
// Dental
export default function TabbedItems() {

  const services = [
    {
      title : "Telehealth",
      Image : "/service.png",
      slug : "telehealth"
    },
    {
      title : "Weight loss",
      Image : "/service.png",
      slug : "telehealth"
    },
    {
      title : "Video prescription refill",
      Image : "/service.png",
      slug : "telehealth"
    },
    {
      title : "UTI consult",
      Image : "/service.png",
      slug : "telehealth"
    },
    {
      title : "Mental health consult",
      Image : "/service.png",
      slug : "telehealth"
    },
    {
      title : "ED consult",
      Image : "/service.png",
      slug : "telehealth"
    },
  ]
  const tabs = [
    {
      title: "Top booked",
      Icon: Stethoscope,
      component: <ServicesList  services={services}/>,
    },
    {
      title: "Doctors",
      Icon: Microscope,
      component: <LinkCards />,
    },
    {
      title: "Specialties",
      Icon: Activity,
      component: <LinkCards className="bg-pink-900"/>,

    },
    {
      title: "Symptoms",
      Icon: Syringe,
      component: <LinkCards className="bg-purple-950"/>,
      content: [],
    },
  ];
  return (
    <div className="">
      <Tabs  aria-label="Default tabs" variant="default">
        {tabs.map((tab, i) => {
          return (
            <Tabs.Item
              key={i}
              active
              title={tab.title}
              icon={tab.Icon}
              
            >{tab.component}</Tabs.Item>
          );
        })}
      </Tabs>
    </div>
  );
}
