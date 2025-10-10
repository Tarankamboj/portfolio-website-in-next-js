import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="grid-bg">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 grid gap-8 md:grid-cols-2 items-center">
        <div className="space-y-6">
          <h1 className="text-balance text-4xl md:text-5xl font-semibold tracking-tight">
            Build future‑proof software with AI‑ready architecture.
          </h1>
          <p className="text-pretty text-muted-foreground">
            Senior engineers delivering robust web apps, data pipelines, and cloud systems with measurable outcomes.
          </p>
          <div className="flex items-center gap-3">
            <Link href="/contact">
              <Button className="bg-primary text-primary-foreground hover:opacity-90">Start Your Project</Button>
            </Link>
            <Link href="/portfolio">
              <Button variant="outline">See Our Work</Button>
            </Link>
          </div>
          <ul className="text-sm text-muted-foreground grid gap-1 pt-2">
            <li>• Senior engineering team</li>
            <li>• Transparent delivery</li>
            <li>• Results you can measure</li>
          </ul>
        </div>
        <div className="rounded-xl glow-card bg-card p-4 md:p-6">
          <img
            src="/analytics-dashboard-ui.png"
            alt="Analytics dashboard preview"
            className="rounded-lg w-full h-auto"
          />
        </div>
      </div>
    </section>
  )
}
