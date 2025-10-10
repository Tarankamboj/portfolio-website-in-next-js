"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { motion, Variants } from "framer-motion"

const testimonials = [
  {
    name: "Sofia Patel",
    role: "CTO, Nimbus Analytics",
    quote: "BrightStack delivered our MVP in 8 weeks and it scaled to thousands of users with zero downtime.",
  },
  {
    name: "Liam Chen",
    role: "Founder, FleetOps",
    quote: "Clear communication, reliable delivery, and deep technical expertise. They’re our go-to partner.",
  },
  {
    name: "Ava Martinez",
    role: "VP Product, Atlas HR",
    quote: "They translated complex requirements into a delightful product experience. Highly recommend.",
  },
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

export default function Testimonials() {
  return (
    <section className="mx-auto container px-4 py-14">
      <h2 className="text-2xl font-semibold mb-6">What clients say</h2>
      <div className="grid gap-5 md:grid-cols-3">
        {testimonials.map((t, index) => (
          <motion.div
            key={t.name}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.15 }}
          >
            <Card className="bg-card border-border">
              <CardHeader>
                <p className="text-sm text-muted-foreground">{t.role}</p>
                <h3 className="font-medium">{t.name}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  {"“"}
                  {t.quote}
                  {"”"}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
