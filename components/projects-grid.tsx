"use client"

import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { motion, Variants } from "framer-motion"

export type Project = {
  title: string
  client: string
  url: string
  category: string
  tags: string[]
  description: string
  image: string
  challenges: { title: string; detail: string }[]
  technologies: string[]
  keyResults: { value: string; label: string }[]
  features: string[]
}

export const projects: Project[] = [
  {
    title: "Steve Madden — Middle East",
    client: "Steve Madden Middle East Edition",
    url: "https://stevemadden.me/",
    category: "Fashion E-Commerce",
    tags: ["Fashion E-Commerce", "Shopify Plus", "Custom Development"],
    description:
      "A premium fashion e-commerce store designed specifically for Steve Madden's Middle East market. This fully custom Shopify Plus build was engineered to handle high-volume traffic events. Key implementations included Flash Sale features with countdown timers, a dedicated Ramadan Collection, SS26 Drop sections, and fully localized pricing supporting AED currency logic.",
    image: "/steve-madden.png",
    challenges: [
      { title: "Flash Sale System", detail: "Developed a custom countdown timer and inventory locking mechanism for high-heat drops." },
      { title: "Localization", detail: "Implemented region-specific content and multi-currency support tailored for GCC customers." },
      { title: "Mobile-First Design", detail: "Created a highly responsive interface ensuring seamless navigation on mobile devices." },
      { title: "Performance", detail: "Optimized asset loading and scripts to handle significant traffic spikes during sales." },
    ],
    technologies: ["Shopify Plus", "Liquid", "JavaScript", "Custom Sections", "Metafields"],
    keyResults: [
      { value: "40%", label: "Increase in conversion rate" },
      { value: "60%", label: "Faster page load time" },
      { value: "✓", label: "Seamless mobile experience achieved" },
    ],
    features: ["Dynamic Promotional Banners", "Advanced Search & Filter", "Localized Checkout Flow", "Lookbook Integration", "Automated Inventory Sync"],
  },
  {
    title: "Adventure HQ",
    client: "AdventureHQ — UAE's Leading Outdoor Retailer",
    url: "https://adventurehq.ae/",
    category: "Sports & Outdoor",
    tags: ["Sports & Outdoor", "Shopify", "Large Catalog"],
    description:
      "UAE's premier outdoor adventure retail destination. The site hosts an extensive catalog spanning categories like Camp & Hike, Cycling, Water Sports, BBQ, and Fitness. The project required handling a massive inventory while ensuring products were easy to find through a 'Latest Catalogue' section and specialized brand pages.",
    image: "/adventure-hq.png",
    challenges: [
      { title: "Catalog Management", detail: "Structured a database of 500+ SKUs with intricate tagging for effective filtering." },
      { title: "Brand Spotlights", detail: "Created custom landing page templates for 20+ specific brands to tell their unique stories." },
      { title: "Localization", detail: "Enforced AED currency standards and specific UAE shipping logic for local logistics." },
      { title: "Seasonal Banners", detail: "Developed a dynamic banner system for Ramadan and seasonal outdoor campaigns." },
    ],
    technologies: ["Shopify", "Custom Liquid", "JavaScript", "Metafields", "Search APIs"],
    keyResults: [
      { value: "50%", label: "Improvement in product discovery" },
      { value: "45%", label: "Increase in mobile sales" },
      { value: "20+", label: "Custom brand pages built" },
    ],
    features: ["Predictive Search Bar", "Mega Menu Navigation", "Related Products Engine", "Click & Collect Setup", "Brand Directory Page", "Video Gallery Integration"],
  },
  {
    title: "FitTrack",
    client: "FitTrack — Health & Wellness Technology",
    url: "https://tryfittrack.com/",
    category: "Health Tech",
    tags: ["Health Tech", "Shopify Plus", "CRO Focused"],
    description:
      "A high-converting health tech product store focused on social proof and trust. The design strategy centers around data-backed headlines ('83% of users reach their weight goal'), massive review aggregation (89,503+ reviews), and prominent trust badges like HSA/FSA eligibility. The store was optimized for aggressive sales campaigns ('BIGGEST SALE EVER').",
    image: "/fittrack.png",
    challenges: [
      { title: "Social Proof", detail: "Integrated dynamic review widgets to display nearly 90k reviews without slowing down the page." },
      { title: "Trust Signals", detail: "Custom coding to prominently display HSA/FSA eligibility badges on relevant products." },
      { title: "Landing Page Architecture", detail: "Built high-performance landing pages specifically for paid ad traffic." },
      { title: "Sale Systems", detail: "Developed a robust promotional banner system to handle complex tiered discount logic." },
    ],
    technologies: ["Shopify Plus", "React.js", "Next.js", "Metafields", "Review Integrations"],
    keyResults: [
      { value: "70%", label: "Conversion Rate on Sales" },
      { value: "40%", label: "Higher intent via HSA Badges" },
      { value: "89K+", label: "Reviews Displayed" },
    ],
    features: ["Dynamic Trust Badges", "Comparison Tables", "Scientific Study Highlights", "Sticky Header Timer", "Bundling Logic", "Post-Purchase Upsells"],
  },
  {
    title: "Deux Par Deux",
    client: "DeuxParDeux — Premium Children's Fashion",
    url: "https://deuxpardeux.com/",
    category: "Kids Fashion",
    tags: ["Kids Fashion", "Shopify Plus", "International"],
    description:
      "A delightful e-commerce experience for a premium children's fashion brand serving an international market (visible INR localization). The site features seasonal campaigns like the 'Saint Patrick's Lucky Greens' collection, interactive quiz-based product recommendations to help parents find the perfect style, and robust winter sale promotion modules.",
    image: "/deux-par-deux.png",
    challenges: [
      { title: "Global Reach", detail: "Implemented robust multi-currency and locale support to serve international customers seamlessly." },
      { title: "Personalization", detail: "Integrated a 'Style Quiz' that recommends outfits based on child age and preferences." },
      { title: "Navigation", detail: "Architected a complex menu system to handle multiple product categories (Boy, Girl, Baby, Accessories)." },
      { title: "Campaign Management", detail: "Built flexible sections for easy seasonal updates (e.g., Winter Sale, Spring Collection)." },
    ],
    technologies: ["Shopify Plus", "React.js Components", "Custom Liquid", "3rd Party APIs"],
    keyResults: [
      { value: "35%", label: "Boost in Average Order Value" },
      { value: "25%", label: "Reduction in bounce rate" },
      { value: "50%", label: "Of conversions driven by Quiz" },
    ],
    features: ["Interactive Style Quiz", "Advanced Filtering System", "Bundle & Save Logic", "Instagram Shop Feed", "Gift Registry Integration", "Loyalty Program Setup"],
  },
  {
    title: "F5 Global",
    client: "F5Global — Premium Fashion Retailer",
    url: "https://f5global.com/",
    category: "Fashion",
    tags: ["Fashion", "Shopify Plus", "Editorial Design"],
    description:
      "A sleek, editorial-style fashion e-commerce experience that exudes modern luxury. The site features distinct MEN, WOMEN, and KIDS categories, along with curated NEW IN and SALE sections. The design relies heavily on bold, cinematic photography, such as the 'Step Into Eid' campaign, requiring a layout that honors high-quality visual assets.",
    image: "/f5-global.png",
    challenges: [
      { title: "Visual Impact", detail: "Engineered full-screen cinematic hero sections that load instantly without layout shift." },
      { title: "Checkout Automation", detail: "Implemented automatic discount code application (Welcome10) to reduce cart abandonment." },
      { title: "Navigation", detail: "Streamlined multi-category navigation to ensure users can switch between Men/Women/Kids effortlessly." },
      { title: "Image Optimization", detail: "Deployed advanced lazy-loading and format optimization for high-res editorial images." },
    ],
    technologies: ["Shopify Plus", "Custom JavaScript", "CSS Animations", "Checkout Extensions"],
    keyResults: [
      { value: "55%", label: "Improvement in Time-on-Site" },
      { value: "30%", label: "Increase in Repeat Purchases" },
      { value: "✓", label: "Elevated Brand Perception" },
    ],
    features: ["Cinematic Video Backgrounds", "Quick View Functionality", "Auto-Applied Discounts", "Editorial Blog Layouts", "Sticky Add-to-Cart", "Wishlist Functionality"],
  },
]

const getCardVariants = (index: number): Variants => ({
  hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 0 },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
})

export default function ProjectsGrid({ limit }: { limit?: number }) {
  const list = typeof limit === "number" ? projects.slice(0, limit) : projects
  const isGrid = typeof limit === "number"

  return (
    <section className="mx-auto container px-4 py-4">
      {/* <div className="flex items-end justify-between mb-6">
        <div>
          <h2 className="text-2xl font-semibold">Selected Projects</h2>
          <p className="text-sm text-muted-foreground">Website development case studies.</p>
        </div>
        <Link className="text-sm text-primary hover:underline" href="/portfolio">
          View all
        </Link>
      </div> */}

      <div className={isGrid ? "grid gap-5 md:grid-cols-2" : "grid gap-8"}>
        {list.map((p, index) => (
          <motion.article
            key={p.title}
            className="rounded-xl overflow-hidden border border-border bg-card shadow-sm hover:shadow-md transition-all"
            variants={getCardVariants(index)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.1 }}
          >
            <img
              src={p.image}
              alt={`${p.title} preview`}
              className={isGrid ? "w-full h-76 object-cover object-top" : "w-full h-132 object-cover object-top"}
            />
            {isGrid ? (
              /* Homepage compact card */
              <div className="p-4">
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {p.tags.map((t) => (
                    <Badge variant="secondary" key={t} className="text-xs">{t}</Badge>
                  ))}
                </div>
                <h3 className="font-semibold">{p.title}</h3>
                <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{p.description}</p>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-primary hover:underline mt-2 inline-block"
                >
                  {p.url.replace("https://", "")}
                </a>
              </div>
            ) : (
              /* Portfolio full detail card */
              <div className="p-6 grid gap-6 md:grid-cols-[1fr_220px]">
                <div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {p.tags.map((t) => (
                      <Badge variant="secondary" key={t}>{t}</Badge>
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Client: {p.client}&nbsp;·&nbsp;
                    <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      {p.url.replace("https://", "")}
                    </a>
                  </p>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{p.description}</p>
                  <div className="mt-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">Key Challenges & Solutions</p>
                    <ul className="grid gap-1.5">
                      {p.challenges.map((c) => (
                        <li key={c.title} className="text-sm">
                          <span className="font-medium">{c.title}:</span>{" "}
                          <span className="text-muted-foreground">{c.detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">Technologies Used</p>
                    <div className="flex flex-wrap gap-1.5">
                      {p.technologies.map((t) => (
                        <Badge key={t} variant="outline" className="text-xs">{t}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="rounded-lg bg-muted/50 p-4 flex flex-col gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">Key Results</p>
                    <ul className="grid gap-2">
                      {p.keyResults.map((r) => (
                        <li key={r.label}>
                          <span className="text-2xl font-bold text-primary">{r.value}</span>
                          <p className="text-xs text-muted-foreground leading-tight">{r.label}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">Features Delivered</p>
                    <ul className="grid gap-1">
                      {p.features.map((f) => (
                        <li key={f} className="text-xs text-muted-foreground flex gap-1.5 items-start">
                          <span className="text-primary mt-0.5">•</span>{f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </motion.article>
        ))}
      </div>
    </section>
  )
}
