export default function Awards() {
  const items = [
    { title: "AWS Partner", desc: "Cloud architecture and serverless expertise." },
    { title: "Stripe Certified", desc: "Compliant payments and billing systems." },
    { title: "Playwright Experts", desc: "Reliable end‑to‑end testing at scale." },
  ]
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <h2 className="text-2xl font-semibold mb-6">Awards & Certifications</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {items.map((i) => (
          <div key={i.title} className="rounded-xl glow-card bg-card p-5">
            <h3 className="font-medium">{i.title}</h3>
            <p className="text-sm text-muted-foreground mt-2">{i.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
