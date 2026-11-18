"use client"

import { useEffect } from "react"

/**
 * Révèle les éléments [data-reveal] quand ils entrent dans le viewport.
 * Sans JS, tout reste visible (le gate `.reveal-ready` n'est ajouté qu'ici).
 */
export function ScrollReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"))
    if (els.length === 0) return

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (!("IntersectionObserver" in window) || reduce) {
      els.forEach((el) => el.classList.add("reveal-in"))
      return
    }

    document.documentElement.classList.add("reveal-ready")

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-in")
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    )

    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return null
}
