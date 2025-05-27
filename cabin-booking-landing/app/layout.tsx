import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { DarkModeProvider } from "../context/DarkModeContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CabinStay - Your Perfect Cabin Getaway",
  description: "Discover luxury cabins in breathtaking locations. Book your dream getaway today.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DarkModeProvider>{children}</DarkModeProvider>
      </body>
    </html>
  )
}
