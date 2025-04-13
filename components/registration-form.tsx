"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    teamName: "",
    teamSize: "2",
    experience: "beginner",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
    }, 1500)
  }

  return (
    <section id="register" className="relative py-20 bg-spiderman-darkblue z-10">
      {/* Background with Spider-Man image */}
      <div className="absolute inset-0 z-0 opacity-10">
        <Image src="/spider-man-4.png" alt="Spider-Man" fill className="object-cover object-center" />
        <div className="absolute inset-0 bg-spiderman-darkblue/80"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative inline-block">
                Join The Hackathon
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-spiderman-red"></span>
              </h2>

              <p className="text-lg text-white/80 mb-8">
                Ready to swing into action? Register now to secure your spot at Bit N Build. With great coding comes
                great opportunity!
              </p>

              <div className="relative h-[300px] md:h-[400px] animate-web-swing">
                <Image src="/spider-man-2.png" alt="Spider-Man" fill className="object-contain" />
              </div>

              <div className="mt-8">
                <blockquote className="italic text-white/80 border-l-4 border-spiderman-red pl-4 py-2">
                  "With great power comes great responsibility. The power to code, the responsibility to innovate."
                </blockquote>
              </div>
            </div>

            <div className="bg-spiderman-blue/30 p-8 rounded-lg border border-white/10 relative overflow-hidden">
              {/* Web pattern overlay */}
              <div className="absolute inset-0 spider-web-bg opacity-10"></div>

              {/* Form content */}
              <div className="relative z-10">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-white mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-spiderman-darkblue/80 border border-white/20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-spiderman-red"
                        placeholder="Peter Parker"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-white mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-spiderman-darkblue/80 border border-white/20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-spiderman-red"
                        placeholder="peter@dailybugle.com"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="teamName" className="block text-white mb-2">
                          Team Name
                        </label>
                        <input
                          type="text"
                          id="teamName"
                          name="teamName"
                          required
                          value={formData.teamName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-spiderman-darkblue/80 border border-white/20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-spiderman-red"
                          placeholder="Web Slingers"
                        />
                      </div>

                      <div>
                        <label htmlFor="teamSize" className="block text-white mb-2">
                          Team Size
                        </label>
                        <select
                          id="teamSize"
                          name="teamSize"
                          required
                          value={formData.teamSize}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-spiderman-darkblue/80 border border-white/20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-spiderman-red"
                        >
                          <option value="1">Solo</option>
                          <option value="2">2 Members</option>
                          <option value="3">3 Members</option>
                          <option value="4">4 Members</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="experience" className="block text-white mb-2">
                        Experience Level
                      </label>
                      <select
                        id="experience"
                        name="experience"
                        required
                        value={formData.experience}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-spiderman-darkblue/80 border border-white/20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-spiderman-red"
                      >
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-white mb-2">
                        Additional Information
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-spiderman-darkblue/80 border border-white/20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-spiderman-red"
                        placeholder="Tell us about your team or any special requirements"
                      ></textarea>
                    </div>

                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="terms"
                        required
                        className="h-4 w-4 text-spiderman-red focus:ring-spiderman-red border-white/20 rounded"
                      />
                      <label htmlFor="terms" className="ml-2 block text-sm text-white/80">
                        I agree to the{" "}
                        <a href="#" className="text-spiderman-red hover:underline">
                          Terms and Conditions
                        </a>
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-spiderman-red text-white py-3 rounded-md hover:bg-spiderman-red/80 transition-colors font-medium flex items-center justify-center web-button"
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Processing...
                        </>
                      ) : (
                        "Register Now"
                      )}
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-20 h-20 bg-spiderman-red/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 text-spiderman-red"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Registration Complete!</h3>
                    <p className="text-white/80 mb-6">
                      Thanks for registering for Bit N Build! We've sent a confirmation email with all the details you
                      need.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="bg-spiderman-red text-white px-6 py-2 rounded-md hover:bg-spiderman-red/80 transition-colors font-medium"
                    >
                      Register Another Team
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
