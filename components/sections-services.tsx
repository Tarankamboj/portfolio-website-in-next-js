"use client"

import { Code, Cloud, ShieldCheck } from "lucide-react"
import { motion } from "framer-motion"

const services = [
  {
    icon: <Code className="h-5 w-5" />,
    title: "Web Apps",
    desc: "Modern, performant web applications built with Next.js.",
  },
  {
    icon: <Cloud className="h-5 w-5" />,
    title: "Cloud & DevOps",
    desc: "Reliable deployments, CI/CD, and observability from day one.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Security & Compliance",
    desc: "Best practices for data protection and regulatory needs.",
  },
]

export default function Services() {
  return (
    <section className="mx-auto container px-4 py-14">
      {/* Section title animation */}
      <h2 className="text-2xl font-semibold mb-6 text-center md:text-left">
         What we do
      </h2>

      {/* Animated cards */}
      <div className="grid gap-4 md:grid-cols-3">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            className="rounded-xl border border-border bg-card p-5 shadow-sm hover:shadow-md transition-all"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 200,
              duration: 0.6,
              delay: i * 0.15
            }}
            viewport={{ once: true }}
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