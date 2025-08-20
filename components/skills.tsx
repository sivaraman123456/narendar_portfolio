import { Card, CardContent } from "@/components/ui/card"
import { Megaphone, PenTool, Mail, Share2, Search } from "lucide-react"

export function Skills() {
  const skills = [
    {
      icon: <Megaphone className="h-8 w-8" />,
      title: "Digital Marketing Executive",
      description: "Strategic planning and execution of digital marketing campaigns",
    },
    {
      icon: <PenTool className="h-8 w-8" />,
      title: "Content Creation",
      description: "Engaging content for various digital platforms and audiences",
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: "Email Marketing",
      description: "Targeted email campaigns to nurture leads and drive conversions",
    },
    {
      icon: <Share2 className="h-8 w-8" />,
      title: "Social Media Marketing",
      description: "Building brand presence across social media platforms",
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "SEO",
      description: "Search engine optimization to improve website visibility and organic traffic",
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "SEM",
      description: "A paid digital strategy used to increase a website’s visibility on search engine results through targeted ads.c",
    },
  ]

  return (
    <section id="skills" className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold font-serif text-center mb-12">Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="text-primary mb-4 flex justify-center">{skill.icon}</div>
                <h3 className="font-semibold text-lg mb-3 text-card-foreground">{skill.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
