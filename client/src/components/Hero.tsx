import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center">
      <div className="absolute inset-0 z-0 bg-black/50">
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="w-full h-full bg-center bg-cover bg-no-repeat"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80')"
            }}
          ></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-white max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-montserrat leading-tight mb-4">
            <span className="block">Jay Khandwaye</span>
            <span className="text-accent">Video Editor & Videographer</span>
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-light mb-8">
            Skilled Video Editor | Motion Graphics Specialist | Creative Storyteller
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl">
            With over 5 years of experience crafting compelling visual stories, 
            I specialize in transforming raw footage into captivating narratives 
            that resonate with audiences and deliver on client objectives.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              asChild
              className="bg-accent hover:bg-accent/90 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300"
            >
              <a href="#portfolio">View My Work</a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="bg-transparent hover:bg-white/10 text-white border border-white font-medium py-3 px-6 rounded-md transition-colors duration-300"
            >
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <a href="#about" className="text-white animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-8 w-8"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </a>
      </div>
    </section>
  );
}
