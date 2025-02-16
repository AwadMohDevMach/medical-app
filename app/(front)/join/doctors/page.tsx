import Image from "next/image";
import Link from "next/link";
import React from "react";
import image from "@/Images/hero.jpg";
import CustomeButton from "@/components/CustomeButton";
import { Check, MailOpen } from "lucide-react";
import CustomAccodion from "@/components/Frontend/CustomAccodion";
import type { FAQ } from "@/components/Frontend/CustomAccodion";
import HeadenButton from "@/components/HeadenButton";
import Pricing from "@/components/Frontend/Pricing";

export default function page() {
  const faqs: FAQ[] = [
    {
      qn: "How can I sign up for Medical App?",
      ans: (
        <div>
          you can sign up by visiting our website and clicking on the{" "}
          <CustomeButton
            title="Sign Up"
            href="/register?role='DOCTOR'"
            className="bg-blue-600 hover:bg-blue-500 mx-2"
          />
          follow the instructions to create your account
        </div>
      ),
    },
    {
      qn: "How can I book an appointment with a doctor?",
      ans: "You can book an appointment by selecting your preferred doctor and available time slot through our app.",
    },
    {
      qn: "Are online consultations available?",
      ans: "Yes, we offer virtual consultations. You can schedule a video call with a doctor through our app.",
    },
    {
      qn: "What should I do in case of a medical emergency?",
      ans: "In case of a medical emergency, please call your local emergency services immediately instead of booking through the app.",
    },
    {
      qn: "Can I get a prescription through the app?",
      ans: "Yes, after a consultation, doctors can provide digital prescriptions that you can use at any pharmacy.",
    },
    {
      qn: "How do I access my medical records?",
      ans: "You can access your medical records securely through the ‘My Records’ section in the app.",
    },
    {
      qn: "Is my health data secure?",
      ans: "Yes, we prioritize your privacy and use end-to-end encryption to secure your health data",
    },
  ];
  const features = [
    "brings patients to you",
    "Seamless e-prescribing experience",
    "Integrated clinical note-taking",
  ];
  const steps = [
    "List your practice",
    "Create competitive offerings",
    "Start seeing patients and",
  ];
  const cards = [
    {
      title: "Begin Your Journey",
      content:
        " Start a new application with Join with network of healthcare providers",
      link: "#",
      linkTtile: "Start a new application",
    },
    {
      title: "Resum Application ",
      content:
        " pick up where you left off and complete your onboarding process schedual for physical approval ",
      link: "#",
      linkTtile: "continue your application",
    },
    {
      title: "Schedule a Call",
      content: "Arrange a time for call to finalize your application",
      link: "#",
      linkTtile: "Schedule a Call",
    },
    {
      title: "Truck your progress",
      content:
        "Moitor the status of your application and approvals in real-time..",
      link: "/",
      linkTtile: "Check Status",
    },
  ];
  return (
    <div className="min-h-screen ">
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="">
            <h2 className="sm:text-[3rem] text-[1.5rem] leading-[3.5rem]">
              Build a thriving{" "}
              <span className="text-blue-600 font-semibold">direct-pay</span>{" "}
              practice with Medical App.
            </h2>
            <p className="py-4">
              {" "}
              Welcome to Medical App for doctors is a digital tool designed to
              help healthcare professionals manage patient information
              efficiently.
            </p>
            <CustomeButton
              title="List your service"
              href="#"
              className="bg-blue-600 hover:bg-blue-500"
            />
            <div className="py-6">
              {features.map((item, i) => {
                return (
                  <p key={i} className="flex items-center text-xl">
                    <Check className="w-4 mr-2 flex-shrink-0 text-blue-500" />
                    {item}
                  </p>
                );
              })}
            </div>
          </div>
          <Image
            src="/join-1.jpg"
            alt="image"
            width={1170}
            height={848}
            className="w-fulll"
          />
        </div>
      </section>
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <Image
            src="/join-2.jpg"
            alt="image"
            width={1170}
            height={848}
            className="w-full hidden md:block mr-4 h-[580px]"
          />
          <div className="">
            <h2 className="sm:text-[2.5rem] text-[1.5rem] leading-[3rem]">
              Join Medical App to increase your{" "}
              <span className="text-blue-600 font-semibold mx-2">revenue</span>{" "}
              today.
            </h2>
            <div className="py-6">
              {steps.map((item, i) => {
                return (
                  <p key={i} className="flex items-start text-xl">
                    <Check className="w-6 mr-2 flex-shrink-0 text-blue-500" />
                    {item}c
                  </p>
                );
              })}
            </div>
            <div className="grid grid-cols-2 gap-4">
              {cards.map((card, i) => {
                return (
                  <div
                    key={i}
                    className="bg-blue-800 px-2.5 py-4 rounded-lg shadow-2xl flex flex-col items-center justify-center"
                  >
                    <h3 className="text-white text-2xl font-semibold">
                      {card.title}
                    </h3>
                    <p className="text-xs text-gray-200 py-3">{card.content}</p>
                    <CustomeButton
                      title={card.linkTtile}
                      href={card.link}
                      className="bg-blue-600 hover:bg-blue-500 w-full"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <Pricing />
        </div>
      </section>
      <section className="py-12 px-4">
        <div className="py-4">
          <HeadenButton text="FAQs" />
        </div>
        <div className="max-w-2xl mx-auto">
          <CustomAccodion FAQs={faqs} />
        </div>
      </section>
    </div>
  );
}
