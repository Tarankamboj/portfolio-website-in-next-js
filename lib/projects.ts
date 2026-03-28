export type Project = {
  slug: string
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
    slug: "steve-madden",
    title: "Steve Madden — Middle East",
    client: "Steve Madden Middle East Edition",
    url: "https://stevemadden.me/",
    category: "Fashion E-Commerce",
    tags: ["Fashion E-Commerce", "Shopify Plus", "Custom Development"],
    description: "A premium fashion e-commerce store designed specifically for Steve Madden's Middle East market. This fully custom Shopify Plus build was engineered to handle high-volume traffic events. Key implementations included Flash Sale features with countdown timers, a dedicated Ramadan Collection, SS26 Drop sections, and fully localized pricing supporting AED currency logic.",
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
    slug: "adventure-hq",
    title: "Adventure HQ",
    client: "AdventureHQ — UAE's Leading Outdoor Retailer",
    url: "https://adventurehq.ae/",
    category: "Sports & Outdoor",
    tags: ["Sports & Outdoor", "Shopify", "Large Catalog"],
    description: "UAE's premier outdoor adventure retail destination. The site hosts an extensive catalog spanning categories like Camp & Hike, Cycling, Water Sports, BBQ, and Fitness. The project required handling a massive inventory while ensuring products were easy to find through a 'Latest Catalogue' section and specialized brand pages.",
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
    slug: "fittrack",
    title: "FitTrack",
    client: "FitTrack — Health & Wellness Technology",
    url: "https://tryfittrack.com/",
    category: "Health Tech",
    tags: ["Health Tech", "Shopify Plus", "CRO Focused"],
    description: "A high-converting health tech product store focused on social proof and trust. The design strategy centers around data-backed headlines ('83% of users reach their weight goal'), massive review aggregation (89,503+ reviews), and prominent trust badges like HSA/FSA eligibility. The store was optimized for aggressive sales campaigns ('BIGGEST SALE EVER').",
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
    slug: "deux-par-deux",
    title: "Deux Par Deux",
    client: "DeuxParDeux — Premium Children's Fashion",
    url: "https://deuxpardeux.com/",
    category: "Kids Fashion",
    tags: ["Kids Fashion", "Shopify Plus", "International"],
    description: "A delightful e-commerce experience for a premium children's fashion brand serving an international market (visible INR localization). The site features seasonal campaigns like the 'Saint Patrick's Lucky Greens' collection, interactive quiz-based product recommendations to help parents find the perfect style, and robust winter sale promotion modules.",
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
    slug: "f5-global",
    title: "F5 Global",
    client: "F5Global — Premium Fashion Retailer",
    url: "https://f5global.com/",
    category: "Fashion",
    tags: ["Fashion", "Shopify Plus", "Editorial Design"],
    description: "A sleek, editorial-style fashion e-commerce experience that exudes modern luxury. The site features distinct MEN, WOMEN, and KIDS categories, along with curated NEW IN and SALE sections. The design relies heavily on bold, cinematic photography, such as the 'Step Into Eid' campaign, requiring a layout that honors high-quality visual assets.",
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
  {
    slug: "altiq",
    title: "Altiq",
    client: "Altiq — Automotive Lighting & Accessories",
    url: "https://altiq.com.au/",
    category: "Automotive E-Commerce",
    tags: ["Automotive", "Shopify", "Mega Menu"],
    description: "A high-performance e-commerce store for Altiq (formerly Supernova Lighting), Australia's leading automotive driving lights brand. The project centered on building a sophisticated mega menu navigation system that lets customers browse by product category with featured products, category links, and promotional imagery all visible at a glance.",
    image: "/altiq.png",
    challenges: [
      { title: "Mega Menu", detail: "Engineered a fully custom multi-column mega menu with product thumbnails, category links, and featured highlight cards." },
      { title: "Product Discovery", detail: "Structured navigation to surface top SKUs like Rogue MK3, Quad V3, and Stealth Kits directly from the menu." },
      { title: "Brand Transition", detail: "Managed the rebrand from Supernova Lighting to Altiq while preserving SEO equity and customer trust." },
      { title: "Performance", detail: "Optimized menu rendering and image loading to ensure zero layout shift on hover interactions." },
    ],
    technologies: ["Shopify", "Custom Liquid", "JavaScript", "CSS Animations"],
    keyResults: [
      { value: "35%", label: "Increase in category page visits" },
      { value: "28%", label: "Reduction in bounce rate" },
      { value: "✓", label: "Seamless rebrand executed" },
    ],
    features: ["Multi-Column Mega Menu", "Featured Product Cards", "Category Quick Links", "Bundle Packs Section", "AUD Currency Support", "Mobile Responsive Nav"],
  },
  {
    slug: "autobrush",
    title: "AutoBrush",
    client: "AutoBrush — Kids Oral Care",
    url: "https://tryautobrush.com/products/autobrush-pro-kids-sibling-pack",
    category: "Health & Wellness",
    tags: ["Health & Wellness", "Shopify Plus", "PDP Optimization"],
    description: "A high-converting product detail page (PDP) for AutoBrush's Pro Kids Sibling Pack. The page was engineered to maximize conversions through trust-building content, bundle value communication, and a frictionless purchase flow targeting parents shopping for kids' oral care products.",
    image: "/autobrush.jpeg",
    challenges: [
      { title: "Bundle Presentation", detail: "Designed a clear value breakdown for the sibling pack to communicate savings and product inclusions at a glance." },
      { title: "Trust Building", detail: "Integrated review widgets, dentist endorsements, and safety certifications prominently on the PDP." },
      { title: "Mobile UX", detail: "Optimized the sticky add-to-cart and image gallery for seamless mobile browsing and purchase." },
      { title: "Conversion Flow", detail: "Structured the page layout with a logical content hierarchy — hero, benefits, reviews, FAQ — to guide users to checkout." },
    ],
    technologies: ["Shopify Plus", "Custom Liquid", "JavaScript", "Metafields"],
    keyResults: [
      { value: "45%", label: "Increase in PDP conversion rate" },
      { value: "30%", label: "Boost in Average Order Value" },
      { value: "✓", label: "Improved mobile purchase flow" },
    ],
    features: ["Custom Bundle PDP", "Sticky Add-to-Cart", "Trust Badge Section", "Review Integration", "FAQ Accordion", "Upsell Recommendations"],
  },
  {
    slug: "skimandruru",
    title: "Skim & Druru",
    client: "Skim & Druru — Fashion Collections",
    url: "https://skimandruru.com/collections/shop",
    category: "Fashion E-Commerce",
    tags: ["Fashion", "Shopify", "Collection Page"],
    description: "A curated fashion collection page for Skim & Druru featuring an elegant product browsing experience with color swatches. The project focused on building a visually rich collection page that lets shoppers filter and explore products by color variant directly from the grid — reducing clicks to purchase and improving product discoverability.",
    image: "/skimandruru.jpeg",
    challenges: [
      { title: "Color Swatches", detail: "Built inline variant swatches on collection cards so customers can switch colors without opening the product page." },
      { title: "Collection Layout", detail: "Designed a clean editorial grid layout that balances product imagery with brand aesthetics." },
      { title: "Filter UX", detail: "Implemented smooth filtering by category, size, and color to help shoppers narrow down selections quickly." },
      { title: "Mobile Experience", detail: "Optimized swatch interactions and grid layout for seamless browsing on mobile devices." },
    ],
    technologies: ["Shopify", "Custom Liquid", "JavaScript", "CSS Animations"],
    keyResults: [
      { value: "40%", label: "Increase in collection page engagement" },
      { value: "25%", label: "Reduction in product page bounces" },
      { value: "✓", label: "Inline swatch selection implemented" },
    ],
    features: ["Inline Color Swatches", "Collection Grid Layout", "Ajax Filtering", "Quick Add to Cart", "Mobile Optimized", "Editorial Typography"],
  },
]
