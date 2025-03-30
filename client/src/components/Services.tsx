import { services } from "@/data/services";
import { ServiceCard } from "./ServiceCard";
import { Button } from "@/components/ui/button";
import { Play, Scissors } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="section bg-white">
      <div className="container mx-auto">
        <div className="mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-[1px] w-8 bg-primary"></div>
            <span className="text-primary uppercase tracking-wider text-sm font-medium">What I Offer</span>
            <div className="h-[1px] w-8 bg-primary"></div>
          </div>
          <h2 className="section-title text-center mx-auto">My Services</h2>
          <p className="section-subtitle text-center mx-auto">
            Professional video editing services tailored to your specific needs.
            From concept to final delivery, I ensure high-quality results that exceed expectations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
        
        {/* Pricing CTA */}
        <div className="mt-20 bg-gray-50 rounded-2xl p-8 md:p-12 text-center border border-gray-100 shadow-md relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
          
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-6">
            <Scissors className="w-6 h-6 text-primary" />
          </div>
          
          <h3 className="text-2xl font-bold mb-4">Need a Custom Package?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Every project is unique. Contact me to discuss your specific requirements and 
            get a tailored quote that fits your needs and budget.
          </p>
          
          <Button asChild className="btn-primary">
            <a href="#contact" className="flex items-center gap-2 justify-center">
              <span>Request a Quote</span>
              <Play className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
