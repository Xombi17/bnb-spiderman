"use client"

import { useRef } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

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

  const card1Animation = useScrollAnimation<HTMLDivElement>({
    effect: "fade",
    direction: "up",
    distance: 40,
    duration: 0.8,
    delay: 0.3,
  })

  const card2Animation = useScrollAnimation<HTMLDivElement>({
    effect: "fade",
    direction: "up",
    distance: 40,
    duration: 0.8,
    delay: 0.5,
  })

  const card3Animation = useScrollAnimation<HTMLDivElement>({
    effect: "fade",
    direction: "up",
    distance: 40,
    duration: 0.8,
    delay: 0.7,
  })

  const leftBoxAnimation = useScrollAnimation<HTMLDivElement>({
    effect: "slide",
    direction: "right",
    distance: 50,
    duration: 0.8,
    delay: 0.3,
  })

  const rightBoxAnimation = useScrollAnimation<HTMLDivElement>({
    effect: "slide",
    direction: "left",
    distance: 50,
    duration: 0.8,
    delay: 0.5,
  })

  return (
    <section id="about" ref={sectionRef} className="relative py-20 bg-spiderman-darkblue z-10">
      {/* Background with Spider-Man image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-spiderman-darkblue to-spiderman-blue/90"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2
            ref={titleAnimation.ref}
            style={titleAnimation.style}
            className="text-3xl md:text-4xl font-bold text-white mb-6 relative inline-block"
          >
            Event Overview
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-spiderman-red"></span>
          </h2>

          <div>
            <p ref={descAnimation.ref} style={descAnimation.style} className="text-lg text-white/80 mb-6">
              Join us for an action-packed 24-hour coding adventure where you'll build innovative solutions to
              real-world problems. Bit N Build is more than just a hackathon—it's your chance to showcase your skills,
              collaborate with fellow tech enthusiasts, and create something amazing!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div
              ref={card1Animation.ref}
              style={card1Animation.style}
              className="bg-spiderman-blue/50 p-6 rounded-lg border border-white/10 hover:shadow-lg hover:shadow-spiderman-red/10 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-spiderman-red rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
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
              </div>
              <h3 className="text-xl font-bold text-white mb-2">When</h3>
              <p className="text-white/70">April 15-16, 2023</p>
              <p className="text-white/70">Starting at 10:00 AM</p>
            </div>

            <div
              ref={card2Animation.ref}
              style={card2Animation.style}
              className="bg-spiderman-blue/50 p-6 rounded-lg border border-white/10 hover:shadow-lg hover:shadow-spiderman-red/10 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-spiderman-red rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
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
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Where</h3>
              <p className="text-white/70">Tech Innovation Center</p>
              <p className="text-white/70">123 Web Avenue, New York</p>
            </div>

            <div
              ref={card3Animation.ref}
              style={card3Animation.style}
              className="bg-spiderman-blue/50 p-6 rounded-lg border border-white/10 hover:shadow-lg hover:shadow-spiderman-red/10 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-spiderman-red rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Theme</h3>
              <p className="text-white/70">Web Technologies</p>
              <p className="text-white/70">AI & Machine Learning</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-1/2 w-full h-0.5 bg-white/5"></div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div
                ref={leftBoxAnimation.ref}
                style={leftBoxAnimation.style}
                className="bg-gradient-to-br from-spiderman-blue to-spiderman-darkblue p-8 rounded-lg border border-white/10 hover:shadow-lg hover:shadow-spiderman-red/10 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-white mb-4">For Participants</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-spiderman-red mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/80">Form teams of 2-4 members</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-spiderman-red mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/80">Bring your own laptop and charger</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-spiderman-red mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/80">Food and refreshments provided</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-spiderman-red mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/80">Mentors available throughout the event</span>
                  </li>
                </ul>
              </div>

              <div
                ref={rightBoxAnimation.ref}
                style={rightBoxAnimation.style}
                className="bg-gradient-to-br from-spiderman-blue to-spiderman-darkblue p-8 rounded-lg border border-white/10 hover:shadow-lg hover:shadow-spiderman-red/10 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-white mb-4">What You'll Get</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-spiderman-red mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                      />
                    </svg>
                    <span className="text-white/80">$10,000 in total prizes</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-spiderman-red mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-white/80">Networking with industry professionals</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-spiderman-red mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                    <span className="text-white/80">Exclusive swag and tech gadgets</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-spiderman-red mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                    <span className="text-white/80">Potential internship opportunities</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
