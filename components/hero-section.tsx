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

  const imageAnimation = useScrollAnimation<HTMLDivElement>({
    effect: "fade",
    direction: "left",
    distance: 50,
    duration: 1,
    delay: 0.3,
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
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
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

      <div className="container mx-auto px-4 z-10 py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <div className="mb-6">
              <h1
                ref={titleAnimation.ref}
                style={titleAnimation.style}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight"
              >
                <span className="block text-spiderman-red">Bit N Build:</span>
                <span className="block">24-Hour Hackathon</span>
              </h1>
              <p ref={descAnimation.ref} style={descAnimation.style} className="text-lg text-white/80 mb-8 max-w-lg">
                Swing into action and unleash your coding superpowers at the most exciting hackathon of the year. With
                great code comes great responsibility!
              </p>

              <div ref={countdownAnimation.ref} style={countdownAnimation.style} className="mb-8">
                <CountdownTimer targetDate={hackathonDate} />
              </div>

              <div ref={buttonsAnimation.ref} style={buttonsAnimation.style} className="flex flex-wrap gap-4">
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

          <div className="order-1 md:order-2 relative">
            <div
              ref={imageAnimation.ref}
              style={imageAnimation.style}
              className="relative h-[400px] md:h-[500px] animate-web-swing"
            >
              <Image src="/" alt="Spider-Man" fill className="object-contain" priority />
            </div>

            {/* Web lines connecting to Spider-Man */}
            <div className="absolute top-1/4 left-0 w-1/4 h-0.5 bg-white/10 web-line"></div>
            <div className="absolute bottom-1/3 left-0 w-1/3 h-0.5 bg-white/10 web-line"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
