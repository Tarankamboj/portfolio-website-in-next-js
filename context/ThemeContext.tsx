// contexts/ThemeContext.tsx
"use client"

import * as React from "react"
import { createContext, useContext, useEffect } from "react"

type Theme = "dark" | "light"

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = React.useState<Theme>("dark")

  useEffect(() => {
    try {
      const stored = (localStorage.getItem("theme") as Theme | null) ?? "dark"
      setTheme(stored)
      const root = document.documentElement
      if (stored === "dark") {
        root.classList.add("dark")
      } else {
        root.classList.remove("dark")
      }
    } catch {}
  }, [])

  const toggleTheme = React.useCallback(() => {
    const next: Theme = theme === "dark" ? "light" : "dark"
    setTheme(next)
    try {
      localStorage.setItem("theme", next)
      const root = document.documentElement
      if (next === "dark") {
        root.classList.add("dark")
      } else {
        root.classList.remove("dark")
      }
    } catch {}
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}