export const siteConfig = {
  business: { name: "Riverside Dental Care", tagline: "Gentle, Modern Dental Care for Portland Families", description: "A modern family dental practice focused on gentle, anxiety-free care. We use the latest technology including digital X-rays and same-day crowns. Dr. Sarah Chen has been serving Portland families for over 12 years.", phone: "(503) 555-8900", email: "hello@riversidedental.nephew.app", address: "456 River Road, Portland, OR 97201", hours: "Mon-Thu 8am-5pm, Fri 8am-2pm", founded: "2014" },
  brand: { primaryColor: "#2563EB", secondaryColor: "#1E293B", accentColor: "#F59E0B", headingFont: "Inter", bodyFont: "Inter", voice: "professional, warm, trustworthy" },
  social: { instagram: "", facebook: "", twitter: "", linkedin: "", tiktok: "", youtube: "" },
  navigation: [{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "About", href: "/about" }, { label: "Blog", href: "/blog" }, { label: "Contact", href: "/contact" }],
  seo: { defaultTitle: "Riverside Dental Care Portland | Dr. Sarah Chen | Gentle", titleTemplate: "%s | Riverside Dental Care", defaultDescription: "Modern family dental practice in Portland, OR. Dr. Sarah Chen provides gentle, anxiety-free care with digital X-rays & same-day crowns. Call (503) 555-8900.", siteUrl: "https://test-riverside-dental.vercel.app" },
  features: { booking: false, blog: true, contactForm: true, emailSubscribe: true, reviews: false },
  nephew: { tenantId: process.env.NEPHEW_TENANT_ID ?? "", apiUrl: process.env.NEPHEW_API_URL ?? "https://api.nephew.app" },
} as const;
export type SiteConfig = typeof siteConfig;
