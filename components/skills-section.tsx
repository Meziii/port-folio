import { Card, CardContent } from "@/components/ui/card"
import { Brain, Database, Server, Cloud } from "lucide-react"

const skillCategories = [
  {
    title: "Data Science",
    icon: Brain,
    skills: ["Python", "R", "Machine Learning", "CNN", "Random Forest"],
    color: "text-blue-600",
  },
  {
    title: "Bases de données",
    icon: Database,
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Firebase"],
    color: "text-green-600",
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Java Spring Boot", "Flask", "APIs REST", "Microservices"],
    color: "text-purple-600",
  },
  {
    title: "Outils & Cloud",
    icon: Cloud,
    skills: ["Docker", "Power BI", "AWS", "Azure", "CI/CD"],
    color: "text-orange-600",
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-12 text-center">Compétences</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="hover-lift border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <category.icon className={`h-8 w-8 ${category.color} mr-3`} />
                    <h3 className="text-xl font-bold text-navy">{category.title}</h3>
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
