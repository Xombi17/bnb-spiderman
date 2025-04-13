"use client"

import { useLayoutEffect, useRef } from "react"
import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function EventOverview() {
  const titleAnimation = useScrollAnimation<HTMLHeadingElement>({
    effect: "fade",
    direction: "up",
    distance: 30,
    duration: 0.8,
    delay: 0.2,
  })

  const descAnimation = useScrollAnimation<HTMLDivElement>({
    effect: "fade",
    direction: "up",
    distance: 30,
    duration: 0.8,
    delay: 0.4,
  })

  const mapAnimation = useScrollAnimation<HTMLDivElement>({
    effect: "fade",
    direction: "up",
    distance: 30,
    duration: 0.8,
    delay: 0.6,
  })

  const locationAnimation = useScrollAnimation<HTMLDivElement>({
    effect: "fade",
    direction: "up",
    distance: 30,
    duration: 0.8,
    delay: 0.8,
  })

  const statsAnimation = useScrollAnimation<HTMLDivElement>({
    effect: "fade",
    direction: "up",
    distance: 30,
    duration: 0.8,
    delay: 1.0,
  })

  const gdscAnimation = useScrollAnimation<HTMLDivElement>({
    effect: "fade",
    direction: "up",
    distance: 30,
    duration: 0.8,
    delay: 0.2,
  })

  const teamAnimation = useScrollAnimation<HTMLDivElement>({
    effect: "fade",
    direction: "up",
    distance: 30,
    duration: 0.8,
    delay: 0.4,
  })

  return (
    <section
      id="about"
      className="relative py-24 overflow-hidden bg-spiderman-blue"
    >
      {/* Subtle Spider-Man image in background */}
      <div className="absolute inset-0 opacity-3 mix-blend-overlay z-0">
        <div className="absolute right-0 top-0 w-1/2 h-full">
          <Image 
            src="/spider-man-3.png" 
            alt="Spider-Man" 
            layout="fill" 
            objectFit="contain" 
            objectPosition="right center" 
            quality={30}
          />
        </div>
      </div>

      {/* Top gradient for smooth blend with hero section */}
      <div className="absolute inset-0 bg-gradient-to-b from-spiderman-blue/90 via-spiderman-blue to-spiderman-darkblue/95 z-0"></div>

      {/* Background web pattern */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/spider-web-pattern.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            mixBlendMode: "overlay",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* GDSC-CRCE Section */}
        <div
          ref={gdscAnimation.ref}
          style={gdscAnimation.style}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4 font-spiderman-readable">GDSC - CRCE</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-white/80 mb-6">
              Google Developer Student Clubs (GDSC) is a community where students learn about Google technologies and grow as developers. Our mission is to empower students with technical skills and practical experience.
            </p>
            <p className="text-white/80">
              Fr. Conceicao Rodrigues College of Engineering (CRCE) hosts this vibrant community, providing a platform for students to collaborate, learn, and create solutions for real-world problems.
            </p>
          </div>
        </div>

        {/* About Us Section */}
        <div className="grid md:grid-cols-2 gap-10 mb-16 items-center">
          <div
            ref={descAnimation.ref}
            style={descAnimation.style}
            className="order-2 md:order-1"
          >
            <h2 className="text-3xl font-bold text-white mb-6 font-spiderman-readable">About Us</h2>
            <p className="text-white/80 mb-6">
              BIT N BUILD 2024 is a 24-hour hackathon organized by GDSC-CRCE that brings together the brightest minds from across the country. Themed around Spider-Man, this event celebrates creativity, innovation, and problem-solving, all while embracing the responsibilty that comes with technological power.
            </p>

            <div ref={locationAnimation.ref} style={locationAnimation.style}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-spiderman-darkblue/50 p-6 rounded-lg border border-spiderman-blue/20 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold text-white mb-2 font-spiderman-readable">Date</h3>
                  <p className="text-white/70">April 15-16, 2024</p>
                </div>
                <div className="bg-spiderman-darkblue/50 p-6 rounded-lg border border-spiderman-blue/20 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold text-white mb-2 font-spiderman-readable">Location</h3>
                  <p className="text-white/70">Fr. Conceicao Rodrigues College of Engineering</p>
                  <p className="text-white/70">Mumbai, India</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-spiderman-darkblue/50 p-6 rounded-lg border border-spiderman-blue/20 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold text-white mb-2 font-spiderman-readable">Domains</h3>
                  <ul className="text-white/70 list-disc pl-5">
                    <li>Web Technologies</li>
                    <li>AI & Machine Learning</li>
                  </ul>
                </div>
                <div className="bg-spiderman-darkblue/50 p-6 rounded-lg border border-spiderman-blue/20 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold text-white mb-2 font-spiderman-readable">Participants</h3>
                  <p className="text-white/70">300+ hackers from across India</p>
                </div>
              </div>
            </div>
          </div>

          <div
            ref={mapAnimation.ref}
            style={mapAnimation.style}
            className="order-1 md:order-2 relative"
          >
            <div className="relative h-[400px] w-full rounded-xl overflow-hidden border border-spiderman-blue/30 shadow-xl">
              <Image
                src="/54.png"
                alt="World Map"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
              
              {/* Mumbai location marker */}
              <div className="absolute top-[60%] left-[66%] transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-4 h-4 bg-spiderman-red rounded-full animate-pulse"></div>
                <div className="w-12 h-12 bg-spiderman-red/20 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-ping"></div>
                <div className="absolute top-6 left-0 transform -translate-x-1/4 bg-spiderman-darkblue/80 px-3 py-1 rounded-lg border border-spiderman-red/30 whitespace-nowrap">
                  <span className="text-white text-sm font-medium">Mumbai, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section - with subtle spider-web background */}
        <div
          ref={teamAnimation.ref}
          style={teamAnimation.style}
          className="mb-16 relative"
        >
          <h2 className="text-3xl font-bold text-white mb-10 text-center font-spiderman-readable relative z-10">Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            <div className="bg-spiderman-darkblue/50 p-6 rounded-lg border border-spiderman-blue/20 backdrop-blur-sm text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-spiderman-red/20 flex items-center justify-center">
                <span className="text-3xl text-spiderman-red">👨‍💻</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Organizers</h3>
              <p className="text-white/70">The masterminds behind BIT N BUILD, ensuring everything runs smoothly.</p>
            </div>
            <div className="bg-spiderman-darkblue/50 p-6 rounded-lg border border-spiderman-blue/20 backdrop-blur-sm text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-spiderman-red/20 flex items-center justify-center">
                <span className="text-3xl text-spiderman-red">🧠</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Mentors</h3>
              <p className="text-white/70">Industry experts guiding participants through technical challenges.</p>
            </div>
            <div className="bg-spiderman-darkblue/50 p-6 rounded-lg border border-spiderman-blue/20 backdrop-blur-sm text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-spiderman-red/20 flex items-center justify-center">
                <span className="text-3xl text-spiderman-red">🏆</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Judges</h3>
              <p className="text-white/70">Leaders who evaluate projects based on innovation, impact, and execution.</p>
            </div>
          </div>
        </div>

        {/* Event Stats - with subtle Spider-Man background */}
        <div
          ref={statsAnimation.ref}
          style={statsAnimation.style}
          className="my-16 relative"
        >
          <div className="absolute inset-0 opacity-4 z-0 mix-blend-overlay">
            <div className="absolute right-0 w-1/3 h-full">
              <Image 
                src="/spider-logo.svg" 
                alt="Spider-Man Logo" 
                layout="fill" 
                objectFit="contain"
                objectPosition="center right"
                className="transform rotate-12"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            <div className="bg-spiderman-darkblue/50 p-8 rounded-lg border border-spiderman-blue/20 backdrop-blur-sm text-center">
              <h3 className="text-4xl font-bold text-spiderman-red mb-2">300+</h3>
              <p className="text-white/80">Participants</p>
            </div>
            <div className="bg-spiderman-darkblue/50 p-8 rounded-lg border border-spiderman-blue/20 backdrop-blur-sm text-center">
              <h3 className="text-4xl font-bold text-spiderman-red mb-2">75+</h3>
              <p className="text-white/80">Projects Submitted</p>
            </div>
            <div className="bg-spiderman-darkblue/50 p-8 rounded-lg border border-spiderman-blue/20 backdrop-blur-sm text-center">
              <h3 className="text-4xl font-bold text-spiderman-red mb-2">12+</h3>
              <p className="text-white/80">Sponsors</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient for smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-spiderman-darkblue via-spiderman-darkblue/90 to-transparent z-0"></div>
    </section>
  )
}
