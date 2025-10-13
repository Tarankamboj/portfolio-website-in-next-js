"use client"

import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  const currentTheme = theme === "system" ? systemTheme : theme
  const isDark = currentTheme === "dark"

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark")
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      aria-pressed={isDark}
      aria-label="Toggle color theme"
      className="rounded-full px-3 py-2 border border-border/60 hover:bg-muted/60 transition"
    >
      <span className="sr-only">Toggle theme</span>
      <span className="inline-flex items-center gap-2 text-sm">
        <span
          aria-hidden
          className={`h-2.5 w-2.5 rounded-full ${
            isDark
              ? "bg-primary shadow-[0_0_8px_color-mix(in_oklch,var(--color-primary)_70%,transparent)]"
              : "bg-accent"
          }`}
        />
        {isDark ? "Dark" : "Light"}
      </span>
    </Button>
  )
}
