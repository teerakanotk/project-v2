"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

import { SiteNavProps, SidebarNavItem } from "@/config/site-nav";

const category: { [key: string]: SiteNavProps[] } = {
  guide: SidebarNavItem.guide,
  map: SidebarNavItem.map,
  item: SidebarNavItem.item,
  equipment: SidebarNavItem.equipment,
};

export function SidebarNav() {
  const pathname = usePathname();

  // Find the items based on the category passed as a prop
  const categoryItem = category[pathname.split("/")[1]] || [];

  return (
    <aside className="hidden fixed top-14 z-30 h-[calc(100vh-3.5rem)] w-full shrink-0 border-r md:sticky md:block bg-background">
      <div className="h-full overflow-auto py-6 pr-4 lg:py-8">
        <div className="grid gap-0.5">
          {categoryItem.map((item, index) => {
            return (
              <Button
                asChild
                key={index}
                variant={pathname === item.href ? "secondary" : "ghost"}
                className="shadow-none"
              >
                <Link
                  href={item.href}
                  className="flex items-center justify-start"
                >
                  {item.title}
                </Link>
              </Button>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
