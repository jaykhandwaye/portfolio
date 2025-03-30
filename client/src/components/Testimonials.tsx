import { useState } from "react";
import { Button } from "@/components/ui/button";
import { testimonials } from "@/data/testimonials";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };
  
  const currentTestimonial = testimonials[currentIndex];
  
  return (
    <section id="testimonials" className="py-20 bg-neutral-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-montserrat mb-4">Client Testimonials</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-neutral-600">
            Here's what clients have to say about working with me on their video projects.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="testimonial-slider">
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="shrink-0">
                  <img 
                    src={currentTestimonial.avatar} 
                    alt={currentTestimonial.name} 
                    className="w-20 h-20 rounded-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex text-yellow-400 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-5 h-5 fill-current ${i < currentTestimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <p className="text-neutral-700 italic mb-4">
                    "{currentTestimonial.text}"
                  </p>
                  <div>
                    <h4 className="font-semibold text-neutral-900">{currentTestimonial.name}</h4>
                    <p className="text-neutral-500 text-sm">{currentTestimonial.title}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevTestimonial}
              className="bg-neutral-300 hover:bg-accent text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextTestimonial}
              className="bg-neutral-300 hover:bg-accent text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
