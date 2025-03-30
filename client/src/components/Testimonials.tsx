import { useState } from "react";
import { Button } from "@/components/ui/button";
import { testimonials } from "@/data/testimonials";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

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
    <section id="testimonials" className="section bg-gray-50">
      <div className="container mx-auto">
        <div className="mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-[1px] w-8 bg-primary"></div>
            <span className="text-primary uppercase tracking-wider text-sm font-medium">Client Reviews</span>
            <div className="h-[1px] w-8 bg-primary"></div>
          </div>
          <h2 className="section-title text-center mx-auto">Client Testimonials</h2>
          <p className="section-subtitle text-center mx-auto">
            Here's what clients have to say about working with me on their video projects.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="testimonial-slider relative">
            <div className="bg-white rounded-2xl shadow-md p-8 md:p-10 border border-gray-100 card-hover">
              {/* Large quote mark in background */}
              <div className="absolute top-6 right-8 text-gray-100 opacity-50">
                <Quote className="w-24 h-24" />
              </div>
              
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 relative z-10">
                <div className="shrink-0">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary/10 shadow-lg">
                    <img 
                      src={currentTestimonial.avatar} 
                      alt={currentTestimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div>
                  <div className="flex text-yellow-400 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-5 h-5 ${i < currentTestimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200 fill-gray-200'}`} 
                      />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                    "{currentTestimonial.text}"
                  </p>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <h4 className="font-bold text-gray-900 text-lg">{currentTestimonial.name}</h4>
                    <p className="text-gray-500">{currentTestimonial.title}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Pagination dots */}
          <div className="flex justify-center items-center gap-1 mt-8 mb-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === currentIndex ? 'bg-primary w-8' : 'bg-gray-300 hover:bg-primary/50'
                }`}
                onClick={() => setCurrentIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          
          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-2">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevTestimonial}
              className="border-gray-200 hover:bg-primary hover:text-white hover:border-primary w-10 h-10 rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextTestimonial}
              className="border-gray-200 hover:bg-primary hover:text-white hover:border-primary w-10 h-10 rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
