"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-spiderman-darkblue/90 backdrop-blur shadow-xl py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <div className="w-40">
                <Image src="/gdsc.png" alt="BitnBuild Logo" width={120} height={40} />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center justify-center space-x-6 mx-auto">
              <Link
                href="/"
                className="text-cyan-100 hover:text-white transition-colors text-sm uppercase font-medium tracking-wider relative group border border-white/40 rounded px-3 py-1 shadow-[0_0_5px_rgba(255,255,255,0.4)] hover:shadow-[0_0_10px_rgba(255,255,255,0.6)]"
              >
                <span className="relative z-10">Home</span>
                <span className="absolute inset-0 bg-spiderman-darkblue/40 rounded-md blur-sm opacity-0 group-hover:opacity-100 transition-opacity -z-10"></span>
              </Link>
              <Link
                href="#domains"
                className="text-cyan-100 hover:text-white transition-colors text-sm uppercase font-medium tracking-wider relative group border border-white/40 rounded px-3 py-1 shadow-[0_0_5px_rgba(255,255,255,0.4)] hover:shadow-[0_0_10px_rgba(255,255,255,0.6)]"
              >
                <span className="relative z-10">Domains</span>
                <span className="absolute inset-0 bg-spiderman-darkblue/40 rounded-md blur-sm opacity-0 group-hover:opacity-100 transition-opacity -z-10"></span>
              </Link>
              <Link
                href="#timeline"
                className="text-cyan-100 hover:text-white transition-colors text-sm uppercase font-medium tracking-wider relative group border border-white/40 rounded px-3 py-1 shadow-[0_0_5px_rgba(255,255,255,0.4)] hover:shadow-[0_0_10px_rgba(255,255,255,0.6)]"
              >
                <span className="relative z-10">Timeline</span>
                <span className="absolute inset-0 bg-spiderman-darkblue/40 rounded-md blur-sm opacity-0 group-hover:opacity-100 transition-opacity -z-10"></span>
              </Link>
              <Link
                href="#prizes"
                className="text-cyan-100 hover:text-white transition-colors text-sm uppercase font-medium tracking-wider relative group border border-white/40 rounded px-3 py-1 shadow-[0_0_5px_rgba(255,255,255,0.4)] hover:shadow-[0_0_10px_rgba(255,255,255,0.6)]"
              >
                <span className="relative z-10">Prizes</span>
                <span className="absolute inset-0 bg-spiderman-darkblue/40 rounded-md blur-sm opacity-0 group-hover:opacity-100 transition-opacity -z-10"></span>
              </Link>
              <Link
                href="#sponsors"
                className="text-cyan-100 hover:text-white transition-colors text-sm uppercase font-medium tracking-wider relative group border border-white/40 rounded px-3 py-1 shadow-[0_0_5px_rgba(255,255,255,0.4)] hover:shadow-[0_0_10px_rgba(255,255,255,0.6)]"
              >
                <span className="relative z-10">Sponsors</span>
                <span className="absolute inset-0 bg-spiderman-darkblue/40 rounded-md blur-sm opacity-0 group-hover:opacity-100 transition-opacity -z-10"></span>
              </Link>
              <Link
                href="#faq"
                className="text-cyan-100 hover:text-white transition-colors text-sm uppercase font-medium tracking-wider relative group border border-white/40 rounded px-3 py-1 shadow-[0_0_5px_rgba(255,255,255,0.4)] hover:shadow-[0_0_10px_rgba(255,255,255,0.6)]"
              >
                <span className="relative z-10">FAQ</span>
                <span className="absolute inset-0 bg-spiderman-darkblue/40 rounded-md blur-sm opacity-0 group-hover:opacity-100 transition-opacity -z-10"></span>
              </Link>
              <Link
                href="#contact"
                className="text-cyan-100 hover:text-white transition-colors text-sm uppercase font-medium tracking-wider relative group border border-white/40 rounded px-3 py-1 shadow-[0_0_5px_rgba(255,255,255,0.4)] hover:shadow-[0_0_10px_rgba(255,255,255,0.6)]"
              >
                <span className="relative z-10">Contact Us</span>
                <span className="absolute inset-0 bg-spiderman-darkblue/40 rounded-md blur-sm opacity-0 group-hover:opacity-100 transition-opacity -z-10"></span>
              </Link>
            </nav>
            
            <Link
              href="#register"
              className="hidden md:flex bg-spiderman-red text-white py-2 px-5 rounded-md hover:bg-spiderman-red/80 transition-all font-medium items-center justify-center web-button relative overflow-hidden group"
            >
              <span className="relative z-10">Register</span>
              {/* Web animation */}
              <span className="absolute inset-0 w-0 bg-white/10 transition-all duration-300 group-hover:w-full"></span>
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`md:hidden transition-all duration-300 overflow-hidden ${
              mobileMenuOpen ? "max-h-screen py-5" : "max-h-0"
            }`}
          >
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-cyan-100 hover:text-white transition-colors text-sm uppercase font-medium tracking-wider px-3 py-1.5 rounded-md relative border border-white/40 shadow-[0_0_5px_rgba(255,255,255,0.4)] hover:shadow-[0_0_10px_rgba(255,255,255,0.6)]"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="relative z-10">Home</span>
                <span className="absolute inset-0 bg-spiderman-darkblue/60 backdrop-blur-sm rounded-md opacity-0 hover:opacity-100 transition-opacity -z-10"></span>
              </Link>
              <Link
                href="#domains"
                className="text-cyan-100 hover:text-white transition-colors text-sm uppercase font-medium tracking-wider px-3 py-1.5 rounded-md relative border border-white/40 shadow-[0_0_5px_rgba(255,255,255,0.4)] hover:shadow-[0_0_10px_rgba(255,255,255,0.6)]"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="relative z-10">Domains</span>
                <span className="absolute inset-0 bg-spiderman-darkblue/60 backdrop-blur-sm rounded-md opacity-0 hover:opacity-100 transition-opacity -z-10"></span>
              </Link>
              <Link
                href="#timeline"
                className="text-cyan-100 hover:text-white transition-colors text-sm uppercase font-medium tracking-wider px-3 py-1.5 rounded-md relative border border-white/40 shadow-[0_0_5px_rgba(255,255,255,0.4)] hover:shadow-[0_0_10px_rgba(255,255,255,0.6)]"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="relative z-10">Timeline</span>
                <span className="absolute inset-0 bg-spiderman-darkblue/60 backdrop-blur-sm rounded-md opacity-0 hover:opacity-100 transition-opacity -z-10"></span>
              </Link>
              <Link
                href="#prizes"
                className="text-cyan-100 hover:text-white transition-colors text-sm uppercase font-medium tracking-wider px-3 py-1.5 rounded-md relative border border-white/40 shadow-[0_0_5px_rgba(255,255,255,0.4)] hover:shadow-[0_0_10px_rgba(255,255,255,0.6)]"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="relative z-10">Prizes</span>
                <span className="absolute inset-0 bg-spiderman-darkblue/60 backdrop-blur-sm rounded-md opacity-0 hover:opacity-100 transition-opacity -z-10"></span>
              </Link>
              <Link
                href="#sponsors"
                className="text-cyan-100 hover:text-white transition-colors text-sm uppercase font-medium tracking-wider px-3 py-1.5 rounded-md relative border border-white/40 shadow-[0_0_5px_rgba(255,255,255,0.4)] hover:shadow-[0_0_10px_rgba(255,255,255,0.6)]"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="relative z-10">Sponsors</span>
                <span className="absolute inset-0 bg-spiderman-darkblue/60 backdrop-blur-sm rounded-md opacity-0 hover:opacity-100 transition-opacity -z-10"></span>
              </Link>
              <Link
                href="#faq"
                className="text-cyan-100 hover:text-white transition-colors text-sm uppercase font-medium tracking-wider px-3 py-1.5 rounded-md relative border border-white/40 shadow-[0_0_5px_rgba(255,255,255,0.4)] hover:shadow-[0_0_10px_rgba(255,255,255,0.6)]"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="relative z-10">FAQ</span>
                <span className="absolute inset-0 bg-spiderman-darkblue/60 backdrop-blur-sm rounded-md opacity-0 hover:opacity-100 transition-opacity -z-10"></span>
              </Link>
              <Link
                href="#contact"
                className="text-cyan-100 hover:text-white transition-colors text-sm uppercase font-medium tracking-wider px-3 py-1.5 rounded-md relative border border-white/40 shadow-[0_0_5px_rgba(255,255,255,0.4)] hover:shadow-[0_0_10px_rgba(255,255,255,0.6)]"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="relative z-10">Contact Us</span>
                <span className="absolute inset-0 bg-spiderman-darkblue/60 backdrop-blur-sm rounded-md opacity-0 hover:opacity-100 transition-opacity -z-10"></span>
              </Link>
              <Link
                href="#register"
                className="bg-spiderman-red text-white py-2 px-4 rounded-md hover:bg-spiderman-red/80 transition-colors font-medium inline-block text-center text-shadow-glow hover:shadow-[0_0_15px_rgba(237,29,36,0.6)]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Register
              </Link>
            </nav>
          </div>
        </div>
      </header>
    </>
  )
}
