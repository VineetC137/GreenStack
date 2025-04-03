
import React from "react";
import { 
  Calendar, 
  ShoppingCart, 
  Terminal, 
  Code, 
  CheckCircle,
  Cpu,
  BarChart2,
  Zap
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  linkTo: string;
  benefits: string[];
  delay: number;
  primaryColor?: string;
}

function FeatureCard({ 
  icon, 
  title, 
  description, 
  linkTo, 
  benefits, 
  delay,
  primaryColor = "green" 
}: FeatureCardProps) {
  const colorClasses = {
    green: {
      icon: "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400",
      link: "text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300",
      check: "text-green-500"
    },
    blue: {
      icon: "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400",
      link: "text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300",
      check: "text-blue-500"
    },
    amber: {
      icon: "bg-amber-100 dark:bg-amber-900 text-amber-600 dark:text-amber-400",
      link: "text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300",
      check: "text-amber-500"
    },
    purple: {
      icon: "bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400",
      link: "text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300",
      check: "text-purple-500"
    }
  };

  const colors = colorClasses[primaryColor as keyof typeof colorClasses] || colorClasses.green;

  return (
    <Card className="eco-card animate-fade-in h-full" style={{animationDelay: `${delay}ms`}}>
      <CardContent className="p-6 flex flex-col h-full">
        <div className={`feature-icon p-3 rounded-full w-fit mb-4 ${colors.icon}`}>
          {icon}
        </div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <ul className="space-y-2 mb-4 flex-grow">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className={`h-5 w-5 ${colors.check} mr-2 flex-shrink-0 mt-0.5`} />
              <span className="text-sm text-gray-600 dark:text-gray-300">{benefit}</span>
            </li>
          ))}
        </ul>
        <Link 
          to={linkTo}
          className={`text-sm font-medium ${colors.link} flex items-center mt-auto`}
        >
          Explore
        </Link>
      </CardContent>
    </Card>
  );
}

export default function Features() {
  const features = [
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Smart Class Scheduling",
      description: "Optimize classroom allocation to minimize energy consumption.",
      linkTo: "/scheduling",
      benefits: [
        "Reduces energy usage by up to 30%",
        "Real-time occupancy tracking",
        "Automated lighting & climate control",
        "AI-powered room allocation"
      ],
      delay: 100,
      primaryColor: "green"
    },
    {
      icon: <ShoppingCart className="h-6 w-6" />,
      title: "Sustainable Marketplace",
      description: "Exchange, donate, or recycle items within your campus community.",
      linkTo: "/marketplace",
      benefits: [
        "Promotes circular economy",
        "Reduces waste through reuse",
        "AI product classification",
        "Reward system for sustainable actions"
      ],
      delay: 300,
      primaryColor: "blue"
    },
    {
      icon: <Terminal className="h-6 w-6" />,
      title: "Code Benchmarking",
      description: "Compare energy efficiency metrics across programming languages.",
      linkTo: "/benchmarking",
      benefits: [
        "Measure power consumption of code",
        "Compare languages & frameworks",
        "Optimize for energy efficiency",
        "Community leaderboards"
      ],
      delay: 500,
      primaryColor: "amber"
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Green Compiler",
      description: "Automatically optimize code for better energy efficiency.",
      linkTo: "/compiler",
      benefits: [
        "AI-powered code optimization",
        "Supports 8+ programming languages",
        "Energy consumption visualization",
        "Carbon footprint reduction"
      ],
      delay: 700,
      primaryColor: "purple"
    }
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold gradient-heading sm:text-4xl">
            Eco-Friendly Solutions
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
            Our integrated platform helps reduce environmental impact through
            smart technology solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <FeatureCard
              key={i}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              linkTo={feature.linkTo}
              benefits={feature.benefits}
              delay={feature.delay}
              primaryColor={feature.primaryColor}
            />
          ))}
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
            <Zap className="h-5 w-5 mr-2" />
            <span className="text-sm font-medium">Central Sustainability Dashboard</span>
          </div>
          <h3 className="mt-4 text-2xl font-bold text-gray-900 dark:text-white">All Your Green Metrics in One Place</h3>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            GreenStack integrates all sustainability features into a comprehensive analytics dashboard,
            helping you track impact across your entire organization.
          </p>
          <Link
            to="/dashboard"
            className="mt-4 inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md"
          >
            <BarChart2 className="h-5 w-5 mr-2" />
            View Dashboard
          </Link>
        </div>
      </div>
    </section>
  );
}
