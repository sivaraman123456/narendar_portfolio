import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sun, BookOpen, Code, Megaphone } from "lucide-react"

export function Projects() {
  const projects = [
    {
      icon: <Sun className="h-8 w-8" />,
      title: "Solar Panel Campaign",
      description:
        "Designed a comprehensive social media campaign to promote solar energy awareness and drive environmental consciousness.",
      tags: ["Social Media", "Environmental", "Awareness Campaign"],
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Arteduquest",
      description:
        "Created content strategy for an educational platform, focusing on engaging students and promoting online learning.",
      tags: ["Content Strategy", "Education", "Digital Learning"],
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Urbane Code",
      description:
        "Planned and designed branding content for a startup, establishing their digital presence and brand identity.",
      tags: ["Branding", "Startup", "Digital Presence"],
    },
    {
      icon: <Megaphone className="h-8 w-8" />,
      title: "Instagram Ads Campaign (Mobile/Gadget Brand)",
      description:
        "Created and managed an Instagram ad campaign for a mobile/gadgets company. Independently handled content creation and ad execution. The campaign generated 5 qualified leads and achieved strong engagement with 4K+ likes, 34 comments, 4 shares, and 21 reposts.",
      tags: ["Paid Ads", "Instagram Marketing", "Lead Generation", "Social Media Ads"],
    },
  ]

  return (
    <section id="projects" className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold font-serif text-center mb-12">
          Projects
        </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {projects.slice(0, 3).map((project, index) => (
    <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="text-primary mb-4">{project.icon}</div>
        <CardTitle className="text-xl font-serif text-card-foreground">
          {project.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, tagIndex) => (
            <Badge key={tagIndex} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  ))}

  {/* 👇 Center last card */}
  <div className="md:col-span-2 lg:col-span-3 flex justify-center">
    <div className="w-full md:w-1/2 lg:w-1/3">
      <Card className="bg-card border-border hover:shadow-lg transition-shadow">
        <CardHeader>
          <div className="text-primary mb-4">{projects[3].icon}</div>
          <CardTitle className="text-xl font-serif text-card-foreground">
            {projects[3].title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            {projects[3].description}
          </p>
          <div className="flex flex-wrap gap-2">
            {projects[3].tags.map((tag, tagIndex) => (
              <Badge key={tagIndex} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</div>
      </div>
    </section>
  )
}