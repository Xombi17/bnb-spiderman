import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-spiderman-darkblue border-t border-white/10 pt-12 pb-6 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="relative w-10 h-10">
                <Image
                  src="/spider-logo.svg"
                  alt="Bit N Build Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold text-white">Bit N Build</span>
            </Link>

            <p className="text-white/70 mb-6">
              A 24-hour hackathon where innovation meets creativity. Join us for an unforgettable coding adventure!
            </p>

            <div className="flex gap-4">
              <Link href="#" className="text-white/70 hover:text-spiderman-red transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-white/70 hover:text-spiderman-red transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-white/70 hover:text-spiderman-red transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-white/70 hover:text-spiderman-red transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-white/70 hover:text-spiderman-red transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-white/70 hover:text-spiderman-red transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#challenges" className="text-white/70 hover:text-spiderman-red transition-colors">
                  Challenges
                </Link>
              </li>
              <li>
                <Link href="#schedule" className="text-white/70 hover:text-spiderman-red transition-colors">
                  Schedule
                </Link>
              </li>
              <li>
                <Link href="#register" className="text-white/70 hover:text-spiderman-red transition-colors">
                  Register
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-spiderman-red transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-white/70">
                <span className="block">Tech Innovation Center</span>
                <span className="block">123 Web Avenue</span>
                <span className="block">New York, NY 10001</span>
              </li>
              <li>
                <Link
                  href="mailto:info@bitnbuild.com"
                  className="text-white/70 hover:text-spiderman-red transition-colors"
                >
                  info@bitnbuild.com
                </Link>
              </li>
              <li>
                <Link href="tel:+1234567890" className="text-white/70 hover:text-spiderman-red transition-colors">
                  +1 (234) 567-890
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Newsletter</h3>
            <p className="text-white/70 mb-4">
              Subscribe to our newsletter for updates on future events and hackathon news.
            </p>

            <form className="space-y-2">
              <div>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 bg-spiderman-blue/50 border border-white/20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-spiderman-red"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-spiderman-red text-white px-4 py-2 rounded-md hover:bg-spiderman-red/80 transition-colors web-button"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Bit N Build Hackathon. All rights reserved.
          </p>

          <div className="flex gap-4">
            <Link href="#" className="text-white/50 text-sm hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-white/50 text-sm hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-white/50 text-sm hover:text-white transition-colors">
              Code of Conduct
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
