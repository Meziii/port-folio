"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import { Github, ExternalLink, Star, ArrowLeft, ArrowRight } from "lucide-react"

type Project = {
  title: string
  description: string
  image: string
  technologies: string[]
  category: string
  github?: string
  demo?: string
  demoLabel?: string
  featured?: boolean
}

const projects: Project[] = [
  {
    title: "Business Operations Hub",
    description:
      "Plateforme web B2B qui structure le travail des équipes support et après-vente : centralisation et priorisation des demandes, tri proposé par l'IA et validé par un humain, suivi des délais (SLA) et cockpit de pilotage. Du besoin métier jusqu'au code et aux indicateurs mesurés.",
    image: "/business-operations-hub.jpg",
    technologies: ["FastAPI", "Next.js 15", "PostgreSQL", "pgvector", "Docker", "Python"],
    category: "Business Analysis · IA",
    github: "https://github.com/Meziii/business-operations-hub",
    demo: "https://codespaces.new/Meziii/business-operations-hub",
    demoLabel: "Tester (Codespaces)",
    featured: true,
  },
  {
    title: "ElevAI — Analytics bien-être",
    description:
      "Application full-stack de suivi du bien-être : l'utilisateur enregistre sommeil, activité et humeur et reçoit un score sur 100 avec tendances. Scoring hybride combinant modèles de Machine Learning (Random Forest, régression) et règles métier, avec détection d'anomalies.",
    image: "/placeholder.svg",
    technologies: ["React", "Node.js", "MySQL", "Machine Learning", "Playwright"],
    category: "Data · Full Stack",
    github: "https://github.com/Meziii/ElevAi",
    featured: true,
  },
  {
    title: "Système de recommandation hybride",
    description:
      "Développement d'un système de recommandation pour régimes anti-athérosclérose utilisant des algorithmes de Machine Learning avancés.",
    image: "/medical-recommendation-system.jpg",
    technologies: ["Python", "Machine Learning", "Pandas", "Scikit-learn"],
    category: "Data & ML",
  },
  {
    title: "Classification d'images (CNN)",
    description:
      "Réseau de neurones convolutionnel (CNN) entraîné sur le jeu de données Fashion-MNIST pour classer automatiquement des images de vêtements, avec prétraitement et évaluation des performances.",
    image: "/medical-image-classification-cnn.jpg",
    technologies: ["Python", "TensorFlow", "CNN", "Scikit-learn"],
    category: "Deep Learning",
    github: "https://github.com/Meziii/TP_CNN",
    demo: "https://colab.research.google.com/github/Meziii/TP_CNN/blob/main/Partie%20B%20_%20Classification%20d%E2%80%99images%20%28CNN%20simplifi%C3%A9%29.ipynb",
    demoLabel: "Ouvrir dans Colab",
  },
  {
    title: "API géographique",
    description:
      "API REST en Flask qui récupère les coordonnées d'une ville et calcule la distance entre deux villes via l'API OpenRouteService, avec historique des recherches persisté.",
    image: "/placeholder.svg",
    technologies: ["Python", "Flask", "REST API", "OpenRouteService"],
    category: "Backend · API",
    github: "https://github.com/Meziii/api-geo",
  },
  {
    title: "Application IoT - Gestion éthylène",
    description:
      "Application mobile et web pour la surveillance et gestion de l'éthylène dans l'agriculture avec interface temps réel.",
    image: "/iot-agriculture-mobile-app.jpg",
    technologies: ["Flutter", "Flask", "IoT", "Real-time"],
    category: "IoT & Mobile",
  },
]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Card
      className={`group hover-lift overflow-hidden bg-card border border-border h-full ${
        project.featured ? "ring-1 ring-primary/50" : ""
      }`}
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${project.image || "/placeholder.svg"}`}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-60" />
        <span className="absolute top-3 left-3 font-mono text-xs text-foreground/80 bg-background/60 backdrop-blur-sm px-2 py-1 rounded">
          {String(index + 1).padStart(2, "0")}
        </span>
        {project.featured && (
          <span className="absolute top-3 right-3 inline-flex items-center gap-1 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium shadow">
            <Star className="h-3 w-3" />
            Projet phare
          </span>
        )}
      </div>

      <CardContent className="p-6">
        <div className="mb-3">
          <span className="font-mono text-[0.7rem] uppercase tracking-wider text-primary/80">
            {project.category}
          </span>
        </div>

        <h3 className="font-display text-lg font-semibold text-foreground mb-3 text-balance">
          {project.title}
        </h3>

        <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.technologies.map((tech) => (
            <span key={tech} className="border border-border text-muted-foreground px-2 py-1 rounded text-xs">
              {tech}
            </span>
          ))}
        </div>

        {project.demo || project.github ? (
          <div className="flex gap-2">
            {project.demo && (
              <Button asChild size="sm" className="flex-1 hover-lift">
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  {project.demoLabel ?? "Voir la démo"}
                </a>
              </Button>
            )}
            {project.github && (
              <Button
                asChild
                size="sm"
                variant={project.demo ? "outline" : "default"}
                className={`hover-lift ${project.demo ? "bg-transparent" : "flex-1"}`}
              >
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  Code
                </a>
              </Button>
            )}
          </div>
        ) : (
          <span className="inline-block font-mono text-xs text-muted-foreground">projet académique</span>
        )}
      </CardContent>
    </Card>
  )
}

export function ProjectsSection() {
  const [api, setApi] = useState<CarouselApi>()
  const [selected, setSelected] = useState(0)
  const [count, setCount] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (!api) return
    const sync = () => {
      setCount(api.scrollSnapList().length)
      setSelected(api.selectedScrollSnap())
    }
    sync()
    api.on("select", sync)
    api.on("reInit", sync)
    return () => {
      api.off("select", sync)
      api.off("reInit", sync)
    }
  }, [api])

  // Défilement automatique (pause au survol / à l'interaction)
  useEffect(() => {
    if (!api || paused) return
    const id = setInterval(() => api.scrollNext(), 3500)
    return () => clearInterval(id)
  }, [api, paused])

  return (
    <section id="projects" className="py-28 border-t border-border overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div
            className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
            data-reveal
          >
            <div>
              <p className="eyebrow mb-4">04 — selected work</p>
              <h2 className="font-display font-bold tracking-tight text-foreground text-4xl md:text-6xl text-balance">
                Projets
              </h2>
              <p className="text-muted-foreground mt-4 max-w-2xl">
                Projets personnels et académiques, du besoin métier jusqu'au code.{" "}
                <span className="text-foreground/70">Glissez pour explorer →</span>
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-border bg-transparent hover:border-primary hover:text-primary"
                onClick={() => api?.scrollPrev()}
                aria-label="Projet précédent"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <span className="font-mono text-sm text-muted-foreground tabular-nums">
                {String(Math.min(selected + 1, count || 1)).padStart(2, "0")} / {String(count || projects.length).padStart(2, "0")}
              </span>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-border bg-transparent hover:border-primary hover:text-primary"
                onClick={() => api?.scrollNext()}
                aria-label="Projet suivant"
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <Carousel
            setApi={setApi}
            opts={{ align: "start", loop: true }}
            className="w-full"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <CarouselContent className="-ml-6">
              {projects.map((project, index) => (
                <CarouselItem key={index} className="pl-6 sm:basis-1/2 lg:basis-1/3">
                  <ProjectCard project={project} index={index} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="mt-8 flex items-center gap-4" data-reveal>
            <div className="h-0.5 flex-1 overflow-hidden rounded-full bg-border">
              <div
                className="h-full bg-primary transition-all duration-500"
                style={{ width: `${count ? ((selected + 1) / count) * 100 : 0}%` }}
              />
            </div>
            <div className="flex gap-1.5">
              {Array.from({ length: count }).map((_, i) => (
                <button
                  key={i}
                  aria-label={`Aller au projet ${i + 1}`}
                  onClick={() => api?.scrollTo(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === selected ? "w-6 bg-primary" : "w-1.5 bg-border hover:bg-muted-foreground"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
