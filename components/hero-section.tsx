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
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with Spider-Man image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/spider-man-3.png"
            alt="Spider-Man"
            fill
            className="object-cover object-center opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-spiderman-darkblue/90 to-spiderman-darkblue/70 spider-web-bg"></div>
        </div>

        {/* Web lines in background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-0 right-0 h-0.5 bg-white/5"></div>
          <div className="absolute top-2/4 left-0 right-0 h-0.5 bg-white/5"></div>
          <div className="absolute top-3/4 left-0 right-0 h-0.5 bg-white/5"></div>
          <div className="absolute left-1/4 top-0 bottom-0 w-0.5 bg-white/5"></div>
          <div className="absolute left-2/4 top-0 bottom-0 w-0.5 bg-white/5"></div>
          <div className="absolute left-3/4 top-0 bottom-0 w-0.5 bg-white/5"></div>
        </div>

        {/* Parallax elements */}
        <div ref={parallaxRef} className="parallax absolute inset-0 z-0">
          <div className="parallax-layer">
            {/* Spider webs instead of floating elements */}
            <div className="absolute top-20 left-10 w-32 h-32">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-10">
                <path
                  d="M50 0 L50 100 M0 50 L100 50 M25 0 L75 100 M75 0 L25 100 M0 25 L100 75 M0 75 L100 25"
                  stroke="white"
                  strokeWidth="1"
                  fill="none"
                />
              </svg>
            </div>
            <div className="absolute bottom-40 right-20 w-40 h-40">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-10">
                <path
                  d="M50 0 L50 100 M0 50 L100 50 M25 0 L75 100 M75 0 L25 100 M0 25 L100 75 M0 75 L100 25"
                  stroke="white"
                  strokeWidth="1"
                  fill="none"
                />
              </svg>
            </div>
          </div>
          <div className="parallax-layer">
            <div className="absolute top-1/3 right-1/4 w-24 h-24">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-10">
                <circle cx="50" cy="50" r="45" stroke="white" strokeWidth="1" fill="none" />
                <path
                  d="M50 5 L50 95 M5 50 L95 50 M15 15 L85 85 M15 85 L85 15"
                  stroke="white"
                  strokeWidth="1"
                  fill="none"
                />
              </svg>
            </div>
            <div className="absolute bottom-1/4 left-1/3 w-36 h-36">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-10">
                <circle cx="50" cy="50" r="45" stroke="white" strokeWidth="1" fill="none" />
                <path
                  d="M50 5 L50 95 M5 50 L95 50 M15 15 L85 85 M15 85 L85 15"
                  stroke="white"
                  strokeWidth="1"
                  fill="none"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 z-10 py-10 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1
                ref={titleAnimation.ref}
                style={titleAnimation.style}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              >
                <span className="block text-spiderman-red text-glitch">Bit N Build:</span>
                <span className="block">24-Hour Hackathon</span>
              </h1>
              
              <p ref={descAnimation.ref} style={descAnimation.style} className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
                Swing into action and unleash your coding superpowers at the most exciting hackathon of the year. With
                great code comes great responsibility!
              </p>

              <div ref={buttonsAnimation.ref} style={buttonsAnimation.style} className="flex flex-wrap justify-center gap-4">
                <Link
                  href="#register"
                  className="bg-spiderman-red text-white px-8 py-3 rounded-md hover:bg-spiderman-red/80 transition-colors font-medium web-button"
                >
                  Register Now
                </Link>
                <Link
                  href="#schedule"
                  className="bg-transparent border-2 border-white/30 text-white px-8 py-3 rounded-md hover:border-white/60 transition-colors font-medium"
                >
                  View Schedule
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/70" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* Countdown section (visible after 1 scroll) */}
      <section className="relative py-20 bg-spiderman-darkblue">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-spiderman-darkblue to-spiderman-blue/90"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 relative inline-block">
              EVENT STARTS IN
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-spiderman-red"></span>
            </h2>
            
            <div ref={countdownAnimation.ref} style={countdownAnimation.style}>
              <CountdownTimer targetDate={hackathonDate} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
