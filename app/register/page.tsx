"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function RegisterPage() {
  const [mounted, setMounted] = useState(false)
  const [spideyPos, setSpideyPos] = useState({ x: 50, y: -10 })

  useEffect(() => {
    setMounted(true)
    
    // Animate Spider-Man swinging in
    const timer = setTimeout(() => {
      setSpideyPos({ x: 50, y: 15 })
    }, 500)
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-spiderman-darkblue flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex flex-col items-center justify-center px-4 py-16 relative overflow-hidden">
        {/* Web pattern background */}
        <div className="absolute inset-0 spider-web-bg opacity-5"></div>
        
        {/* Corner webs */}
        <div className="absolute top-0 left-0 w-32 h-32 opacity-10">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 0 L50 50 M0 10 L40 50 M0 20 L30 50 M0 30 L20 50 M0 40 L10 50 M10 0 L50 40 M20 0 L50 30 M30 0 L50 20 M40 0 L50 10"
              stroke="white"
              strokeWidth="0.5"
              fill="none"
            />
          </svg>
        </div>
        <div className="absolute top-0 right-0 w-32 h-32 opacity-10 rotate-90">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 0 L50 50 M0 10 L40 50 M0 20 L30 50 M0 30 L20 50 M0 40 L10 50 M10 0 L50 40 M20 0 L50 30 M30 0 L50 20 M40 0 L50 10"
              stroke="white"
              strokeWidth="0.5"
              fill="none"
            />
          </svg>
        </div>
        
        {/* Spider-Man swinging animation */}
        <div 
          className="absolute transition-all duration-1000 ease-web-swing" 
          style={{ 
            left: `${spideyPos.x}%`, 
            top: `${spideyPos.y}%`,
            transform: 'translateX(-50%)',
            opacity: mounted ? 1 : 0,
          }}
        >
          {/* Web line */}
          <div className="absolute top-0 left-1/2 w-[2px] h-[150px] bg-gradient-to-b from-white/5 to-white/30 transform -translate-x-1/2 -translate-y-full"></div>
          
          {/* Spider-Man */}
          <div className="relative w-32 h-32 animate-swing-subtle">
            <Image 
              src="/spiderman3.png" 
              alt="Spider-Man" 
              width={128} 
              height={128}
              className="object-contain"
            />
          </div>
        </div>
        
        {/* Content card */}
        <div className="relative bg-spiderman-darkblue/90 backdrop-blur-md shadow-2xl rounded-xl border border-spiderman-red/20 p-8 md:p-12 max-w-2xl w-full m-4 animate-float">
          {/* Red glow effect */}
          <div className="absolute inset-0 -z-10 bg-spiderman-red/5 blur-xl rounded-xl"></div>
          
          {/* Success web icon */}
          <div className="relative w-24 h-24 mx-auto mb-6">
            <div className="absolute inset-0 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(237, 29, 36, 0.5)" strokeWidth="2" />
                {/* Web design elements */}
                {Array.from({ length: 8 }).map((_, i) => (
                  <line 
                    key={i}
                    x1="50" 
                    y1="50" 
                    x2={50 + 45 * Math.cos(i * Math.PI / 4)} 
                    y2={50 + 45 * Math.sin(i * Math.PI / 4)} 
                    stroke="rgba(237, 29, 36, 0.5)" 
                    strokeWidth="1.5" 
                  />
                ))}
              </svg>
            </div>
            <div className="absolute inset-0 flex items-center justify-center text-white">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
          </div>
          
          {/* Congratulations text */}
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-white">
            <span className="text-spiderman-red">Registration</span> Complete!
          </h1>
          
          <p className="text-white/90 text-center mb-8 text-xl">
            Great power comes with great responsibility. <br />
            You're now part of the ultimate web-slinging hackathon experience!
          </p>
          
          {/* Event details */}
          <div className="bg-spiderman-darkblue/50 rounded-lg p-6 backdrop-blur-sm border border-white/10 mb-8">
            <h2 className="text-2xl text-white font-semibold mb-4">Event Details</h2>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-center">
                <span className="mr-2 text-spiderman-red">🗓️</span>
                <span>April 13-14, 2025</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-spiderman-red">📍</span>
                <span>Mumbai, India</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-spiderman-red">📧</span>
                <span>Check your email for further details</span>
              </li>
            </ul>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Link 
              href="/"
              className="bg-spiderman-red text-white py-3 px-6 rounded-md hover:bg-spiderman-red/80 transition-all font-medium relative overflow-hidden group text-center"
            >
              <span className="relative z-10">Back to Home</span>
              <span className="absolute inset-0 w-0 bg-white/10 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            
            <a 
              href="https://twitter.com/intent/tweet?text=Just%20registered%20for%20BIT%20N%20BUILD%20Hackathon%20-%20a%20Spider-Man%20themed%20coding%20adventure!%20%23BitNBuild%20%23Hackathon"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/30 text-white py-3 px-6 rounded-md hover:bg-white/10 transition-all font-medium text-center backdrop-blur-sm"
            >
              Share on Twitter
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
      
      <style jsx>{`
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-swing-subtle {
          animation: swing-subtle 3s ease-in-out infinite;
        }
        
        @keyframes swing-subtle {
          0%, 100% {
            transform: rotate(-5deg);
          }
          50% {
            transform: rotate(5deg);
          }
        }
        
        .ease-web-swing {
          transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
      `}</style>
    </div>
  )
} 