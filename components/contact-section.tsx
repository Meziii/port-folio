import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-28 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center" data-reveal>
          <p className="eyebrow mb-4">05 — on en parle</p>
          <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-8 text-balance">
            Restons en contact
          </h2>

          <p className="text-lg text-muted-foreground mb-14 max-w-2xl mx-auto text-pretty">
            Prêt à transformer vos données en solutions intelligentes ? Contactez-moi pour discuter de vos projets.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12 text-left">
            <Card className="bg-card border border-border hover-lift">
              <CardContent className="p-6">
                <Mail className="h-7 w-7 text-primary mb-4" />
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">Email</h3>
                <p className="text-muted-foreground mb-4">mehdilakati@gmail.com</p>
                <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <a href="mailto:mehdilakati@gmail.com">
                    <Send className="h-4 w-4 mr-2" />
                    M'envoyer un message
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border border-border hover-lift">
              <CardContent className="p-6">
                <Phone className="h-7 w-7 text-primary mb-4" />
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">Téléphone</h3>
                <p className="text-muted-foreground mb-4">+33 7 66 44 62 77</p>
                <Button asChild size="sm" variant="outline" className="bg-transparent border-border hover:border-primary hover:text-primary">
                  <a href="tel:+33766446277">
                    <Phone className="h-4 w-4 mr-2" />
                    Appeler
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center gap-4">
            {/* TODO: remplacer href par l'URL LinkedIn exacte de Mehdi */}
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-border text-foreground hover:border-primary hover:text-primary hover-lift"
            >
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5 mr-2" />
                LinkedIn
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-border text-foreground hover:border-primary hover:text-primary hover-lift"
            >
              <a href="https://github.com/Meziii" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 mr-2" />
                GitHub
              </a>
            </Button>
          </div>

          <div className="mt-20 pt-8 border-t border-border">
            <p className="font-mono text-xs text-muted-foreground">© 2025 Mehdi Laktati — tous droits réservés.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
