"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react"

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  const currentTheme = theme === "system" ? systemTheme : theme
  const isDark = currentTheme === "dark"

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle color theme"
      className="relative flex items-center w-14 h-7 rounded-full border border-border/60 bg-muted/60 hover:bg-muted transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      {/* Track glow */}
      <span
        className={`absolute inset-0 rounded-full transition-opacity duration-300 ${
          isDark
            ? "opacity-100 shadow-[inset_0_0_8px_color-mix(in_oklch,var(--color-primary)_30%,transparent)]"
            : "opacity-0"
        }`}
      />

      {/* Sliding thumb */}
      <span
        className={`relative z-10 flex items-center justify-center w-5 h-5 rounded-full shadow-md transition-all duration-300 ${
          isDark
            ? "translate-x-7 bg-primary text-primary-foreground"
            : "translate-x-1 bg-background text-foreground border border-border"
        }`}
      >
        {isDark ? (
          <Moon className="w-3 h-3" />
        ) : (
          <Sun className="w-3 h-3 text-amber-500" />
        )}
      </span>

      {/* Sun icon on left */}
      <Sun className={`absolute left-1.5 w-3 h-3 transition-opacity duration-300 text-amber-400 ${isDark ? "opacity-30" : "opacity-0"}`} />
      {/* Moon icon on right */}
      <Moon className={`absolute right-1.5 w-3 h-3 transition-opacity duration-300 text-primary ${isDark ? "opacity-0" : "opacity-30"}`} />
    </button>
  )
}
