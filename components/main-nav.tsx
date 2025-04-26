"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import { MainNavItem } from "@/config/site-nav";

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center gap-2">
        <span className="hidden md:inline-block font-bold">Logo</span>
      </Link>
      <nav className="flex items-center gap-4 text-md xl:gap-6">
        {MainNavItem.map((item, index) => {
          const isActive = () =>
            pathname.startsWith(`/${item.title.toLowerCase()}`);

          return (
            <Button
              asChild
              key={index}
              variant="none"
              className={cn(
                "text-primary/60 hover:text-primary",
                isActive() ? "text-primary" : ""
              )}
            >
              <Link href={item.href}>{item.title}</Link>
            </Button>
          );
        })}
      </nav>
    </div>
  );
}
