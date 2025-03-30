import { useEffect, useState, useRef } from "react";

interface SkillProgressProps {
  name: string;
  percentage: number;
}

export function SkillProgress({ name, percentage }: SkillProgressProps) {
  const [animated, setAnimated] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    
    if (progressRef.current) {
      observer.observe(progressRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 card-hover">
      <div className="flex justify-between items-center mb-3">
        <h4 className="font-medium text-gray-800">{name}</h4>
        <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded font-medium">
          {percentage}%
        </span>
      </div>
      <div 
        className="relative h-2.5 bg-gray-100 rounded-full overflow-hidden" 
        ref={progressRef}
      >
        <div 
          className="absolute top-0 left-0 h-full bg-primary transition-all duration-1000 ease-out rounded-full"
          style={{ width: animated ? `${percentage}%` : '0%' }}
        />
      </div>
    </div>
  );
}
