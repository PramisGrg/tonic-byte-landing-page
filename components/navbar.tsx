"use client";

import * as React from "react";
import Link from "next/link";
import tonicByte from "@/public/tonicbyte.jpeg";
import { cn } from "@/lib/utils";
import { CgWebsite } from "react-icons/cg";
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const components: {
  title: string;
  href: string;
  description: string;
  icon: JSX.Element;
}[] = [
  {
    title: "Web Development",
    href: "/docs/primitives/alert-dialog",
    description:
      "Creating responsive, user-friendly websites and web applications tailored to your business needs.",
    icon: <CgWebsite />,
  },
  {
    title: "Mobile App Development",
    href: "/docs/primitives/hover-card",
    description:
      "Building scalable and feature-rich mobile applications for Android and iOS to engage users on the go.",
    icon: <CgWebsite />,
  },
  {
    title: "DevOps and Cloud",
    href: "/docs/primitives/progress",
    description:
      "Streamlining development and operations with cloud solutions and automation for efficient software delivery.",
    icon: <CgWebsite />,
  },
  {
    title: "UI/UX Design",
    href: "/docs/primitives/scroll-area",
    description:
      "Designing intuitive and visually appealing interfaces that enhance user experiences across digital platforms.",
    icon: <CgWebsite />,
  },
  {
    title: "Database Management",
    href: "/docs/primitives/tabs",
    description:
      "Organizing, optimizing, and securing data to ensure seamless access and robust performance.",
    icon: <CgWebsite />,
  },
  {
    title: "Digital Marketing",
    href: "/docs/primitives/tooltip",
    description:
      "Driving online growth through strategic campaigns, SEO, social media, and targeted advertising.",
    icon: <CgWebsite />,
  },
];

export function NavigationMenuDemo() {
  return (
    <div className="flex justify-between py-4 mx-auto lg:px-24 md:px-16 px-6">
      <div className="flex gap-4 items-center">
        <Image
          height={40}
          width={40}
          className="rounded-full"
          src={tonicByte}
          alt="Company Logo"
        />
        <h1 className="font-bold text-2xl">Tonic Byte</h1>
      </div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-base">
              Getting started
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      {/* <Icons.logo className="h-6 w-6" /> */}
                      <div className="mb-2 mt-4 text-lg font-medium">
                        shadcn/ui
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Beautifully designed components that you can copy and
                        paste into your apps. Accessible. Customizable. Open
                        Source.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/docs" title="Introduction">
                  Re-usable components built using Radix UI and Tailwind CSS.
                </ListItem>
                <ListItem href="/docs/installation" title="Installation">
                  How to install dependencies and structure your app.
                </ListItem>
                <ListItem href="/docs/primitives/typography" title="Typography">
                  Styles for headings, paragraphs, lists...etc
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-base">
              Services
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[500px] gap-3 p-4 md:w-[600px] md:grid-cols-2 lg:w-[700px] ">
                {components.map((component) => (
                  <div className="" key={component.title}>
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  </div>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <p className="text-base">Documentation</p>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                About Us
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Button className="text-white font-bold leading-tight p-2 rounded-md text-center">
        BUILD WITH US
      </Button>
    </div>
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
