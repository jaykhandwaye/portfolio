export interface GalleryItem {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  fullImage: string;
  description: string;
}

// Gallery images will be stored in the public/assets/gallery folder
export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Cinematic Sunset",
    category: "Photography",
    thumbnail: "/assets/gallery/thumbnails/sunset-thumb.jpg",
    fullImage: "/assets/gallery/sunset.jpg",
    description: "Dramatic sunset captured with cinematic color grading"
  },
  {
    id: 2,
    title: "Urban Architecture",
    category: "Photography",
    thumbnail: "/assets/gallery/thumbnails/architecture-thumb.jpg",
    fullImage: "/assets/gallery/architecture.jpg",
    description: "Modern urban architecture with precise composition"
  },
  {
    id: 3,
    title: "Portrait Lighting",
    category: "Photography",
    thumbnail: "/assets/gallery/thumbnails/portrait-thumb.jpg",
    fullImage: "/assets/gallery/portrait.jpg",
    description: "Professional portrait with studio lighting techniques"
  },
  {
    id: 4,
    title: "Nature Close-up",
    category: "Photography",
    thumbnail: "/assets/gallery/thumbnails/nature-thumb.jpg",
    fullImage: "/assets/gallery/nature.jpg",
    description: "Detailed macro photography showcasing natural elements"
  },
  {
    id: 5,
    title: "Street Scene",
    category: "Photography",
    thumbnail: "/assets/gallery/thumbnails/street-thumb.jpg",
    fullImage: "/assets/gallery/street.jpg",
    description: "Candid street photography capturing urban life"
  },
  {
    id: 6,
    title: "Product Shot",
    category: "Photography",
    thumbnail: "/assets/gallery/thumbnails/product-thumb.jpg",
    fullImage: "/assets/gallery/product.jpg",
    description: "Professional product photography with perfect lighting"
  },
  {
    id: 7,
    title: "Landscape Panorama",
    category: "Photography",
    thumbnail: "/assets/gallery/thumbnails/landscape-thumb.jpg",
    fullImage: "/assets/gallery/landscape.jpg",
    description: "Sweeping landscape panorama with depth and dimension"
  },
  {
    id: 8,
    title: "Event Coverage",
    category: "Photography",
    thumbnail: "/assets/gallery/thumbnails/event-thumb.jpg",
    fullImage: "/assets/gallery/event.jpg",
    description: "Dynamic event photography capturing key moments"
  }
];