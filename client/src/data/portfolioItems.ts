export interface PortfolioItem {
  title: string;
  description: string;
  thumbnail: string;
  category: string;
  tools: string[];
  videoUrl: string;
  isYoutubeVideo?: boolean;
  isPhotoGallery?: boolean;
}

// Portfolio items data
export const portfolioItems: PortfolioItem[] = [
  {
    title: "Corporate Brand Video",
    description: "Full brand story video for Anjney showcasing their values and products",
    thumbnail: "https://images.unsplash.com/photo-1578450671530-5b6a7c9f32a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    category: "corporate",
    tools: ["Premiere Pro", "After Effects"],
    videoUrl: "https://www.youtube.com/watch?v=example1",
    isYoutubeVideo: true
  },
  {
    title: "Product Launch Promotion",
    description: "Teaser video for new product launch with motion graphics and effects",
    thumbnail: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    category: "promotional",
    tools: ["After Effects", "Premiere Pro"],
    videoUrl: "https://www.youtube.com/watch?v=example2",
    isYoutubeVideo: true
  },
  {
    title: "Social Media Campaign",
    description: "Series of Instagram reels for engagement campaign with animation",
    thumbnail: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    category: "social",
    tools: ["Premiere Pro", "Photoshop"],
    videoUrl: "https://www.youtube.com/watch?v=example3",
    isYoutubeVideo: true
  },
  {
    title: "Product Showcase",
    description: "Detailed eCommerce product video with features and benefits",
    thumbnail: "https://images.unsplash.com/photo-1661956602139-ec64991b8b16?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    category: "ecommerce",
    tools: ["Premiere Pro", "DaVinci Resolve"],
    videoUrl: "https://www.youtube.com/watch?v=example4",
    isYoutubeVideo: true
  },
  {
    title: "Photography Collection",
    description: "A curated collection of photography showcasing composition techniques and visual storytelling",
    thumbnail: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    category: "photography",
    tools: ["Photography", "Lightroom"],
    videoUrl: "/gallery",
    isPhotoGallery: true
  },
  {
    title: "Corporate Training Video",
    description: "Educational content for internal staff with animated explanations",
    thumbnail: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    category: "corporate",
    tools: ["Premiere Pro", "After Effects"],
    videoUrl: "https://www.youtube.com/watch?v=example5",
    isYoutubeVideo: true
  },
  {
    title: "YouTube Content Series",
    description: "Multi-episode content series with consistent branding and transitions",
    thumbnail: "https://images.unsplash.com/photo-1533228100845-08145b01de14?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    category: "social",
    tools: ["Final Cut Pro", "Motion"],
    videoUrl: "https://www.youtube.com/watch?v=example6",
    isYoutubeVideo: true
  }
];
