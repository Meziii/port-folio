import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Calendar } from "lucide-react"

export function ExperienceSection() {
  return (
    <section id="experience" className="py-28 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto" data-reveal>
          <p className="eyebrow mb-4">03 — expérience</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-12">Expérience professionnelle</h2>

          <Card className="hover-lift bg-card border border-border">
            <CardContent className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-navy mb-2">Business Analyst — Data &amp; BI · Kubota</h3>
                  <div className="flex items-center text-muted-foreground mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>2026 · 5 mois</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="hover-lift bg-transparent">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Voir détails
                </Button>
              </div>

              <div className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Mission data &amp; BI en environnement B2B : refonte de reporting décisionnel (Power BI), pipelines
                  ETL et modélisation de données, analyse des ventes et pilotage de la performance — du besoin métier
                  jusqu'à la décision.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-navy mb-3">Technologies utilisées</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Power BI", "SQL", "ETL", "Power Query", "DAX", "Data Modeling"].map((tech) => (
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
                      <li>• Refonte de tableaux de bord décisionnels</li>
                      <li>• Pipelines ETL &amp; modélisation de données</li>
                      <li>• Analyse RFM &amp; segmentation client</li>
                      <li>• Indicateurs de performance (KPI)</li>
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
