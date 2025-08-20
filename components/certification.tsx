import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award } from "lucide-react"

export function Certification() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold font-serif text-center mb-12">Certification</h2>

        <Card className="bg-card border-border">
          <CardContent className="p-8 text-center">
            <div className="text-primary mb-6 flex justify-center">
              <Award className="h-16 w-16" />
            </div>
            <h3 className="text-2xl font-bold font-serif mb-4 text-card-foreground">Digital Marketing Certification</h3>
            <Badge variant="outline" className="text-lg px-4 py-2 mb-4">
              GUVI
            </Badge>
            <p className="text-muted-foreground leading-relaxed">
              Comprehensive certification covering all aspects of digital marketing including content creation, social
              media strategy, email marketing, and campaign optimization.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
