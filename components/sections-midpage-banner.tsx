"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import Link from "next/link"

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = Math.ceil(target / 50)
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(start)
    }, 30)
    return () => clearInterval(timer)
  }, [inView, target])

  return <span ref={ref}>{count}{suffix}</span>
}

const techs = [
  "Shopify Plus", "Custom Liquid", "React.js", "Next.js", "JavaScript",
  "CSS Animations", "Metafields", "Checkout Extensions", "Search APIs",
  "3rd Party APIs", "Shopify Plus", "Custom Liquid", "React.js", "Next.js",
]

const bentoItems = [
  {
    title: "Conversion-First Design",
    desc: "Every pixel is placed to guide visitors toward checkout.",
    icon: "🎯",
    className: "md:col-span-2",
    gradient: "from-primary/20 to-transparent",
  },
  {
    title: "Mobile Optimized",
    desc: "60%+ of traffic is mobile. Every store is built mobile-first.",
    icon: "📱",
    className: "",
    gradient: "from-purple-500/15 to-transparent",
  },
  {
    title: "Lightning Fast",
    desc: "Optimized for Core Web Vitals and sub-2s load times.",
    icon: "⚡",
    className: "",
    gradient: "from-amber-500/15 to-transparent",
  },
  {
    title: "Shopify Plus Expert",
    desc: "Scripts, Functions, B2B, Markets — the full Plus toolkit.",
    icon: "🏆",
    className: "",
    gradient: "from-green-500/15 to-transparent",
  },
  {
    title: "End-to-End Delivery",
    desc: "From wireframe to launch — no handoffs, no gaps.",
    icon: "🚀",
    className: "",
    gradient: "from-primary/15 to-transparent",
  },
]

export default function MidPageBanner() {
  return (
    <section className="mx-auto container px-4 py-20 space-y-16">

      {/* Animated stats row */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
      >
        {[
          { target: 50, suffix: "+", label: "Stores Launched" },
          { target: 8, suffix: "+", label: "Years Experience" },
          { target: 89, suffix: "K+", label: "Reviews Integrated" },
          { target: 100, suffix: "%", label: "Client Satisfaction" },
        ].map((s) => (
          <motion.div
            key={s.label}
            variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
            className="rounded-2xl border border-border bg-card p-6 text-center relative overflow-hidden group hover:border-primary/50 transition-colors"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <p className="text-4xl font-bold text-primary relative z-10">
              <CountUp target={s.target} suffix={s.suffix} />
            </p>
            <p className="text-sm text-muted-foreground mt-1 relative z-10">{s.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Bento grid */}
      <div>
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold">Why brands choose me</h2>
          <p className="text-muted-foreground mt-2 text-sm">Built on experience. Delivered with precision.</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        >
          {bentoItems.map((item) => (
            <motion.div
              key={item.title}
              variants={{ hidden: { opacity: 0, scale: 0.95 }, show: { opacity: 1, scale: 1, transition: { duration: 0.4 } } }}
              className={`rounded-2xl border border-border bg-card p-6 relative overflow-hidden group hover:border-primary/40 transition-all hover:-translate-y-1 ${item.className}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-60`} />
              <div className="relative z-10">
                <span className="text-3xl">{item.icon}</span>
                <h3 className="font-semibold mt-3 mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Infinite marquee tech strip */}
      <div className="relative overflow-hidden rounded-2xl border border-border bg-card py-5">
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-card to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-card to-transparent z-10" />
        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {[...techs, ...techs].map((t, i) => (
            <span
              key={i}
              className="px-4 py-1.5 rounded-full border border-border bg-muted/50 text-sm text-muted-foreground whitespace-nowrap hover:text-primary hover:border-primary/50 transition-colors cursor-default"
            >
              {t}
            </span>
          ))}
        </motion.div>
      </div>

      {/* CTA strip */}
      <motion.div
        className="rounded-2xl border border-primary/30 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-8 flex flex-col md:flex-row items-center justify-between gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <h3 className="text-xl font-semibold">Ready to build something great?</h3>
          <p className="text-sm text-muted-foreground mt-1">Let's turn your idea into a high-converting Shopify store.</p>
        </div>
        <Link
          href="/contact"
          className="shrink-0 inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-medium px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
        >
          Start a Project →
        </Link>
      </motion.div>

    </section>
  )
}
