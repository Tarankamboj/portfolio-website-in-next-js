"use client"

import { useRef } from "react"
import { motion, useInView, Variants } from "framer-motion"
import CountUp from "react-countup"

const stats = [
  { value: "50+", label: "Projects delivered" },
  { value: "8", label: "Avg. MVP timeline", suffix: " weeks" },
  { value: "99.9", label: "Uptime across launches", suffix: "%" },
  { value: "72", label: "Client satisfaction", prefix: "NPS " },
]

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" as const } 
  },
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 }) // triggers when 30% visible

  return (
    <section ref={ref} className="mx-auto container px-4 pb-4">
      <div className="grid gap-4 md:grid-cols-4">
        {stats.map((s, index) => (
          <motion.div
            key={s.label}
            className="rounded-xl glow-card bg-card p-6 text-center"
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            transition={{ delay: index * 0.2 }}
          >
            <div className="text-3xl font-semibold text-primary">
              {isInView ? (
                <CountUp
                  start={0}
                  end={Number(s.value.replace(/[^\d.]/g, ""))}
                  duration={1.5}
                  suffix={s.suffix || s.value.includes("+") ? "+" : ""}
                  prefix={s.prefix || ""}
                />
              ) : (
                0
              )}
            </div>
            <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
