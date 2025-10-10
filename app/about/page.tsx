export const metadata = {
  title: "About — BrightStack IT",
}

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 py-14 grid gap-8 md:grid-cols-2">
        <div>
          <h1 className="text-3xl font-semibold">We build dependable software.</h1>
          <p className="text-muted-foreground mt-3">
            BrightStack is a senior team specializing in product strategy, UX, and full‑stack delivery. We partner with
            founders and enterprises to ship quickly without sacrificing quality.
          </p>
          <ul className="text-sm grid gap-2 mt-4">
            <li>• Transparent weekly demos</li>
            <li>• Measurable success metrics</li>
            <li>• Long‑term maintainability</li>
          </ul>
        </div>
        <div className="rounded-xl border border-border bg-card p-6">
          <img src="/team-collaboration-office.png" alt="Our team collaborating" className="rounded-lg w-full h-auto" />
        </div>
      </section>
      <AboutValues />
      <AboutApproach />
    </>
  )
}

// New values section
export function AboutValues() {
  const values = [
    { title: "Ownership", desc: "We ship like founders and care deeply about outcomes." },
    { title: "Clarity", desc: "Plain language, visible progress, and honest trade‑offs." },
    { title: "Quality", desc: "Secure, maintainable systems that scale with you." },
  ]
  return (
    <section className="mx-auto max-w-6xl px-4 pb-10">
      <h2 className="text-2xl font-semibold mb-6">Our values</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {values.map((v) => (
          <div key={v.title} className="rounded-xl border border-border bg-card p-5">
            <h3 className="font-medium">{v.title}</h3>
            <p className="text-sm text-muted-foreground mt-2">{v.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

// New approach section
export function AboutApproach() {
  const bullets = [
    "Product-first perspective with measurable KPIs.",
    "Security and observability by default.",
    "Iterative releases to reduce risk and accelerate learning.",
  ]
  return (
    <section className="mx-auto max-w-6xl px-4 pb-14">
      <div className="rounded-xl border border-border bg-primary text-primary-foreground p-6 md:p-8">
        <h2 className="text-xl md:text-2xl font-semibold">Our approach</h2>
        <ul className="text-sm mt-4 grid gap-2">
          {bullets.map((b) => (
            <li key={b}>• {b}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
