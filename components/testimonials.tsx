import { Card, CardContent, CardHeader } from "@/components/ui/card"

const testimonials = [
  {
    name: "Sofia Patel",
    role: "CTO, Nimbus Analytics",
    quote: "BrightStack delivered our MVP in 8 weeks and it scaled to thousands of users with zero downtime.",
  },
  {
    name: "Liam Chen",
    role: "Founder, FleetOps",
    quote: "Clear communication, reliable delivery, and deep technical expertise. They’re our go-to partner.",
  },
  {
    name: "Ava Martinez",
    role: "VP Product, Atlas HR",
    quote: "They translated complex requirements into a delightful product experience. Highly recommend.",
  },
]

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <h2 className="text-2xl font-semibold mb-6">What clients say</h2>
      <div className="grid gap-5 md:grid-cols-3">
        {testimonials.map((t) => (
          <Card key={t.name} className="bg-card border-border">
            <CardHeader>
              <p className="text-sm text-muted-foreground">{t.role}</p>
              <h3 className="font-medium">{t.name}</h3>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                {"“"}
                {t.quote}
                {"”"}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
