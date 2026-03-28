import { projects } from "@/lib/projects"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ExternalLink } from "lucide-react"

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return {}
  return { title: `${project.title} — Case Study` }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) notFound()

  return (
    <article className="mx-auto max-w-4xl px-4 py-12">
      <Link href="/portfolio" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary mb-8">
        <ArrowLeft className="w-4 h-4" /> Back to Portfolio
      </Link>

      <div className="rounded-xl overflow-hidden mb-8">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-56 sm:h-80 object-cover object-top"
        />
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((t) => (
          <Badge variant="secondary" key={t}>{t}</Badge>
        ))}
      </div>

      <h1 className="text-3xl font-semibold">{project.title}</h1>
      <p className="text-sm text-muted-foreground mt-1">
        Client: {project.client}&nbsp;·&nbsp;
        <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
          {project.url.replace("https://", "")} <ExternalLink className="w-3 h-3" />
        </a>
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 my-8">
        {project.keyResults.map((r) => (
          <div key={r.label} className="rounded-lg border border-border bg-card p-4 text-center">
            <span className="text-3xl font-bold text-primary">{r.value}</span>
            <p className="text-xs text-muted-foreground mt-1 leading-tight">{r.label}</p>
          </div>
        ))}
      </div>

      <section className="mb-8">
        <h2 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-3">Project Overview</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">{project.description}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-3">Key Challenges & Solutions</h2>
        <ul className="grid gap-3">
          {project.challenges.map((c) => (
            <li key={c.title} className="rounded-lg border border-border bg-card p-4 text-sm">
              <span className="font-medium">{c.title}:</span>{" "}
              <span className="text-muted-foreground">{c.detail}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-3">Features Delivered</h2>
        <div className="flex flex-wrap gap-2">
          {project.features.map((f) => (
            <Badge key={f} variant="outline">{f}</Badge>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-3">Technologies Used</h2>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>
      </section>

      <div className="rounded-xl border border-border bg-card p-6 text-center">
        <p className="font-medium mb-1">Want similar results for your store?</p>
        <p className="text-sm text-muted-foreground mb-4">Let&apos;s talk about your project.</p>
        <Link href="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-medium px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity">
          Get in Touch
        </Link>
      </div>
    </article>
  )
}
