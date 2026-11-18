const techs = [
  "Python",
  "FastAPI",
  "Next.js",
  "React",
  "TypeScript",
  "PostgreSQL",
  "Docker",
  "Machine Learning",
  "TensorFlow",
  "Power BI",
  "Node.js",
  "pandas",
  "scikit-learn",
  "Flask",
  "Spring Boot",
  "SQL",
  "pgvector",
  "Git",
]

export function TechMarquee() {
  const row = [...techs, ...techs]
  return (
    <section aria-label="Technologies maîtrisées" className="border-y border-border bg-card/30 py-7">
      <div className="container mx-auto px-6 mb-4">
        <p className="eyebrow">// stack technique — ce que j'utilise au quotidien</p>
      </div>
      <div className="marquee-pause relative overflow-hidden">
        {/* fondus sur les bords */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

        <div className="flex w-max animate-marquee">
          {row.map((tech, i) => (
            <span
              key={i}
              className="mx-2 inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
