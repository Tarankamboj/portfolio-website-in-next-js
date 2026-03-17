"use client"

import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function SiteFooter() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  const logoSrc = "/new-logo.png"

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
              className="h-15 w-auto transition-opacity duration-300"
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
          <ul className="text-sm text-muted-foreground grid gap-2">
            <li>
              <a href="mailto:deep.taran9646@gmail.com" className="hover:text-primary">
                deep.taran9646@gmail.com
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/taran-deep-62b019211" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://www.upwork.com/freelancers/~01fc7bce3317d46bc6?mp_source=share" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                Upwork
              </a>
            </li>
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
