"use client"

import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function SiteFooter() {
  const { theme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  const currentTheme = theme === "system" ? systemTheme : theme
  const logoSrc = currentTheme === "dark" ? "/images/Logo.png" : "/images/Logo_dark.png"

  return (
    <footer className="border-t border-border">
      <div className="mx-auto container px-4 py-10 grid gap-8 md:grid-cols-3">
        <div className="space-y-3">
          <div className="flex items-center gap-2 transition-all duration-300">
            <Image
              src={logoSrc}
              alt="Company logo"
              width={120}
              height={40}
              className="h-10 w-auto transition-opacity duration-300"
            />
          </div>
          <p className="text-sm text-muted-foreground">
            We design, build, and scale reliable software for ambitious teams.
          </p>
        </div>
        {/* Other columns remain unchanged */}

        <div>
          <h3 className="text-sm font-semibold mb-3">Company</h3>
          <ul className="text-sm grid gap-2">
            <li>
              <Link className="hover:text-primary" href="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" href="/portfolio">
                Portfolio
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-3">Contact</h3>
          <ul className="text-sm text-muted-foreground grid gap-1">
            <li>hello@brightstack.dev</li>
            <li>+1 (555) 012-3456</li>
            <li>San Francisco, CA</li>
          </ul>
        </div>
          </div>


<div className="border-t border-border py-4">
        <p className="mx-auto container px-4 text-xs text-muted-foreground">
          © {new Date().getFullYear()} BrightStack IT. All rights reserved.
        </p>
      </div>

      
    </footer>
  )
}
