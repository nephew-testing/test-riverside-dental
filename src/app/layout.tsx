import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { siteConfig } from "@/lib/config";
import "@/styles/globals.css";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
export const metadata: Metadata = {
  title: { default: siteConfig.seo.defaultTitle, template: siteConfig.seo.titleTemplate },
  description: siteConfig.seo.defaultDescription,
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-white font-sans antialiased">
        <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <a href="/" className="text-xl font-bold">{siteConfig.business.name}</a>
            <nav className="hidden gap-6 md:flex">
              {siteConfig.navigation.map((item: { label: string; href: string }) => (
                <a key={item.href} href={item.href} className="text-sm text-gray-600 hover:text-black">{item.label}</a>
              ))}
            </nav>
          </div>
        </header>
        {children}
        <footer className="border-t bg-gray-50">
          <div className="mx-auto max-w-6xl px-6 py-8">
            <div className="grid gap-8 md:grid-cols-3">
              <div><h3 className="font-bold">{siteConfig.business.name}</h3><p className="mt-2 text-sm text-gray-600">{siteConfig.business.tagline}</p></div>
              <div><h4 className="font-semibold">Contact</h4><ul className="mt-2 space-y-1 text-sm text-gray-600"><li><a href={"tel:" + siteConfig.business.phone.replace(/\D/g,"")}>{siteConfig.business.phone}</a></li><li>{siteConfig.business.email}</li><li>{siteConfig.business.address}</li><li>{siteConfig.business.hours}</li></ul></div>
              <div><h4 className="font-semibold">Quick Links</h4><ul className="mt-2 space-y-1 text-sm text-gray-600">{siteConfig.navigation.map((item: { label: string; href: string }) => (<li key={item.href}><a href={item.href} className="hover:text-black">{item.label}</a></li>))}</ul></div>
            </div>
            <div className="mt-8 border-t pt-6 text-center text-xs text-gray-400">&copy; {new Date().getFullYear()} {siteConfig.business.name}. All rights reserved.</div>
          </div>
        </footer>
      </body>
    </html>
  );
}
