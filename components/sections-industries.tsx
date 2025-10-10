const industries = [
  { title: "SaaS", desc: "Multi-tenant apps, billing, and user management." },
  { title: "E‑commerce", desc: "Headless storefronts, search, and checkout." },
  { title: "Logistics", desc: "Maps, tracking, and route optimization." },
  { title: "HR Tech", desc: "Workflows, RBAC, and document pipelines." },
  { title: "Fintech", desc: "Risk controls, KYC, and secure data flows." },
  { title: "Healthcare", desc: "Privacy-first systems with audit trails." },
]

export default function Industries() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <h2 className="text-2xl font-semibold mb-6">Industries we serve</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {industries.map((i) => (
          <div key={i.title} className="rounded-xl glow-card border border-border bg-card p-5">
            <h3 className="font-medium">{i.title}</h3>
            <p className="text-sm text-muted-foreground mt-2">{i.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
