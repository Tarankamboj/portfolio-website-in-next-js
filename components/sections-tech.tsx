"use client"

import { motion } from "framer-motion"

const tech = [
  "Next.js",
  "TypeScript",
  "Node.js",
  "Postgres",
  "Prisma",
  "Stripe",
  "AWS",
  "Vercel",
  "Tailwind",
  "Playwright",
]

// Container variant for staggered children
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1, // delay between each child
    },
  },
}

// Badge animation
const badgeVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
}

export default function TechStack() {
  return (
    <section className="mx-auto container px-4 py-14">
      <h2 className="text-2xl font-semibold mb-6">Tech we love</h2>

      <motion.div
        className="flex flex-wrap gap-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {tech.map((t) => (
          <motion.span
            key={t}
            className="rounded-md border border-border bg-secondary/50 text-foreground text-xs px-3 py-1.5 hover:bg-secondary transition-colors"
            variants={badgeVariants}
          >
            {t}
          </motion.span>
        ))}
      </motion.div>
    </section>
  )
}
