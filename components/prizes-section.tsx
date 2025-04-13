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
        <div className="mt-28 max-w-5xl mx-auto relative">
          <h3 className="text-4xl font-bold text-white mb-12 text-center tracking-wider">Special Category Prizes</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* UI/UX Design */}
            <div className="bg-spiderman-darkblue p-8 rounded-lg text-center relative">
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2">
                <svg className="w-8 h-8 text-spiderman-red" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm-2.5 16.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm2.5-6c0 .6-.4 1-1 1h-3c-.6 0-1-.4-1-1v-5c0-.6.4-1 1-1h3c.6 0 1 .4 1 1v5zm4 6c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z" />
                </svg>
              </div>
              <div className="pt-14"></div>
              <h4 className="text-2xl font-bold text-white mb-4">Best UI/UX Design</h4>
              <p className="text-white/70 mb-6">For teams with exceptional user interface and experience design.</p>
              <div className="w-20 h-1 bg-pink-500 mx-auto mb-6"></div>
              <div className="bg-black/40 rounded-full py-2 px-6 inline-block">
                <p className="text-xl font-bold text-white">₹5,000</p>
              </div>
            </div>
            
            {/* Innovative Solution */}
            <div className="bg-spiderman-darkblue p-8 rounded-lg text-center relative">
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2">
                <svg className="w-8 h-8 text-spiderman-red" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z" />
                </svg>
              </div>
              <div className="pt-14"></div>
              <h4 className="text-2xl font-bold text-white mb-4">Most Innovative Solution</h4>
              <p className="text-white/70 mb-6">For the most creative and innovative approach to problem-solving.</p>
              <div className="w-20 h-1 bg-cyan-500 mx-auto mb-6"></div>
              <div className="bg-black/40 rounded-full py-2 px-6 inline-block">
                <p className="text-xl font-bold text-white">₹5,000</p>
              </div>
            </div>
            
            {/* Best Use of AI */}
            <div className="bg-spiderman-darkblue p-8 rounded-lg text-center relative">
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2">
                <svg className="w-8 h-8 text-spiderman-red" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 11.18V9.72c0-.47-.16-.92-.46-1.28L16.6 3.72c-.38-.46-.94-.72-1.54-.72H8.94c-.6 0-1.15.26-1.54.72L3.46 8.44c-.3.36-.46.81-.46 1.28v1.45c0 .8.5 1.45 1 1.83v6c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-6c.5-.38 1-1.03 1-1.83zM13 18h-2v-2h2v2zm0-4.5h-2V10h2v3.5zm-1-5.5c-.83 0-1.5-.67-1.5-1.5S11.17 5 12 5s1.5.67 1.5 1.5S12.83 8 12 8z" />
                </svg>
              </div>
              <div className="pt-14"></div>
              <h4 className="text-2xl font-bold text-white mb-4">Best Use of AI</h4>
              <p className="text-white/70 mb-6">For projects that leverage artificial intelligence in creative ways.</p>
              <div className="w-20 h-1 bg-emerald-500 mx-auto mb-6"></div>
              <div className="bg-black/40 rounded-full py-2 px-6 inline-block">
                <p className="text-xl font-bold text-white">₹5,000</p>
              </div>
            </div>
            
            {/* Social Impact Award */}
            <div className="bg-spiderman-darkblue p-8 rounded-lg text-center relative">
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2">
                <svg className="w-8 h-8 text-spiderman-red" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
              <div className="pt-14"></div>
              <h4 className="text-2xl font-bold text-white mb-4">Social Impact Award</h4>
              <p className="text-white/70 mb-6">For solutions addressing important social or environmental challenges.</p>
              <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
              <div className="bg-black/40 rounded-full py-2 px-6 inline-block">
                <p className="text-xl font-bold text-white">₹5,000</p>
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