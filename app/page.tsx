"use client"

import { useEffect, useState } from "react"
import Navbar from "@/components/navbar"
import Preloader from "@/components/preloader"
import HeroSection from "@/components/hero-section"
import EventOverview from "@/components/event-overview"
import ChallengesSection from "@/components/challenges-section"
import ScheduleSection from "@/components/schedule-section"
import RegistrationForm from "@/components/registration-form"
import TestimonialsSection from "@/components/testimonials-section"
import Footer from "@/components/footer"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Set isLoaded to true after preloader completes
    const timer = setTimeout(() => {
      setIsLoaded(true)
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
    <div className="min-h-screen bg-spiderman-darkblue">
      <Preloader />
      <Navbar />
      <main>
        <HeroSection />
        <EventOverview />
        <ChallengesSection />
        <ScheduleSection />
        <TestimonialsSection />
        <RegistrationForm />
      </main>
      <Footer />
    </div>
  )
}
