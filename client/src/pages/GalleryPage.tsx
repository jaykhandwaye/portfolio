import Navbar from "@/components/Navbar";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="pt-20 pb-10 bg-muted">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Photography Gallery</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore my collection of visual compositions, showcasing my photographic style 
              and approach to capturing moments.
            </p>
          </div>
        </div>
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}