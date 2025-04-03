
import React from "react";
import { 
  Leaf, 
  Zap, 
  Recycle, 
  Users,
  School,
  Cpu,
  Code,
  BarChart2
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface StatItemProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  description?: string;
  delay: number;
}

function StatItem({ icon, value, label, description, delay }: StatItemProps) {
  return (
    <Card className="animate-fade-in" style={{animationDelay: `${delay}ms`}}>
      <CardContent className="pt-6 px-6 pb-4">
        <div className="flex items-center mb-3">
          <div className="mr-3 p-3 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300">
            {icon}
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{value}</h3>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{label}</p>
          </div>
        </div>
        {description && (
          <p className="text-xs text-gray-500 dark:text-gray-400 border-t pt-2">{description}</p>
        )}
      </CardContent>
    </Card>
  );
}

export default function Stats() {
  const mainStats = [
    {
      icon: <Zap className="h-6 w-6" />,
      value: "30%",
      label: "Energy Reduction",
      description: "Annual energy savings through smart scheduling and power management",
      delay: 100
    },
    {
      icon: <Recycle className="h-6 w-6" />,
      value: "2,500+",
      label: "Items Reused",
      description: "Products exchanged through our sustainable marketplace",
      delay: 300
    },
    {
      icon: <Leaf className="h-6 w-6" />,
      value: "15 tons",
      label: "CO₂ Saved",
      description: "Carbon footprint reduction from all platform activities",
      delay: 500
    },
    {
      icon: <Users className="h-6 w-6" />,
      value: "10,000+",
      label: "Active Users",
      description: "Students, faculty and developers using GreenStack",
      delay: 700
    }
  ];

  const platformStats = [
    {
      icon: <School className="h-6 w-6" />,
      value: "24",
      label: "Smart Classrooms",
      description: "IoT-enabled rooms with automated energy management",
      delay: 900
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      value: "45%",
      label: "Code Efficiency",
      description: "Average improvement in code energy efficiency",
      delay: 1100
    },
    {
      icon: <Code className="h-6 w-6" />,
      value: "8+",
      label: "Languages Supported",
      description: "Programming languages optimized by our green compiler",
      delay: 1300
    },
    {
      icon: <BarChart2 className="h-6 w-6" />,
      value: "$42K",
      label: "Cost Savings",
      description: "Annual institution savings from energy optimization",
      delay: 1500
    }
  ];

  return (
    <section className="bg-gray-50 dark:bg-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold gradient-heading sm:text-4xl">
            Sustainability Impact
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
            Real-world results from our comprehensive sustainability platform
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {mainStats.map((stat, i) => (
            <StatItem
              key={i}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              description={stat.description}
              delay={stat.delay}
            />
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {platformStats.map((stat, i) => (
            <StatItem
              key={i}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              description={stat.description}
              delay={stat.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
