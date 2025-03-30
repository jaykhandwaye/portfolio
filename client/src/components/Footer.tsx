import { MapPin, Mail, Phone, Linkedin, Instagram, Youtube, Film, ArrowUp } from "lucide-react";
import { FaBehanceSquare } from "react-icons/fa";
import { Button } from "./ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-6 relative">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
      
      {/* Back to top button */}
      <div className="absolute -top-6 right-10">
        <Button 
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg flex items-center justify-center"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-8">
          {/* About Column */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Film className="text-primary w-6 h-6" />
              <h3 className="text-xl font-bold">Jay Khandwaye</h3>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Professional video editor and videographer with a passion for visual storytelling 
              and creating impactful video content.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-primary transition-colors duration-300">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-primary transition-colors duration-300">About</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-primary transition-colors duration-300">Portfolio</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors duration-300">Services</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-primary transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
          
          {/* Services Column */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Services</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors duration-300">Video Production</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors duration-300">Motion Graphics</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors duration-300">Color Grading</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors duration-300">Audio Editing</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors duration-300">Social Media Content</a></li>
            </ul>
          </div>
          
          {/* Contact Column */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-gray-800 p-2 rounded-md mr-3 flex-shrink-0">
                  <MapPin className="text-primary h-5 w-5" />
                </div>
                <span className="text-gray-400 mt-1">Ahmedabad, Gujarat, India</span>
              </li>
              <li className="flex items-start">
                <div className="bg-gray-800 p-2 rounded-md mr-3 flex-shrink-0">
                  <Mail className="text-primary h-5 w-5" />
                </div>
                <a href="mailto:khandwayejay1220@gmail.com" className="text-gray-400 hover:text-primary transition-colors duration-300 mt-1">
                  khandwayejay1220@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <div className="bg-gray-800 p-2 rounded-md mr-3 flex-shrink-0">
                  <Phone className="text-primary h-5 w-5" />
                </div>
                <a href="tel:+919340255075" className="text-gray-400 hover:text-primary transition-colors duration-300 mt-1">
                  +91 9340255075
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="divider bg-gray-800"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-6">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Jay Khandwaye. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300 p-2 bg-gray-800 rounded-full">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300 p-2 bg-gray-800 rounded-full">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300 p-2 bg-gray-800 rounded-full">
              <Youtube className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300 p-2 bg-gray-800 rounded-full">
              <FaBehanceSquare className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
