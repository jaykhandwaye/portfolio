import { services } from "@/data/services";
import { ServiceCard } from "./ServiceCard";
import { Button } from "@/components/ui/button";

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-montserrat mb-4">My Services</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-neutral-600">
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
        <div className="mt-16 bg-neutral-100 rounded-xl p-8 md:p-12 text-center">
          <h3 className="text-2xl font-semibold font-montserrat mb-4">Need a Custom Package?</h3>
          <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
            Every project is unique. Contact me to discuss your specific requirements and 
            get a tailored quote that fits your needs and budget.
          </p>
          <Button asChild className="bg-accent hover:bg-accent/90 text-white font-medium py-3 px-8">
            <a href="#contact">Request a Quote</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
