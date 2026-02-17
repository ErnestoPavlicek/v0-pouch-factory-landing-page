import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Outfit } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { generateSiteMetadata, organizationSchema, localBusinessSchema, JsonLd } from "@/lib/seo-config"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const outfit = Outfit({ subsets: ["latin"], variable: "--font-display" })

export const metadata: Metadata = generateSiteMetadata({
  title: 'Pouch Factory Inc. | Premium White Label Nicotine Pouch Manufacturing',
  description: 'The world\'s most advanced pouch manufacturing facility. FDA-graded, GMP-compliant, and optimized for speed. Custom nicotine, hemp, and functional pouches made in the USA.',
  keywords: ['Nicotine Pouch Manufacturer', 'White Label Pouches', 'Zyn Alternative Manufacturer', 'Hemp Pouches', 'FDA Graded Facility', 'Pouch Factory Tennessee'],
})

export const viewport: Viewport = {
  themeColor: "#020617",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <JsonLd data={organizationSchema} />
        <JsonLd data={localBusinessSchema} />
      </head>
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
