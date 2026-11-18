export function AboutSection() {
  return (
    <section id="about" className="py-28 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto" data-reveal>
          <p className="eyebrow mb-4">01 — à propos</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-12">À propos</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Diplômé d'un Master 2 MIASHS – Web Analyste, je me positionne comme Business Analyst : je relie les
                besoins métier à la donnée, de l'analyse jusqu'à la décision.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Mon parcours comprend une Licence en Ingénierie Logicielle, un Master en Systèmes d'Information & IA,
                et un Master 2 MIASHS – Web Analyste.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Je suis <span className="text-primary font-semibold">curieux</span>,
                <span className="text-primary font-semibold"> rigoureux</span>, et
                <span className="text-primary font-semibold"> motivé</span> à faire parler les données et à valoriser
                leur potentiel pour créer des solutions innovantes.
              </p>
            </div>

            <div className="bg-muted/50 p-8 rounded-2xl hover-lift">
              <h3 className="text-2xl font-bold text-navy mb-6">Formation</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-navy">Master 2 MIASHS – Web Analyste</h4>
                  <p className="text-muted-foreground">Diplômé</p>
                </div>
                <div className="border-l-4 border-silver pl-4">
                  <h4 className="font-semibold text-navy">Master Systèmes d'Information & IA</h4>
                  <p className="text-muted-foreground">Diplômé</p>
                </div>
                <div className="border-l-4 border-silver-light pl-4">
                  <h4 className="font-semibold text-navy">Licence Ingénierie Logicielle</h4>
                  <p className="text-muted-foreground">Diplômé</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
