import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    q: "What’s your typical engagement model?",
    a: "Dedicated team on a monthly retainer with weekly demos and clear milestones.",
  },
  {
    q: "Do you work with startups and enterprises?",
    a: "Yes. We tailor delivery to stage and scale—from MVPs to large systems.",
  },
  {
    q: "How fast can we start?",
    a: "Usually within 1–2 weeks after discovery and contract finalization.",
  },
  {
    q: "Do you provide post‑launch support?",
    a: "We offer flexible maintenance and optimization packages after launch.",
  },
]

export default function FAQ() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <h2 className="text-2xl font-semibold mb-6">Frequently asked questions</h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((f, idx) => (
          <AccordionItem key={f.q} value={`item-${idx}`}>
            <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
