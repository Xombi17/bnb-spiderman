import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bit N Build: 24-Hour Hackathon",
  description: "Join us for an action-packed 24-hour coding adventure with a Spider-Man theme!",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-spiderman-darkblue`}>{children}</body>
    </html>
  )
}


import './globals.css'