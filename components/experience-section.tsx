import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Calendar } from "lucide-react"

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-12 text-center">Expérience professionnelle</h2>

          <Card className="hover-lift border-0 shadow-xl">
            <CardContent className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-navy mb-2">Stage PFE – Green OpenLab</h3>
                  <div className="flex items-center text-muted-foreground mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>2024</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="hover-lift bg-transparent">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Voir détails
                </Button>
              </div>

              <div className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Développement d'une solution IoT complète avec implémentation d'algorithmes de Machine Learning
                  (Random Forest) pour l'analyse prédictive en temps réel.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-navy mb-3">Technologies utilisées</h4>
                    <div className="flex flex-wrap gap-2">
                      {["IoT", "Random Forest", "Python", "Flask", "Docker"].map((tech) => (
                        <span
                          key={tech}
                          className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-navy mb-3">Réalisations</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Visualisation en temps réel</li>
                      <li>• Architecture distribuée</li>
                      <li>• Déploiement CI/CD</li>
                      <li>• Intégration mobile/web</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
