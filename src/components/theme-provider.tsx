"use client"

import * as React from "react"

type Theme = "dark" | "light" | "system"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  enableSystem?: boolean
  attribute?: string
}

export function ThemeProvider({
  children,
  defaultTheme = "system",
  enableSystem = true,
  attribute = "class",
}: ThemeProviderProps) {
  const [theme, setTheme] = React.useState<Theme>(defaultTheme)

  React.useEffect(() => {
    const root = window.document.documentElement
    
    if (enableSystem) {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
      
      const applyTheme = () => {
        const isDark = mediaQuery.matches
        root.classList.remove("light", "dark")
        root.classList.add(isDark ? "dark" : "light")
      }
      
      applyTheme()
      mediaQuery.addEventListener("change", applyTheme)
      
      return () => mediaQuery.removeEventListener("change", applyTheme)
    }
  }, [enableSystem])

  return <>{children}</>
}