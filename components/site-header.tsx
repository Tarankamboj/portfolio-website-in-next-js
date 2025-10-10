"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Menu } from "lucide-react"
import ThemeToggle from "@/components/theme-toggle"
import { useTheme } from "next-themes"
import Image from "next/image"

const nav = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export default function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [currentTheme, setCurrentTheme] = useState(theme)

  useEffect(() => setMounted(true), [])

  const toggleTheme = useCallback(() => {
    const nextTheme = theme === "dark" ? "light" : "dark"
    setTheme(nextTheme)
    setCurrentTheme(nextTheme)
    try {
      localStorage.setItem("theme", nextTheme)
      const root = document.documentElement
      if (nextTheme === "dark") root.classList.add("dark")
      else root.classList.remove("dark")
    } catch (err) {
      console.error(err)
    }
  }, [theme, setTheme])

  const logoSrc = mounted
    ? currentTheme === "dark"
      ? "/images/Logo.png"
      : "/images/Logo_dark.png"
    : "/images/Logo_dark.png" // fallback during SSR

  return (
    <header className="sticky top-0 z-40 glass">
      <div className="mx-auto container px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
          id="change_logo"
            src={logoSrc}
            alt="Company logo "
            width={120}
            height={40}
            className="h-10 w-auto"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-2">
          {nav.map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm px-3 py-2 rounded-full transition-colors",
                  active
                    ? "bg-primary/15 text-foreground"
                    : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            )
          })}
          <ThemeToggle />
          <Link href="/contact">
            <Button
              className="rounded-full bg-primary text-primary-foreground hover:opacity-90 border border-border/60"
              variant="default"
            >
              Get a Quote
            </Button>
          </Link>
        </nav>

        <button
          aria-label="Open navigation"
          className="md:hidden p-2 rounded-md border border-border"
          onClick={() => setOpen((v) => !v)}
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border">
          <div className="mx-auto max-w-6xl px-4 py-4 grid gap-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Appearance</span>
              <ThemeToggle/>
            </div>
            {nav.map((item) => {
              const active = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "text-sm px-3 py-2 rounded-full",
                    active ? "bg-primary/15 text-foreground" : "text-foreground hover:bg-muted/60"
                  )}
                >
                  {item.label}
                </Link>
              )
            })}
            <Link href="/contact" onClick={() => setOpen(false)}>
              <Button className="w-full rounded-full bg-primary text-primary-foreground hover:opacity-90">
                Get a Quote
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
