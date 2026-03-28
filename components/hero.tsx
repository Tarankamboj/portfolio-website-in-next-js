"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import ParticlesBg from "@/components/particles-bg"

const phrases = [
  "Shopify Stores That Convert.",
  "Custom Liquid Development.",
  "Shopify Plus Experiences.",
  "E-Commerce That Scales.",
]

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [displayed, setDisplayed] = useState("")
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = phrases[index]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 55)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 30)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setIndex((i) => (i + 1) % phrases.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, index])

  return (
    <section className="relative overflow-hidden grid-bg">
      {/* Particles */}
      <ParticlesBg />

      {/* Gradient glow blobs */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full bg-primary/8 blur-[100px]" />

      <div className="container mx-auto px-4 py-20 md:py-28 grid gap-10 md:grid-cols-2 items-center relative z-10">
        {/* Text */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Shopify Certified Developer
          </div>

          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
            I Build{" "}
            <span className="text-primary">
              {displayed}
              <span className="animate-pulse">|</span>
            </span>
          </h1>

          <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
            Senior Shopify developer crafting high-converting stores, custom Liquid themes, and Shopify Plus experiences for global brands.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Link href="/contact">
              <Button className="bg-primary text-primary-foreground hover:opacity-90 rounded-full px-6">
                Start Your Project
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button variant="outline" className="rounded-full px-6">
                View My Work
              </Button>
            </Link>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            {[
              { value: "50+", label: "Projects Delivered" },
              { value: "8+", label: "Years Experience" },
              { value: "100%", label: "Client Satisfaction" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-xl font-bold text-primary">{s.value}</p>
                <p className="text-xs text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: floating project cards */}
        <motion.div
          className="relative hidden md:flex items-center justify-center h-[420px]"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          {/* Main card */}
          <motion.div
            className="absolute w-72 rounded-2xl overflow-hidden border border-border shadow-2xl glow-card"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <img src="/steve-madden.png" alt="Steve Madden" className="w-full h-40 object-cover object-top" />
            <div className="p-3 bg-card">
              <p className="text-xs font-semibold">Steve Madden — Middle East</p>
              <p className="text-[10px] text-muted-foreground">Fashion E-Commerce · Shopify Plus</p>
            </div>
          </motion.div>

          {/* Secondary card top-right */}
          <motion.div
            className="absolute top-4 right-0 w-44 rounded-xl overflow-hidden border border-border shadow-lg"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <img src="/fittrack.png" alt="FitTrack" className="w-full h-24 object-cover object-top" />
            <div className="p-2 bg-card">
              <p className="text-[10px] font-semibold">FitTrack</p>
              <p className="text-[9px] text-muted-foreground">Health Tech</p>
            </div>
          </motion.div>

          {/* Third card bottom-left */}
          <motion.div
            className="absolute bottom-4 left-0 w-44 rounded-xl overflow-hidden border border-border shadow-lg"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <img src="/adventure-hq.png" alt="Adventure HQ" className="w-full h-24 object-cover object-top" />
            <div className="p-2 bg-card">
              <p className="text-[10px] font-semibold">Adventure HQ</p>
              <p className="text-[9px] text-muted-foreground">Sports & Outdoor</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
