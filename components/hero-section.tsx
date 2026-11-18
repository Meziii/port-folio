"use client"

import { Button } from "@/components/ui/button"
import { Download, Mail, ArrowUpRight } from "lucide-react"
import { ParticleField } from "@/components/particle-field"

const pillars = ["Comprendre", "Analyser", "Décider"]

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Aurora animée — fond créatif */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="aurora-blob h-[460px] w-[460px] opacity-[0.22]"
          style={{ background: "oklch(0.62 0.19 255)", top: "-8%", left: "8%" }}
        />
        <div
          className="aurora-blob h-[520px] w-[520px] opacity-[0.18]"
          style={{ background: "oklch(0.6 0.2 300)", top: "10%", right: "4%", animationDelay: "-7s" }}
        />
        <div
          className="aurora-blob h-[380px] w-[380px] opacity-[0.16]"
          style={{ background: "oklch(0.72 0.16 210)", bottom: "-6%", left: "32%", animationDelay: "-13s" }}
        />
      </div>

      {/* Constellation interactive (réagit à la souris) */}
      <ParticleField />

      <div className="container mx-auto px-6 py-32 relative">
        <div className="max-w-5xl animate-fade-in-up">
          {/* badge disponibilité */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background/40 backdrop-blur-sm px-3 py-1.5 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Ouvert aux opportunités · Data / BI · Île-de-France
          </div>

          <p className="eyebrow mb-5">// business analyst · data &amp; ia</p>

          <h1 className="font-display font-bold tracking-tight text-foreground leading-[0.95] text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] text-balance">
            Mehdi
            <br />
            <span className="gradient-text">Laktati</span>
          </h1>

          <p className="mt-8 font-display text-2xl md:text-4xl font-semibold text-foreground tracking-tight">
            De la donnée à la décision.
          </p>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground text-pretty leading-relaxed">
            Je conçois et je construis des solutions data &amp; IA, du besoin métier jusqu'au
            résultat concret.
          </p>

          {/* les trois piliers */}
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
            {pillars.map((p, i) => (
              <div key={p} className="flex items-center gap-2">
                <span className="font-mono text-xs text-primary">0{i + 1}</span>
                <span className="font-display font-medium text-foreground">{p}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="group bg-primary text-primary-foreground hover:bg-primary/90 text-base px-7 py-6 hover-lift"
              onClick={() => scrollToSection("projects")}
            >
              Voir mes projets
              <ArrowUpRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="text-base px-7 py-6 hover-lift border-border bg-transparent text-foreground hover:border-primary hover:text-primary"
            >
              <Download className="mr-2 h-5 w-5" />
              Télécharger le CV
            </Button>

            <Button
              size="lg"
              variant="ghost"
              className="text-base px-7 py-6 hover-lift text-muted-foreground hover:text-foreground hover:bg-accent"
              onClick={() => scrollToSection("contact")}
            >
              <Mail className="mr-2 h-5 w-5" />
              Me contacter
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 eyebrow animate-fade-in">scroll ↓</div>
    </section>
  )
}
