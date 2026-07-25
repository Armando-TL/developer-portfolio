import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AgroSmart ",
      description: "AgroSmart es una API REST para la gestión integral de fincas ganaderas. Permite administrar animales, producción, personal, inventario y finanzas de forma centralizada y eficiente.",
      technologies: ["Spring Boot", "PostgreSQL", "JWT", "Gradle", "Docker"],
      github: "https://github.com/Armando-TL/AgroSmart",
      demo: "https://agro-smart-web.onrender.com",
      image: "🐄🌱"
    },
    {
      title: "Lite Pdf",
      description: "Aplicación Android nativa construida con Jetpack Compose para visualizar archivos PDF de forma sencilla. ",
      technologies: ["Jetpack Compose", "Coroutines", "Firebase", "Shared Preferences"],
      github: "https://github.com/Armando-TL/LitePdf",
      demo: "https://lite-pdf.uptodown.com/android",
      image: "📋"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Proyectos Destacados
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.title}
                className="overflow-hidden border border-border hover:shadow-soft transition-all duration-300 hover:scale-105 bg-card"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-4">{project.image}</span>
                    <h3 className="text-xl font-semibold text-foreground">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button 
                      asChild
                      variant="outline" 
                      size="sm"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Código
                      </a>
                    </Button>
                    
                    <Button 
                      asChild
                      size="sm"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Ver Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;