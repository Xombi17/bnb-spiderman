"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-spiderman-darkblue/90 backdrop-blur-md py-2" : "bg-transparent py-4"}`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-10 h-10 animate-web-swing">
            <Image src="/spider-logo.svg" alt="Bit N Build Logo" width={40} height={40} className="object-contain" />
          </div>
          <span className="text-xl font-bold text-white">Bit N Build</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="#about" className="text-white hover:text-spiderman-red transition-colors relative group">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-spiderman-red transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="#challenges" className="text-white hover:text-spiderman-red transition-colors relative group">
            Challenges
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-spiderman-red transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="#schedule" className="text-white hover:text-spiderman-red transition-colors relative group">
            Schedule
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-spiderman-red transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="#register" className="text-white hover:text-spiderman-red transition-colors relative group">
            Register
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-spiderman-red transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="#register"
            className="bg-spiderman-red text-white px-6 py-2 rounded-md hover:bg-spiderman-red/80 transition-colors web-button"
          >
            Join Now
          </Link>
        </nav>

        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-spiderman-darkblue/95 backdrop-blur-md py-4">
          <div className="container mx-auto px-4 flex flex-col gap-4">
            <Link
              href="#about"
              className="text-white py-2 border-b border-white/10"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#challenges"
              className="text-white py-2 border-b border-white/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Challenges
            </Link>
            <Link
              href="#schedule"
              className="text-white py-2 border-b border-white/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Schedule
            </Link>
            <Link
              href="#register"
              className="text-white py-2 border-b border-white/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Register
            </Link>
            <Link
              href="#register"
              className="bg-spiderman-red text-white px-6 py-2 rounded-md text-center mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Join Now
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
