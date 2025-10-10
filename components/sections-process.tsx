"use client"

import { motion, Variants } from "framer-motion"
import { Wand2, KanbanSquare, Binary, Rocket } from "lucide-react"

const steps = [
  {
    icon: <Wand2 className="h-5 w-5" />,
    title: "Discover",
    desc: "Workshops to align scope, constraints, and success metrics.",
  },
  {
    icon: <KanbanSquare className="h-5 w-5" />,
    title: "Plan",
    desc: "Roadmap, estimates, and risk mitigation for predictable delivery.",
  },
  {
    icon: <Binary className="h-5 w-5" />,
    title: "Build",
    desc: "Iterative releases with QA, security, and observability baked in.",
  },
  {
    icon: <Rocket className="h-5 w-5" />,
    title: "Launch",
    desc: "Handover, docs, and post-launch optimization to scale with you.",
  },
]

// ✅ Define motion variants (TypeScript safe)
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const, // 👈 Type-safe fix
    },
  },
}

export default function Process() {
  return (
    <section className="mx-auto container px-4 py-14">
      <div className="flex items-end justify-between mb-6">
        <div>
          <h2 className="text-2xl font-semibold">Our process</h2>
          <p className="text-sm text-muted-foreground">
            A proven path to dependable outcomes.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {steps.map((s, index) => (
          <motion.div
            key={s.title}
            className="rounded-xl glow-card bg-card p-5"
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex items-center gap-3">
              <div className="rounded-md bg-accent/20 p-2 text-accent">{s.icon}</div>
              <h3 className="font-medium">{s.title}</h3>
            </div>
            <p className="text-sm text-muted-foreground mt-3">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
