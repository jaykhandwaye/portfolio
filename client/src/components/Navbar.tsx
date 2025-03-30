import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { X, Menu } from "lucide-react";

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}

function NavItem({ href, children, isActive, onClick }: NavItemProps) {
  const [location, setLocation] = useLocation();
  
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setLocation(href);
    if (onClick) onClick();
  };
  
  return (
    <a
      href={href}
      onClick={handleClick}
      className={`transition-colors duration-300 ${
        isActive ? "text-accent font-semibold" : "text-neutral-600 hover:text-accent"
      }`}
    >
      {children}
    </a>
  );
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
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
    <nav className={`fixed w-full z-50 bg-white transition-shadow duration-300 ${
      isScrolled ? "shadow-md" : ""
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl font-bold font-montserrat text-neutral-900">
              <a href="#home">JAY KHANDWAYE</a>
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavItem href="#home" isActive={activeSection === 'home'}>Home</NavItem>
            <NavItem href="#about" isActive={activeSection === 'about'}>About</NavItem>
            <NavItem href="#portfolio" isActive={activeSection === 'portfolio'}>Portfolio</NavItem>
            <NavItem href="#services" isActive={activeSection === 'services'}>Services</NavItem>
            <NavItem href="#testimonials" isActive={activeSection === 'testimonials'}>Testimonials</NavItem>
            <NavItem href="/gallery">Gallery</NavItem>
            <Button asChild className="bg-accent text-white hover:bg-accent/90">
              <a href="#contact">Contact</a>
            </Button>
          </div>
          
          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" className="text-neutral-600 hover:text-accent">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-primary w-64">
                <div className="flex justify-end mb-6">
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon" className="text-white hover:text-accent">
                      <X className="h-6 w-6" />
                    </Button>
                  </SheetClose>
                </div>
                <div className="flex flex-col space-y-6">
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
                  <SheetClose asChild>
                    <Button asChild className="bg-accent text-white hover:bg-accent/90 w-full">
                      <a href="#contact">Contact</a>
                    </Button>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
