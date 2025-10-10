import ProjectsGrid from "@/components/projects-grid"

export const metadata = {
  title: "Portfolio — BrightStack IT",
}

export default function PortfolioPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 pt-12">
        <h1 className="text-3xl font-semibold">Our portfolio</h1>
        <p className="text-muted-foreground mt-2">
          Selected case studies across SaaS, e‑commerce, logistics, and HR tech.
        </p>
      </section>
      <ProjectsGrid />
    </>
  )
}
