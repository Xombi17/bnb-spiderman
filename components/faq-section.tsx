"use client"

import { useRef, useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ChevronDown, ChevronUp } from "lucide-react"

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  toggleOpen: () => void
}

function FAQItem({ question, answer, isOpen, toggleOpen }: FAQItemProps) {
  return (
    <div className="border border-white/10 rounded-lg overflow-hidden mb-4 bg-spiderman-blue/30 hover:bg-spiderman-blue/40 transition-colors duration-300">
      <button
        className="w-full text-left py-4 px-6 flex justify-between items-center focus:outline-none"
        onClick={toggleOpen}
      >
        <h3 className="text-white font-medium text-lg">{question}</h3>
        <div className="text-spiderman-red">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </button>
      <div
        className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-white/80">{answer}</p>
      </div>
    </div>
  )
}

export default function FAQSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [openIndex, setOpenIndex] = useState<number | null>(0)

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

  const faqAnimation = useScrollAnimation<HTMLDivElement>({
    effect: "fade",
    direction: "up",
    distance: 40,
    duration: 0.8,
    delay: 0.3,
  })

  const faqItems = [
    {
      question: "What is BitnBuild 2024?",
      answer: "BitnBuild 2024 is a 24-hour hackathon organized by GDSC-CRCE in Mumbai, India. It brings together developers, designers, and innovators to build creative solutions to real-world problems.",
    },
    {
      question: "Who can participate?",
      answer: "BitnBuild is open to students, professionals, and tech enthusiasts of all skill levels. Participants can form teams of 2-4 members or join as individuals and find teammates at the event.",
    },
    {
      question: "Is there a registration fee?",
      answer: "No, participation in BitnBuild 2024 is completely free. However, registration is mandatory as spaces are limited.",
    },
    {
      question: "What should I bring to the hackathon?",
      answer: "Participants should bring their laptops, chargers, any hardware required for their projects, and personal items for an overnight stay. Food and refreshments will be provided throughout the event.",
    },
    {
      question: "Will there be mentors available?",
      answer: "Yes, experienced mentors from various technical backgrounds will be available throughout the hackathon to guide teams and provide assistance with their projects.",
    },
    {
      question: "How are projects judged?",
      answer: "Projects will be evaluated based on innovation, technical complexity, design, presentation, and addressing the hackathon challenges. Our panel of judges includes industry experts and professionals.",
    },
    {
      question: "Can I start working on my project before the event?",
      answer: "No, coding and development must begin at the start of the hackathon. However, you can brainstorm ideas and create wireframes or mockups beforehand.",
    },
    {
      question: "Is accommodation provided?",
      answer: "The event venue will remain open for the entire 24 hours. While there are no formal sleeping arrangements, there will be designated rest areas where participants can take breaks.",
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" ref={sectionRef} className="relative py-20 bg-spiderman-darkblue z-10">
      {/* Background with gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-spiderman-blue/20 to-spiderman-darkblue"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2
            ref={titleAnimation.ref}
            style={titleAnimation.style}
            className="text-3xl md:text-4xl font-bold text-white mb-6 relative inline-block"
          >
            FREQUENTLY ASKED QUESTIONS
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-spiderman-red"></span>
          </h2>

          <div>
            <p ref={descAnimation.ref} style={descAnimation.style} className="text-lg text-white/80 mb-6">
              Got questions about BitnBuild 2024? Find answers to the most common questions here. If you don't find what you're looking for, feel free to contact us.
            </p>
          </div>
        </div>

        <div 
          ref={faqAnimation.ref}
          style={faqAnimation.style}
          className="max-w-3xl mx-auto"
        >
          {faqItems.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggleOpen={() => toggleFAQ(index)}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-white/80 mb-6">Still have questions?</p>
          <a
            href="#contact"
            className="inline-block bg-spiderman-red text-white py-3 px-8 rounded-md hover:bg-spiderman-red/80 transition-all font-medium web-button relative overflow-hidden group"
          >
            <span className="relative z-10">Contact Us</span>
            <span className="absolute inset-0 w-0 bg-white/10 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
      </div>
    </section>
  )
} 