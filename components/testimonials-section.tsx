"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    quote:
      "Participating in Bit N Build was one of the most rewarding experiences of my coding journey. The Spider-Man theme added an extra layer of excitement to the event!",
    author: "Mary Jane Watson",
    role: "Frontend Developer",
    avatar: "/placeholder.svg?height=50&width=50",
  },
  {
    quote:
      "The mentors at Bit N Build were incredibly helpful. They guided our team through challenges and helped us create something we're truly proud of.",
    author: "Harry Osborn",
    role: "UX Designer",
    avatar: "/placeholder.svg?height=50&width=50",
  },
  {
    quote:
      "As a first-time hackathon participant, I was nervous, but the welcoming atmosphere at Bit N Build made it an amazing experience. Can't wait for next year!",
    author: "Gwen Stacy",
    role: "Full Stack Developer",
    avatar: "/placeholder.svg?height=50&width=50",
  },
  {
    quote:
      "The technical challenges pushed our limits, but that's exactly what made winning so satisfying. The prizes were amazing too!",
    author: "Miles Morales",
    role: "AI Specialist",
    avatar: "/placeholder.svg?height=50&width=50",
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative py-20 bg-spiderman-darkblue z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center relative inline-block">
            What Participants Say
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-spiderman-red"></span>
          </h2>

          <div className="relative">
            <div className="bg-spiderman-blue/30 p-8 rounded-lg border border-white/10 relative overflow-hidden">
              {/* Web pattern overlay */}
              <div className="absolute inset-0 spider-web-bg opacity-10"></div>

              <div className="relative z-10">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 text-spiderman-red opacity-30"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  <blockquote className="text-xl text-white mb-6">{testimonials[currentIndex].quote}</blockquote>

                  <div className="flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-spiderman-red">
                      <Image
                        src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                        alt={testimonials[currentIndex].author}
                        width={50}
                        height={50}
                        className="object-cover"
                      />
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-white">{testimonials[currentIndex].author}</div>
                      <div className="text-white/70 text-sm">{testimonials[currentIndex].role}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-6 gap-4">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-spiderman-blue/50 text-white hover:bg-spiderman-red/80 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <div className="flex gap-2 items-center">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-spiderman-red" : "bg-white/30"}`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-spiderman-blue/50 text-white hover:bg-spiderman-red/80 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-6">
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
      </div>
    </section>
  )
}
