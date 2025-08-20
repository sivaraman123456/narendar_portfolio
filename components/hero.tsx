"use client"

import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Phone, Download} from "lucide-react"

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="mb-8">
          <img
            src="/narendar.jpg"
            alt="Narendra Kumar"
            className="w-48 h-48 rounded-full mx-auto mb-6 object-cover border-4 border-primary/20"
          />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold font-serif text-foreground mb-4">Narendra Kumar</h1>

        <p className="text-xl md:text-2xl text-primary font-semibold mb-6">Digital Marketing Executive</p>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          Certified Digital Marketing professional with expertise in Content Creation, Social Media Marketing, and Email
          Marketing. Ready to help brands grow online.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button onClick={scrollToContact} size="lg" className="bg-primary hover:bg-primary/90">
            Get In Touch
          </Button>
          <div className="flex gap-4">
            <Button variant="outline" size="icon">
              <Mail className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon">
              <Phone className="h-5 w-5" />
            </Button>
          </div>
        </div>
        <a href="">
        <div className="flex justify-center items-center">
          <Button>Resume <Download/></Button>
          
        </div>
        </a>
        
      </div>
    </section>
  )
}
