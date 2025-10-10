import Hero from "@/components/hero"
import Services from "@/components/sections-services"
import ProjectsGrid from "@/components/projects-grid"
import Testimonials from "@/components/testimonials"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Process from "@/components/sections-process"
import Stats from "@/components/sections-stats"
import TechStack from "@/components/sections-tech"
import Industries from "@/components/sections-industries"
import Values from "@/components/sections-values"
import Awards from "@/components/sections-awards"
import FreeAuditSection from "@/components/section-free-audit"

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <Hero />
      {/* Free Audit */}
      <FreeAuditSection />
      {/* Services */}
      <Services />
      {/* Process */}
      <Process />
      {/* Stats */}
      <Stats />
      {/* Projects */}
      <ProjectsGrid limit={3} />
      {/* Tech Stack */}
      <TechStack />
      {/* Industries */}
      <Industries />
      {/* Values */}
      <Values />
      {/* Awards */}
      <Awards />
      {/* Testimonials */}
      <Testimonials />
      {/* CTA */}
      <section className="mx-auto container px-4 py-16">
        <div className="rounded-xl glow-card border border-border bg-primary text-primary-foreground p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-balance">Have an idea? Let’s make it real.</h2>
            <p className="text-sm opacity-90">We’ll scope, estimate, and propose next steps in 48 hours.</p>
          </div>
          <Link href="/contact">
            <Button variant="secondary" className="text-foreground">
              Contact us
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}
