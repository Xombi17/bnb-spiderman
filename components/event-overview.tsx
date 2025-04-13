"use client"

import { useRef } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import Image from "next/image"

export default function EventOverview() {
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

  const mapAnimation = useScrollAnimation<HTMLDivElement>({
    effect: "fade",
    direction: "up",
    distance: 40,
    duration: 0.8,
    delay: 0.3,
  })

  const infoAnimation = useScrollAnimation<HTMLDivElement>({
    effect: "slide",
    direction: "right",
    distance: 50,
    duration: 0.8,
    delay: 0.5,
  })

  return (
    <section id="about" ref={sectionRef} className="relative py-20 bg-spiderman-darkblue z-10">
      {/* Background with gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-spiderman-darkblue to-spiderman-blue/90"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* About Us Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2
            ref={titleAnimation.ref}
            style={titleAnimation.style}
            className="text-3xl md:text-5xl font-bold text-white mb-8 relative inline-block"
          >
            ABOUT US
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-spiderman-red"></span>
          </h2>

          <div>
            <p ref={descAnimation.ref} style={descAnimation.style} className="text-lg md:text-xl text-white/80 mb-12 max-w-3xl mx-auto">
              Welcome to BitnBuild 2024, a global hackathon organized by GDSC-CRCE in Mumbai! A 24-hour event full 
              of creativity, innovation, and problem-solving. BitnBuild is your chance to shine as a developer. Are you ready to compete
              with the best and unlock your potential?
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
          {/* World Map with Mumbai Highlighted */}
          <div 
            ref={mapAnimation.ref}
            style={mapAnimation.style} 
            className="relative bg-spiderman-blue/30 p-6 rounded-lg border border-white/10 hover:shadow-lg hover:shadow-spiderman-red/10 transition-all duration-300"
          >
            <div className="relative aspect-[16/10] w-full">
              {/* World Map with red dots */}
              <div className="world-map-container relative w-full h-full">
                <Image 
                  src="/54.png" 
                  alt="World Map" 
                  fill 
                  className="object-contain" 
                  priority
                />
                
                {/* Mumbai Location Marker */}
                <div className="absolute z-10" style={{ top: '58%', left: '62%' }}>
                  <div className="relative">
                    <div className="h-4 w-4 bg-spiderman-red rounded-full animate-spider-sense"></div>
                    <div className="absolute -top-10 -left-12 bg-spiderman-red px-3 py-1 rounded text-white text-sm whitespace-nowrap">
                      Mumbai, India
                    </div>
                    <div className="absolute -bottom-1 -left-1 h-6 w-6 bg-spiderman-red/30 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Event Information */}
          <div
            ref={infoAnimation.ref}
            style={infoAnimation.style}
            className="bg-gradient-to-br from-spiderman-blue to-spiderman-darkblue p-8 rounded-lg border border-white/10 hover:shadow-lg hover:shadow-spiderman-red/10 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Event Details</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-spiderman-red mr-3 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <div>
                  <span className="text-white font-semibold block">When</span>
                  <span className="text-white/80">April 15-16, 2024</span>
                  <span className="text-white/80 block">Starting at 10:00 AM</span>
                </div>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-spiderman-red mr-3 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div>
                  <span className="text-white font-semibold block">Where</span>
                  <span className="text-white/80">Fr. Conceicao Rodrigues College of Engineering</span>
                  <span className="text-white/80 block">Mumbai, India</span>
                </div>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-spiderman-red mr-3 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <div>
                  <span className="text-white font-semibold block">Domains</span>
                  <span className="text-white/80">Web Technologies</span>
                  <span className="text-white/80 block">AI & Machine Learning</span>
                </div>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-spiderman-red mr-3 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <div>
                  <span className="text-white font-semibold block">Participants</span>
                  <span className="text-white/80">500+ Developers</span>
                  <span className="text-white/80 block">Teams of 2-4 Members</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Event Stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-spiderman-blue/20 p-6 rounded-lg border border-white/10 text-center">
            <div className="text-4xl font-bold text-spiderman-red mb-2">500+</div>
            <div className="text-white">Participants</div>
          </div>

          <div className="bg-spiderman-blue/20 p-6 rounded-lg border border-white/10 text-center">
            <div className="text-4xl font-bold text-spiderman-red mb-2">120+</div>
            <div className="text-white">Projects Submitted</div>
          </div>

          <div className="bg-spiderman-blue/20 p-6 rounded-lg border border-white/10 text-center">
            <div className="text-4xl font-bold text-spiderman-red mb-2">30+</div>
            <div className="text-white">Sponsors & Partners</div>
          </div>
        </div>
      </div>
    </section>
  )
}
