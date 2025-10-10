import { Code, Cloud, ShieldCheck } from "lucide-react"

const services = [
  {
    icon: <Code className="h-5 w-5" />,
    title: "Web Apps",
    desc: "Modern, performant web applications built with Next.js.",
  },
  {
    icon: <Cloud className="h-5 w-5" />,
    title: "Cloud & DevOps",
    desc: "Reliable deployments, CI/CD, and observability from day one.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Security & Compliance",
    desc: "Best practices for data protection and regulatory needs.",
  },
]

export default function Services() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <h2 className="text-2xl font-semibold mb-6">What we do</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {services.map((s) => (
          <div key={s.title} className="rounded-xl border border-border bg-card p-5">
            <div className="flex items-center gap-3">
              <div className="rounded-md bg-accent/20 p-2 text-accent">{s.icon}</div>
              <h3 className="font-medium">{s.title}</h3>
            </div>
            <p className="text-sm text-muted-foreground mt-3">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
