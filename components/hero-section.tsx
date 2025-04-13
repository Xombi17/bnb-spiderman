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
  const [scrollPosition, setScrollPosition] = useState(0)

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

    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }

    document.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)
    
    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Set the hackathon date (24 hours from now for demo purposes)
  const hackathonDate = new Date()
  hackathonDate.setDate(hackathonDate.getDate() + 1)

  // Calculate parallax positions based on mouse movement
  const parallaxMovement = {
    bg: {
      x: (mousePosition.x - 0.5) * -20,
      y: (mousePosition.y - 0.5) * -20
    },
    web: {
      x: (mousePosition.x - 0.5) * 15,
      y: (mousePosition.y - 0.5) * 15
    },
    title: {
      x: (mousePosition.x - 0.5) * 10,
      y: (mousePosition.y - 0.5) * 10
    },
    spider: {
      x: (mousePosition.x - 0.5) * 25,
      y: (mousePosition.y - 0.5) * 25
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden"
      ref={parallaxRef}
    >
      {/* Dynamic background with parallax effect */}
      <div 
        className="absolute inset-0 z-0 bg-spiderman-darkblue"
        style={{ 
          backgroundImage: `url('/spider-man-3.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translate(${parallaxMovement.bg.x}px, ${parallaxMovement.bg.y}px) scale(1.1)`,
          transition: 'transform 0.2s ease-out'
        }}
      ></div>

      {/* Layered subtle background images with enhanced depth */}
      <div className="absolute inset-0 z-0 mix-blend-overlay opacity-5">
        <div className="absolute right-0 top-0 w-full h-full"
          style={{
            transform: `translate(${parallaxMovement.bg.x * 0.7}px, ${parallaxMovement.bg.y * 0.7}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
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

      <div 
        className="absolute inset-0 z-0 mix-blend-soft-light opacity-8"
        style={{
          transform: `translate(${parallaxMovement.bg.x * 1.2}px, ${parallaxMovement.bg.y * 1.2}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      >
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

      {/* City skyline with parallax effect */}
      <div 
        className="absolute bottom-0 left-0 right-0 z-0 mix-blend-overlay opacity-15"
        style={{
          transform: `translateY(${scrollPosition * 0.2}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <div className="absolute bottom-0 w-full h-[40vh]">
          <Image 
            src="/city-skyline.png" 
            alt="City Skyline" 
            layout="fill" 
            objectFit="cover" 
            objectPosition="bottom center" 
          />
        </div>
      </div>

      {/* Dynamic overlay based on mouse position with advanced gradient */}
      <div 
        className="absolute inset-0 bg-gradient-radial from-spiderman-darkblue/70 via-spiderman-darkblue/80 to-spiderman-blue/90 z-0"
        style={{
          backgroundPosition: `${mousePosition.x * 100}% ${mousePosition.y * 100}%`,
          opacity: Math.min(0.9, 0.7 + scrollPosition / 1000),
        }}
      ></div>
      
      {/* Animated web pattern with enhanced parallax */}
      <div className="absolute inset-0 opacity-15 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/spider-web-pattern.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            mixBlendMode: "overlay",
            transform: `scale(1.05) translate(${parallaxMovement.web.x}px, ${parallaxMovement.web.y}px)`,
            transition: "transform 0.3s ease-out",
          }}
        ></div>
      </div>

      {/* Improved animated spider webs in corners */}
      <div className="absolute top-0 left-0 w-40 h-40 opacity-40 z-0 transition-transform duration-500">
        <Image 
          src="/images/web-corner.svg" 
          alt="Web" 
          layout="fill" 
          objectFit="contain" 
          className="transform rotate-0 web-corner"
          style={{
            filter: "drop-shadow(0 0 8px rgba(255,255,255,0.3))"
          }}
        />
      </div>
      <div className="absolute top-0 right-0 w-40 h-40 opacity-40 z-0 transition-transform duration-500">
        <Image 
          src="/images/web-corner.svg" 
          alt="Web" 
          layout="fill" 
          objectFit="contain" 
          className="transform rotate-90 web-corner"
          style={{
            filter: "drop-shadow(0 0 8px rgba(255,255,255,0.3))"
          }}
        />
      </div>
      <div className="absolute bottom-0 right-0 w-40 h-40 opacity-40 z-0 transition-transform duration-500">
        <Image 
          src="/images/web-pattern.svg" 
          alt="Web" 
          layout="fill" 
          objectFit="contain" 
          className="transform rotate-180 web-corner"
          style={{
            filter: "drop-shadow(0 0 8px rgba(255,255,255,0.3))"
          }}
        />
      </div>
      <div className="absolute bottom-0 left-0 w-40 h-40 opacity-40 z-0 transition-transform duration-500">
        <Image 
          src="/images/web-corner.svg" 
          alt="Web" 
          layout="fill" 
          objectFit="contain" 
          className="transform rotate-270 web-corner"
          style={{
            filter: "drop-shadow(0 0 8px rgba(255,255,255,0.3))"
          }}
        />
      </div>

      {/* Spider-Man logo with enhanced parallax */}
      <div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-5 z-0 mix-blend-overlay"
        style={{
          transform: `translate(calc(-50% + ${parallaxMovement.spider.x}px), calc(-50% + ${parallaxMovement.spider.y}px))`,
          transition: "transform 0.4s ease-out",
        }}
      >
        <Image 
          src="/images/spider-silhouette.svg" 
          alt="Spider-Man Logo" 
          layout="fill" 
          objectFit="contain" 
        />
      </div>

      {/* Content with enhanced 3D effect */}
      <div className="container mx-auto px-4 pt-40 md:pt-52 pb-12 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">

          <div 
            ref={titleAnimation.ref} 
            style={{
              ...titleAnimation.style,
              transform: `perspective(1000px) translateZ(0) rotateX(${(mousePosition.y - 0.5) * -5}deg) rotateY(${(mousePosition.x - 0.5) * 5}deg)`,
              transition: "transform 0.3s ease-out",
            }}
            className="mb-10"
          >
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white mb-6 tracking-tight leading-tight font-spiderman-readable relative">
              <span className="block relative inline-block">
                {/* Improved text readability with stronger shadow and contrast */}
                <span className="relative z-10 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">BIT N BUILD</span>
                
                {/* Add a semi-transparent background behind the text */}
                <span className="absolute inset-0 bg-spiderman-darkblue/40 blur-xl -z-10 rounded-xl px-8 py-4"></span>
                
                {/* Enhanced glow effect */}
                <span className="absolute inset-0 blur-md bg-spiderman-red/20 rounded-full -z-10 animate-pulse"></span>
              </span>
              <span className="absolute -bottom-2 left-1/4 right-1/4 h-1.5 bg-spiderman-red z-0 rounded-full shadow-[0_0_10px_rgba(255,0,0,0.8)]"></span>
            </h1>
            <p ref={descAnimation.ref} style={descAnimation.style} className="text-xl md:text-2xl text-white max-w-3xl mx-auto mb-8 px-6 py-3 relative">
              {/* Add a semi-transparent backdrop for better text readability */}
              <span className="absolute inset-0 bg-spiderman-darkblue/60 backdrop-blur-md rounded-xl -z-10"></span>
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
                className="px-10 py-4 bg-gradient-to-r from-spiderman-red to-red-700 text-white font-semibold rounded-full hover:bg-red-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-spiderman-red/30 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 relative overflow-hidden group"
              >
                <span className="relative z-10 text-white font-bold">Register Now</span>
                <span className="absolute inset-0 w-0 bg-white/20 transition-all duration-300 group-hover:w-full"></span>
                {/* Subtle Spider-Man icon */}
                <span className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block ml-1">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="2" />
                    <path d="M8 12L16 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 8L16 12L12 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>
              <a
                href="#about"
                className="px-10 py-4 bg-spiderman-darkblue/80 backdrop-blur-sm border-2 border-white/60 text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:border-white/70 hover:shadow-lg hover:shadow-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 relative overflow-hidden group"
              >
                <span className="relative z-10">Learn More</span>
                <span className="absolute inset-0 w-0 bg-white/10 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
          </div>

          {/* Removed the Spider-Man swinging animation */}
          
        </div>
      </div>

      {/* Countdown Section with improved styling */}
      <div className="relative w-full mt-auto z-10">
        <div className="w-full bg-gradient-to-b from-transparent via-spiderman-blue/80 to-spiderman-blue/90 py-10 backdrop-blur-md">
          <div className="container mx-auto px-4">
            {/* Timer */}
            <div
              ref={countdownAnimation.ref}
              style={countdownAnimation.style}
              className="flex flex-col items-center justify-center"
            >
              <h2 className="text-2xl font-bold text-white mb-6 font-spiderman-readable drop-shadow-md">
                <span className="bg-spiderman-red/20 backdrop-blur-sm px-4 py-1 rounded-full">Countdown to Hackathon:</span>
              </h2>
              <CountdownTimer targetDate={hackathonDate} />
            </div>
          </div>
        </div>
      </div>

      {/* Updated bottom gradient for smoother transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-spiderman-blue/90 via-spiderman-blue/80 to-transparent z-0"></div>

      {/* Add animation keyframes */}
      <style jsx global>{`
        @keyframes spider-web-swing {
          0% { transform: rotate(5deg) translateY(0); }
          50% { transform: rotate(-5deg) translateY(10px); }
          100% { transform: rotate(5deg) translateY(0); }
        }
        
        .animate-spider-web-swing {
          animation: spider-web-swing 3s ease-in-out infinite;
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
      `}</style>
    </section>
  )
}
