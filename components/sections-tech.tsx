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

export default function TechStack() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <h2 className="text-2xl font-semibold mb-6">Tech we love</h2>
      <div className="flex flex-wrap gap-2">
        {tech.map((t) => (
          <span
            key={t}
            className="rounded-md border border-border bg-secondary/50 text-foreground text-xs px-3 py-1.5 hover:bg-secondary transition-colors"
          >
            {t}
          </span>
        ))}
      </div>
    </section>
  )
}
