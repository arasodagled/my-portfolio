'use client';

import { usePathname } from 'next/navigation';
import Sidebar from './sidebar';
import ThemeToggle from "./theme-toggle";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <div className="flex min-h-screen bg-background">
      <div className="absolute top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      {!isHomePage && <Sidebar />}
      <div className="flex-1 flex justify-center">
        {children}
      </div>
    </div>
  );
}