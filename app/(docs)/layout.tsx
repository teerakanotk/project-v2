import { SidebarNav } from "@/components/sidebar-nav";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6">
      <SidebarNav />
      <main className="relative py-6 lg:gap-10 lg:py-8">
        <div>{children}</div>
      </main>
    </div>
  );
}
