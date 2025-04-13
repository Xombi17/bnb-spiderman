"use client"

import { useRef } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import Image from "next/image"
import { FaPhone, FaUserTie } from "react-icons/fa"

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  
  const titleAnimation = useScrollAnimation<HTMLHeadingElement>({
    effect: "fade",
    direction: "up",
    distance: 30,
    duration: 0.8,
  })

  const heroAnimation = useScrollAnimation<HTMLDivElement>({
    effect: "fade",
    direction: "up",
    distance: 40,
    duration: 0.8,
    delay: 0.3,
  })

  const rolesAnimation = useScrollAnimation<HTMLDivElement>({
    effect: "fade",
    direction: "up",
    distance: 40,
    duration: 0.8,
    delay: 0.5,
  })

  return (
    <section id="contact" className="relative py-20 bg-spiderman-darkblue overflow-hidden">
      {/* Angled background with Spider-Man webbing texture */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-spiderman-darkblue via-spiderman-blue/40 to-spiderman-darkblue/90 skew-y-3"></div>
      
      {/* Comic-style background dots */}
      <div className="absolute inset-0 opacity-5" 
        style={{
          backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
          backgroundSize: "20px 20px"
        }}>
      </div>
      
      {/* Web corners */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-20" 
        style={{
          backgroundImage: "url('/web-corner.svg')",
          backgroundSize: "contain",
          backgroundPosition: "top right",
          backgroundRepeat: "no-repeat",
          transform: "rotate(90deg)"
        }}>
      </div>
      <div className="absolute bottom-0 left-0 w-64 h-64 opacity-20" 
        style={{
          backgroundImage: "url('/web-corner.svg')",
          backgroundSize: "contain",
          backgroundPosition: "bottom left",
          backgroundRepeat: "no-repeat",
          transform: "rotate(-90deg)"
        }}>
      </div>
      
      {/* Web strings */}
      <div className="absolute top-20 left-10 w-0.5 h-48 bg-spiderman-red/20 origin-top animate-web-swing"></div>
      <div className="absolute top-40 right-20 w-0.5 h-64 bg-spiderman-red/20 origin-top animate-web-swing" style={{ animationDelay: "0.7s" }}></div>
      <div className="absolute top-10 left-1/3 w-0.5 h-32 bg-spiderman-red/20 origin-top animate-web-swing" style={{ animationDelay: "0.3s" }}></div>
      <div className="absolute top-60 right-1/4 w-0.5 h-48 bg-spiderman-red/20 origin-top animate-web-swing" style={{ animationDelay: "1.1s" }}></div>
      
      {/* Spider-Man logo background */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-5 rotate-12">
        <Image src="/spider-logo.svg" alt="Spider Symbol" layout="fill" objectFit="contain" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 
              ref={titleAnimation.ref}
              style={titleAnimation.style}
              className="text-4xl md:text-5xl font-bold text-white mb-6 font-spiderman-readable relative inline-block transform rotate-[-2deg]"
            >
              <span className="relative z-10 drop-shadow-[0_2px_6px_rgba(255,0,0,0.6)]">THE AMAZING</span>
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-spiderman-red"></span>
            </h2>
          </div>

          {/* Comic-book style hero panel */}
          <div 
            ref={heroAnimation.ref}
            style={heroAnimation.style}
            className="relative"
          >
            {/* Main hero panel */}
            <div className="bg-gradient-to-br from-spiderman-darkblue via-spiderman-blue/30 to-spiderman-darkblue border-4 border-white rounded-lg overflow-hidden relative transform rotate-[-1deg] shadow-[0_0_30px_rgba(255,0,0,0.2)]">
              {/* Web pattern overlay */}
              <div className="absolute inset-0 opacity-10">
                <Image src="/web-pattern.svg" alt="Web Pattern" layout="fill" objectFit="cover" />
              </div>
              
              {/* Comic-book style burst for the name */}
              <div className="bg-spiderman-red clip-burst p-12 pt-16 pb-16 mx-auto max-w-3xl text-center relative">
                <div className="absolute inset-0 opacity-20 mix-blend-overlay">
                  <Image src="/spider-silhouette.svg" alt="Spider-Man" layout="fill" objectFit="contain" />
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-2 font-spiderman-readable tracking-wider drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                  VARAD JOSHI
                </h1>
                <div className="text-sm text-white/90 font-bold tracking-widest -mt-2 mb-4">THE ONE AND ONLY</div>
              </div>
              
              {/* Contact info in comic style */}
              <div className="p-6 text-center">
                <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-6 py-4 rounded-full border border-spiderman-red/30 shadow-lg transform hover:scale-105 transition-transform">
                  <div className="w-14 h-14 bg-spiderman-red rounded-full flex items-center justify-center mr-4 shadow-[0_0_10px_rgba(255,0,0,0.5)]">
                    <FaPhone className="text-white" size={24} />
                  </div>
                  <p className="text-white/90 text-2xl font-bold font-spiderman-readable tracking-wider">9082158583</p>
                </div>
              </div>
            </div>
            
            {/* Decorative web in corner */}
            <div className="absolute -top-10 -right-10 w-32 h-32 opacity-70">
              <Image src="/spider-web-corner.svg" alt="Web" layout="fill" objectFit="contain" />
            </div>
            
            {/* Small Spider-Man */}
            <div className="absolute -bottom-10 right-10 w-24 h-24 animate-bounce" style={{ animationDuration: "3s" }}>
              <Image src="/spider-silhouette.svg" alt="Spider-Man" layout="fill" objectFit="contain" />
            </div>
          </div>

          {/* Comic-book style panels for roles */}
          <div 
            ref={rolesAnimation.ref}
            style={rolesAnimation.style}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-5"
          >
            {/* Technical Lead Panel */}
            <div className="transform rotate-[-1deg] hover:rotate-0 transition-transform">
              <div className="bg-gradient-to-br from-spiderman-red/80 to-spiderman-darkblue p-6 rounded-lg border-2 border-white shadow-lg relative overflow-hidden h-full">
                <div className="absolute top-0 right-0 w-20 h-20 opacity-20 rotate-45">
                  <Image src="/spider-silhouette.svg" alt="Spider" layout="fill" objectFit="contain" />
                </div>
                <div className="bg-yellow-400 text-black font-bold py-1 px-4 rounded-lg transform -rotate-3 inline-block text-lg mb-4 shadow-md font-spiderman-readable">
                  TECHNICAL LEAD
                </div>
                <div className="w-16 h-16 bg-spiderman-darkblue rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-white">
                  <FaUserTie className="text-white" size={24} />
                </div>
                <p className="text-white font-bold text-lg text-center">
                  With great code comes great responsibility. Leading the technical team with spider-like precision.
                </p>
              </div>
            </div>
            
            {/* Management Lead Panel */}
            <div className="transform rotate-[1deg] hover:rotate-0 transition-transform">
              <div className="bg-gradient-to-br from-spiderman-blue/80 to-spiderman-darkblue p-6 rounded-lg border-2 border-white shadow-lg relative overflow-hidden h-full">
                <div className="absolute top-0 right-0 w-20 h-20 opacity-20 rotate-45">
                  <Image src="/spider-silhouette.svg" alt="Spider" layout="fill" objectFit="contain" />
                </div>
                <div className="bg-yellow-400 text-black font-bold py-1 px-4 rounded-lg transform -rotate-3 inline-block text-lg mb-4 shadow-md font-spiderman-readable">
                  MANAGEMENT LEAD
                </div>
                <div className="w-16 h-16 bg-spiderman-darkblue rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-white">
                  <FaUserTie className="text-white" size={24} />
                </div>
                <p className="text-white font-bold text-lg text-center">
                  Swinging between tasks with agility and managing the team like a true superhero.
                </p>
              </div>
            </div>
            
            {/* Head of Operations Panel */}
            <div className="transform rotate-[-1deg] hover:rotate-0 transition-transform">
              <div className="bg-gradient-to-br from-spiderman-darkblue to-spiderman-red/80 p-6 rounded-lg border-2 border-white shadow-lg relative overflow-hidden h-full">
                <div className="absolute top-0 right-0 w-20 h-20 opacity-20 rotate-45">
                  <Image src="/spider-silhouette.svg" alt="Spider" layout="fill" objectFit="contain" />
                </div>
                <div className="bg-yellow-400 text-black font-bold py-1 px-4 rounded-lg transform -rotate-3 inline-block text-lg mb-4 shadow-md font-spiderman-readable">
                  HEAD OF OPERATIONS
                </div>
                <div className="w-16 h-16 bg-spiderman-darkblue rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-white">
                  <FaUserTie className="text-white" size={24} />
                </div>
                <p className="text-white font-bold text-lg text-center">
                  Like a spider's web, connecting all operational threads to ensure everything runs smoothly.
                </p>
              </div>
            </div>
          </div>
          
          {/* Comic-style exclamation */}
          <div className="text-center mt-12">
            <div className="inline-block bg-yellow-400 text-spiderman-darkblue py-2 px-8 rounded-lg transform rotate-[-2deg] font-bold text-xl shadow-lg font-spiderman-readable">
              THWIP! CONTACT HIM NOW!
            </div>
          </div>
        </div>
      </div>
      
      {/* Dark gradient transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0c1b33] to-transparent"></div>
      
      {/* Add global styles for clip paths */}
      <style jsx global>{`
        .clip-burst {
          clip-path: polygon(
            0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%
          );
        }
        
        @keyframes web-swing {
          0% { transform: rotate(5deg); }
          50% { transform: rotate(-5deg); }
          100% { transform: rotate(5deg); }
        }
        
        .animate-web-swing {
          animation: web-swing 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
} 