"use client"

import { useEffect, useRef, useState } from "react"

type AnimationDirection = "up" | "down" | "left" | "right"
type AnimationEffect = "fade" | "slide" | "scale" | "rotate" | "flip"

interface ScrollAnimationOptions {
  threshold?: number
  rootMargin?: string
  direction?: AnimationDirection
  effect?: AnimationEffect
  duration?: number
  delay?: number
  distance?: number
  once?: boolean
}

export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(options: ScrollAnimationOptions = {}) {
  const {
    threshold = 0.1,
    rootMargin = "0px",
    direction = "up",
    effect = "fade",
    duration = 0.6,
    delay = 0,
    distance = 50,
    once = false,
  } = options

  const ref = useRef<T>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting)

          // If "once" is true and element is visible, unobserve it
          if (once && entry.isIntersecting) {
            observer.unobserve(element)
          }
        })
      },
      {
        threshold,
        rootMargin,
      },
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [threshold, rootMargin, once])

  // Generate CSS classes based on animation options
  const getAnimationClasses = () => {
    const baseClass = "transition-all"
    const durationClass = `duration-${Math.round(duration * 1000)}`
    const delayClass = delay > 0 ? `delay-${Math.round(delay * 1000)}` : ""

    let transformInitial = ""
    let opacityInitial = ""

    // Set initial state based on effect and direction
    if (effect === "fade" || effect === "slide") {
      opacityInitial = "opacity-0"
    }

    if (effect === "slide") {
      switch (direction) {
        case "up":
          transformInitial = `translate-y-[${distance}px]`
          break
        case "down":
          transformInitial = `translate-y-[-${distance}px]`
          break
        case "left":
          transformInitial = `translate-x-[${distance}px]`
          break
        case "right":
          transformInitial = `translate-x-[-${distance}px]`
          break
      }
    } else if (effect === "scale") {
      transformInitial = "scale-95"
      opacityInitial = "opacity-0"
    } else if (effect === "rotate") {
      transformInitial = "rotate-12"
      opacityInitial = "opacity-0"
    } else if (effect === "flip") {
      transformInitial = direction === "up" || direction === "down" ? "rotateX-90" : "rotateY-90"
      opacityInitial = "opacity-0"
    }

    return {
      base: `${baseClass} ${durationClass} ${delayClass}`,
      initial: `${transformInitial} ${opacityInitial}`,
      visible: "opacity-100 translate-x-0 translate-y-0 scale-100 rotate-0",
    }
  }

  const animationClasses = getAnimationClasses()

  const style = {
    transition: `transform ${duration}s ease-out ${delay}s, opacity ${duration}s ease-out ${delay}s`,
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translate3d(0, 0, 0) scale(1) rotate(0deg)" : getInitialTransform(),
  }

  function getInitialTransform() {
    switch (effect) {
      case "slide":
        switch (direction) {
          case "up":
            return `translate3d(0, ${distance}px, 0)`
          case "down":
            return `translate3d(0, -${distance}px, 0)`
          case "left":
            return `translate3d(${distance}px, 0, 0)`
          case "right":
            return `translate3d(-${distance}px, 0, 0)`
          default:
            return "translate3d(0, 0, 0)"
        }
      case "scale":
        return "scale(0.95)"
      case "rotate":
        return "rotate(12deg)"
      case "flip":
        return direction === "up" || direction === "down" ? "rotateX(90deg)" : "rotateY(90deg)"
      default:
        return "translate3d(0, 0, 0)"
    }
  }

  return { ref, isVisible, style, animationClasses }
}
