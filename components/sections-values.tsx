export default function Values() {
  const values = [
    { title: "Reliability", desc: "SLOs, observability, and resilient infra patterns." },
    { title: "Velocity", desc: "Short feedback loops and continuous delivery." },
    { title: "Security", desc: "Least‑privilege, strong auth, and secure data flows." },
  ]
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <h2 className="text-2xl font-semibold mb-6">What we stand for</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {values.map((v) => (
          <div key={v.title} className="rounded-xl glow-card bg-card p-5">
            <h3 className="font-medium">{v.title}</h3>
            <p className="text-sm text-muted-foreground mt-2">{v.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
