import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TDataServices } from '@/types/dataServices'

export default function ServicesCard({service}:{service :TDataServices}) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="rounded-md bg-slate-100 hover:bg-slate-200
    duration-300 flex gap-4 dark:bg-slate-800"
    >
      <Image
        src={service.Image}
        width={1170}
        height={848}
        alt={service.title}
        className="w-1/3 "
      />
      <div className="flex flex-col w-2/3 py-4">
        <h2>{service.title}</h2>
        <p className="text-[0.6rem]">Lorem ipsum dolor sit.</p>
      </div>
    </Link>
  );
}
