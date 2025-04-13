"use client"
import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Code, Cpu, Globe, Shield, Zap, Database } from "lucide-react"

export default function ChallengesSection() {
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

  // Create animations for each challenge card
  const challengeAnimations = [
    useScrollAnimation<HTMLDivElement>({
      effect: "fade",
      direction: "up",
      distance: 40,
      duration: 0.8,
      delay: 0.2,
    }),
    useScrollAnimation<HTMLDivElement>({
      effect: "fade",
      direction: "up",
      distance: 40,
      duration: 0.8,
      delay: 0.3,
    }),
    useScrollAnimation<HTMLDivElement>({
      effect: "fade",
      direction: "up",
      distance: 40,
      duration: 0.8,
      delay: 0.4,
    }),
    useScrollAnimation<HTMLDivElement>({
      effect: "fade",
      direction: "up",
      distance: 40,
      duration: 0.8,
      delay: 0.5,
    }),
    useScrollAnimation<HTMLDivElement>({
      effect: "fade",
      direction: "up",
      distance: 40,
      duration: 0.8,
      delay: 0.6,
    }),
    useScrollAnimation<HTMLDivElement>({
      effect: "fade",
      direction: "up",
      distance: 40,
      duration: 0.8,
      delay: 0.7,
    }),
  ]

  return (
    <section id="challenges" className="relative py-20 bg-spiderman-blue z-10">
      {/* Background with Spider-Man image and gradient */}
      <div className="absolute inset-0 z-0">
        <Image src="/spider-man-1.png" alt="Spider-Man" fill className="object-cover object-center opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-b from-spiderman-darkblue to-spiderman-blue"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2
            ref={titleAnimation.ref}
            style={titleAnimation.style}
            className="text-3xl md:text-4xl font-bold text-white mb-6 relative inline-block"
          >
            Hackathon Challenges
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-spiderman-red"></span>
          </h2>

          <p ref={descAnimation.ref} style={descAnimation.style} className="text-lg text-white/80">
            Choose from these exciting challenges and put your web-slinging coding skills to the test!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            ref={challengeAnimations[0].ref}
            style={challengeAnimations[0].style}
            className="bg-spiderman-darkblue p-6 rounded-lg border border-white/10 hover:border-spiderman-red/50 transition-colors group"
          >
            <div className="w-14 h-14 bg-spiderman-red/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-spiderman-red/30 transition-colors">
              <Globe className="h-8 w-8 text-spiderman-red" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Web Development</h3>
            <p className="text-white/70 mb-4">
              Create responsive web applications that solve real-world problems using modern frameworks and
              technologies.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs bg-spiderman-red/20 text-white/90 px-2 py-1 rounded">React</span>
              <span className="text-xs bg-spiderman-red/20 text-white/90 px-2 py-1 rounded">Next.js</span>
              <span className="text-xs bg-spiderman-red/20 text-white/90 px-2 py-1 rounded">Tailwind</span>
            </div>
          </div>

          <div
            ref={challengeAnimations[1].ref}
            style={challengeAnimations[1].style}
            className="bg-spiderman-darkblue p-6 rounded-lg border border-white/10 hover:border-spiderman-red/50 transition-colors group"
          >
            <div className="w-14 h-14 bg-spiderman-red/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-spiderman-red/30 transition-colors">
              <Cpu className="h-8 w-8 text-spiderman-red" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">AI & Machine Learning</h3>
            <p className="text-white/70 mb-4">
              Develop intelligent applications that leverage AI and ML to provide innovative solutions.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs bg-spiderman-red/20 text-white/90 px-2 py-1 rounded">TensorFlow</span>
              <span className="text-xs bg-spiderman-red/20 text-white/90 px-2 py-1 rounded">PyTorch</span>
              <span className="text-xs bg-spiderman-red/20 text-white/90 px-2 py-1 rounded">NLP</span>
            </div>
          </div>

          <div
            ref={challengeAnimations[2].ref}
            style={challengeAnimations[2].style}
            className="bg-spiderman-darkblue p-6 rounded-lg border border-white/10 hover:border-spiderman-red/50 transition-colors group"
          >
            <div className="w-14 h-14 bg-spiderman-red/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-spiderman-red/30 transition-colors">
              <Shield className="h-8 w-8 text-spiderman-red" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Cybersecurity</h3>
            <p className="text-white/70 mb-4">
              Build tools and solutions that enhance digital security and protect against cyber threats.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs bg-spiderman-red/20 text-white/90 px-2 py-1 rounded">Encryption</span>
              <span className="text-xs bg-spiderman-red/20 text-white/90 px-2 py-1 rounded">Blockchain</span>
              <span className="text-xs bg-spiderman-red/20 text-white/90 px-2 py-1 rounded">Authentication</span>
            </div>
          </div>

          <div
            ref={challengeAnimations[3].ref}
            style={challengeAnimations[3].style}
            className="bg-spiderman-darkblue p-6 rounded-lg border border-white/10 hover:border-spiderman-red/50 transition-colors group"
          >
            <div className="w-14 h-14 bg-spiderman-red/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-spiderman-red/30 transition-colors">
              <Zap className="h-8 w-8 text-spiderman-red" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">IoT & Hardware</h3>
            <p className="text-white/70 mb-4">
              Connect the physical and digital worlds with innovative IoT solutions and hardware integrations.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs bg-spiderman-red/20 text-white/90 px-2 py-1 rounded">Arduino</span>
              <span className="text-xs bg-spiderman-red/20 text-white/90 px-2 py-1 rounded">Raspberry Pi</span>
              <span className="text-xs bg-spiderman-red/20 text-white/90 px-2 py-1 rounded">Sensors</span>
            </div>
          </div>

          <div
            ref={challengeAnimations[4].ref}
            style={challengeAnimations[4].style}
            className="bg-spiderman-darkblue p-6 rounded-lg border border-white/10 hover:border-spiderman-red/50 transition-colors group"
          >
            <div className="w-14 h-14 bg-spiderman-red/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-spiderman-red/30 transition-colors">
              <Code className="h-8 w-8 text-spiderman-red" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Mobile Development</h3>
            <p className="text-white/70 mb-4">
              Create mobile applications that provide seamless experiences across different devices and platforms.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs bg-spiderman-red/20 text-white/90 px-2 py-1 rounded">React Native</span>
              <span className="text-xs bg-spiderman-red/20 text-white/90 px-2 py-1 rounded">Flutter</span>
              <span className="text-xs bg-spiderman-red/20 text-white/90 px-2 py-1 rounded">Swift</span>
            </div>
          </div>

          <div
            ref={challengeAnimations[5].ref}
            style={challengeAnimations[5].style}
            className="bg-spiderman-darkblue p-6 rounded-lg border border-white/10 hover:border-spiderman-red/50 transition-colors group"
          >
            <div className="w-14 h-14 bg-spiderman-red/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-spiderman-red/30 transition-colors">
              <Database className="h-8 w-8 text-spiderman-red" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Cloud Computing</h3>
            <p className="text-white/70 mb-4">
              Leverage cloud technologies to build scalable, efficient, and powerful applications.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs bg-spiderman-red/20 text-white/90 px-2 py-1 rounded">AWS</span>
              <span className="text-xs bg-spiderman-red/20 text-white/90 px-2 py-1 rounded">Azure</span>
              <span className="text-xs bg-spiderman-red/20 text-white/90 px-2 py-1 rounded">Serverless</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Dark gradient transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-spiderman-darkblue to-transparent"></div>
    </section>
  )
}
