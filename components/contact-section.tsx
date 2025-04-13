"use client"

import { useRef, useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import Image from "next/image"
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa"

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

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

  const formAnimation = useScrollAnimation<HTMLDivElement>({
    effect: "fade",
    direction: "right",
    distance: 40,
    duration: 0.8,
    delay: 0.3,
  })

  const contactInfoAnimation = useScrollAnimation<HTMLDivElement>({
    effect: "fade",
    direction: "left",
    distance: 40,
    duration: 0.8,
    delay: 0.5,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      
      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
      
      // Reset submission state after showing success message
      setTimeout(() => {
        setIsSubmitted(false)
      }, 3000)
    }, 1500)
  }

  return (
    <section id="contact" className="relative py-20 bg-spiderman-darkblue">
      {/* Background gradient and overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-spiderman-darkblue via-spiderman-darkblue to-spiderman-blue/30"></div>
      
      {/* Spider web corners */}
      <div className="absolute top-0 right-0 w-32 h-32 opacity-10" 
        style={{
          backgroundImage: "url('/web-corner.png')",
          backgroundSize: "contain",
          backgroundPosition: "top right",
          backgroundRepeat: "no-repeat",
          transform: "rotate(90deg)"
        }}>
      </div>
      <div className="absolute bottom-0 left-0 w-32 h-32 opacity-10" 
        style={{
          backgroundImage: "url('/web-corner.png')",
          backgroundSize: "contain",
          backgroundPosition: "bottom left",
          backgroundRepeat: "no-repeat",
          transform: "rotate(-90deg)"
        }}>
      </div>
      
      {/* Decorative web strings */}
      <div className="absolute top-40 left-1/4 w-0.5 h-24 bg-white/10 origin-top web-swing"></div>
      <div className="absolute top-20 right-1/4 w-0.5 h-32 bg-white/10 origin-top web-swing" style={{ animationDelay: "0.5s" }}></div>
      
      {/* Spider silhouette */}
      <div className="absolute bottom-20 right-20 w-24 h-24 opacity-5">
        <Image src="/spider-logo.svg" alt="Spider Symbol" layout="fill" objectFit="contain" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 
              ref={titleAnimation.ref}
              style={titleAnimation.style}
              className="text-3xl md:text-4xl font-bold text-white mb-6 relative inline-block"
            >
              CONTACT US
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-spiderman-red"></span>
            </h2>
            <p 
              ref={descAnimation.ref}
              style={descAnimation.style}
              className="text-lg text-white/80"
            >
              Have questions about the hackathon? Reach out to us!
            </p>
          </div>

          <div 
            ref={formAnimation.ref}
            style={formAnimation.style}
            className="bg-spiderman-darkblue/60 backdrop-blur-md rounded-lg border border-white/10 p-8 relative overflow-hidden"
          >
            {/* Web pattern on form background */}
            <div className="absolute inset-0 spiderweb-pattern opacity-5 z-0"></div>
            
            <form onSubmit={handleSubmit} className="relative z-10">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-white/80 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    className="w-full bg-spiderman-blue/20 border border-white/10 rounded-md px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-spiderman-red/50 transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white/80 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your email"
                    className="w-full bg-spiderman-blue/20 border border-white/10 rounded-md px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-spiderman-red/50 transition-all duration-300"
                    required
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="block text-white/80 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Message subject"
                  className="w-full bg-spiderman-blue/20 border border-white/10 rounded-md px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-spiderman-red/50 transition-all duration-300"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-white/80 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Your message"
                  className="w-full bg-spiderman-blue/20 border border-white/10 rounded-md px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-spiderman-red/50 transition-all duration-300"
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-spiderman-red to-spiderman-red/80 text-white font-bold py-3 px-8 rounded-md hover:from-spiderman-red/90 hover:to-spiderman-red transition-all duration-300 transform hover:scale-105 relative group"
                >
                  <span className="relative z-10">Send Message</span>
                  <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-md"></span>
                </button>
              </div>
            </form>
          </div>

          <div 
            ref={contactInfoAnimation.ref}
            style={contactInfoAnimation.style}
            className="mt-12 grid md:grid-cols-3 gap-6 text-center"
          >
            <div className="bg-spiderman-darkblue/40 backdrop-blur-sm rounded-lg border border-white/10 p-6 hover:bg-spiderman-darkblue/60 transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 bg-spiderman-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaEnvelope className="text-spiderman-red" size={20} />
              </div>
              <h3 className="text-white font-bold mb-2">Email Us</h3>
              <p className="text-white/80">contact@bitNbuild.com</p>
            </div>
            <div className="bg-spiderman-darkblue/40 backdrop-blur-sm rounded-lg border border-white/10 p-6 hover:bg-spiderman-darkblue/60 transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 bg-spiderman-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaPhone className="text-spiderman-red" size={20} />
              </div>
              <h3 className="text-white font-bold mb-2">Call Us</h3>
              <p className="text-white/80">+91 9876543210</p>
            </div>
            <div className="bg-spiderman-darkblue/40 backdrop-blur-sm rounded-lg border border-white/10 p-6 hover:bg-spiderman-darkblue/60 transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 bg-spiderman-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaMapMarkerAlt className="text-spiderman-red" size={20} />
              </div>
              <h3 className="text-white font-bold mb-2">Location</h3>
              <p className="text-white/80">Mumbai, Maharashtra</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Dark gradient transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0c1b33] to-transparent"></div>
    </section>
  )
} 