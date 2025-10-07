import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-navy text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Restons en contact</h2>

          <p className="text-xl text-silver-light mb-12 max-w-2xl mx-auto text-pretty">
            Prêt à transformer vos données en solutions intelligentes ? Contactez-moi pour discuter de vos projets.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-white/10 border-white/20 hover-lift">
              <CardContent className="p-6">
                <Mail className="h-8 w-8 text-silver-light mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-silver-light">mehdilakati@gmail.com</p>
                <Button className="mt-4 bg-white text-navy hover:bg-white/90" size="sm">
                  <Send className="h-4 w-4 mr-2" />
                  M'envoyer un message
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 hover-lift">
              <CardContent className="p-6">
                <Phone className="h-8 w-8 text-silver-light mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Téléphone</h3>
                <p className="text-silver-light">+33 7 66 44 62 77</p>
                <Button className="mt-4 bg-white text-navy hover:bg-white/90" size="sm">
                  <Phone className="h-4 w-4 mr-2" />
                  Appeler
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center space-x-6">
            <Button size="lg" className="bg-white text-navy hover:bg-white/90 hover-lift">
              <Linkedin className="h-5 w-5 mr-2" />
              LinkedIn
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-navy hover-lift bg-transparent"
            >
              <Github className="h-5 w-5 mr-2" />
              GitHub
            </Button>
          </div>

          <div className="mt-16 pt-8 border-t border-white/20 text-center">
            <p className="text-silver-light">© 2025 Mehdi Laktati. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
