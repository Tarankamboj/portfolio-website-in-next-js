"use client"

import { motion, Variants } from "framer-motion"

const industries = [
  { title: "SaaS", desc: "Multi-tenant apps, billing, and user management." },
  { title: "E‑commerce", desc: "Headless storefronts, search, and checkout." },
  { title: "Logistics", desc: "Maps, tracking, and route optimization." },
  { title: "HR Tech", desc: "Workflows, RBAC, and document pipelines." },
  { title: "Fintech", desc: "Risk controls, KYC, and secure data flows." },
  { title: "Healthcare", desc: "Privacy-first systems with audit trails." },
]

// Card animation
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
}

export default function Industries() {
  return (
    <section className="mx-auto container px-4 py-14">
      <h2 className="text-2xl font-semibold mb-6">Industries we serve</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {industries.map((i, index) => (
          <motion.div
            key={i.title}
            className="rounded-xl glow-card border border-border bg-card p-5"
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
