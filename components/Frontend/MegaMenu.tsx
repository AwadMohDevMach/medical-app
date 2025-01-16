"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const MegaMenus = [
  {
    title: "Top booked",
    services: [
      {
        title: "Telehealth",
        slug: "tele-health",
        description:
          "Lorem, ipsum dolor sit amet consecteturadipisicing elit. Sunt neque placeat repellat, nisi perspiciatis sequi magnam consectetur.Repellendus, adipisci officia",
      },
      {
        title: "Weight loss",
        slug: "Weight loss",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt neque placeat repellat, nisi perspiciatis sequi magnam consectetur.Repellendus, adipisci officia",
      },
      {
        title: "Video prescription refill",
        slug: "Video prescription refill",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt neque placeat repellat, nisi perspiciatis sequi magnam consectetur.Repellendus, adipisci officia",
      },
      {
        title: "UTI consult",
        slug: "UTI consult",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt neque placeat repellat, nisi perspiciatis sequi magnam consectetur.Repellendus, adipisci officia",
      },
      {
        title: "ED consult",
        slug: "ED consult",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt neque placeat repellat, nisi perspiciatis sequi magnam consectetur.Repellendus, adipisci officia",
      },
      {
        title: "Mental health consult",
        slug: "Mental health consult",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt neque placeat repellat, nisi perspiciatis sequi magnam consectetur.Repellendus, adipisci officia",
      },
    ],
  },
  {
    title: "Doctors",
    services: [
      {
        title: "Telehealth",
        slug: "tele-health",
        description:
          "Lorem, ipsum dolor sit amet consecteturadipisicing elit. Sunt neque placeat repellat, nisi perspiciatis sequi magnam consectetur.Repellendus, adipisci officia",
      },
      {
        title: "Weight loss",
        slug: "Weight loss",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt neque placeat repellat, nisi perspiciatis sequi magnam consectetur.Repellendus, adipisci officia",
      },
      {
        title: "Video prescription refill",
        slug: "Video prescription refill",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt neque placeat repellat, nisi perspiciatis sequi magnam consectetur.Repellendus, adipisci officia",
      },
      {
        title: "UTI consult",
        slug: "UTI consult",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt neque placeat repellat, nisi perspiciatis sequi magnam consectetur.Repellendus, adipisci officia",
      },
      {
        title: "ED consult",
        slug: "ED consult",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt neque placeat repellat, nisi perspiciatis sequi magnam consectetur.Repellendus, adipisci officia",
      },
      {
        title: "Mental health consult",
        slug: "Mental health consult",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt neque placeat repellat, nisi perspiciatis sequi magnam consectetur.Repellendus, adipisci officia",
      },
    ],
  },
  {
    title: "Specialties",
    services: [
      {
        title: "Telehealth",
        slug: "tele-health",
        description:
          "Lorem, ipsum dolor sit amet consecteturadipisicing elit. Sunt neque placeat repellat, nisi perspiciatis sequi magnam consectetur.Repellendus, adipisci officia",
      },
      {
        title: "Weight loss",
        slug: "Weight loss",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt neque placeat repellat, nisi perspiciatis sequi magnam consectetur.Repellendus, adipisci officia",
      },
      {
        title: "Video prescription refill",
        slug: "Video prescription refill",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt neque placeat repellat, nisi perspiciatis sequi magnam consectetur.Repellendus, adipisci officia",
      },
      {
        title: "UTI consult",
        slug: "UTI consult",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt neque placeat repellat, nisi perspiciatis sequi magnam consectetur.Repellendus, adipisci officia",
      },
      {
        title: "ED consult",
        slug: "ED consult",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt neque placeat repellat, nisi perspiciatis sequi magnam consectetur.Repellendus, adipisci officia",
      },
      {
        title: "Mental health consult",
        slug: "Mental health consult",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt neque placeat repellat, nisi perspiciatis sequi magnam consectetur.Repellendus, adipisci officia",
      },
    ],
  },
  {
    title: "Symptoms",
    services: [
      {
        title: "Telehealth",
        slug: "tele-health",
        description:
          "Lorem, ipsum dolor sit amet consecteturadipisicing elit. Sunt neque placeat repellat, nisi perspiciatis sequi magnam consectetur.Repellendus, adipisci officia",
      },
      {
        title: "Weight loss",
        slug: "Weight loss",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt neque placeat repellat, nisi perspiciatis sequi magnam consectetur.Repellendus, adipisci officia",
      },
      {
        title: "Video prescription refill",
        slug: "Video prescription refill",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt neque placeat repellat, nisi perspiciatis sequi magnam consectetur.Repellendus, adipisci officia",
      },
      {
        title: "UTI consult",
        slug: "UTI consult",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt neque placeat repellat, nisi perspiciatis sequi magnam consectetur.Repellendus, adipisci officia",
      },
      {
        title: "ED consult",
        slug: "ED consult",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt neque placeat repellat, nisi perspiciatis sequi magnam consectetur.Repellendus, adipisci officia",
      },
      {
        title: "Mental health consult",
        slug: "Mental health consult",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt neque placeat repellat, nisi perspiciatis sequi magnam consectetur.Repellendus, adipisci officia",
      },
    ],
  },

];
export default function MegaMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="space-x-4" >
        {
          MegaMenus.map((item , index) => {
            return (
              <NavigationMenuItem key={index}>
              <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {item.services.map((service, index) => (
                    <ListItem
                      key={index}
                      title={service.title}
                      href={`/services/${service.slug}`}
                    >
                      {service.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            )
          })
        }
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
