"use client"

import { useState, useEffect } from "react"
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
  const [mounted, setMounted] = useState(false)
  const { theme, systemTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  // 🩶 Prevent rendering until we know the theme (avoids SSR mismatch)
  if (!mounted) {
    return (
      <header className="sticky top-0 z-40 glass">
        <div className="mx-auto container px-4 py-3 flex items-center justify-between">
          <div className="h-10 w-[120px] bg-muted animate-pulse rounded-md" />
        </div>
      </header>
    )
  }

  const currentTheme = theme === "system" ? systemTheme : theme
  const logoSrc = currentTheme === "dark" ? "/images/Logo.png" : "/images/Logo_dark.png"

  return (
    <header className="sticky top-0 z-40 glass">
      <div className="mx-auto container px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={logoSrc}
            alt="Company logo"
            width={120}
            height={40}
            priority
            className="h-10 w-auto transition-opacity duration-300"
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
              <ThemeToggle />
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
