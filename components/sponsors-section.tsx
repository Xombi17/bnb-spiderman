"use client"

import { useRef } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import Image from "next/image"

export default function SponsorsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  const titleAnimation = useScrollAnimation<HTMLHeadingElement>({
    effect: "fade",
    direction: "up",
    distance: 30,
    duration: 0.8,
  })

  const descAnimation = useScrollAnimation<HTMLParagraphElement>({
    effect: "fade",
    direction: "up",
    distance: 30,
    duration: 0.8,
    delay: 0.2,
  })

  const sponsorsAnimation = useScrollAnimation<HTMLDivElement>({
    effect: "fade",
    direction: "up",
    distance: 40,
    duration: 0.8,
    delay: 0.3,
  })

  return (
    <section id="sponsors" ref={sectionRef} className="relative py-20 bg-spiderman-darkblue z-10">
      {/* Background with gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-spiderman-darkblue to-spiderman-blue/20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2
            ref={titleAnimation.ref}
            style={titleAnimation.style}
            className="text-3xl md:text-4xl font-bold text-white mb-6 relative inline-block"
          >
            SPONSORS & PARTNERS
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-spiderman-red"></span>
          </h2>

          <div>
            <p ref={descAnimation.ref} style={descAnimation.style} className="text-lg text-white/80 mb-6">
              BitnBuild 2024 is made possible by our amazing sponsors and partners. Their support is what helps us create this incredible experience for all participants.
            </p>
          </div>
        </div>

        {/* Platinum Sponsors */}
        <div 
          ref={sponsorsAnimation.ref}
          style={sponsorsAnimation.style} 
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Platinum Sponsors</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 rounded-lg p-6 flex items-center justify-center h-40 border border-white/10 hover:border-spiderman-red/50 transition-all duration-300">
              <div className="relative w-full h-24">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center">
                    <span className="text-white/50 text-xl font-bold">SPONSOR 1</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/5 rounded-lg p-6 flex items-center justify-center h-40 border border-white/10 hover:border-spiderman-red/50 transition-all duration-300">
              <div className="relative w-full h-24">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center">
                    <span className="text-white/50 text-xl font-bold">SPONSOR 2</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/5 rounded-lg p-6 flex items-center justify-center h-40 border border-white/10 hover:border-spiderman-red/50 transition-all duration-300">
              <div className="relative w-full h-24">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center">
                    <span className="text-white/50 text-xl font-bold">SPONSOR 3</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gold Sponsors */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Gold Sponsors</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((index) => (
              <div 
                key={index}
                className="bg-white/5 rounded-lg p-4 flex items-center justify-center h-32 border border-white/10 hover:border-spiderman-red/50 transition-all duration-300"
              >
                <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center">
                  <span className="text-white/50 text-lg font-bold">SPONSOR {index + 3}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Silver Sponsors */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Silver Sponsors</h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div 
                key={index}
                className="bg-white/5 rounded-lg p-3 flex items-center justify-center h-24 border border-white/10 hover:border-spiderman-red/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                  <span className="text-white/50 text-sm font-bold">SPONSOR {index + 7}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partners */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Technical", "Community", "Education", "Media"].map((type, index) => (
              <div 
                key={index}
                className="bg-white/5 rounded-lg p-6 text-center border border-white/10 hover:border-spiderman-red/50 transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white/50 text-xs font-bold">LOGO</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{type} Partner</h4>
                <p className="text-white/70 text-sm">Supporting BitnBuild 2024</p>
              </div>
            ))}
          </div>
        </div>

        {/* Become a Sponsor */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Become a Sponsor</h3>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Interested in sponsoring BitnBuild 2024? Join our roster of sponsors and partners to gain visibility and connect with top talent.
          </p>
          <a
            href="#contact"
            className="inline-block bg-spiderman-red text-white py-3 px-8 rounded-md hover:bg-spiderman-red/80 transition-all font-medium web-button relative overflow-hidden group"
          >
            <span className="relative z-10">Contact Us</span>
            <span className="absolute inset-0 w-0 bg-white/10 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
      </div>
    </section>
  )
} 