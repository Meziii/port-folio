import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Eye, Code } from "lucide-react"

const projects = [
  {
    title: "Système de recommandation hybride",
    description:
      "Développement d'un système de recommandation pour régimes anti-athérosclérose utilisant des algorithmes de Machine Learning avancés.",
    image: "/medical-recommendation-system.jpg",
    technologies: ["Python", "Machine Learning", "Pandas", "Scikit-learn"],
    category: "Data Science",
  },
  {
    title: "Classification d'images médicales",
    description:
      "Implémentation de réseaux de neurones convolutionnels (CNN) pour la classification automatique d'images médicales.",
    image: "/medical-image-classification-cnn.jpg",
    technologies: ["Python", "TensorFlow", "CNN", "OpenCV"],
    category: "Deep Learning",
  },
  {
    title: "Application IoT - Gestion éthylène",
    description:
      "Application mobile et web pour la surveillance et gestion de l'éthylène dans l'agriculture avec interface temps réel.",
    image: "/iot-agriculture-mobile-app.jpg",
    technologies: ["Flutter", "Flask", "IoT", "Real-time"],
    category: "IoT & Mobile",
  },
  {
    title: "Plateforme de gestion agricole",
    description:
      "Développement d'une plateforme web complète pour la gestion des exploitations agricoles avec tableau de bord analytique.",
    image: "/agricultural-management-dashboard.jpg",
    technologies: ["Spring Boot", "React", "PostgreSQL", "REST API"],
    category: "Full Stack",
  },
  {
    title: "Analyse satisfaction transports",
    description:
      "Étude analytique approfondie sur la satisfaction des usagers des transports modernes avec visualisations interactives.",
    image: "/transport-analytics-dashboard.jpg",
    technologies: ["R", "Power BI", "Statistical Analysis", "Data Viz"],
    category: "Data Analysis",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-12 text-center">Projets académiques</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover-lift border-0 shadow-lg overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>

                <CardContent className="p-6">
                  <div className="mb-3">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-navy mb-3 text-balance">{project.title}</h3>

                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1 hover-lift">
                      <Eye className="h-4 w-4 mr-2" />
                      Voir le projet
                    </Button>
                    <Button size="sm" variant="outline" className="hover-lift bg-transparent">
                      <Code className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
