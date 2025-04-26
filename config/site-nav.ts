export interface SiteNavProps {
  title: string;
  href: string;
}

export const MainNavItem: SiteNavProps[] = [
  {
    title: "Guide",
    href: "/guide/status",
  },
  {
    title: "Map",
    href: "/map/sofia-city",
  },
  {
    title: "Item",
    href: "/item/product",
  },
  {
    title: "Equipment",
    href: "/equipment/one-handed-sword",
  },
];

export const MobileNavItem: SiteNavProps[] = [
  {
    title: "Guide",
    href: "/guide/status",
  },
  {
    title: "Map",
    href: "/map/sofia-city",
  },
  {
    title: "Item",
    href: "/item/production",
  },
  {
    title: "Equipment",
    href: "/equipment/one-handed-sword",
  },
];

export const SidebarNavItem: { [key: string]: SiteNavProps[] } = {
  guide: [{ title: "Guide", href: "/guide/status" }],
  map: [{ title: "Map", href: "/map/sofia-city" }],
  item: [{ title: "Item", href: "/item/production" }],
  equipment: [
    { title: "One-Handed Sword", href: "/equipment/one-handed-sword" },
    { title: "Two-Handed Sword", href: "/equipment/two-handed-sword" },
    { title: "Bow", href: "/equipment/bow" },
    { title: "Bowgun", href: "/equipment/bowgun" },
    { title: "Knuckle", href: "/equipment/knuckle" },
    { title: "Magic Devices", href: "/equipment/magic-devices" },
    { title: "Staff", href: "/equipment/staff" },
    { title: "Halberd", href: "/equipment/halberd" },
    { title: "Katana", href: "/equipment/katana" },
    { title: "Dagger", href: "/equipment/dagger" },
    { title: "Arrow", href: "/equipment/arrow" },
    { title: "Shield", href: "/equipment/shield" },
    { title: "Ninjutsu Scroll", href: "/equipment/ninjutsu-scroll" },
    { title: "Armor", href: "/equipment/armor" },
    { title: "Additional", href: "/equipment/additional" },
    { title: "Special", href: "/equipment/special" },
  ],
};
