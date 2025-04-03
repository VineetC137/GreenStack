
import React from "react";
import { 
  Leaf, 
  Zap, 
  Recycle, 
  Users,
  School,
  Cpu,
  Code,
  BarChart2,
  ShoppingBag,
  Award,
  ArrowUp,
  TrendingUp
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface StatItemProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  description?: string;
  delay: number;
  trend?: {
    value: string;
    isPositive: boolean;
  };
}

function StatItem({ icon, value, label, description, delay, trend }: StatItemProps) {
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
        <div className="space-y-2">
          {trend && (
            <div className="flex items-center text-xs">
              {trend.isPositive ? 
                <ArrowUp className="h-3 w-3 text-green-500 mr-1" /> : 
                <TrendingUp className="h-3 w-3 text-amber-500 mr-1" />}
              <span className={trend.isPositive ? "text-green-500" : "text-amber-500"}>
                {trend.value} {trend.isPositive ? "increase" : "trend"} from last month
              </span>
            </div>
          )}
          {description && (
            <p className="text-xs text-gray-500 dark:text-gray-400 border-t pt-2">{description}</p>
          )}
        </div>
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
      delay: 100,
      trend: {
        value: "5%",
        isPositive: true
      }
    },
    {
      icon: <Recycle className="h-6 w-6" />,
      value: "2,500+",
      label: "Items Reused",
      description: "Products exchanged through our sustainable marketplace",
      delay: 300,
      trend: {
        value: "12%",
        isPositive: true
      }
    },
    {
      icon: <Leaf className="h-6 w-6" />,
      value: "15 tons",
      label: "CO₂ Saved",
      description: "Carbon footprint reduction from all platform activities",
      delay: 500,
      trend: {
        value: "3.2 tons",
        isPositive: true
      }
    },
    {
      icon: <Users className="h-6 w-6" />,
      value: "10,000+",
      label: "Active Users",
      description: "Students, faculty and developers using GreenStack",
      delay: 700,
      trend: {
        value: "steady growth",
        isPositive: true
      }
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
      icon: <ShoppingBag className="h-6 w-6" />,
      value: "820",
      label: "Marketplace Listings",
      description: "Active items available for sale, donation or recycling",
      delay: 1300
    },
    {
      icon: <Award className="h-6 w-6" />,
      value: "12K+",
      label: "Eco-Points Earned",
      description: "Rewarding sustainable behavior across campus",
      delay: 1500
    }
  ];

  const recyclingStats = [
    {
      icon: <Recycle className="h-6 w-6" />,
      value: "78",
      label: "Items Recycled",
      description: "Electronics and materials properly recycled this month",
      delay: 1700
    },
    {
      icon: <ShoppingBag className="h-6 w-6" />,
      value: "235",
      label: "Items Reused",
      description: "Pre-owned products finding new homes through our platform",
      delay: 1900
    },
    {
      icon: <BarChart2 className="h-6 w-6" />,
      value: "$42K",
      label: "Cost Savings",
      description: "Annual institution savings from energy optimization",
      delay: 2100
    },
    {
      icon: <Code className="h-6 w-6" />,
      value: "8+",
      label: "Languages Supported",
      description: "Programming languages optimized by our green compiler",
      delay: 2300
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
              trend={stat.trend}
            />
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recyclingStats.map((stat, i) => (
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
