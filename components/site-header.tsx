"use client";

import { MainNav } from "@/components/main-nav";
import { MobileNav } from "@/components/mobile-nav";
import { ModeToggle } from "@/components/mode-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-14 items-center gap-2 md:gap-4">
        <MainNav />
        <MobileNav />
        <div className="flex items-center ml-auto md:flex md:justify-end">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
