export const handleScroll = () => {
  const scrollRevealElements = document.querySelectorAll(".scroll-reveal")

  scrollRevealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top
    const elementVisible = 150

    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add("visible")
    } else {
      element.classList.remove("visible")
    }
  })
}

export const handleParallax = (e: MouseEvent) => {
  const parallaxLayers = document.querySelectorAll(".parallax-layer")

  parallaxLayers.forEach((layer, index) => {
    const htmlLayer = layer as HTMLElement
    const speed = (index + 1) * 0.03

    const x = (window.innerWidth / 2 - e.pageX) * speed
    const y = (window.innerHeight / 2 - e.pageY) * speed

    htmlLayer.style.transform = `translateX(${x}px) translateY(${y}px)`
  })
}

export const initAnimations = () => {
  window.addEventListener("scroll", handleScroll)
  document.addEventListener("mousemove", handleParallax)

  // Initial check for elements in view
  handleScroll()

  return () => {
    window.removeEventListener("scroll", handleScroll)
    document.removeEventListener("mousemove", handleParallax)
  }
}
