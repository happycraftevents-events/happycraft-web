"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "fade"
}

export function ScrollReveal({ children, className = "", delay = 0, direction = "up" }: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  const getAnimationClass = () => {
    if (!isVisible) {
      switch (direction) {
        case "up":
          return "opacity-0 translate-y-8"
        case "down":
          return "opacity-0 -translate-y-8"
        case "left":
          return "opacity-0 translate-x-8"
        case "right":
          return "opacity-0 -translate-x-8"
        case "fade":
          return "opacity-0"
        default:
          return "opacity-0 translate-y-8"
      }
    }
    return "opacity-100 translate-y-0 translate-x-0"
  }

  return (
    <div ref={ref} className={`transition-all duration-700 ease-out ${getAnimationClass()} ${className}`}>
      {children}
    </div>
  )
}
