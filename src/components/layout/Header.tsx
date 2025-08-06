"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, Mountain, ChevronDown, Code, School, Plane } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

const mainNav = [
  { href: "/services", label: "Services" },
  // { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const productNav = [
  { href: "/products/campus-connect", label: "CampusConnect", icon: School },
  { href: "/products/travel-planner", label: "AI Travel Planner", icon: Plane },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70 shadow-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <Mountain className="h-6 w-6 text-primary transition-transform group-hover:scale-110" />
          <span className="font-headline font-bold text-base sm:text-lg text-foreground">
           <b>webYatra</b> 
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 font-medium text-sm">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "transition-colors hover:text-primary",
                pathname === item.href ? "text-primary font-semibold" : "text-muted-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}

          <DropdownMenu>
            <DropdownMenuTrigger className={cn(
              "flex items-center gap-1 hover:text-primary transition-colors",
              pathname?.startsWith("/products") ? "text-primary font-semibold" : "text-muted-foreground"
            )}>
              Products
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              {productNav.map((item) => (
                <DropdownMenuItem key={item.href} asChild>
                  <Link href={item.href} className="flex items-center gap-2">
                    <item.icon className="h-4 w-4 text-muted-foreground" />
                    {item.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <Button asChild size="sm" className="hidden lg:flex bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/mockup-generator">
              AI Mockup Generator
              <Code className="ml-2 h-4 w-4" />
            </Link>
          </Button>

          {/* WhatsApp Icon */}
          <Link
            href="https://wa.me/919670185884"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
            aria-label="Chat on WhatsApp"
          >
            <Image
              src="/whatsapp-svgrepo-com.svg"
              alt="WhatsApp"
              width={30}
              height={30}
              className="h-8 w-8"
            />
          </Link>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden hover:bg-muted-foreground/10"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="p-4 h-full flex flex-col">
                {/* Logo */}
                <Link href="/" className="mb-8 flex items-center" onClick={() => setIsOpen(false)}>
                  <Mountain className="mr-2 h-6 w-6 text-primary" />
                  <span className="font-bold font-headline">webYatra Solutions</span>
                </Link>

                {/* Main Nav */}
                <div className="flex flex-col gap-3">
                  {mainNav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "text-base font-medium transition-colors hover:text-primary",
                        pathname === item.href ? "text-primary font-semibold" : "text-muted-foreground"
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}

                  {/* Products Collapsible */}
                  <Collapsible>
                    <CollapsibleTrigger className="flex w-full items-center justify-between text-base font-medium [&[data-state=open]>svg]:rotate-180">
                      Products <ChevronDown className="h-5 w-5 transition-transform" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pt-2">
                      <div className="flex flex-col gap-3 pl-4">
                        {productNav.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-2 text-muted-foreground hover:text-primary"
                          >
                            <item.icon className="h-5 w-5" />
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </div>

                {/* CTA Button */}
                <Button
                  asChild
                  className="mt-auto bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  <Link href="/mockup-generator" onClick={() => setIsOpen(false)}>
                    AI Mockup Generator
                    <Code className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
