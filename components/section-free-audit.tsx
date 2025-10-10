"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export default function FreeAuditSection() {
  const { toast } = useToast()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [website, setWebsite] = useState("")
  const [goals, setGoals] = useState("")
  const [loading, setLoading] = useState(false)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)

    try {
      const message = [
        "Free Audit Request",
        `Name: ${name || "—"}`,
        `Email: ${email}`,
        `Website: ${website}`,
        `Goals: ${goals || "—"}`,
      ].join("\n")

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name || "Free Audit Lead", email, message }),
      })

      if (!res.ok) throw new Error("Failed to send")

      toast({ title: "Request sent!", description: "We’ll get back within 24 hours." })
      setName("")
      setEmail("")
      setWebsite("")
      setGoals("")
    } catch (err) {
      toast({ title: "Something went wrong", description: "Please try again in a moment." })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section aria-labelledby="free-audit-heading" className="relative py-12 md:py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 md:gap-10 items-stretch">

          {/* Left text section */}
          <motion.div
            className="flex flex-col justify-center gap-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p className="text-xs uppercase tracking-wider text-muted-foreground">Limited-time offer</p>
            <h2 id="free-audit-heading" className="text-pretty text-3xl md:text-4xl font-semibold leading-tight">
              Free Website Audit & Consultation
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Get a tailored report to improve performance, design, and conversions—at no cost. We review your site and
              share prioritized recommendations.
            </p>
            <ul className="grid gap-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
                <span>Actionable insights across UX, speed, SEO, and accessibility</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
                <span>Delivered within 24–48 hours</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
                <span>Totally free—no obligations</span>
              </li>
            </ul>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link href="/contact?subject=Free%20Website%20Audit">
                <Button size="lg" className="rounded-full">Get Free Audit</Button>
              </Link>
              <Link href="#process">
                <Button variant="outline" size="lg" className="rounded-full bg-transparent">How it works</Button>
              </Link>
            </div>
          </motion.div>

          {/* Right form section */}
          <motion.div
            className="bg-card/60 supports-[backdrop-filter]:bg-card/60 backdrop-blur border border-border rounded-xl p-5 md:p-6 shadow-lg"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <form onSubmit={onSubmit} className="grid gap-4" aria-label="Free audit request form">
              <div className="grid gap-2">
                <label htmlFor="audit-name" className="text-sm">Your name</label>
                <Input id="audit-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Alex Smith" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="audit-email" className="text-sm">Work email</label>
                <Input id="audit-email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="alex@company.com" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="audit-website" className="text-sm">Website URL</label>
                <Input id="audit-website" type="url" required value={website} onChange={(e) => setWebsite(e.target.value)} placeholder="https://example.com" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="audit-goals" className="text-sm">Goals or pain points</label>
                <Textarea id="audit-goals" value={goals} onChange={(e) => setGoals(e.target.value)} placeholder="Increase conversions, improve speed, modernize design..." rows={4} />
              </div>
              <Button type="submit" size="lg" className="mt-2 rounded-full" disabled={loading}>
                {loading ? "Sending…" : "Request Free Audit"}
              </Button>
              <p className="text-xs text-muted-foreground mt-1">
                By submitting, you agree to be contacted about your request. No spam—ever.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
