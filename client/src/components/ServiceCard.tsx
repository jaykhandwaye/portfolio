import { Check } from "lucide-react";

export interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

export function ServiceCard({ service }: { service: ServiceProps }) {
  return (
    <div className="card-hover bg-white rounded-xl shadow-md p-6 border border-gray-100 relative">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-primary/30 rounded-t-xl"></div>
      
      {/* Icon with background */}
      <div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
        <div className="text-2xl">
          {service.icon}
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
      
      <p className="text-gray-600 mb-6 leading-relaxed">
        {service.description}
      </p>
      
      <div className="divider"></div>
      
      <ul className="text-gray-700 space-y-3 mt-4">
        {service.features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
              <Check className="text-primary h-3 w-3" />
            </span>
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
