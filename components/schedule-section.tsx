"use client"

import { useEffect } from "react"
import { initAnimations } from "@/utils/animation"
import Image from "next/image"

export default function ScheduleSection() {
  useEffect(() => {
    const cleanup = initAnimations()
    return cleanup
  }, [])

  return (
    <section id="schedule" className="relative py-20 bg-spiderman-darkblue z-10">
      {/* Background gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-spiderman-darkblue to-spiderman-blue/90"></div>
      </div>
      
      {/* Spider-Man themed decorations */}
      <div className="spiderweb-corner spiderweb-corner-tl"></div>
      <div className="spiderweb-corner spiderweb-corner-tr"></div>
      <div className="spiderweb-corner spiderweb-corner-br"></div>
      <div className="spiderweb-corner spiderweb-corner-bl"></div>
      
      {/* Spider symbols */}
      <div className="absolute top-1/3 left-5 w-16 h-16 opacity-5 spider-crawl">
        <Image src="/spider-logo.svg" alt="Spider-Man Logo" layout="fill" objectFit="contain" />
      </div>
      <div className="absolute bottom-1/4 right-5 w-16 h-16 opacity-5 spider-crawl" style={{ animationDelay: "1s" }}>
        <Image src="/spider-logo.svg" alt="Spider-Man Logo" layout="fill" objectFit="contain" />
      </div>
      
      {/* Web pattern background */}
      <div className="absolute inset-0 spiderweb-pattern z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative inline-block">
            Event Schedule
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-spiderman-red"></span>
          </h2>

          <p className="text-lg text-white/80">Here's what to expect during our action-packed 24-hour hackathon!</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical timeline line - now styled like web string */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-spiderman-red/30 transform md:translate-x-px"></div>

            {/* Day 1 */}
            <div className="mb-8 text-center">
              <div className="inline-block bg-spiderman-red text-white px-6 py-2 rounded-full text-lg font-bold spidey-sense">
                Day 1
              </div>
            </div>

            {/* Timeline items */}
            <div className="relative z-10">
              {/* Item 1 */}
              <div className="flex flex-col md:flex-row items-center mb-12 scroll-reveal">
                <div className="flex-1 order-2 md:order-1 md:text-right md:pr-8 mt-4 md:mt-0">
                  <div className="bg-spiderman-darkblue/80 p-6 rounded-lg border border-white/10 inline-block shadow-lg shadow-spiderman-blue/10 relative group overflow-hidden">
                    {/* Web corner decoration that appears on hover */}
                    <div className="absolute top-0 left-0 w-12 h-12 opacity-0 group-hover:opacity-10 transition-opacity duration-300" 
                      style={{
                        backgroundImage: "url('/web-corner.png')",
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat"
                      }}>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2">Registration & Check-in</h3>
                    <p className="text-white/70 mb-2">
                      Arrive early to check in, get your swag, and set up your workspace.
                    </p>
                    <div className="text-spiderman-red font-medium">9:00 AM - 10:00 AM</div>
                  </div>
                </div>

                <div className="order-1 md:order-2 flex items-center justify-center">
                  <div className="w-10 h-10 bg-spiderman-red rounded-full flex items-center justify-center border-4 border-spiderman-darkblue spidey-sense">
                    <span className="text-white font-bold">1</span>
                  </div>
                </div>

                <div className="flex-1 order-3 md:pl-8 mt-4 md:mt-0"></div>
              </div>

              {/* Item 2 */}
              <div className="flex flex-col md:flex-row items-center mb-12 scroll-reveal">
                <div className="flex-1 order-2 md:order-1 md:text-right md:pr-8 mt-4 md:mt-0"></div>

                <div className="order-1 md:order-2 flex items-center justify-center">
                  <div className="w-10 h-10 bg-spiderman-red rounded-full flex items-center justify-center border-4 border-spiderman-darkblue">
                    <span className="text-white font-bold">2</span>
                  </div>
                </div>

                <div className="flex-1 order-3 md:pl-8 mt-4 md:mt-0">
                  <div className="bg-spiderman-darkblue/80 p-6 rounded-lg border border-white/10 inline-block shadow-lg shadow-spiderman-blue/10">
                    <h3 className="text-xl font-bold text-white mb-2">Opening Ceremony</h3>
                    <p className="text-white/70 mb-2">
                      Welcome address, introduction to challenges, and rules explanation.
                    </p>
                    <div className="text-spiderman-red font-medium">10:00 AM - 11:00 AM</div>
                  </div>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex flex-col md:flex-row items-center mb-12 scroll-reveal">
                <div className="flex-1 order-2 md:order-1 md:text-right md:pr-8 mt-4 md:mt-0">
                  <div className="bg-spiderman-darkblue/80 p-6 rounded-lg border border-white/10 inline-block shadow-lg shadow-spiderman-blue/10">
                    <h3 className="text-xl font-bold text-white mb-2">Hackathon Begins!</h3>
                    <p className="text-white/70 mb-2">
                      Start coding and bring your ideas to life. Mentors available for assistance.
                    </p>
                    <div className="text-spiderman-red font-medium">11:00 AM</div>
                  </div>
                </div>

                <div className="order-1 md:order-2 flex items-center justify-center">
                  <div className="w-10 h-10 bg-spiderman-red rounded-full flex items-center justify-center border-4 border-spiderman-darkblue">
                    <span className="text-white font-bold">3</span>
                  </div>
                </div>

                <div className="flex-1 order-3 md:pl-8 mt-4 md:mt-0"></div>
              </div>

              {/* Item 4 */}
              <div className="flex flex-col md:flex-row items-center mb-12 scroll-reveal">
                <div className="flex-1 order-2 md:order-1 md:text-right md:pr-8 mt-4 md:mt-0"></div>

                <div className="order-1 md:order-2 flex items-center justify-center">
                  <div className="w-10 h-10 bg-spiderman-red rounded-full flex items-center justify-center border-4 border-spiderman-darkblue">
                    <span className="text-white font-bold">4</span>
                  </div>
                </div>

                <div className="flex-1 order-3 md:pl-8 mt-4 md:mt-0">
                  <div className="bg-spiderman-darkblue/80 p-6 rounded-lg border border-white/10 inline-block shadow-lg shadow-spiderman-blue/10">
                    <h3 className="text-xl font-bold text-white mb-2">Lunch Break</h3>
                    <p className="text-white/70 mb-2">
                      Refuel with a delicious lunch. Networking opportunity with other teams.
                    </p>
                    <div className="text-spiderman-red font-medium">1:00 PM - 2:00 PM</div>
                  </div>
                </div>
              </div>

              {/* Item 5 */}
              <div className="flex flex-col md:flex-row items-center mb-12 scroll-reveal">
                <div className="flex-1 order-2 md:order-1 md:text-right md:pr-8 mt-4 md:mt-0">
                  <div className="bg-spiderman-darkblue/80 p-6 rounded-lg border border-white/10 inline-block shadow-lg shadow-spiderman-blue/10">
                    <h3 className="text-xl font-bold text-white mb-2">Workshop: Web Development</h3>
                    <p className="text-white/70 mb-2">
                      Learn advanced web development techniques from industry experts.
                    </p>
                    <div className="text-spiderman-red font-medium">3:00 PM - 4:00 PM</div>
                  </div>
                </div>

                <div className="order-1 md:order-2 flex items-center justify-center">
                  <div className="w-10 h-10 bg-spiderman-red rounded-full flex items-center justify-center border-4 border-spiderman-darkblue">
                    <span className="text-white font-bold">5</span>
                  </div>
                </div>

                <div className="flex-1 order-3 md:pl-8 mt-4 md:mt-0"></div>
              </div>

              {/* Item 6 */}
              <div className="flex flex-col md:flex-row items-center mb-12 scroll-reveal">
                <div className="flex-1 order-2 md:order-1 md:text-right md:pr-8 mt-4 md:mt-0"></div>

                <div className="order-1 md:order-2 flex items-center justify-center">
                  <div className="w-10 h-10 bg-spiderman-red rounded-full flex items-center justify-center border-4 border-spiderman-darkblue">
                    <span className="text-white font-bold">6</span>
                  </div>
                </div>

                <div className="flex-1 order-3 md:pl-8 mt-4 md:mt-0">
                  <div className="bg-spiderman-darkblue/80 p-6 rounded-lg border border-white/10 inline-block shadow-lg shadow-spiderman-blue/10">
                    <h3 className="text-xl font-bold text-white mb-2">Dinner</h3>
                    <p className="text-white/70 mb-2">
                      Enjoy a hearty dinner to keep your energy levels up for the night ahead.
                    </p>
                    <div className="text-spiderman-red font-medium">7:00 PM - 8:00 PM</div>
                  </div>
                </div>
              </div>

              {/* Day 2 */}
              <div className="mb-8 text-center">
                <div className="inline-block bg-spiderman-red text-white px-6 py-2 rounded-full text-lg font-bold spidey-sense">
                  Day 2
                </div>
              </div>

              {/* Item 7 */}
              <div className="flex flex-col md:flex-row items-center mb-12 scroll-reveal">
                <div className="flex-1 order-2 md:order-1 md:text-right md:pr-8 mt-4 md:mt-0">
                  <div className="bg-spiderman-darkblue/80 p-6 rounded-lg border border-white/10 inline-block shadow-lg shadow-spiderman-blue/10">
                    <h3 className="text-xl font-bold text-white mb-2">Midnight Snack</h3>
                    <p className="text-white/70 mb-2">Late-night energy boost with snacks and refreshments.</p>
                    <div className="text-spiderman-red font-medium">12:00 AM</div>
                  </div>
                </div>

                <div className="order-1 md:order-2 flex items-center justify-center">
                  <div className="w-10 h-10 bg-spiderman-red rounded-full flex items-center justify-center border-4 border-spiderman-darkblue">
                    <span className="text-white font-bold">7</span>
                  </div>
                </div>

                <div className="flex-1 order-3 md:pl-8 mt-4 md:mt-0"></div>
              </div>

              {/* Item 8 */}
              <div className="flex flex-col md:flex-row items-center mb-12 scroll-reveal">
                <div className="flex-1 order-2 md:order-1 md:text-right md:pr-8 mt-4 md:mt-0"></div>

                <div className="order-1 md:order-2 flex items-center justify-center">
                  <div className="w-10 h-10 bg-spiderman-red rounded-full flex items-center justify-center border-4 border-spiderman-darkblue">
                    <span className="text-white font-bold">8</span>
                  </div>
                </div>

                <div className="flex-1 order-3 md:pl-8 mt-4 md:mt-0">
                  <div className="bg-spiderman-darkblue/80 p-6 rounded-lg border border-white/10 inline-block shadow-lg shadow-spiderman-blue/10">
                    <h3 className="text-xl font-bold text-white mb-2">Breakfast</h3>
                    <p className="text-white/70 mb-2">
                      Start your day with a nutritious breakfast to fuel your coding.
                    </p>
                    <div className="text-spiderman-red font-medium">8:00 AM - 9:00 AM</div>
                  </div>
                </div>
              </div>

              {/* Item 9 */}
              <div className="flex flex-col md:flex-row items-center mb-12 scroll-reveal">
                <div className="flex-1 order-2 md:order-1 md:text-right md:pr-8 mt-4 md:mt-0">
                  <div className="bg-spiderman-darkblue/80 p-6 rounded-lg border border-white/10 inline-block shadow-lg shadow-spiderman-blue/10">
                    <h3 className="text-xl font-bold text-white mb-2">Final Hour</h3>
                    <p className="text-white/70 mb-2">
                      Last chance to finalize your projects. Mentors available for last-minute help.
                    </p>
                    <div className="text-spiderman-red font-medium">10:00 AM - 11:00 AM</div>
                  </div>
                </div>

                <div className="order-1 md:order-2 flex items-center justify-center">
                  <div className="w-10 h-10 bg-spiderman-red rounded-full flex items-center justify-center border-4 border-spiderman-darkblue">
                    <span className="text-white font-bold">9</span>
                  </div>
                </div>

                <div className="flex-1 order-3 md:pl-8 mt-4 md:mt-0"></div>
              </div>

              {/* Item 10 */}
              <div className="flex flex-col md:flex-row items-center mb-12 scroll-reveal">
                <div className="flex-1 order-2 md:order-1 md:text-right md:pr-8 mt-4 md:mt-0"></div>

                <div className="order-1 md:order-2 flex items-center justify-center">
                  <div className="w-10 h-10 bg-spiderman-red rounded-full flex items-center justify-center border-4 border-spiderman-darkblue">
                    <span className="text-white font-bold">10</span>
                  </div>
                </div>

                <div className="flex-1 order-3 md:pl-8 mt-4 md:mt-0">
                  <div className="bg-spiderman-darkblue/80 p-6 rounded-lg border border-white/10 inline-block shadow-lg shadow-spiderman-blue/10">
                    <h3 className="text-xl font-bold text-white mb-2">Project Submissions</h3>
                    <p className="text-white/70 mb-2">Submit your projects for judging. Prepare your presentations.</p>
                    <div className="text-spiderman-red font-medium">11:00 AM</div>
                  </div>
                </div>
              </div>

              {/* Item 11 */}
              <div className="flex flex-col md:flex-row items-center scroll-reveal">
                <div className="flex-1 order-2 md:order-1 md:text-right md:pr-8 mt-4 md:mt-0">
                  <div className="bg-spiderman-darkblue/80 p-6 rounded-lg border border-white/10 inline-block shadow-lg shadow-spiderman-blue/10">
                    <h3 className="text-xl font-bold text-white mb-2">Closing Ceremony & Awards</h3>
                    <p className="text-white/70 mb-2">
                      Project demonstrations, judging results, and prize distribution.
                    </p>
                    <div className="text-spiderman-red font-medium">2:00 PM - 4:00 PM</div>
                  </div>
                </div>

                <div className="order-1 md:order-2 flex items-center justify-center">
                  <div className="w-10 h-10 bg-spiderman-red rounded-full flex items-center justify-center border-4 border-spiderman-darkblue">
                    <span className="text-white font-bold">11</span>
                  </div>
                </div>

                <div className="flex-1 order-3 md:pl-8 mt-4 md:mt-0"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add floating web strings */}
      <div className="absolute top-1/4 right-10 w-0.5 h-32 bg-white/10 origin-top web-swing"></div>
      <div className="absolute bottom-1/3 left-10 w-0.5 h-24 bg-white/10 origin-top web-swing" style={{ animationDelay: "0.7s" }}></div>
      
      {/* Dark gradient transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-spiderman-darkblue to-transparent"></div>
    </section>
  )
}
