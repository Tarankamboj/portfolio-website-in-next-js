import ContactForm from "@/components/contact-form"

export const metadata = {
  title: "Contact — Taran IT",
}

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 grid gap-10 md:grid-cols-[1.2fr_.8fr]">
      <div>
        <h1 className="text-3xl font-semibold">Tell us about your project</h1>
        <p className="text-muted-foreground mt-2">Share a few details and we’ll follow up within 48 hours.</p>
        <div className="mt-6">
          <ContactForm />
        </div>
      </div>
      <aside className="rounded-xl border border-border bg-card p-6 h-fit">
        <h2 className="text-lg font-medium">Contact details</h2>
        <ul className="text-sm text-muted-foreground mt-3 grid gap-2">
          <li>
            <a href="mailto:deep.taran9646@gmail.com" className="hover:text-primary">
              deep.taran9646@gmail.com
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/taran-deep-62b019211" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
              LinkedIn Profile
            </a>
          </li>
          <li>
            <a href="https://www.upwork.com/freelancers/~01fc7bce3317d46bc6?mp_source=share" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
              Upwork Profile
            </a>
          </li>
        </ul>
        <div className="mt-6">
          <h3 className="text-sm font-semibold mb-2">Why clients choose us</h3>
          <ul className="text-sm grid gap-1">
            <li>• Senior engineering quality</li>
            <li>• Honest estimates and delivery</li>
            <li>• Clear communication</li>
          </ul>
        </div>
      </aside>
    </section>
  )
}
