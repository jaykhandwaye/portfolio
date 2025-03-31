import { useState, useRef, useEffect } from "react";
import { galleryItems, GalleryItem } from "@/data/galleryItems";
import { 
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Search, X, Image, ChevronLeft, ChevronRight, ZoomIn, Camera } from "lucide-react";

export default function Gallery() {
  const [filter, setFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  // Create a unique list of categories
  const categorySet = new Set<string>();
  galleryItems.forEach(item => categorySet.add(item.category.toLowerCase()));
  const categories = ["all", ...Array.from(categorySet)];

  const filteredItems = galleryItems.filter(item => {
    const matchesCategory = filter === "all" || item.category.toLowerCase() === filter;
    const matchesSearch = 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  // Focus search input when user presses '/'
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/' && document.activeElement !== searchRef.current) {
        e.preventDefault();
        searchRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // For lightbox navigation
  const handlePrevImage = () => {
    setSelectedImageIndex((prevIndex) => 
      prevIndex === 0 ? filteredItems.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prevIndex) => 
      prevIndex === filteredItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleImageClick = (item: GalleryItem, index: number) => {
    setSelectedImage(item);
    setSelectedImageIndex(index);
  };

  const clearSearch = () => {
    setSearchQuery("");
    searchRef.current?.focus();
  };

  return (
    <section id="gallery" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header Styling */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-[1px] w-8 bg-primary"></div>
            <span className="text-primary uppercase tracking-wider text-sm font-medium">Browse Collection</span>
            <div className="h-[1px] w-8 bg-primary"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Photo Gallery</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-center leading-relaxed">
            Browse through a collection of my photography work, showcasing my eye for composition, 
            lighting, and visual storytelling. Each image represents my approach to visual aesthetics.
          </p>
        </div>

        {/* Search and Filter Bar - Modern Design with Shadows */}
        <div className="bg-white rounded-xl shadow-md p-4 md:p-6 mb-10 border border-gray-100">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1 relative w-full">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <Input
                ref={searchRef}
                type="text"
                placeholder="Search images... (Press '/' to focus)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 py-6 w-full border-gray-200 focus:border-primary focus:ring-primary"
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute inset-y-0 right-3 flex items-center"
                >
                  <X className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                </button>
              )}
            </div>
            
            <div className="w-full md:w-60">
              <Select value={filter} onValueChange={setFilter}>
                <SelectTrigger className="w-full py-6 border-gray-200">
                  <div className="flex items-center">
                    <Camera className="w-4 h-4 mr-2 text-gray-500" />
                    <SelectValue placeholder="All Categories" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category === "all" ? "All Categories" : category.charAt(0).toUpperCase() + category.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-gray-900">{filteredItems.length}</span> {filteredItems.length === 1 ? 'image' : 'images'}
          </p>
          
          {filter !== "all" && (
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setFilter("all")}
              className="text-sm"
            >
              <X className="h-4 w-4 mr-1" /> Clear filter
            </Button>
          )}
        </div>

        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Image className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold mb-2">No images found</h3>
            <p className="text-gray-500 max-w-md mx-auto">
              We couldn't find any images matching your search criteria. 
              Try adjusting your filters or search terms.
            </p>
            <Button 
              variant="outline" 
              className="mt-4" 
              onClick={() => {setFilter("all"); setSearchQuery("")}}
            >
              Clear all filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
            {filteredItems.map((item, index) => (
              <Dialog key={item.id}>
                <DialogTrigger asChild>
                  <div 
                    className="group cursor-pointer overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-all duration-300 bg-white border border-gray-100 card-hover h-full"
                    onClick={() => handleImageClick(item, index)}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-4">
                        <div className="w-full">
                          <span className="inline-flex items-center px-3 py-1 bg-primary/90 text-white text-xs rounded-full mb-2">
                            {item.category}
                          </span>
                          <h3 className="text-white font-medium text-lg">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                      
                      {/* Zoom button */}
                      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-md">
                          <ZoomIn className="h-5 w-5 text-gray-700" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-5">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-sm text-gray-500 mb-2">{item.category}</p>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm line-clamp-2">{item.description}</p>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-5xl bg-black/95 border-none p-0">
                  <div className="relative">
                    <img 
                      src={item.fullImage} 
                      alt={item.title}
                      className="w-full h-auto rounded-md"
                    />
                    
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                      <div className="flex justify-between items-end">
                        <div>
                          <h3 className="text-xl text-white font-bold mb-1">{item.title}</h3>
                          <p className="text-gray-300 text-sm">{item.category}</p>
                        </div>
                        <DialogClose asChild>
                          <Button variant="outline" className="rounded-full w-10 h-10 p-0 border-white/20 bg-black/30 hover:bg-black/50">
                            <X className="h-5 w-5 text-white" />
                          </Button>
                        </DialogClose>
                      </div>
                    </div>
                    
                    {/* Arrow navigation buttons */}
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full w-10 h-10 border-white/20 bg-black/30 hover:bg-black/50"
                      onClick={handlePrevImage}
                    >
                      <ChevronLeft className="h-5 w-5 text-white" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full w-10 h-10 border-white/20 bg-black/30 hover:bg-black/50"
                      onClick={handleNextImage}
                    >
                      <ChevronRight className="h-5 w-5 text-white" />
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        )}
        
        {/* Pagination - Can be implemented later if needed */}
        {filteredItems.length > 0 && (
          <div className="flex justify-center mt-14">
            <Button variant="outline" className="mr-2 border-gray-200 text-gray-700">
              <ChevronLeft className="h-4 w-4 mr-1" /> Previous
            </Button>
            <Button className="bg-primary hover:bg-primary/90">
              Next <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}