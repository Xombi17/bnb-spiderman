"use client"

import { useState, useEffect } from "react"

interface CountdownTimerProps {
  targetDate: Date
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference <= 0) {
        clearInterval(interval)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-6">
      <div className="flex flex-col items-center">
        <div className="bg-spiderman-blue/80 border-2 border-spiderman-red rounded-lg p-4 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
          <span className="text-3xl md:text-4xl font-bold text-white">{timeLeft.days}</span>
        </div>
        <span className="text-sm mt-2 text-white">Days</span>
      </div>

      <div className="flex flex-col items-center">
        <div className="bg-spiderman-blue/80 border-2 border-spiderman-red rounded-lg p-4 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
          <span className="text-3xl md:text-4xl font-bold text-white">{timeLeft.hours}</span>
        </div>
        <span className="text-sm mt-2 text-white">Hours</span>
      </div>

      <div className="flex flex-col items-center">
        <div className="bg-spiderman-blue/80 border-2 border-spiderman-red rounded-lg p-4 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
          <span className="text-3xl md:text-4xl font-bold text-white">{timeLeft.minutes}</span>
        </div>
        <span className="text-sm mt-2 text-white">Minutes</span>
      </div>

      <div className="flex flex-col items-center">
        <div className="bg-spiderman-blue/80 border-2 border-spiderman-red rounded-lg p-4 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
          <span className="text-3xl md:text-4xl font-bold text-white">{timeLeft.seconds}</span>
        </div>
        <span className="text-sm mt-2 text-white">Seconds</span>
      </div>
    </div>
  )
}
