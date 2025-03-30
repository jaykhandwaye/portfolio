import { useState } from "react";
import { galleryItems, GalleryItem } from "@/data/galleryItems";
import { 
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export default function Gallery() {
  const [filter, setFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

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

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Photo Gallery</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse through a collection of my photography work, showcasing my eye for composition, 
            lighting, and visual storytelling. Each image represents my approach to visual aesthetics.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8 justify-between">
          <div className="md:w-1/3">
            <Input
              type="text"
              placeholder="Search by title or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full"
            />
          </div>
          <div className="md:w-1/4">
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {filteredItems.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-lg text-muted-foreground">No matching images found. Try adjusting your filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <Dialog key={item.id}>
                <DialogTrigger asChild>
                  <div 
                    className="group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-card"
                    onClick={() => setSelectedImage(item)}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white font-medium text-sm px-3 py-1 border border-white/50 rounded-full">
                          View Image
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">{item.category}</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-3xl">
                  <div className="mt-2">
                    <img 
                      src={item.fullImage} 
                      alt={item.title}
                      className="w-full h-auto rounded-md"
                    />
                    <div className="mt-4">
                      <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{item.category}</p>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}