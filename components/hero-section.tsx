"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import CountdownTimer from "./countdown-timer"
import { handleParallax } from "@/utils/animation"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function HeroSection() {
  const parallaxRef = useRef<HTMLDivElement>(null)

  const titleAnimation = useScrollAnimation<HTMLHeadingElement>({
    effect: "fade",
    direction: "up",
    distance: 30,
    duration: 0.8,
    delay: 0.2,
  })

  const descAnimation = useScrollAnimation<HTMLParagraphElement>({
    effect: "fade",
    direction: "up",
    distance: 30,
    duration: 0.8,
    delay: 0.4,
  })

  const countdownAnimation = useScrollAnimation<HTMLDivElement>({
    effect: "fade",
    direction: "up",
    distance: 30,
    duration: 0.8,
    delay: 0.6,
  })

  const buttonsAnimation = useScrollAnimation<HTMLDivElement>({
    effect: "fade",
    direction: "up",
    distance: 30,
    duration: 0.8,
    delay: 0.8,
  })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (parallaxRef.current) {
        handleParallax(e)
      }
    }

    document.addEventListener("mousemove", handleMouseMove)
    return () => document.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Set the hackathon date (24 hours from now for demo purposes)
  const hackathonDate = new Date()
  hackathonDate.setDate(hackathonDate.getDate() + 1)

  return (
    <section
      id="home"
      className="relative min-h-[80vh] flex flex-col justify-center overflow-hidden"
      style={{ 
        backgroundImage: `url('/spider-man-3.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Overlay gradient - darkened for better text contrast over image */}
      <div className="absolute inset-0 bg-gradient-to-b from-spiderman-darkblue/80 via-spiderman-darkblue/70 to-spiderman-blue/90 z-0"></div>
      
      {/* Background web pattern */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/spider-man-3.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            mixBlendMode: "overlay",
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pt-40 md:pt-52 pb-12 relative z-10">
      <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">

          <div ref={titleAnimation.ref} style={titleAnimation.style} className="mb-10">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight font-spiderman-readable">
              <span className="block">BIT N BUILD</span>
              <span className="block text-spiderman-red">2024</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-8">
              A 24-hour hackathon where innovation meets spider-sense! Join us for a web-slinging
              coding adventure in Mumbai.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => {
                  // Implement the logic to scroll to the registration section
                  const registerSection = document.getElementById('register')
                  if (registerSection) {
                    registerSection.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="px-8 py-3 bg-spiderman-red text-white font-semibold rounded-full hover:bg-red-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
              >
                Register Now
              </button>
              <a
                href="#about"
                className="px-8 py-3 bg-transparent border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Spider swinging animation */}
          <div ref={parallaxRef} className="relative h-20 w-full">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
              <div className="w-px h-20 bg-red-500/30"></div>
              <div className="w-8 h-8 absolute -bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
                <img
                  src="/spider-man-1.png"
                  alt="Spider-Man"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Countdown Section - Integrated with hero */}
      <div className="relative w-full mt-auto z-10">
        <div className="w-full bg-gradient-to-b from-transparent via-spiderman-blue to-spiderman-blue/90 py-10">
          <div className="container mx-auto px-4">
            {/* Timer */}
            <div
              ref={countdownAnimation.ref}
              style={countdownAnimation.style}
              className="flex flex-col items-center justify-center"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Countdown to Hackathon:</h2>
              <CountdownTimer targetDate={hackathonDate} />
            </div>
          </div>
        </div>
      </div>

      {/* Updated bottom gradient for smoother transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-spiderman-blue/90 via-spiderman-blue/80 to-transparent z-0"></div>
    </section>
  )
}
