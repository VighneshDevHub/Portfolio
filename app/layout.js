import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Outfit } from 'next/font/google'

export const metadata = {
  title: "Vighnesh Salunkhe - Portfolio",
  description: "Full Stack Developer Portfolio",
}

const outfit = Outfit ({
  subsets: ['latin'],
  weight: ['300','400','500', '600', '700'],
  display:'swap'
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={outfit.className}>
      <body className="relative min-h-screen w-full bg-[#0a1026] text-white">
        {/* Background Gradient */}
        <div className="pointer-events-none fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0b0b1f] to-black z-0" />
        </div>

        {/* Main layout container with z-10 */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
