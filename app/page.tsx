"use client"

import { useEffect, useState } from "react"
import Navbar from "@/components/navbar"
import Preloader from "@/components/preloader"
import HeroSection from "@/components/hero-section"
import EventOverview from "@/components/event-overview"
import ChallengesSection from "@/components/challenges-section"
import ScheduleSection from "@/components/schedule-section"
import PrizesSection from "@/components/prizes-section"
import ContactSection from "@/components/contact-section"
import SponsorsSection from "@/components/sponsors-section"
import FAQSection from "@/components/faq-section"
import Footer from "@/components/footer"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [animationComplete, setAnimationComplete] = useState(false)

  useEffect(() => {
    // Set isLoaded to true after preloader completes
    const timer = setTimeout(() => {
      setIsLoaded(true)
      // Start the staggered animations immediately for navbar, delay for other elements
      setAnimationComplete(true)
    }, 6000) // Wait for preloader to complete (5s) plus a small buffer

    return () => clearTimeout(timer)
  }, [])

  // Setup scroll animation observer
  useEffect(() => {
    // Function to handle scroll animations
    const handleScrollAnimations = () => {
      const animatedElements = document.querySelectorAll("[data-scroll-animation]")

      animatedElements.forEach((element) => {
        const rect = element.getBoundingClientRect()
        const isVisible =
          rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 && rect.bottom >= 0

        if (isVisible) {
          element.classList.add("animate-in")
        } else {
          element.classList.remove("animate-in")
        }
      })
    }

    // Initial check and event listener
    handleScrollAnimations()
    window.addEventListener("scroll", handleScrollAnimations)

    return () => {
      window.removeEventListener("scroll", handleScrollAnimations)
    }
  }, [isLoaded])

  return (
    <div className="min-h-screen bg-spiderman-darkblue overflow-hidden">
      {/* Navbar always visible, not affected by animations */}
      <Navbar />
      
      {/* Preloader on top of everything */}
      <Preloader />
      
      <main>
        {/* Hero section slides in from top */}
        <div className={`transition-all duration-1000 ease-out transform ${animationComplete ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-24'}`}
          style={{ transitionDelay: '300ms' }}>
          <HeroSection />
        </div>
        
        {/* Event overview fades in and scales up */}
        <div className={`transition-all duration-1000 ease-out transform ${animationComplete ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
          style={{ transitionDelay: '700ms' }}>
          <EventOverview />
        </div>
        
        {/* Challenges section slides in from left */}
        <div className={`transition-all duration-1000 ease-out transform ${animationComplete ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-24'}`}
          style={{ transitionDelay: '1000ms' }}>
          <ChallengesSection />
        </div>
        
        {/* Schedule section slides in from right */}
        <div className={`transition-all duration-1000 ease-out transform ${animationComplete ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-24'}`}
          style={{ transitionDelay: '1300ms' }}>
          <ScheduleSection />
        </div>
        
        {/* Prizes section fades in and slides up */}
        <div className={`transition-all duration-1000 ease-out transform ${animationComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
          style={{ transitionDelay: '1600ms' }}>
          <PrizesSection />
        </div>
        
        {/* Contact section slides in from left with rotation */}
        <div className={`transition-all duration-1000 ease-out transform ${animationComplete ? 'opacity-100 translate-x-0 rotate-0' : 'opacity-0 -translate-x-16 rotate-2'}`}
          style={{ transitionDelay: '1900ms' }}>
          <ContactSection />
        </div>
        
        {/* Sponsors section slides in from right with scale */}
        <div className={`transition-all duration-1000 ease-out transform ${animationComplete ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-16 scale-95'}`}
          style={{ transitionDelay: '2200ms' }}>
          <SponsorsSection />
        </div>
        
        {/* FAQ section fades in with scale */}
        <div className={`transition-all duration-1000 ease-out transform ${animationComplete ? 'opacity-100 scale-100' : 'opacity-0 scale-98'}`}
          style={{ transitionDelay: '2500ms' }}>
          <FAQSection />
        </div>
      </main>
      
      {/* Footer slides up from bottom */}
      <div className={`transition-all duration-1000 ease-out transform ${animationComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        style={{ transitionDelay: '2800ms' }}>
        <Footer />
      </div>

      <style jsx>{`
        /* Custom ease function for web-swinging feel */
        .ease-web-swing {
          transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
      `}</style>
    </div>
  )
}
