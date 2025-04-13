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

  // Sponsor images by category
  const platinumSponsors = [
    { name: "Red Bull", image: "/images/sponsors/flatlogic.png" },
    { name: "XYZ", image: "/images/sponsors/unstop.png" },
    { name: "Bassein Catholic Bank", image: "/images/sponsors/Bassein-catholic-bank.png" }
  ]

  const goldSponsors = [
    { name: "Postman", image: "/images/sponsors/postman.jpg" },
    { name: "Ethereum", image: "/images/sponsors/eth.png" },
    { name: "Flatlogic", image: "/images/sponsors/xyz.png" },
    { name: "JDoodle", image: "/images/sponsors/jdoodle.png" }
  ]

  const silverSponsors = [
    { name: "Quilbot", image: "/images/sponsors/quilbot.png" },
    { name: "GeeksForGeeks", image: "/images/sponsors/gfg.jpeg.jpg" },
    { name: "Unstop", image: "/images/sponsors/unstop.png" },
    { name: "GMC", image: "/images/sponsors/gmc.png" },
    { name: "Ettara", image: "/images/sponsors/ettara.png" },
    { name: "Simply Gaming", image: "/images/sponsors/simplygameing.png" }
  ]

  const partners = [
    { name: "Edussphere", image: "/images/sponsors/flatlogic.png", type: "AI" },
    { name: "Startup News", image: "/images/sponsors/startup-news.png", type: "Media" },
    { name: "NoEscape", image: "/images/sponsors/ettara.png", type: "Coffee" },
    { name: "RB", image: "/images/sponsors/RB.jpg", type: "Energy" }
  ]

  return (
    <section id="sponsors" ref={sectionRef} className="relative py-20 bg-spiderman-darkblue z-10 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-spiderman-darkblue to-spiderman-blue/20"></div>
      
      {/* Subtle web pattern */}
      <div className="absolute inset-0 opacity-5 z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `url('/images/web-pattern.svg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "overlay"
        }}></div>
      </div>
      
      {/* Web corners */}
      <div className="absolute top-0 right-0 w-48 h-48 opacity-10">
        <Image src="/images/web-corner.svg" alt="Web" layout="fill" objectFit="contain" className="transform rotate-90" />
      </div>
      <div className="absolute bottom-0 left-0 w-48 h-48 opacity-10">
        <Image src="/images/web-corner.svg" alt="Web" layout="fill" objectFit="contain" className="transform -rotate-90" />
      </div>
      
      {/* Spider silhouette */}
      <div className="absolute bottom-40 right-10 w-24 h-24 opacity-10 animate-bounce" style={{ animationDuration: "3s" }}>
        <Image src="/spiderman3.png" alt="Spider-Man" layout="fill" objectFit="contain" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2
            ref={titleAnimation.ref}
            style={titleAnimation.style}
            className="text-3xl md:text-4xl font-bold text-white mb-6 relative inline-block font-spiderman-readable"
          >
            SPONSORS & PARTNERS
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-spiderman-red"></span>
          </h2>

          <div>
            <p ref={descAnimation.ref} style={descAnimation.style} className="text-lg text-white/80 mb-6">
              BitnBuild 2024 is made possible by our amazing sponsors and partners. 
              Their support helps us create this incredible Spider-Man themed experience for all participants.
            </p>
          </div>
        </div>

        {/* Platinum Sponsors */}
        <div 
          ref={sponsorsAnimation.ref}
          style={sponsorsAnimation.style} 
          className="mb-16"
        >
          <div className="relative mb-10 text-center">
            <h3 className="text-2xl font-bold text-white mb-1 font-spiderman-readable">Platinum Sponsors</h3>
            <div className="h-1 w-24 bg-spiderman-red/70 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {platinumSponsors.map((sponsor, index) => (
              <div 
                key={index}
                className="bg-spiderman-darkblue/50 backdrop-blur-sm rounded-lg p-6 flex items-center justify-center h-40 border border-spiderman-red/30 hover:border-spiderman-red/70 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <div className="relative w-full h-full">
                  <Image 
                    src={sponsor.image} 
                    alt={sponsor.name} 
                    layout="fill" 
                    objectFit="contain"
                    className="p-4 filter brightness-125 contrast-125" 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gold Sponsors */}
        <div className="mb-16">
          <div className="relative mb-10 text-center">
            <h3 className="text-2xl font-bold text-white mb-1 font-spiderman-readable">Gold Sponsors</h3>
            <div className="h-1 w-24 bg-yellow-500/70 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {goldSponsors.map((sponsor, index) => (
              <div 
                key={index}
                className="bg-spiderman-darkblue/50 backdrop-blur-sm rounded-lg p-4 flex items-center justify-center h-32 border border-yellow-500/30 hover:border-yellow-500/70 transition-all duration-300 transform hover:scale-105 shadow-md"
              >
                <div className="relative w-full h-full">
                  <Image 
                    src={sponsor.image} 
                    alt={sponsor.name} 
                    layout="fill" 
                    objectFit="contain"
                    className="p-3 filter brightness-125" 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Silver Sponsors */}
        <div className="mb-16">
          <div className="relative mb-10 text-center">
            <h3 className="text-2xl font-bold text-white mb-1 font-spiderman-readable">Silver Sponsors</h3>
            <div className="h-1 w-24 bg-gray-400/70 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {silverSponsors.map((sponsor, index) => (
              <div 
                key={index}
                className="bg-spiderman-darkblue/50 backdrop-blur-sm rounded-lg p-3 flex items-center justify-center h-24 border border-gray-400/30 hover:border-gray-400/70 transition-all duration-300 transform hover:scale-105 shadow-sm"
              >
                <div className="relative w-full h-full">
                  <Image 
                    src={sponsor.image} 
                    alt={sponsor.name} 
                    layout="fill" 
                    objectFit="contain"
                    className="p-2 filter brightness-125" 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partners */}
        <div>
          <div className="relative mb-10 text-center">
            <h3 className="text-2xl font-bold text-white mb-1 font-spiderman-readable">Partners</h3>
            <div className="h-1 w-24 bg-spiderman-blue/70 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="bg-spiderman-darkblue/50 backdrop-blur-sm rounded-lg p-6 text-center border border-spiderman-blue/30 hover:border-spiderman-blue/70 transition-all duration-300 transform hover:scale-105 shadow-md"
              >
                <div className="relative w-full h-20 mb-4">
                  <Image 
                    src={partner.image} 
                    alt={partner.name} 
                    layout="fill" 
                    objectFit="contain"
                    className="filter brightness-125"
                  />
                </div>
                <h4 className="text-lg font-bold text-white mb-1">{partner.name}</h4>
                <p className="text-white/70 text-sm">{partner.type} Partner</p>
              </div>
            ))}
          </div>
        </div>

        {/* Become a Sponsor */}
        <div className="mt-20 text-center">
          <div className="bg-spiderman-darkblue/60 border border-spiderman-red/30 backdrop-blur-sm p-8 rounded-lg max-w-2xl mx-auto shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-4 font-spiderman-readable">Become a Sponsor</h3>
            <p className="text-white/90 mb-6">
              Interested in sponsoring BitnBuild 2024? Join our roster of sponsors and partners to gain visibility and connect with top talent.
            </p>
            <a
              href="#contact"
              className="inline-block bg-gradient-to-r from-spiderman-red to-spiderman-red/80 text-white py-3 px-8 rounded-md hover:from-spiderman-red/90 hover:to-spiderman-red transition-all font-medium web-button relative overflow-hidden group transform hover:scale-105"
            >
              <span className="relative z-10">Contact Us</span>
              <span className="absolute inset-0 w-0 bg-white/10 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Add gradient transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-spiderman-blue/20 to-transparent z-0"></div>
    </section>
  )
} 