"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import CountdownTimer from "./countdown-timer"
import { handleParallax } from "@/utils/animation"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function HeroSection() {
  const parallaxRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

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
      
      // Track mouse position for the dynamic web effect
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      })
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
      {/* Layered subtle background images */}
      <div className="absolute inset-0 z-0 mix-blend-overlay opacity-5">
        <div className="absolute right-0 top-0 w-full h-full">
          <Image 
            src="/spiderman4.jpg" 
            alt="Spider-Man" 
            layout="fill" 
            objectFit="cover" 
            objectPosition="right top" 
            quality={50}
            priority={false}
          />
        </div>
      </div>
      
      <div className="absolute inset-0 z-0 mix-blend-soft-light opacity-8">
        <div className="absolute left-0 bottom-0 w-1/2 h-1/2 transform -translate-x-1/4">
          <Image 
            src="/spiderman1.png" 
            alt="Spider-Man" 
            layout="fill" 
            objectFit="contain" 
            quality={30}
          />
        </div>
      </div>
      
      {/* City skyline with very low opacity */}
      <div className="absolute bottom-0 left-0 right-0 z-0 mix-blend-overlay opacity-10">
        <div className="absolute bottom-0 w-full h-[30vh]">
          <Image 
            src="/city-skyline.png" 
            alt="City Skyline" 
            layout="fill" 
            objectFit="cover" 
            objectPosition="bottom center" 
          />
        </div>
      </div>

      {/* Dynamic overlay based on mouse position */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-spiderman-darkblue/90 via-spiderman-darkblue/70 to-spiderman-blue/80 z-0"
        style={{
          backgroundPosition: `${mousePosition.x * 100}% ${mousePosition.y * 100}%`,
        }}
      ></div>
      
      {/* Animated web pattern */}
      <div className="absolute inset-0 opacity-15 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/spider-web-pattern.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            mixBlendMode: "overlay",
            transform: `scale(1.05) translate(${(mousePosition.x - 0.5) * 10}px, ${(mousePosition.y - 0.5) * 10}px)`,
            transition: "transform 0.3s ease-out",
          }}
        ></div>
      </div>

      {/* Animated spider webs in corners */}
      <div className="absolute top-0 left-0 w-32 h-32 opacity-30 z-0">
        <Image src="/web-corner.png" alt="Web" layout="fill" objectFit="contain" className="transform rotate-0 web-corner" />
      </div>
      <div className="absolute top-0 right-0 w-32 h-32 opacity-30 z-0">
        <Image src="/web-corner.png" alt="Web" layout="fill" objectFit="contain" className="transform rotate-90 web-corner" />
      </div>
      <div className="absolute bottom-0 right-0 w-32 h-32 opacity-30 z-0">
        <Image src="/web-corner.png" alt="Web" layout="fill" objectFit="contain" className="transform rotate-180 web-corner" />
      </div>
      <div className="absolute bottom-0 left-0 w-32 h-32 opacity-30 z-0">
        <Image src="/web-corner.png" alt="Web" layout="fill" objectFit="contain" className="transform rotate-270 web-corner" />
      </div>
      
      {/* Spider-Man logo with very low opacity */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 opacity-5 z-0 mix-blend-overlay">
        <Image src="/spider-logo.svg" alt="Spider-Man Logo" layout="fill" objectFit="contain" />
      </div>

      {/* Floating webs */}
      <div className="absolute left-1/4 top-1/4 w-6 h-6 opacity-20 animate-float z-0" style={{ animationDelay: "0s", animationDuration: "15s" }}>
        <div className="w-full h-full rounded-full border border-white"></div>
      </div>
      <div className="absolute left-3/4 top-1/3 w-4 h-4 opacity-20 animate-float z-0" style={{ animationDelay: "2s", animationDuration: "12s" }}>
        <div className="w-full h-full rounded-full border border-white"></div>
      </div>
      <div className="absolute left-1/5 top-2/3 w-5 h-5 opacity-20 animate-float z-0" style={{ animationDelay: "1s", animationDuration: "18s" }}>
        <div className="w-full h-full rounded-full border border-white"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pt-40 md:pt-52 pb-12 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">

          <div ref={titleAnimation.ref} style={titleAnimation.style} className="mb-10">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight font-spiderman-readable relative">
              <span className="block relative inline-block">
                <span className="relative z-10">BIT N BUILD</span>
                <span className="absolute -inset-x-4 inset-y-0 bg-gradient-to-r from-transparent via-spiderman-red/10 to-transparent skew-x-12 z-0 animate-pulse"></span>
              </span>
              <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-spiderman-red/70 z-0"></span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 drop-shadow-lg">
              A 24-hour hackathon where innovation meets spider-sense! Join us for a web-slinging
              coding adventure in Mumbai.
            </p>
            <div ref={buttonsAnimation.ref} style={buttonsAnimation.style} className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => {
                  // Implement the logic to scroll to the registration section
                  const registerSection = document.getElementById('register')
                  if (registerSection) {
                    registerSection.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="px-8 py-3 bg-spiderman-red text-white font-semibold rounded-full hover:bg-red-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-spiderman-red/30 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 relative overflow-hidden group"
              >
                <span className="relative z-10">Register Now</span>
                <span className="absolute inset-0 w-0 bg-white/20 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <a
                href="#about"
                className="px-8 py-3 bg-transparent border-2 border-white/40 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:border-white/70 hover:shadow-lg hover:shadow-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 relative overflow-hidden group"
              >
                <span className="relative z-10">Learn More</span>
                <span className="absolute inset-0 w-0 bg-white/10 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
          </div>

          {/* Spider swinging animation */}
          <div ref={parallaxRef} className="relative h-20 w-full mt-8">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
              <div className="w-px h-20 bg-spiderman-red/40 animate-pulse"></div>
              <div className="w-10 h-10 absolute -bottom-5 left-1/2 transform -translate-x-1/2 animate-bounce filter drop-shadow-lg">
                <img
                  src="/spiderman3.png"
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
        <div className="w-full bg-gradient-to-b from-transparent via-spiderman-blue/80 to-spiderman-blue/90 py-10 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            {/* Timer */}
            <div
              ref={countdownAnimation.ref}
              style={countdownAnimation.style}
              className="flex flex-col items-center justify-center"
            >
              <h2 className="text-2xl font-bold text-white mb-6 font-spiderman-readable drop-shadow-md">Countdown to Hackathon:</h2>
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
