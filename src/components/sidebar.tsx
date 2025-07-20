"use client"; // This component needs to be a client component to use usePathname

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Smile, Briefcase, Layers, Sparkles, Contact } from "lucide-react";
import { cn } from "@/lib/utils"; // Utility for conditional class names

const navItems = [
  { name: "About Me", href: "/about-me", icon: Smile, colorClass: "text-sidebar-foreground" },
  { name: "Projects", href: "/projects", icon: Briefcase, colorClass: "text-sidebar-foreground" },
  { name: "Skills", href: "/skills", icon: Layers, colorClass: "text-sidebar-foreground" },
  { name: "Fun", href: "/fun", icon: Sparkles, colorClass: "text-sidebar-foreground" },
  { name: "Contact", href: "/contact", icon: Contact, colorClass: "text-sidebar-foreground" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 p-4 border-r border-border flex flex-col bg-sidebar h-screen sticky top-0">
      <nav className="flex flex-col gap-2 w-full mt-8">
        {navItems.map((item) => (
          <Link key={item.name} href={item.href} passHref>
            <div
              className={cn(
                "flex items-center p-2 rounded-xl cursor-pointer transition-all duration-200",
                pathname === item.href
                  ? "glass-button hover:scale-105 transition-transform"
                  : "hover:bg-accent/10"
              )}
            >
              <item.icon className={cn("w-5 h-5 mr-3", item.colorClass)} />
              <span className="text-base font-medium">{item.name}</span>
            </div>
          </Link>
        ))}
      </nav>
    </aside>
  );
}