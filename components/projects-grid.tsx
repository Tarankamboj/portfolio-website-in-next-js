"use client"

import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { motion, Variants } from "framer-motion"
import { projects } from "@/lib/projects"
export type { Project } from "@/lib/projects"

const getCardVariants = (index: number): Variants => ({
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
})

export default function ProjectsGrid({ limit }: { limit?: number }) {
  const list = typeof limit === "number" ? projects.slice(0, limit) : projects
  const isGrid = typeof limit === "number"

  return (
    <section className="mx-auto container px-4 py-4">
      {isGrid && (
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl font-semibold">Portfolio</h2>
            <p className="text-sm text-muted-foreground">Website development case studies.</p>
          </div>
          <Link className="text-sm text-primary hover:underline" href="/portfolio">
            View all →
          </Link>
        </div>
      )}

      <div className="grid gap-5 md:grid-cols-2">
        {list.map((p, index) => (
          <motion.article
            key={p.title}
            variants={getCardVariants(index)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link
              href={`/portfolio/${p.slug}`}
              className="block rounded-xl overflow-hidden border border-border bg-card shadow-sm hover:shadow-md transition-all group"
            >
              <img
                src={p.image}
                alt={`${p.title} preview`}
                className="w-full h-44 sm:h-52 object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
              />
              <div className="p-4">
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {p.tags.map((t) => (
                    <Badge variant="secondary" key={t} className="text-xs">
                      {t}
                    </Badge>
                  ))}
                </div>
                <h3 className="font-semibold group-hover:text-primary transition-colors">{p.title}</h3>
                <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{p.description}</p>
                <span className="text-xs text-primary mt-2 inline-block">View case study →</span>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
