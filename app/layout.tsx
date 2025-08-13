import type React from "react"
import type { Metadata } from "next"
import { Press_Start_2P, Orbitron } from "next/font/google"
import "./globals.css"

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pixel",
})

const orbitron = Orbitron({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-tech",
})

export const metadata: Metadata = {
  title: "Frelyst - Creator Economy & NFT Platform",
  description:
    "The next-gen platform for creative expression and digital showcase. Decentralized, creator-empowered, and community-driven.",
  generator: "v0.app",
  icons: {
    icon: "/icon.ico?v=2", // Force cache refresh
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${pressStart2P.variable} ${orbitron.variable}`}>
      <body className="bg-white text-neutral-900 font-pixel antialiased">{children}</body>
    </html>
  )
}
