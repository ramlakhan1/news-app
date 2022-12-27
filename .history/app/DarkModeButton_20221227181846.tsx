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
    {}
  </div>;
}

export default DarkModeButton;
