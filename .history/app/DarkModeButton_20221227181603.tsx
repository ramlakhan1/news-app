"use client"
import {useTheme} from "next-themes";
import { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
function DarkModeButton() {
    const [mounted, SetMounted] = useState(false);
const {systemTheme, theme, setTheme} = useTheme();

useEffect(() => {
    set
})
  return (
    <div>DarkModeButton</div>
  )
}

export default DarkModeButton