import { MapPin, Mail, Phone, Linkedin, Instagram, Youtube } from "lucide-react";
import { FaBehanceSquare } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Column */}
          <div>
            <h3 className="text-xl font-bold font-montserrat mb-6">Jay Khandwaye</h3>
            <p className="text-neutral-400 mb-6">
              Professional video editor and videographer with a passion for visual storytelling 
              and creating impactful video content.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold font-montserrat mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-neutral-400 hover:text-accent transition-colors duration-300">Home</a></li>
              <li><a href="#about" className="text-neutral-400 hover:text-accent transition-colors duration-300">About</a></li>
              <li><a href="#portfolio" className="text-neutral-400 hover:text-accent transition-colors duration-300">Portfolio</a></li>
              <li><a href="#services" className="text-neutral-400 hover:text-accent transition-colors duration-300">Services</a></li>
              <li><a href="#contact" className="text-neutral-400 hover:text-accent transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
          
          {/* Services Column */}
          <div>
            <h3 className="text-xl font-bold font-montserrat mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-neutral-400 hover:text-accent transition-colors duration-300">Video Production</a></li>
              <li><a href="#services" className="text-neutral-400 hover:text-accent transition-colors duration-300">Motion Graphics</a></li>
              <li><a href="#services" className="text-neutral-400 hover:text-accent transition-colors duration-300">Color Grading</a></li>
              <li><a href="#services" className="text-neutral-400 hover:text-accent transition-colors duration-300">Audio Editing</a></li>
              <li><a href="#services" className="text-neutral-400 hover:text-accent transition-colors duration-300">Social Media Content</a></li>
            </ul>
          </div>
          
          {/* Contact Column */}
          <div>
            <h3 className="text-xl font-bold font-montserrat mb-6">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="text-accent mt-1 mr-3 h-5 w-5" />
                <span className="text-neutral-400">Ahmedabad, Gujarat, India</span>
              </li>
              <li className="flex items-start">
                <Mail className="text-accent mt-1 mr-3 h-5 w-5" />
                <a href="mailto:khandwayejay1220@gmail.com" className="text-neutral-400 hover:text-accent transition-colors duration-300">
                  khandwayejay1220@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="text-accent mt-1 mr-3 h-5 w-5" />
                <a href="tel:+919340255075" className="text-neutral-400 hover:text-accent transition-colors duration-300">
                  +91 9340255075
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-neutral-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Jay Khandwaye. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-neutral-500 hover:text-accent transition-colors duration-300">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-neutral-500 hover:text-accent transition-colors duration-300">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-neutral-500 hover:text-accent transition-colors duration-300">
              <Youtube className="h-5 w-5" />
            </a>
            <a href="#" className="text-neutral-500 hover:text-accent transition-colors duration-300">
              <FaBehanceSquare className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
