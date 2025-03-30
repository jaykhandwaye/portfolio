import { useScrollToTop } from "@/hooks/useScrollToTop";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";

export default function BackToTop() {
  const { isVisible, scrollToTop } = useScrollToTop();
  
  return (
    <Button
      size="icon"
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 bg-accent hover:bg-accent/90 text-white w-12 h-12 rounded-full shadow-lg transition-all duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <ChevronUp className="h-6 w-6" />
    </Button>
  );
}
