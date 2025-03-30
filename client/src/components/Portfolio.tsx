import { useState } from "react";
import { Button } from "@/components/ui/button";
import { portfolioItems } from "@/data/portfolioItems";
import VideoModal from "./VideoModal";

type FilterCategory = 'all' | 'corporate' | 'promotional' | 'social' | 'ecommerce';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');
  const [selectedVideo, setSelectedVideo] = useState<null | typeof portfolioItems[0]>(null);
  const [modalOpen, setModalOpen] = useState(false);
  
  const filteredItems = portfolioItems.filter(
    item => activeFilter === 'all' || item.category === activeFilter
  );
  
  const handleVideoClick = (video: typeof portfolioItems[0]) => {
    setSelectedVideo(video);
    setModalOpen(true);
  };
  
  return (
    <section id="portfolio" className="py-20 bg-neutral-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-montserrat mb-4">My Portfolio</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-neutral-600">
            Explore a selection of my best work showcasing my skills in video editing, 
            motion graphics, and visual storytelling.
          </p>
        </div>
        
        {/* Portfolio Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button
            onClick={() => setActiveFilter('all')}
            variant={activeFilter === 'all' ? 'default' : 'outline'}
            className={activeFilter === 'all' 
              ? "bg-accent text-white hover:bg-accent/90" 
              : "bg-white text-neutral-700 hover:bg-neutral-200"}
          >
            All Projects
          </Button>
          <Button
            onClick={() => setActiveFilter('corporate')}
            variant={activeFilter === 'corporate' ? 'default' : 'outline'}
            className={activeFilter === 'corporate' 
              ? "bg-accent text-white hover:bg-accent/90" 
              : "bg-white text-neutral-700 hover:bg-neutral-200"}
          >
            Corporate
          </Button>
          <Button
            onClick={() => setActiveFilter('promotional')}
            variant={activeFilter === 'promotional' ? 'default' : 'outline'}
            className={activeFilter === 'promotional' 
              ? "bg-accent text-white hover:bg-accent/90" 
              : "bg-white text-neutral-700 hover:bg-neutral-200"}
          >
            Promotional
          </Button>
          <Button
            onClick={() => setActiveFilter('social')}
            variant={activeFilter === 'social' ? 'default' : 'outline'}
            className={activeFilter === 'social' 
              ? "bg-accent text-white hover:bg-accent/90" 
              : "bg-white text-neutral-700 hover:bg-neutral-200"}
          >
            Social Media
          </Button>
          <Button
            onClick={() => setActiveFilter('ecommerce')}
            variant={activeFilter === 'ecommerce' ? 'default' : 'outline'}
            className={activeFilter === 'ecommerce' 
              ? "bg-accent text-white hover:bg-accent/90" 
              : "bg-white text-neutral-700 hover:bg-neutral-200"}
          >
            eCommerce
          </Button>
        </div>
        
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div 
              key={index}
              className="group relative rounded-xl overflow-hidden shadow-lg cursor-pointer"
              onClick={() => handleVideoClick(item)}
            >
              <img 
                src={item.thumbnail} 
                alt={item.title} 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/80 opacity-0 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-white group-hover:opacity-100">
                <h3 className="text-xl font-semibold font-montserrat mb-2">{item.title}</h3>
                <p className="text-sm text-center mb-4">{item.description}</p>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {item.tools.map((tool, idx) => (
                    <span key={idx} className="text-xs bg-accent/30 px-2 py-1 rounded-full">{tool}</span>
                  ))}
                </div>
                <button className="bg-accent hover:bg-accent/90 text-white rounded-full w-12 h-12 flex items-center justify-center">
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
                  >
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* View More Button */}
        <div className="text-center mt-12">
          <Button 
            className="bg-neutral-800 hover:bg-neutral-700 text-white font-medium py-3 px-8"
            onClick={() => setActiveFilter('all')}
          >
            View More Projects
          </Button>
        </div>
      </div>
      
      {/* Video Modal */}
      <VideoModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)}
        video={selectedVideo}
      />
    </section>
  );
}
