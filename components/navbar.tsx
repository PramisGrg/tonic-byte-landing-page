"use client";
import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { CgWebsite } from "react-icons/cg";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

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

export default function Navbar() {
  return (
    <NavigationMenu className="flex justify-between w-screen py-4 mx-auto lg:px-24 md:px-16 px-6">
      <NavigationMenuList>
        <NavigationMenuItem className="flex gap-4 items-center">
          {/* <Image
           height={40}
           width={40}
           className="rounded-full"
           src={tonicByte}
           alt="Company Logo"
         /> */}
          <Link href="/" className="font-bold text-2xl">
            Tonic <span className="text-primary">Byte</span>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuList>
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
              <p className="text-base">Careers</p>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <p className="text-base">About Us</p>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link
            href={"/contact"}
            className="text-white bg-primary font-bold leading-tight p-2 rounded-md text-center"
          >
            BUILD WITH US
          </Link>
        </NavigationMenuItem>
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
