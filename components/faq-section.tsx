"use client"

import { useRef, useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ChevronDown, ChevronUp } from "lucide-react"
import Image from "next/image"

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  toggleOpen: () => void
  index: number
}

function FAQItem({ question, answer, isOpen, toggleOpen, index }: FAQItemProps) {
  // Alternate web corner positions based on index
  const isEven = index % 2 === 0
  const webPosition = isEven ? "top-0 right-0" : "bottom-0 left-0"
  const webRotation = isEven ? "rotate-90" : "rotate-0"
  
  return (
    <div className={`relative border-2 border-white/30 rounded-lg overflow-hidden mb-8 ${
      isOpen ? "bg-gradient-to-br from-spiderman-red/30 to-spiderman-darkblue" : "bg-spiderman-darkblue/70"
    } hover:bg-spiderman-darkblue/80 transition-all duration-500 transform ${
      isEven ? "rotate-[-0.5deg]" : "rotate-[0.5deg]"
    } hover:rotate-0 shadow-lg hover:shadow-spiderman-red/20`}>
      
      {/* Decorative web corner */}
      <div className={`absolute ${webPosition} w-20 h-20 opacity-20 ${webRotation}`}>
        <Image src="/images/web-corner.svg" alt="Web" layout="fill" objectFit="contain" />
      </div>
      
      <button
        className="w-full text-left py-5 px-6 flex justify-between items-center focus:outline-none group relative z-10"
        onClick={toggleOpen}
      >
        <h3 className={`font-spiderman-readable ${isOpen ? "text-white text-2xl" : "text-white/90 text-xl"} font-bold transition-all duration-300`}>
          {question}
        </h3>
        <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
          isOpen ? "bg-spiderman-red" : "bg-spiderman-darkblue/90 border border-spiderman-red/50"
        } transition-all duration-300`}>
          {isOpen ? <ChevronUp size={20} className="text-white" /> : <ChevronDown size={20} className="text-spiderman-red" />}
        </div>
      </button>
      
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out relative ${
          isOpen ? "max-h-[500px] pb-8 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {/* Background web pattern when open */}
        {isOpen && (
          <div className="absolute inset-0 opacity-5 z-0">
            <Image src="/images/web-pattern.svg" alt="Web Pattern" layout="fill" objectFit="cover" objectPosition="center" />
          </div>
        )}
        <div className="px-6 relative z-10">
          <div className="w-full h-px bg-white/20 mb-6"></div>
          <p className="text-white/90 text-lg leading-relaxed">{answer}</p>
        </div>
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
    <section id="faq" ref={sectionRef} className="relative py-24 bg-spiderman-darkblue z-10 overflow-hidden">
      {/* Angled background with Spider-Man webbing texture */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-spiderman-blue/20 via-spiderman-darkblue/80 to-spiderman-darkblue skew-y-3"></div>
      
      {/* Comic-style background dots */}
      <div className="absolute inset-0 opacity-5" 
        style={{
          backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
          backgroundSize: "20px 20px"
        }}>
      </div>
      
      {/* Web corners */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-15" 
        style={{
          backgroundImage: "url('/images/web-corner.svg')",
          backgroundSize: "contain",
          backgroundPosition: "top right",
          backgroundRepeat: "no-repeat",
          transform: "rotate(90deg)"
        }}>
      </div>
      <div className="absolute bottom-0 left-0 w-64 h-64 opacity-15" 
        style={{
          backgroundImage: "url('/images/web-corner.svg')",
          backgroundSize: "contain",
          backgroundPosition: "bottom left",
          backgroundRepeat: "no-repeat",
          transform: "rotate(-90deg)"
        }}>
      </div>
      
      {/* Web strings */}
      <div className="absolute top-20 left-10 w-0.5 h-48 bg-spiderman-red/20 origin-top animate-web-swing"></div>
      <div className="absolute top-40 right-20 w-0.5 h-64 bg-spiderman-red/20 origin-top animate-web-swing" style={{ animationDelay: "0.7s" }}></div>
      
      {/* Small Spider-Man silhouette */}
      <div className="absolute bottom-20 right-10 w-24 h-24 opacity-10 animate-bounce" style={{ animationDuration: "3s" }}>
        <Image src="/spiderman3.png" alt="Spider-Man" layout="fill" objectFit="contain" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <div className="inline-block bg-spiderman-red py-4 px-10 rounded-lg transform rotate-[-1deg] shadow-lg mb-10">
            <h2
              ref={titleAnimation.ref}
              style={titleAnimation.style}
              className="text-4xl md:text-5xl font-bold text-white font-spiderman-readable relative drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
            >
              SPIDER-FAQ
            </h2>
          </div>

          <div className="mx-auto max-w-3xl">
            <p ref={descAnimation.ref} style={descAnimation.style} className="text-xl text-white/90 font-spiderman-readable leading-relaxed mb-6">
              Got questions about BitnBuild 2024? Find answers to the most common questions here. 
              <span className="text-spiderman-red font-bold"> Your spider-sense tingling for more info?</span>
            </p>
          </div>
        </div>

        <div 
          ref={faqAnimation.ref}
          style={faqAnimation.style}
          className="max-w-4xl mx-auto"
        >
          {/* Comic-book style speech bubble decoration */}
          <div className="absolute -left-5 top-1/3 transform -translate-y-1/2 w-20 h-20 opacity-30 hidden lg:block">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path d="M20,80 Q10,60 20,40 Q30,20 60,20 Q80,10 90,30 Q100,50 90,70 Q70,90 50,90 Q30,90 20,80 Z" fill="none" stroke="#e53935" strokeWidth="1" />
            </svg>
          </div>
          
          {/* Comic-book style caption */}
          <div className="text-center mb-12">
            <div className="inline-block bg-yellow-400 text-black py-2 px-8 rounded-lg transform rotate-[-2deg] font-bold text-xl shadow-lg font-spiderman-readable">
              Tap a question to reveal the answer!
            </div>
          </div>
          
          {/* FAQ Items as comic panels */}
          {faqItems.map((faq, index) => (
            <FAQItem
              key={index}
              index={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggleOpen={() => toggleFAQ(index)}
            />
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-white/90 text-xl mb-6 font-spiderman-readable">Still have questions? Your friendly neighborhood team is here to help!</p>
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-spiderman-red to-spiderman-red/80 text-white py-4 px-10 rounded-lg hover:from-spiderman-red/90 hover:to-spiderman-red transition-all font-bold text-lg transform hover:scale-105 relative overflow-hidden group shadow-lg"
          >
            <span className="relative z-10 font-spiderman-readable">CONTACT US</span>
            <span className="absolute inset-0 w-0 bg-white/10 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
      </div>
      
      {/* Add gradient transition to footer */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-spiderman-darkblue to-transparent z-0"></div>
      
      {/* Add global styles for animations */}
      <style jsx global>{`
        @keyframes web-swing {
          0% { transform: rotate(5deg); }
          50% { transform: rotate(-5deg); }
          100% { transform: rotate(5deg); }
        }
        
        .animate-web-swing {
          animation: web-swing 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
} 