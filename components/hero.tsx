"use client";

import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Phone, Download } from "lucide-react";

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-24 pb-16 px-4 md:px-16 lg:px-24">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-12">
      
      {/* Text Content */}
      <div className="text-center md:text-left flex-1 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold font-serif text-foreground mb-4">
          Narendra Kumar
        </h1>
  
        <p className="text-xl md:text-2xl text-primary font-semibold mb-6">
          Digital Marketing Executive
        </p>
  
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          Certified Digital Marketing professional with expertise in Content
          Creation, Social Media Marketing, and Email Marketing. Ready to help
          brands grow online.
        </p>
  
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center mb-8">
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-primary hover:bg-primary/90"
          >
            Get In Touch
          </Button>
          <div className="flex gap-4">
            <Button variant="outline" size="icon">
              <Mail className="h-5 w-5" />
            </Button>
            <a href="https://www.linkedin.com/in/narendra-kumar-920a13222/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <Button variant="outline" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
  
        {/* Resume Button */}
        <div className="flex justify-center md:justify-start">
          <a href="">
            <Button>
              Resume <Download className="ml-2" />
            </Button>
          </a>
        </div>
      </div>
  
      {/* Profile Image */}
      <div className="flex-shrink-0">
        <img
          src="/narendar.jpg"
          alt="Narendra Kumar"
          className="w-40 sm:w-56 md:w-80 lg:w-[400px] h-auto rounded-full object-cover border-4 border-primary/20"
        />
      </div>
    </div>
  </section>
  
  
  );
}
