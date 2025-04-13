"use client"

import { useRef } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import Image from "next/image"

export default function PrizesSection() {
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

  const firstPrizeAnimation = useScrollAnimation<HTMLDivElement>({
    effect: "fade",
    direction: "up",
    distance: 40,
    duration: 0.8,
    delay: 0.3,
  })

  const secondPrizeAnimation = useScrollAnimation<HTMLDivElement>({
    effect: "fade",
    direction: "up",
    distance: 40,
    duration: 0.8,
    delay: 0.5,
  })

  const thirdPrizeAnimation = useScrollAnimation<HTMLDivElement>({
    effect: "fade",
    direction: "up",
    distance: 40,
    duration: 0.8,
    delay: 0.7,
  })

  return (
    <section id="prizes" ref={sectionRef} className="relative py-20 bg-spiderman-blue z-10">
      {/* Background with gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-spiderman-blue to-spiderman-darkblue/90"></div>
      </div>
      
      {/* Spider-Man themed decorations */}
      <div className="spiderweb-corner spiderweb-corner-tl"></div>
      <div className="spiderweb-corner spiderweb-corner-tr"></div>
      <div className="spiderweb-corner spiderweb-corner-br"></div>
      <div className="spiderweb-corner spiderweb-corner-bl"></div>
      
      {/* Web pattern background */}
      <div className="absolute inset-0 spiderweb-pattern z-0"></div>
      
      {/* Decorative spider web strings */}
      <div className="absolute top-40 left-10 w-0.5 h-32 bg-white/10 origin-top web-swing"></div>
      <div className="absolute top-40 right-10 w-0.5 h-40 bg-white/10 origin-top web-swing" style={{ animationDelay: "0.4s" }}></div>
      <div className="absolute bottom-40 left-1/4 w-0.5 h-24 bg-white/10 origin-top web-swing" style={{ animationDelay: "0.8s" }}></div>
      
      {/* Subtle spider symbols */}
      <div className="absolute top-1/3 right-0 w-48 h-48 opacity-5 spider-crawl">
        <Image src="/spider-logo.svg" alt="Spider-Man Logo" layout="fill" objectFit="contain" />
      </div>
      <div className="absolute bottom-1/3 left-0 w-36 h-36 opacity-5 spider-crawl" style={{ animationDelay: "1.5s" }}>
        <Image src="/spider-logo.svg" alt="Spider-Man Logo" layout="fill" objectFit="contain" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h2
            ref={titleAnimation.ref}
            style={titleAnimation.style}
            className="text-5xl md:text-6xl font-bold text-white mb-10 relative inline-block tracking-wider"
          >
            PRIZES.
          </h2>

          <div>
            <p ref={descAnimation.ref} style={descAnimation.style} className="text-lg text-white/80 mb-6">
              Compete for amazing prizes! Our hackathon offers rewards for the top performers across different categories.
              With great code comes great rewards!
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-around items-center md:items-end gap-12 max-w-5xl mx-auto">
          {/* 2nd Prize */}
          <div
            ref={secondPrizeAnimation.ref}
            style={secondPrizeAnimation.style}
            className="text-center"
          >
            <div className="relative w-48 h-48 mx-auto mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-300 rounded-full"></div>
              <div className="absolute inset-2 bg-black rounded-full flex items-center justify-center overflow-hidden">
                <Image 
                  src="/spiderman-trophy-2nd.svg" 
                  alt="Second Prize" 
                  width={150} 
                  height={150} 
                  className="object-contain filter drop-shadow-[0_0_10px_rgba(169,169,169,0.6)]"
                />
              </div>
            </div>
            <h3 className="text-4xl font-bold text-white mb-4 tracking-widest">2ND PRIZE</h3>
            <div className="text-center">
              <p className="text-3xl font-bold text-white">₹35,000</p>
            </div>
          </div>

          {/* 1st Prize */}
          <div
            ref={firstPrizeAnimation.ref}
            style={firstPrizeAnimation.style}
            className="text-center md:mb-12"
          >
            <div className="relative w-56 h-56 mx-auto mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-full"></div>
              <div className="absolute inset-2 bg-black rounded-full flex items-center justify-center overflow-hidden">
                <Image 
                  src="/spiderman-trophy-1st.svg" 
                  alt="First Prize" 
                  width={170} 
                  height={170} 
                  className="object-contain filter drop-shadow-[0_0_15px_rgba(255,215,0,0.6)]"
                />
              </div>
            </div>
            <h3 className="text-4xl font-bold text-white mb-4 tracking-widest">1ST PRIZE</h3>
            <div className="text-center">
              <p className="text-4xl font-bold text-white">₹50,000</p>
            </div>
          </div>

          {/* 3rd Prize */}
          <div
            ref={thirdPrizeAnimation.ref}
            style={thirdPrizeAnimation.style}
            className="text-center"
          >
            <div className="relative w-44 h-44 mx-auto mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-700 to-amber-500 rounded-full"></div>
              <div className="absolute inset-2 bg-black rounded-full flex items-center justify-center overflow-hidden">
                <Image 
                  src="/spiderman-trophy-3rd.svg" 
                  alt="Third Prize" 
                  width={130} 
                  height={130} 
                  className="object-contain filter drop-shadow-[0_0_8px_rgba(205,127,50,0.6)]"
                />
              </div>
            </div>
            <h3 className="text-4xl font-bold text-white mb-4 tracking-widest">3RD PRIZE</h3>
            <div className="text-center">
              <p className="text-3xl font-bold text-white">₹10,000</p>
            </div>
          </div>
        </div>

        {/* Special Prizes */}
        <div className="mt-28 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Special Category Prizes</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-spiderman-darkblue/70 rounded-lg border border-white/10 p-6 hover:shadow-lg hover:shadow-spiderman-red/10 transition-all duration-300">
              <h4 className="text-xl font-bold text-white mb-3">Best UI/UX Design</h4>
              <p className="text-white/80 mb-4">For teams with exceptional user interface and experience design.</p>
              <div className="bg-spiderman-red/20 rounded-lg py-2 px-4 inline-block">
                <p className="text-lg font-bold text-white">₹15,000</p>
              </div>
            </div>
            
            <div className="bg-spiderman-darkblue/70 rounded-lg border border-white/10 p-6 hover:shadow-lg hover:shadow-spiderman-red/10 transition-all duration-300">
              <h4 className="text-xl font-bold text-white mb-3">Most Innovative Solution</h4>
              <p className="text-white/80 mb-4">For the most creative and innovative approach to problem-solving.</p>
              <div className="bg-spiderman-red/20 rounded-lg py-2 px-4 inline-block">
                <p className="text-lg font-bold text-white">₹15,000</p>
              </div>
            </div>
            
            <div className="bg-spiderman-darkblue/70 rounded-lg border border-white/10 p-6 hover:shadow-lg hover:shadow-spiderman-red/10 transition-all duration-300">
              <h4 className="text-xl font-bold text-white mb-3">Best Use of AI</h4>
              <p className="text-white/80 mb-4">For projects that leverage artificial intelligence in creative ways.</p>
              <div className="bg-spiderman-red/20 rounded-lg py-2 px-4 inline-block">
                <p className="text-lg font-bold text-white">₹15,000</p>
              </div>
            </div>
            
            <div className="bg-spiderman-darkblue/70 rounded-lg border border-white/10 p-6 hover:shadow-lg hover:shadow-spiderman-red/10 transition-all duration-300">
              <h4 className="text-xl font-bold text-white mb-3">Social Impact Award</h4>
              <p className="text-white/80 mb-4">For solutions addressing important social or environmental challenges.</p>
              <div className="bg-spiderman-red/20 rounded-lg py-2 px-4 inline-block">
                <p className="text-lg font-bold text-white">₹15,000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Dark gradient transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-spiderman-darkblue to-transparent"></div>
    </section>
  )
} 