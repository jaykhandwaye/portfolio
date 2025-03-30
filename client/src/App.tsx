import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import Home from "@/pages/Home";
import GalleryPage from "@/pages/GalleryPage";
import NotFound from "@/pages/not-found";
import { useEffect } from "react";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/gallery" component={GalleryPage} />
      <Route path="/*" component={NotFound} />
    </Switch>
  );
}

function App() {
  const [location, setLocation] = useLocation();

  useEffect(() => {
    // Handle hash navigation by scrolling to the section
    if (location && location.includes('#')) {
      const id = location.split('#')[1];
      const element = document.getElementById(id);
      
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
