"use client"

import { ThemeProvider } from "next-themes";

function Providers({children}: {children: React.ReactNode}) {
    return (
        <ThemeProvider ena>{children}</ThemeProvider>
    )
}

export default Providers;