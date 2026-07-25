import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Sobre Mí
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Soy un desarrollador apasionado por el software de calidad. Construyo
                aplicaciones que la gente disfruta usar: fluidas, rápidas y estables sin
                importar la plataforma.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Mi experiencia abarca tanto el backend como el frontend móvil. En el
                servidor trabajo con <span className="text-foreground font-semibold">Spring Boot</span> y{" "}
                <span className="text-foreground font-semibold">.NET</span>; en el
                cliente móvil desarrollo con{" "}
                <span className="text-foreground font-semibold">Jetpack Compose</span> (Android)
                y <span className="text-foreground font-semibold">React Native</span> (multiplataforma).
                Esto me permite abordar proyectos completos con una visión integral.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Más allá de las tecnologías, mi compromiso es con el código limpio,
                mantenible y eficiente. Aplico principios sólidos de arquitectura y
                mejores prácticas de la industria para asegurar que cada solución sea
                escalable, testeable y sostenible a largo plazo.
              </p>
            </div>

            <div className="space-y-2">
              <Card className="p-6 border border-border hover:shadow-soft transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Compromiso con la Calidad</h3>
                <p className="text-muted-foreground">
                  Escribo código pensando en quien lo leerá después. Legibilidad, pruebas y
                  documentación son parte de mi flujo de trabajo habitual
                </p>
              </Card>

              <Card className="p-6 border border-border hover:shadow-soft transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Pensamiento Crítico</h3>
                <p className="text-muted-foreground">
                  No solo ejecuto soluciones, las cuestiono. Analizo problemas desde múltiples
                  ángulos antes de decidir el mejor enfoque técnico
                </p>
              </Card>

              <Card className="p-6 border border-border hover:shadow-soft transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Comunicación Efectiva</h3>
                <p className="text-muted-foreground">
                  Traduzco conceptos técnicos complejos a lenguaje claro para equipos no técnicos,
                  facilitando la colaboración y alineación de objetivos
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;