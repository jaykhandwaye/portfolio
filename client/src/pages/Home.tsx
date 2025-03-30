import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { MapPin, Mail, Phone, Clock, Linkedin, Instagram, Youtube } from "lucide-react";
import { FaBehanceSquare } from "react-icons/fa";

export default function Home() {
  return (
    <div className="font-inter text-neutral-800 bg-white">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Testimonials />
      
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-montserrat mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-neutral-600">
              Ready to bring your video project to life? Contact me to discuss your needs
              and how I can help you create compelling video content.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ContactForm />
            
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-semibold font-montserrat mb-6">Contact Information</h3>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-accent/10 text-accent rounded-full w-12 h-12 flex items-center justify-center shrink-0 mr-4">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-900 mb-1">Location</h4>
                    <p className="text-neutral-600">Ahmedabad, Gujarat, India</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-accent/10 text-accent rounded-full w-12 h-12 flex items-center justify-center shrink-0 mr-4">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-900 mb-1">Email</h4>
                    <a href="mailto:khandwayejay1220@gmail.com" className="text-neutral-600 hover:text-accent transition-colors duration-300">
                      khandwayejay1220@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-accent/10 text-accent rounded-full w-12 h-12 flex items-center justify-center shrink-0 mr-4">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-900 mb-1">Phone</h4>
                    <a href="tel:+919340255075" className="text-neutral-600 hover:text-accent transition-colors duration-300">
                      +91 9340255075
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-accent/10 text-accent rounded-full w-12 h-12 flex items-center justify-center shrink-0 mr-4">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-900 mb-1">Working Hours</h4>
                    <p className="text-neutral-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-neutral-600">Weekend availability for urgent projects</p>
                  </div>
                </div>
              </div>
              
              {/* Social Media Links */}
              <div className="mt-12">
                <h4 className="font-medium text-neutral-900 mb-4">Connect With Me</h4>
                <div className="flex space-x-4">
                  <a href="#" className="bg-neutral-200 hover:bg-accent hover:text-white text-neutral-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-neutral-200 hover:bg-accent hover:text-white text-neutral-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-neutral-200 hover:bg-accent hover:text-white text-neutral-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300">
                    <Youtube className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-neutral-200 hover:bg-accent hover:text-white text-neutral-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300">
                    <FaBehanceSquare className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      <BackToTop />
    </div>
  );
}
