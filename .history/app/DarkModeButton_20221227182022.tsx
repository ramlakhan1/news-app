"use client";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
function DarkModeButton() {
  const [mounted, SetMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    SetMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  const currentTheme = theme === "system"? systemTheme : theme;

  return <div>
    {currentTheme === "dark" ? (
        <SunIcon
          className="h-8 w-8 cursor-pointer text-yellow-500"

          
          onClick={() => setTheme("light")}
        />
    ): (
        <MoonIcon
          className="h-6 w-6 text-white"
          aria-label="Toggle Dark Mode"
          onClick={() => setTheme("dark")}
        />
    )}
  </div>;
}

export default DarkModeButton;
