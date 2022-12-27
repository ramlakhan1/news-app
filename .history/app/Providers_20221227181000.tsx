"use client"

import { ThemeProvider } from "next-themes";

function Providers({children}: {children: React.ReactNode}) {
    return (
        <ThemeProvider enableSystem>{children}</ThemeProvider>
    )
}

export default Providers;