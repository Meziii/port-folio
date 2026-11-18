"use client"

import { useState, useEffect } from "react"

const links = [
  { id: "about", label: "à propos", num: "01" },
  { id: "skills", label: "compétences", num: "02" },
  { id: "experience", label: "expérience", num: "03" },
  { id: "projects", label: "projets", num: "04" },
  { id: "contact", label: "contact", num: "05" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-display text-sm lowercase tracking-wide text-foreground hover:text-primary transition-colors"
          >
            mehdi laktati<span className="text-primary">.</span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="group flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="font-mono text-[0.65rem] text-primary/70">{link.num}</span>
                <span>{link.label}</span>
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollToSection("contact")}
            className="group flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            on en parle
          </button>
        </div>
      </div>
    </nav>
  )
}
