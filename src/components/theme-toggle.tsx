"use client";
import { useTheme } from "next-themes";
import { Lightbulb } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <button
      aria-label="Toggle dark mode"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`relative w-14 h-8 rounded-full transition-colors duration-300 focus:outline-none border border-border shadow-lg bg-background flex items-center ${isDark ? "bg-sidebar" : "bg-gray-200"}`}
      style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}
    >
      {/* Track */}
      <span
        className={`absolute left-0 top-0 w-full h-full rounded-full transition-colors duration-300 ${isDark ? "bg-sidebar" : "bg-gray-200"}`}
      />
      {/* Thumb */}
      <span
        className={`absolute top-1 left-1 flex items-center justify-center w-6 h-6 rounded-full transition-transform duration-300 bg-gray-400 ${isDark ? "translate-x-6 bg-primary" : "bg-gray-400"}`}
        style={{ zIndex: 2 }}
      >
        <Lightbulb size={20} className={isDark ? "text-white" : "text-gray-800"} />
      </span>
      {/* Invisible for layout */}
      <span className="opacity-0 w-full h-full" />
    </button>
  );
} 