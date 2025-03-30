import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { portfolioItems } from "@/data/portfolioItems";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  video: typeof portfolioItems[0] | null;
}

export default function VideoModal({ isOpen, onClose, video }: VideoModalProps) {
  if (!video) return null;
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-black text-white max-w-4xl">
        <DialogHeader className="relative">
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute -top-2 right-0 text-white hover:text-accent"
          >
            <X className="h-6 w-6" />
          </Button>
          <div className="bg-black rounded-lg overflow-hidden aspect-video w-full mt-4">
            {/* Video player would go here - using placeholder */}
            <div className="w-full h-96 flex items-center justify-center">
              <img 
                src={video.thumbnail} 
                alt={video.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button 
                  size="icon" 
                  className="h-16 w-16 rounded-full bg-accent hover:bg-accent/90"
                >
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
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <DialogTitle className="text-xl font-semibold font-montserrat mb-2">
              {video.title}
            </DialogTitle>
            <DialogDescription className="text-neutral-300">
              {video.description}
            </DialogDescription>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
