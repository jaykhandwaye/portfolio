import { Film, Wand2, Palette, Volume2, Smartphone, ShoppingCart } from "lucide-react";
import { ServiceProps } from "@/components/ServiceCard";
import React from "react";

export const services: ServiceProps[] = [
  {
    icon: React.createElement(Film),
    title: "Video Production & Editing",
    description: "Complete video production from raw footage to polished final product. Expert cutting, sequencing, and timing to tell your story effectively.",
    features: [
      "Professional cutting and assembly",
      "Seamless transitions and effects",
      "Narrative structure refinement"
    ]
  },
  {
    icon: React.createElement(Wand2),
    title: "Motion Graphics & Animation",
    description: "Eye-catching animations and motion graphics that enhance your video content and help communicate complex ideas in an engaging way.",
    features: [
      "Custom animated elements",
      "Logo animations and branding",
      "Animated infographics"
    ]
  },
  {
    icon: React.createElement(Palette),
    title: "Color Grading & Correction",
    description: "Professional color enhancement to create mood, atmosphere, and visual consistency throughout your video project.",
    features: [
      "Advanced color grading",
      "Color matching across footage",
      "Custom LUTs and color profiles"
    ]
  },
  {
    icon: React.createElement(Volume2),
    title: "Audio Editing & Mixing",
    description: "Professional audio enhancement to ensure clear, balanced sound that complements your visual content perfectly.",
    features: [
      "Audio cleaning and restoration",
      "Voice-over integration",
      "Music selection and mixing"
    ]
  },
  {
    icon: React.createElement(Smartphone),
    title: "Social Media Content",
    description: "Platform-specific video content optimized for maximum engagement across different social media channels.",
    features: [
      "Platform-specific formats",
      "Attention-grabbing edits",
      "Trend-aware content creation"
    ]
  },
  {
    icon: React.createElement(ShoppingCart),
    title: "eCommerce Video Production",
    description: "Conversion-focused product videos that showcase features and benefits to drive sales and engagement.",
    features: [
      "Product showcase videos",
      "Demonstration clips",
      "Feature highlight animations"
    ]
  }
];
