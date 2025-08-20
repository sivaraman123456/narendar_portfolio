import { Card, CardContent } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold font-serif text-center mb-12">About Me</h2>

        <Card className="bg-card border-border">
          <CardContent className="p-8">
            <p className="text-lg leading-relaxed text-card-foreground">
              I am a certified Digital Marketing professional with expertise in{" "}
              <span className="font-semibold text-primary">Content Creation</span>,{" "}
              <span className="font-semibold text-primary">Social Media Marketing</span>, and{" "}
              <span className="font-semibold text-primary">Email Marketing</span>. Recently completed my Digital
              Marketing Certificate from GUVI, I am eager to apply my skills to real-world projects and help brands grow
              online.
            </p>

            <div className="mt-8">
              <h3 className="text-xl font-semibold font-serif mb-4 text-primary">Career Objective</h3>
              <p className="text-card-foreground leading-relaxed">
                To begin my career as a Digital Marketing Executive where I can leverage my skills in content creation,
                social media marketing, and email marketing to deliver measurable growth and contribute to
                organizational success.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
