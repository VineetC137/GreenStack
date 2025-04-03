
import React from "react";
import { 
  Leaf, 
  Zap, 
  Recycle, 
  Users 
} from "lucide-react";

interface StatItemProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  delay: number;
}

function StatItem({ icon, value, label, delay }: StatItemProps) {
  return (
    <div className="flex flex-col items-center animate-fade-in" style={{animationDelay: `${delay}ms`}}>
      <div className="mb-2 p-3 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300">
        {icon}
      </div>
      <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{value}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
    </div>
  );
}

export default function Stats() {
  const stats = [
    {
      icon: <Zap className="h-6 w-6" />,
      value: "30%",
      label: "Energy Reduction",
      delay: 100
    },
    {
      icon: <Recycle className="h-6 w-6" />,
      value: "2,500+",
      label: "Items Reused",
      delay: 300
    },
    {
      icon: <Leaf className="h-6 w-6" />,
      value: "15 tons",
      label: "CO₂ Saved",
      delay: 500
    },
    {
      icon: <Users className="h-6 w-6" />,
      value: "10,000+",
      label: "Active Users",
      delay: 700
    }
  ];

  return (
    <section className="bg-gray-50 dark:bg-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <StatItem
              key={i}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              delay={stat.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
