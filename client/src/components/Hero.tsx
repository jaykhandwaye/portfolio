import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import { ChevronDown, Download, Film, Play } from "lucide-react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Play video when component mounts and handle autoplay issues
    if (videoRef.current) {
      const playVideo = async () => {
        try {
          await videoRef.current?.play();
        } catch (err) {
          console.error("Error playing video:", err);
        }
      };

      playVideo();
    }
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen flex items-center overflow-hidden"
    >
      {/* Video overlay with gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50 z-10"></div>
        <div className="absolute inset-0 overflow-hidden">
          {/* Video background */}
          <video
            ref={videoRef}
            className="absolute h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            {/* Replace this with your actual video file path */}
            <source src="/assets/hero-background.mp4" type="video/mp4" />
            {/* Fallback background for browsers that don't support video */}
            <div
              className="w-full h-full bg-center bg-cover bg-no-repeat"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80')",
              }}
            ></div>
          </video>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-white max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-primary/80 backdrop-blur-sm text-white py-2 px-4 rounded-full mb-6">
            <Film className="h-4 w-4" />
            <span className="text-sm font-medium">
              Professional Video Editor
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
            <span className="block mb-2">Jay Khandwaye</span>
            <span className="text-primary">Video Editor & Videographer</span>
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-light mb-8 text-white/90">
            Skilled Video Editor | Video Graphics Specialist | Creative
            Storyteller
          </h2>

          <p className="text-lg text-white/80 mb-8 max-w-2xl">
            With over 5 years of experience crafting compelling visual stories,
            I specialize in transforming raw footage into captivating narratives
            that resonate with audiences and deliver on client objectives.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button asChild className="btn-primary">
              <a href="#portfolio" className="group flex items-center gap-2">
                <span>View My Work</span>
                <Play className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              className="border-white hover:bg-white/10 text-white"
            >
              <a href="#contact">Get In Touch</a>
            </Button>

            <Button
              asChild
              variant="outline"
              className="border-white hover:bg-white/10 text-white"
            >
              <a
                href="/assets/documents/jay-khandwaye-cv.pdf"
                download
                className="flex items-center gap-2"
              >
                <Download className="h-4 w-4" />
                <span>Download CV</span>
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <a
          href="#about"
          className="flex flex-col items-center text-white group hover:text-primary transition-colors duration-300"
        >
          <span className="text-sm mb-2 opacity-80 group-hover:opacity-100">
            Scroll Down
          </span>
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
