import { useState, useEffect } from "react";
import { useLocation, Link } from "wouter";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { X, Menu, Film, Play } from "lucide-react";

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}

function NavItem({ href, children, isActive, onClick }: NavItemProps) {
  const [location, navigate] = useLocation();
  
  // Check if it's a hash link (#) or a regular route
  const isHashLink = href.startsWith('#');
  
  const handleClick = (e: React.MouseEvent) => {
    if (isHashLink) {
      // For hash links, allow default browser behavior for smooth scrolling
      // but also execute the onClick handler if provided
      if (onClick) onClick();
      
      // Manually handle scrolling to section
      if (href === '#home') {
        e.preventDefault(); // prevent default for #home
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      // For regular routes, use wouter navigation
      e.preventDefault();
      navigate(href);
      if (onClick) onClick();
    }
  };
  
  // Use different components based on the type of link
  if (isHashLink) {
    return (
      <a
        href={href}
        onClick={handleClick}
        className={`nav-link text-base font-medium py-2 ${
          isActive ? "active" : ""
        }`}
      >
        {children}
      </a>
    );
  } else {
    return (
      <Link href={href}>
        <a
          className={`nav-link text-base font-medium py-2 ${
            isActive ? "active" : ""
          }`}
          onClick={onClick}
        >
          {children}
        </a>
      </Link>
    );
  }
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();
  const activeSection = useScrollSpy(['home', 'about', 'portfolio', 'services', 'testimonials', 'contact'], {
    threshold: 0.3,
    rootMargin: '-100px 0px 0px 0px'
  });
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <nav className={`fixed w-full z-50 bg-white/95 backdrop-blur-sm transition-all duration-300 ${
      isScrolled ? "shadow-lg py-2" : "py-4"
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center cursor-pointer">
              <Film className="text-primary w-8 h-8 mr-2" />
              <h1 className="text-2xl font-bold text-primary">
                <span className="flex items-center">
                  JAY <span className="ml-1 text-gray-800">KHANDWAYE</span>
                </span>
              </h1>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavItem href="#home" isActive={activeSection === 'home'}>Home</NavItem>
            <NavItem href="#about" isActive={activeSection === 'about'}>About</NavItem>
            <NavItem href="#portfolio" isActive={activeSection === 'portfolio'}>Portfolio</NavItem>
            <NavItem href="#services" isActive={activeSection === 'services'}>Services</NavItem>
            <NavItem href="#testimonials" isActive={activeSection === 'testimonials'}>Testimonials</NavItem>
            <NavItem href="/gallery">Gallery</NavItem>
            <a 
              href="#contact" 
              className="btn-primary rounded-md flex items-center gap-2 py-2 px-4 text-white"
            >
              <span>Contact</span>
              <Play className="w-4 h-4" />
            </a>
          </div>
          
          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" className="text-primary hover:bg-primary/10">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-white w-64 border-l border-gray-200">
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-center mb-8 pt-2">
                    <div className="flex items-center">
                      <Film className="text-primary w-6 h-6 mr-2" />
                      <span className="text-lg font-bold text-primary">JAY</span>
                    </div>
                    <SheetClose asChild>
                      <Button variant="ghost" size="icon" className="text-gray-500 hover:text-primary">
                        <X className="h-5 w-5" />
                      </Button>
                    </SheetClose>
                  </div>
                  
                  <div className="flex flex-col space-y-5">
                    <SheetClose asChild>
                      <NavItem href="#home">Home</NavItem>
                    </SheetClose>
                    <SheetClose asChild>
                      <NavItem href="#about">About</NavItem>
                    </SheetClose>
                    <SheetClose asChild>
                      <NavItem href="#portfolio">Portfolio</NavItem>
                    </SheetClose>
                    <SheetClose asChild>
                      <NavItem href="#services">Services</NavItem>
                    </SheetClose>
                    <SheetClose asChild>
                      <NavItem href="#testimonials">Testimonials</NavItem>
                    </SheetClose>
                    <SheetClose asChild>
                      <NavItem href="/gallery">Gallery</NavItem>
                    </SheetClose>
                  </div>
                  
                  <div className="mt-auto pt-6 pb-8">
                    <SheetClose asChild>
                      <a 
                        href="#contact"
                        className="btn-primary w-full rounded-md flex items-center justify-center gap-2 py-2 px-4 text-white"
                      >
                        <span>Contact</span>
                        <Play className="w-4 h-4" />
                      </a>
                    </SheetClose>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
