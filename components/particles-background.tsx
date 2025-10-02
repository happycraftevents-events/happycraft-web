"use client"

import { useEffect, useRef } from "react"

export function ParticlesBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const createParticle = () => {
      const particle = document.createElement("div")
      particle.className = "particle"
      particle.style.left = Math.random() * 100 + "%"
      particle.style.animationDelay = Math.random() * 15 + "s"
      particle.style.animationDuration = Math.random() * 10 + 10 + "s"
      container.appendChild(particle)

      setTimeout(() => {
        if (container.contains(particle)) {
          container.removeChild(particle)
        }
      }, 25000)
    }

    const interval = setInterval(createParticle, 300)

    return () => {
      clearInterval(interval)
      if (container) {
        container.innerHTML = ""
      }
    }
  }, [])

  return <div ref={containerRef} className="particles-bg" />
}
