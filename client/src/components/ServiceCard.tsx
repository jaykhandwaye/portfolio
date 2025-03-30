import { Check } from "lucide-react";

export interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

export function ServiceCard({ service }: { service: ServiceProps }) {
  return (
    <div className="service-card bg-white rounded-xl shadow-lg p-8 transition-transform duration-300 hover:-translate-y-1">
      <div className="text-accent text-4xl mb-4">
        {service.icon}
      </div>
      <h3 className="text-xl font-semibold font-montserrat mb-3">{service.title}</h3>
      <p className="text-neutral-600 mb-4">
        {service.description}
      </p>
      <ul className="text-neutral-700 space-y-2">
        {service.features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="text-accent mt-1 mr-2 h-4 w-4" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
