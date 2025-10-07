import { Card, CardContent } from "@/components/ui/card"
import { Award, Globe, Users, Zap } from "lucide-react"

const certifications = [
  {
    title: "NDG Linux Essentials",
    issuer: "Cisco",
    icon: Award,
    color: "text-blue-600",
  },
  {
    title: "DevOps on AWS Specialization",
    issuer: "Coursera",
    icon: Award,
    color: "text-orange-600",
  },
]

const languages = [
  { language: "Français", level: "DALF C1", flag: "🇫🇷" },
  { language: "Anglais", level: "Intermédiaire", flag: "🇬🇧" },
]

const softSkills = [
  { skill: "Autonomie", icon: Zap },
  { skill: "Travail en équipe agile", icon: Users },
  { skill: "Adaptabilité", icon: Globe },
]

export function CertificationsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Certifications */}
            <div>
              <h2 className="text-3xl font-bold text-navy mb-8">Certifications</h2>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <Card key={index} className="hover-lift border-0 shadow-md">
                    <CardContent className="p-4">
                      <div className="flex items-center">
                        <cert.icon className={`h-6 w-6 ${cert.color} mr-3`} />
                        <div>
                          <h3 className="font-semibold text-navy text-sm">{cert.title}</h3>
                          <p className="text-muted-foreground text-xs">{cert.issuer}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <h2 className="text-3xl font-bold text-navy mb-8">Langues</h2>
              <div className="space-y-4">
                {languages.map((lang, index) => (
                  <Card key={index} className="hover-lift border-0 shadow-md">
                    <CardContent className="p-4">
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">{lang.flag}</span>
                        <div>
                          <h3 className="font-semibold text-navy text-sm">{lang.language}</h3>
                          <p className="text-muted-foreground text-xs">{lang.level}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <h2 className="text-3xl font-bold text-navy mb-8">Soft Skills</h2>
              <div className="space-y-4">
                {softSkills.map((skill, index) => (
                  <Card key={index} className="hover-lift border-0 shadow-md">
                    <CardContent className="p-4">
                      <div className="flex items-center">
                        <skill.icon className="h-6 w-6 text-primary mr-3" />
                        <h3 className="font-semibold text-navy text-sm">{skill.skill}</h3>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
