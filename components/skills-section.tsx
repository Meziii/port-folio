import { Card, CardContent } from "@/components/ui/card"
import { Brain, Database, Server, Cloud } from "lucide-react"

const skillCategories = [
  {
    title: "Data & Analytics",
    icon: Brain,
    skills: ["Python", "R", "Machine Learning", "CNN", "Random Forest"],
    color: "text-primary",
  },
  {
    title: "Bases de données",
    icon: Database,
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Firebase"],
    color: "text-primary",
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Java Spring Boot", "Flask", "APIs REST", "Microservices"],
    color: "text-primary",
  },
  {
    title: "Outils & Cloud",
    icon: Cloud,
    skills: ["Docker", "Power BI", "AWS", "Azure", "CI/CD"],
    color: "text-primary",
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-28 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto" data-reveal>
          <p className="eyebrow mb-4">02 — boîte à outils</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-12">Compétences</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="hover-lift bg-card border border-border">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <category.icon className={`h-8 w-8 ${category.color} mr-3`} />
                    <h3 className="font-display text-xl font-semibold text-foreground">{category.title}</h3>
                  </div>

                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="bg-muted/50 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground"
                      >
                        {skill}
                      </div>
                    ))}
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
