import Link from "next/link"

export default function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 md:grid-cols-3">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <img src="/placeholder-logo.svg" alt="BrightStack IT logo" className="h-7 w-7" />
            <span className="font-semibold">BrightStack IT</span>
          </div>
          <p className="text-sm text-muted-foreground">
            We design, build, and scale reliable software for ambitious teams.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-3">Company</h3>
          <ul className="text-sm grid gap-2">
            <li>
              <Link className="hover:text-primary" href="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" href="/portfolio">
                Portfolio
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-3">Contact</h3>
          <ul className="text-sm text-muted-foreground grid gap-1">
            <li>{"hello@brightstack.dev"}</li>
            <li>{"+1 (555) 012-3456"}</li>
            <li>San Francisco, CA</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-4">
        <p className="mx-auto max-w-6xl px-4 text-xs text-muted-foreground">
          © {new Date().getFullYear()} BrightStack IT. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
