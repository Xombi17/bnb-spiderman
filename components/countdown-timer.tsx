"use client"

import { useEffect, useState } from "react"

interface CountdownTimerProps {
  targetDate: Date
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      const d = Math.floor(difference / (1000 * 60 * 60 * 24))
      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const s = Math.floor((difference % (1000 * 60)) / 1000)

      setDays(d)
      setHours(h)
      setMinutes(m)
      setSeconds(s)
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  return (
    <div className="grid grid-cols-4 gap-4 md:gap-8">
      <div className="flex flex-col items-center">
        <div className="bg-spiderman-darkblue border-2 border-spiderman-red rounded-lg w-16 h-16 md:w-24 md:h-24 flex items-center justify-center mb-2">
          <span className="text-2xl md:text-4xl lg:text-5xl text-white font-bold font-spiderman-readable">{days}</span>
        </div>
        <span className="text-sm text-white/80">DAYS</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-spiderman-darkblue border-2 border-spiderman-red rounded-lg w-16 h-16 md:w-24 md:h-24 flex items-center justify-center mb-2">
          <span className="text-2xl md:text-4xl lg:text-5xl text-white font-bold font-spiderman-readable">{hours}</span>
        </div>
        <span className="text-sm text-white/80">HOURS</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-spiderman-darkblue border-2 border-spiderman-red rounded-lg w-16 h-16 md:w-24 md:h-24 flex items-center justify-center mb-2">
          <span className="text-2xl md:text-4xl lg:text-5xl text-white font-bold font-spiderman-readable">{minutes}</span>
        </div>
        <span className="text-sm text-white/80">MINS</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-spiderman-darkblue border-2 border-spiderman-red rounded-lg w-16 h-16 md:w-24 md:h-24 flex items-center justify-center mb-2">
          <span className="text-2xl md:text-4xl lg:text-5xl text-white font-bold font-spiderman-readable">{seconds}</span>
        </div>
        <span className="text-sm text-white/80">SECS</span>
      </div>
    </div>
  )
}
