"use client"
import { useState } from "react"
import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Code, Cpu, Globe, Shield, Zap, Database } from "lucide-react"

export default function ChallengesSection() {
  const [activeChallenge, setActiveChallenge] = useState(0)

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

  const challengeAnimation = useScrollAnimation<HTMLDivElement>({
    effect: "fade",
    direction: "up",
    distance: 40,
    duration: 0.8,
    delay: 0.4,
  })

  const challenges = [
    {
      id: 0,
      title: "Web Development",
      icon: <Globe className="h-8 w-8 text-spiderman-red" />,
      description: "Create responsive web applications that solve real-world problems using modern frameworks and technologies.",
      longDescription: "Harness the power of the latest web technologies to build dynamic, responsive web applications that address real-world challenges. From creating elegant user interfaces to implementing complex backend functionality, this challenge invites you to showcase your web development prowess.",
      technologies: ["React", "Next.js", "Tailwind", "Node.js", "Express", "MongoDB"],
      color: "from-red-600 to-blue-600",
      image: "/web-dev-challenge.jpg"
    },
    {
      id: 1,
      title: "AI & Machine Learning",
      icon: <Cpu className="h-8 w-8 text-spiderman-red" />,
      description: "Develop intelligent applications that leverage AI and ML to provide innovative solutions.",
      longDescription: "Push the boundaries of artificial intelligence and machine learning to create intelligent applications that can learn, adapt, and solve complex problems. Whether it's natural language processing, computer vision, or predictive analytics, this challenge is your opportunity to showcase how AI can transform our world.",
      technologies: ["TensorFlow", "PyTorch", "NLP", "Computer Vision", "Deep Learning", "Data Science"],
      color: "from-purple-600 to-indigo-600",
      image: "/ai-ml-challenge.jpg"
    },
    {
      id: 2,
      title: "Cybersecurity",
      icon: <Shield className="h-8 w-8 text-spiderman-red" />,
      description: "Build tools and solutions that enhance digital security and protect against cyber threats.",
      longDescription: "In an increasingly connected world, security is paramount. Design and implement solutions that protect data, systems, and users from cyber threats. From building secure authentication systems to identifying vulnerabilities, this challenge invites you to become a digital guardian.",
      technologies: ["Encryption", "Blockchain", "Authentication", "Penetration Testing", "Secure Coding", "Risk Assessment"],
      color: "from-green-600 to-teal-600",
      image: "/cybersecurity-challenge.jpg"
    },
    {
      id: 3,
      title: "IoT & Hardware",
      icon: <Zap className="h-8 w-8 text-spiderman-red" />,
      description: "Connect the physical and digital worlds with innovative IoT solutions and hardware integrations.",
      longDescription: "Bridge the gap between the physical and digital realms by creating IoT solutions that collect, analyze, and act on real-world data. From smart home devices to industrial automation systems, this challenge encourages you to build solutions that make our world more connected and efficient.",
      technologies: ["Arduino", "Raspberry Pi", "Sensors", "Embedded Systems", "MQTT", "Edge Computing"],
      color: "from-yellow-500 to-orange-600",
      image: "/iot-challenge.jpg"
    },
    {
      id: 4,
      title: "Mobile Development",
      icon: <Code className="h-8 w-8 text-spiderman-red" />,
      description: "Create mobile applications that provide seamless experiences across different devices and platforms.",
      longDescription: "Design and develop mobile applications that deliver exceptional user experiences across various devices and platforms. Whether it's a productivity tool, social platform, or immersive game, this challenge invites you to create mobile solutions that users will love to have in their pockets.",
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Mobile UI/UX", "Cross-platform"],
      color: "from-sky-500 to-blue-500",
      image: "/mobile-dev-challenge.jpg"
    },
    {
      id: 5,
      title: "Cloud Computing",
      icon: <Database className="h-8 w-8 text-spiderman-red" />,
      description: "Leverage cloud technologies to build scalable, efficient, and powerful applications.",
      longDescription: "Harness the power of cloud computing to build scalable, resilient, and efficient applications. From serverless architectures to container orchestration, this challenge encourages you to leverage cloud technologies to create solutions that can handle the demands of modern computing.",
      technologies: ["AWS", "Azure", "Serverless", "Docker", "Kubernetes", "Microservices"],
      color: "from-blue-600 to-indigo-800",
      image: "/cloud-challenge.jpg"
    },
  ]

  return (
    <section id="challenges" className="relative py-20 bg-spiderman-blue z-10 overflow-hidden">
      {/* Background with Spider-Man image and gradient */}
      <div className="absolute inset-0 z-0">
        <Image src="/spider-man-1.png" alt="Spider-Man" fill className="object-cover object-center opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-b from-spiderman-darkblue to-spiderman-blue"></div>
      </div>
      
      {/* Add web corners */}
      <div className="spiderweb-corner spiderweb-corner-tl"></div>
      <div className="spiderweb-corner spiderweb-corner-tr"></div>
      <div className="spiderweb-corner spiderweb-corner-br"></div>
      <div className="spiderweb-corner spiderweb-corner-bl"></div>
      
      {/* Decorative web strings */}
      <div className="absolute top-40 left-20 w-0.5 h-40 bg-white/10 origin-top web-swing"></div>
      <div className="absolute top-1/4 right-20 w-0.5 h-32 bg-white/10 origin-top web-swing" style={{ animationDelay: "0.3s" }}></div>
      <div className="absolute bottom-40 left-1/3 w-0.5 h-24 bg-white/10 origin-top web-swing" style={{ animationDelay: "0.6s" }}></div>

      {/* Spider symbol */}
      <div className="spider-symbol absolute w-48 h-48 right-10 top-1/4 opacity-5 spider-crawl"></div>
      <div className="spider-symbol absolute w-32 h-32 left-10 bottom-1/4 opacity-5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2
            ref={titleAnimation.ref}
            style={titleAnimation.style}
            className="text-3xl md:text-5xl font-bold text-white mb-6 relative inline-block"
          >
            Hackathon Challenges
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-spiderman-red"></span>
          </h2>

          <p ref={descAnimation.ref} style={descAnimation.style} className="text-lg text-white/80">
            Choose from these exciting challenges and put your web-slinging coding skills to the test!
          </p>
        </div>

        {/* Challenge Navigation */}
        <div className="flex justify-center flex-wrap gap-3 mb-12">
          {challenges.map((challenge, index) => (
            <button
              key={challenge.id}
              onClick={() => setActiveChallenge(index)}
              className={`px-4 py-3 rounded-full transition-all duration-300 flex items-center space-x-2 ${
                activeChallenge === index 
                  ? "bg-spiderman-red text-white shadow-lg shadow-spiderman-red/20" 
                  : "bg-spiderman-darkblue/50 text-white/70 hover:bg-spiderman-darkblue hover:text-white/90"
              }`}
            >
              <span className={`${activeChallenge === index ? "scale-110" : "scale-100"} transition-transform duration-300`}>
                {challenge.icon}
              </span>
              <span className="font-medium">{challenge.title}</span>
            </button>
          ))}
        </div>

        {/* Active Challenge Display */}
        <div
          ref={challengeAnimation.ref}
          style={challengeAnimation.style}
          className="relative bg-spiderman-darkblue rounded-2xl overflow-hidden shadow-2xl border border-white/10"
        >
          {/* Background Web Pattern */}
          <div className="absolute inset-0 opacity-10 spiderweb-pattern mix-blend-overlay"></div>

          {/* Web corner decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 opacity-20" 
            style={{
              backgroundImage: "url('/web-corner.png')",
              backgroundSize: "contain",
              backgroundPosition: "top right",
              backgroundRepeat: "no-repeat",
              transform: "rotate(90deg)"
            }}>
          </div>
          
          <div className="lg:flex">
            {/* Image/icon section */}
            <div className={`lg:w-1/3 bg-gradient-to-br ${challenges[activeChallenge].color} p-10 md:p-16 flex flex-col items-center justify-center text-center`}>
              <div className="w-24 h-24 md:w-32 md:h-32 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 shadow-lg spidey-sense">
                <div className="transform scale-150">
                  {challenges[activeChallenge].icon}
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{challenges[activeChallenge].title}</h3>
              <p className="text-white/90 text-sm md:text-base">
                {challenges[activeChallenge].description}
              </p>
            </div>
            
            {/* Details section */}
            <div className="lg:w-2/3 p-8 md:p-12">
              <div className="flex flex-col h-full justify-between">
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Challenge Details</h4>
                  <p className="text-white/80 mb-8">
                    {challenges[activeChallenge].longDescription}
                  </p>
                  
                  <h4 className="text-xl font-bold text-white mb-3">Suggested Technologies</h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {challenges[activeChallenge].technologies.map((tech, index) => (
                      <span key={index} className="text-sm bg-spiderman-red/20 text-white/90 px-3 py-2 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mt-6">
                  <div className="flex flex-col sm:flex-row items-center gap-4 pt-6 border-t border-white/10">
                    <div className="w-full sm:w-auto">
                      <button className="w-full sm:w-auto bg-spiderman-red hover:bg-spiderman-red/90 text-white py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-all group">
                        <span>Select This Challenge</span>
                        <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>
                    </div>
                    <div className="text-white/60 text-sm font-medium">
                      <span className="inline-block mr-2">Challenge Difficulty:</span>
                      <div className="inline-flex">
                        <span className="w-2 h-2 rounded-full bg-spiderman-red mx-0.5"></span>
                        <span className="w-2 h-2 rounded-full bg-spiderman-red mx-0.5"></span>
                        <span className="w-2 h-2 rounded-full bg-spiderman-red mx-0.5"></span>
                        <span className="w-2 h-2 rounded-full bg-white/30 mx-0.5"></span>
                        <span className="w-2 h-2 rounded-full bg-white/30 mx-0.5"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating web string */}
      <div className="absolute bottom-20 left-1/4 w-0.5 h-24 bg-white/10 origin-top web-swing"></div>
      <div className="absolute bottom-10 right-1/3 w-0.5 h-32 bg-white/10 origin-top web-swing" style={{ animationDelay: "0.5s" }}></div>
      
      {/* Dark gradient transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-spiderman-darkblue to-transparent"></div>
    </section>
  )
}
