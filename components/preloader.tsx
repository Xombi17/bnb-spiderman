"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

export default function Preloader() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState(1)
  const webLinesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Phase 1: Progress from 0 to 100
    const progressInterval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(progressInterval)
          setPhase(2) // Move to phase 2 when progress reaches 100%
          return 100
        }
        return prevProgress + 1
      })
    }, 40) // 4000ms / 100 = 40ms per 1%

    // Prevent scrolling during preloader
    document.body.style.overflow = "hidden"

    return () => {
      clearInterval(progressInterval)
      document.body.style.overflow = "auto"
    }
  }, [])

  // Phase 2: Web animation and fade out
  useEffect(() => {
    if (phase === 2) {
      // Add web shooting animation
      const webLines = webLinesRef.current
      if (webLines) {
        webLines.classList.add("animate-web-shoot-all")
      }

      // Wait for web animation, then fade out
      const fadeOutTimer = setTimeout(() => {
        setPhase(3) // Move to phase 3 for fade out
      }, 1000)

      return () => clearTimeout(fadeOutTimer)
    }
  }, [phase])

  // Phase 3: Fade out and remove preloader
  useEffect(() => {
    if (phase === 3) {
      const removeTimer = setTimeout(() => {
        setLoading(false)
        document.body.style.overflow = "auto"
      }, 1000)

      return () => clearTimeout(removeTimer)
    }
  }, [phase])

  if (!loading) return null

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-spiderman-darkblue transition-opacity duration-1000 ${
        phase === 3 ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Spider web background */}
      <div className="absolute inset-0 spider-web-bg opacity-10"></div>

      {/* Animated web lines */}
      <div ref={webLinesRef} className="absolute inset-0 pointer-events-none">
        {/* Removing the basic x and y axis lines */}
        
        {/* Enhanced web lines that shoot out when progress reaches 100% */}
        <div className="absolute top-1/2 left-1/2 w-0 h-1 bg-spiderman-red transform -translate-x-1/2 -translate-y-1/2 web-line-animated opacity-80"></div>
        <div className="absolute top-1/2 left-1/2 w-1 h-0 bg-spiderman-red transform -translate-x-1/2 -translate-y-1/2 web-line-animated opacity-80"></div>
        <div className="absolute top-1/2 left-1/2 w-0 h-1 bg-spiderman-red transform -translate-x-1/2 -translate-y-1/2 rotate-45 web-line-animated opacity-80"></div>
        <div className="absolute top-1/2 left-1/2 w-0 h-1 bg-spiderman-red transform -translate-x-1/2 -translate-y-1/2 -rotate-45 web-line-animated opacity-80"></div>
        <div className="absolute top-1/2 left-1/2 w-0 h-1 bg-spiderman-red transform -translate-x-1/2 -translate-y-1/2 rotate-[22.5deg] web-line-animated opacity-80"></div>
        <div className="absolute top-1/2 left-1/2 w-0 h-1 bg-spiderman-red transform -translate-x-1/2 -translate-y-1/2 rotate-[67.5deg] web-line-animated opacity-80"></div>
        <div className="absolute top-1/2 left-1/2 w-0 h-1 bg-spiderman-red transform -translate-x-1/2 -translate-y-1/2 -rotate-[22.5deg] web-line-animated opacity-80"></div>
        <div className="absolute top-1/2 left-1/2 w-0 h-1 bg-spiderman-red transform -translate-x-1/2 -translate-y-1/2 -rotate-[67.5deg] web-line-animated opacity-80"></div>
        
        {/* Additional web lines for a more complete web effect */}
        <div className="absolute top-1/2 left-1/2 w-0 h-1 bg-spiderman-red transform -translate-x-1/2 -translate-y-1/2 rotate-[11.25deg] web-line-animated opacity-70 delay-100"></div>
        <div className="absolute top-1/2 left-1/2 w-0 h-1 bg-spiderman-red transform -translate-x-1/2 -translate-y-1/2 rotate-[33.75deg] web-line-animated opacity-70 delay-100"></div>
        <div className="absolute top-1/2 left-1/2 w-0 h-1 bg-spiderman-red transform -translate-x-1/2 -translate-y-1/2 rotate-[56.25deg] web-line-animated opacity-70 delay-100"></div>
        <div className="absolute top-1/2 left-1/2 w-0 h-1 bg-spiderman-red transform -translate-x-1/2 -translate-y-1/2 rotate-[78.75deg] web-line-animated opacity-70 delay-100"></div>
        <div className="absolute top-1/2 left-1/2 w-0 h-1 bg-spiderman-red transform -translate-x-1/2 -translate-y-1/2 -rotate-[11.25deg] web-line-animated opacity-70 delay-100"></div>
        <div className="absolute top-1/2 left-1/2 w-0 h-1 bg-spiderman-red transform -translate-x-1/2 -translate-y-1/2 -rotate-[33.75deg] web-line-animated opacity-70 delay-100"></div>
        <div className="absolute top-1/2 left-1/2 w-0 h-1 bg-spiderman-red transform -translate-x-1/2 -translate-y-1/2 -rotate-[56.25deg] web-line-animated opacity-70 delay-100"></div>
        <div className="absolute top-1/2 left-1/2 w-0 h-1 bg-spiderman-red transform -translate-x-1/2 -translate-y-1/2 -rotate-[78.75deg] web-line-animated opacity-70 delay-100"></div>
        
        {/* Circular web connectors */}
        <div className="absolute top-1/2 left-1/2 w-[200px] h-[200px] rounded-full border border-spiderman-red/30 transform -translate-x-1/2 -translate-y-1/2 opacity-0 animate-web-circle delay-200"></div>
        <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] rounded-full border border-spiderman-red/20 transform -translate-x-1/2 -translate-y-1/2 opacity-0 animate-web-circle delay-300"></div>
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] rounded-full border border-spiderman-red/10 transform -translate-x-1/2 -translate-y-1/2 opacity-0 animate-web-circle delay-400"></div>
      </div>

      {/* Spider-Man logo */}
      <div
        className={`relative w-32 h-32 mb-8 transition-transform duration-500 ${phase >= 2 ? "scale-110" : "animate-web-swing"}`}
      >
        <Image src="/spider-logo.svg" alt="Spider-Man Logo" fill className="object-contain" />
        {phase >= 2 && <div className="absolute inset-0 animate-spider-sense rounded-full"></div>}
      </div>

      {/* Title with typing effect */}
      <h1 className="text-4xl font-bold text-white mb-8 overflow-hidden">
        <span className="text-spiderman-red inline-block animate-pulse">Bit N Build</span>{" "}
        <span className="inline-block">Hackathon</span>
      </h1>

      {/* Progress bar */}
      <div className="w-64 h-3 bg-spiderman-blue/50 rounded-full overflow-hidden mb-4 relative">
        <div
          className="h-full bg-spiderman-red transition-all duration-100 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
        {/* Glowing effect on progress bar */}
        {progress > 0 && (
          <div
            className="absolute top-0 h-full w-4 bg-white/30 blur-sm"
            style={{ left: `${progress - 2}%`, transition: "left 100ms ease-out" }}
          ></div>
        )}
      </div>

      {/* Loading text */}
      <div className="text-white/80 text-sm flex items-center">
        <span className="mr-2">Loading your web-slinging adventure...</span>
        <span className="text-spiderman-red font-bold">{progress}%</span>
      </div>

      {/* Spider web corners - enhanced with more detailed webs */}
      <div className="absolute top-0 left-0 w-40 h-40 opacity-20">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 0 L50 50 M0 10 L40 50 M0 20 L30 50 M0 30 L20 50 M0 40 L10 50 M10 0 L50 40 M20 0 L50 30 M30 0 L50 20 M40 0 L50 10 M5 0 L50 45 M0 5 L45 50 M15 0 L50 35 M0 15 L35 50 M25 0 L50 25 M0 25 L25 50 M35 0 L50 15 M0 35 L15 50"
            stroke="white"
            strokeWidth="0.5"
            fill="none"
          />
        </svg>
      </div>
      <div className="absolute top-0 right-0 w-40 h-40 opacity-20 rotate-90">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 0 L50 50 M0 10 L40 50 M0 20 L30 50 M0 30 L20 50 M0 40 L10 50 M10 0 L50 40 M20 0 L50 30 M30 0 L50 20 M40 0 L50 10 M5 0 L50 45 M0 5 L45 50 M15 0 L50 35 M0 15 L35 50 M25 0 L50 25 M0 25 L25 50 M35 0 L50 15 M0 35 L15 50"
            stroke="white"
            strokeWidth="0.5"
            fill="none"
          />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 w-40 h-40 opacity-20 -rotate-90">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 0 L50 50 M0 10 L40 50 M0 20 L30 50 M0 30 L20 50 M0 40 L10 50 M10 0 L50 40 M20 0 L50 30 M30 0 L50 20 M40 0 L50 10 M5 0 L50 45 M0 5 L45 50 M15 0 L50 35 M0 15 L35 50 M25 0 L50 25 M0 25 L25 50 M35 0 L50 15 M0 35 L15 50"
            stroke="white"
            strokeWidth="0.5"
            fill="none"
          />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-40 h-40 opacity-20 rotate-180">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 0 L50 50 M0 10 L40 50 M0 20 L30 50 M0 30 L20 50 M0 40 L10 50 M10 0 L50 40 M20 0 L50 30 M30 0 L50 20 M40 0 L50 10 M5 0 L50 45 M0 5 L45 50 M15 0 L50 35 M0 15 L35 50 M25 0 L50 25 M0 25 L25 50 M35 0 L50 15 M0 35 L15 50"
            stroke="white"
            strokeWidth="0.5"
            fill="none"
          />
        </svg>
      </div>

      {/* Spider webs in mid-sections of edges */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-20 opacity-15">
        <svg viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M50 0 L50 50 M45 0 L45 45 M40 0 L40 40 M35 0 L35 35 M30 0 L30 30 M25 0 L25 25 M20 0 L20 20 M15 0 L15 15 M10 0 L10 10 M5 0 L5 5 M55 0 L55 45 M60 0 L60 40 M65 0 L65 35 M70 0 L70 30 M75 0 L75 25 M80 0 L80 20 M85 0 L85 15 M90 0 L90 10 M95 0 L95 5"
            stroke="white"
            strokeWidth="0.5"
            fill="none"
          />
        </svg>
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 rotate-180 w-40 h-20 opacity-15">
        <svg viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M50 0 L50 50 M45 0 L45 45 M40 0 L40 40 M35 0 L35 35 M30 0 L30 30 M25 0 L25 25 M20 0 L20 20 M15 0 L15 15 M10 0 L10 10 M5 0 L5 5 M55 0 L55 45 M60 0 L60 40 M65 0 L65 35 M70 0 L70 30 M75 0 L75 25 M80 0 L80 20 M85 0 L85 15 M90 0 L90 10 M95 0 L95 5"
            stroke="white"
            strokeWidth="0.5"
            fill="none"
          />
        </svg>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${3 + Math.random() * 7}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      <style jsx>{`
        @keyframes webCircleAnimation {
          0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.5);
          }
          50% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(1.2);
          }
        }
        
        .animate-web-circle {
          animation: webCircleAnimation 1s forwards;
        }
        
        .delay-100 {
          animation-delay: 100ms;
        }
        
        .delay-200 {
          animation-delay: 200ms;
        }
        
        .delay-300 {
          animation-delay: 300ms;
        }
        
        .delay-400 {
          animation-delay: 400ms;
        }
        
        .web-line-animated {
          animation: none;
        }
        
        .animate-web-shoot-all .web-line-animated {
          animation: webShoot 0.5s forwards;
        }
        
        @keyframes webShoot {
          to {
            width: 200vw;
          }
        }
      `}</style>
    </div>
  )
}
