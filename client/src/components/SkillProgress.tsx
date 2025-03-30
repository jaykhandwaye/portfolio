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
    <div className="skill-item">
      <div className="flex justify-between items-center mb-2">
        <h4 className="font-medium">{name}</h4>
        <span className="text-sm">{percentage}%</span>
      </div>
      <div className="relative h-2 bg-neutral-200 rounded-full overflow-hidden" ref={progressRef}>
        <div 
          className="absolute top-0 left-0 h-full bg-accent transition-all duration-1000 ease-out" 
          style={{ width: animated ? `${percentage}%` : '0%' }}
        />
      </div>
    </div>
  );
}
