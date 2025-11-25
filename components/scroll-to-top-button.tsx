"use client"

import { useState, useEffect } from "react"

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling down 300px
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    const pathname = window.location.pathname

    if (pathname === "/") {
      // If on home page, scroll to casino list
      const casinoListElement = document.getElementById("casino-list")
      if (casinoListElement) {
        casinoListElement.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      // If on another page, navigate to home page with hash
      window.location.href = "/#casino-list"
    }
  }

  return (
    null
  )
}
