"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"

export default function ThemeToggle() {
  const [theme, setTheme] = React.useState<"dark" | "light">("dark")

  React.useEffect(() => {
    try {
      const stored = (localStorage.getItem("theme") as "dark" | "light" | null) ?? "dark"
      setTheme(stored)
      const root = document.documentElement
      if (stored === "dark") {
        root.classList.add("dark")
      } else {
        root.classList.remove("dark")
      }
    } catch {}
  }, [])

  const toggle = React.useCallback(() => {
    const next: "dark" | "light" = theme === "dark" ? "light" : "dark"
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

  const isDark = theme === "dark"

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggle}
      aria-pressed={isDark ? "true" : "false"}
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
