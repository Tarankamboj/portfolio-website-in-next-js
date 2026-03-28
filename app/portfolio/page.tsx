import ProjectsGrid from "@/components/projects-grid"

export const metadata = {
  title: "Portfolio — Case Studies",
}

export default function PortfolioPage() {
  return (
    <>
      <section className="mx-auto container px-4 py-4">
        <h1 className="text-3xl font-semibold">Portfolio</h1>
        <p className="text-muted-foreground mt-2">
          Website development case studies — click any project to view the full case study.
        </p>
      </section>
      <ProjectsGrid />
    </>
  )
}
