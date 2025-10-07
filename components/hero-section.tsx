"use client"

import { Button } from "@/components/ui/button"
import { Download, Mail, ArrowRight } from "lucide-react"

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-navy mb-6 text-balance">Mehdi Laktati</h1>

          <h2 className="text-2xl md:text-3xl text-silver mb-8 font-light">Data Analyst & Data Scientist en devenir</h2>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty">
            Transformer les données en solutions intelligentes et durables
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 hover-lift"
              onClick={() => scrollToSection("projects")}
            >
              Voir mes projets
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 hover-lift border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
            >
              <Download className="mr-2 h-5 w-5" />
              Télécharger le CV
            </Button>

            <Button
              size="lg"
              variant="ghost"
              className="text-lg px-8 py-6 hover-lift text-navy hover:bg-navy/10"
              onClick={() => scrollToSection("contact")}
            >
              <Mail className="mr-2 h-5 w-5" />
              Me Contacter
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
