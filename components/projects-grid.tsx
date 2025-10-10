"use client"

import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { motion, Variants } from "framer-motion"

export type Project = {
  title: string
  category: string
  description: string
  image: string
  tags: string[]
}

export const projects: Project[] = [
  {
    title: "Nimbus Analytics",
    category: "SaaS Platform",
    description: "Self-serve analytics with role-based access and usage-based billing.",
    image: "/analytics-saas-dashboard.jpg",
    tags: ["Next.js", "Postgres", "Stripe"],
  },
  {
    title: "FleetOps",
    category: "Logistics",
    description: "Real-time tracking and route optimization for delivery fleets.",
    image: "/map-fleet-logistics.jpg",
    tags: ["Maps", "WebSockets", "Edge"],
  },
  {
    title: "Mercury Shop",
    category: "E-commerce",
    description: "High-converting storefront with headless CMS and A/B testing.",
    image: "/ecommerce-product-grid.png",
    tags: ["Headless CMS", "A/B Testing", "Checkout"],
  },
  {
    title: "Atlas HR",
    category: "HR Tech",
    description: "Employee portal with payroll, benefits, and onboarding workflows.",
    image: "/hr-portal-ui.jpg",
    tags: ["RBAC", "Workflows", "PDF"],
  },
]

// Function to generate left/right variants based on index
const getCardVariants = (index: number): Variants => ({
  hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 0 },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
})

export default function ProjectsGrid({ limit }: { limit?: number }) {
  const list = typeof limit === "number" ? projects.slice(0, limit) : projects

  return (
    <section className="mx-auto container px-4 py-14">
      <div className="flex items-end justify-between mb-6">
        <div>
          <h2 className="text-2xl font-semibold">Selected Projects</h2>
          <p className="text-sm text-muted-foreground">Work we’re proud of.</p>
        </div>
        <Link className="text-sm text-primary hover:underline" href="/portfolio">
          View all
        </Link>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {list.map((p, index) => (
          <motion.article
            key={p.title}
            className="rounded-xl overflow-hidden border border-border bg-card shadow-sm hover:shadow-md transition-all"
            variants={getCardVariants(index)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.15 }}
          >
            <img
              src={p.image || "/placeholder.svg"}
              alt={`${p.title} preview`}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">{p.category}</span>
              </div>
              <h3 className="font-medium mt-1">{p.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{p.description}</p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {p.tags.map((t) => (
                  <Badge variant="secondary" key={t}>
                    {t}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
