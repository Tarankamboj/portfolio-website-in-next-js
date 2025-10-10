"use client"

import { motion, Variants } from "framer-motion"

export default function Values() {
  const values = [
    { title: "Reliability", desc: "SLOs, observability, and resilient infra patterns." },
    { title: "Velocity", desc: "Short feedback loops and continuous delivery." },
    { title: "Security", desc: "Least‑privilege, strong auth, and secure data flows." },
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
      <h2 className="text-2xl font-semibold mb-6">What we stand for</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {values.map((v, index) => (
          <motion.div
            key={v.title}
            className="rounded-xl glow-card bg-card p-5"
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.15 }}
          >
            <h3 className="font-medium">{v.title}</h3>
            <p className="text-sm text-muted-foreground mt-2">{v.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
