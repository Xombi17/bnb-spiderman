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
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2
            ref={titleAnimation.ref}
            style={titleAnimation.style}
            className="text-3xl md:text-4xl font-bold text-white mb-6 relative inline-block"
          >
            PRIZES
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-spiderman-red"></span>
          </h2>

          <div>
            <p ref={descAnimation.ref} style={descAnimation.style} className="text-lg text-white/80 mb-6">
              Compete for amazing prizes! Our hackathon offers rewards for the top performers across different categories.
              With great code comes great rewards!
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Second Prize */}
          <div
            ref={secondPrizeAnimation.ref}
            style={secondPrizeAnimation.style}
            className="bg-spiderman-darkblue/70 rounded-lg border border-white/10 p-6 text-center transform md:translate-y-12 hover:shadow-lg hover:shadow-spiderman-red/10 transition-all duration-300 relative overflow-hidden group"
          >
            {/* Web corner decoration that appears on hover */}
            <div className="absolute top-0 left-0 w-16 h-16 opacity-0 group-hover:opacity-10 transition-opacity duration-300" 
              style={{
                backgroundImage: "url('/web-corner.png')",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat"
              }}>
            </div>
            
            <div className="relative w-24 h-24 mx-auto mb-4">
              <Image
                src="/silver-trophy.png"
                alt="Second Prize"
                width={96}
                height={96}
                className="object-contain"
              />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">2nd Prize</h3>
            <div className="bg-spiderman-red/20 rounded-lg py-2 px-4 mb-4 spidey-sense">
              <p className="text-xl font-bold text-white">₹50,000</p>
            </div>
            <ul className="text-white/80 space-y-2">
              <li>Development gear package</li>
              <li>Internship interviews</li>
              <li>Premium subscriptions</li>
            </ul>
          </div>

          {/* First Prize */}
          <div
            ref={firstPrizeAnimation.ref}
            style={firstPrizeAnimation.style}
            className="bg-spiderman-darkblue/70 rounded-lg border border-white/10 p-6 text-center transform md:-translate-y-6 hover:shadow-lg hover:shadow-spiderman-red/10 transition-all duration-300 relative overflow-hidden group"
          >
            {/* Web corner decoration that appears on hover */}
            <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-10 transition-opacity duration-300" 
              style={{
                backgroundImage: "url('/web-corner.png')",
                backgroundSize: "contain",
                backgroundPosition: "top right",
                backgroundRepeat: "no-repeat",
                transform: "rotate(90deg)"
              }}>
            </div>
            
            <div className="relative w-32 h-32 mx-auto mb-4">
              <div className="absolute -top-4 -left-4 -right-4 h-1 bg-spiderman-red"></div>
              <div className="absolute -top-4 -bottom-4 -left-4 w-1 bg-spiderman-red"></div>
              <div className="absolute -bottom-4 -left-4 -right-4 h-1 bg-spiderman-red"></div>
              <div className="absolute -top-4 -bottom-4 -right-4 w-1 bg-spiderman-red"></div>
              <Image
                src="/gold-trophy.png"
                alt="First Prize"
                width={128}
                height={128}
                className="object-contain"
              />
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">1st Prize</h3>
            <div className="bg-spiderman-red rounded-lg py-3 px-4 mb-4 spidey-sense">
              <p className="text-2xl font-bold text-white">₹100,000</p>
            </div>
            <ul className="text-white/80 space-y-2">
              <li>Professional development kit</li>
              <li>Direct job interviews</li>
              <li>Mentorship opportunities</li>
              <li>Free conference tickets</li>
              <li>VIP networking access</li>
            </ul>
          </div>

          {/* Third Prize */}
          <div
            ref={thirdPrizeAnimation.ref}
            style={thirdPrizeAnimation.style}
            className="bg-spiderman-darkblue/70 rounded-lg border border-white/10 p-6 text-center transform md:translate-y-12 hover:shadow-lg hover:shadow-spiderman-red/10 transition-all duration-300 relative overflow-hidden group"
          >
            {/* Web corner decoration that appears on hover */}
            <div className="absolute bottom-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-10 transition-opacity duration-300" 
              style={{
                backgroundImage: "url('/web-corner.png')",
                backgroundSize: "contain",
                backgroundPosition: "bottom right",
                backgroundRepeat: "no-repeat",
                transform: "rotate(180deg)"
              }}>
            </div>
            
            <div className="relative w-24 h-24 mx-auto mb-4">
              <Image
                src="/bronze-trophy.png"
                alt="Third Prize"
                width={96}
                height={96}
                className="object-contain"
              />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">3rd Prize</h3>
            <div className="bg-spiderman-red/20 rounded-lg py-2 px-4 mb-4 spidey-sense">
              <p className="text-xl font-bold text-white">₹25,000</p>
            </div>
            <ul className="text-white/80 space-y-2">
              <li>Tech accessory bundle</li>
              <li>Learning platform credits</li>
              <li>Certificate and recognition</li>
            </ul>
          </div>
        </div>

        {/* Special Prizes */}
        <div className="mt-20 max-w-4xl mx-auto">
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