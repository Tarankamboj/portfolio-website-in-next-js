"use client"

import { motion, Variants } from "framer-motion"

export default function Awards() {
  const items = [
    { title: "AWS Partner", desc: "Cloud architecture and serverless expertise." },
    { title: "Stripe Certified", desc: "Compliant payments and billing systems." },
    { title: "Playwright Experts", desc: "Reliable end‑to‑end testing at scale." },
  ]

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  }

  return (
    <section className="mx-auto container px-4 py-14">
      <h2 className="text-2xl font-semibold mb-6">Awards & Certifications</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {items.map((i, index) => (
          <motion.div
            key={i.title}
            className="rounded-xl glow-card bg-card p-5"
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.15 }}
          >
            <h3 className="font-medium">{i.title}</h3>
            <p className="text-sm text-muted-foreground mt-2">{i.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
