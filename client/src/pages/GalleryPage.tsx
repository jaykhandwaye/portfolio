import Navbar from "@/components/Navbar";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import { Film, Camera, Image, Grid } from "lucide-react";

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section with Parallax Effect */}
        <div className="relative bg-black h-[50vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80 z-10"></div>
          
          {/* Background Pattern */}
          <div className="absolute inset-0 pattern-grid opacity-10"></div>
          
          {/* Floating Elements - Only visible on medium screens and up */}
          <div className="hidden md:block absolute -top-10 -left-10 w-40 h-40 bg-primary/20 blur-3xl rounded-full"></div>
          <div className="hidden md:block absolute top-1/3 -right-20 w-60 h-60 bg-primary/10 blur-3xl rounded-full"></div>
          <div className="hidden md:block absolute bottom-0 left-1/4 w-80 h-40 bg-primary/10 blur-3xl rounded-full"></div>
          
          {/* Content */}
          <div className="container z-20 px-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-[1px] w-6 bg-primary"></div>
              <span className="text-primary uppercase tracking-widest text-sm font-medium">Visual Collections</span>
              <div className="h-[1px] w-6 bg-primary"></div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black mb-6 text-white leading-tight">
              Photography <span className="text-primary">Gallery</span>
            </h1>
            
            <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed mb-8">
              Explore my collection of visual compositions, showcasing my photographic style 
              and approach to capturing meaningful moments.
            </p>
            
            {/* Icon set */}
            <div className="flex items-center justify-center gap-6 mt-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <Film className="w-5 h-5 text-white" />
              </div>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <Camera className="w-5 h-5 text-white" />
              </div>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <Image className="w-5 h-5 text-white" />
              </div>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <Grid className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>
        
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}