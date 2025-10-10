const stats = [
  { value: "50+", label: "Projects delivered" },
  { value: "8 weeks", label: "Avg. MVP timeline" },
  { value: "99.9%", label: "Uptime across launches" },
  { value: "NPS 72", label: "Client satisfaction" },
]

export default function Stats() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-4">
      <div className="grid gap-4 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-xl glow-card bg-card p-6 text-center">
            <div className="text-3xl font-semibold text-primary">{s.value}</div>
            <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
