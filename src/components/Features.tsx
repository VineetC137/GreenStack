
import React from "react";
import { 
  Calendar, 
  ShoppingCart, 
  Terminal, 
  Code, 
  CheckCircle
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
}

function FeatureCard({ icon, title, description, linkTo, benefits, delay }: FeatureCardProps) {
  return (
    <Card className="eco-card animate-fade-in" style={{animationDelay: `${delay}ms`}}>
      <CardContent className="p-6">
        <div className="feature-icon mb-4">
          {icon}
        </div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <ul className="space-y-2 mb-4">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-gray-600 dark:text-gray-300">{benefit}</span>
            </li>
          ))}
        </ul>
        <Link 
          to={linkTo}
          className="text-sm font-medium text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 flex items-center"
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
        "Automated lighting & climate control"
      ],
      delay: 100
    },
    {
      icon: <ShoppingCart className="h-6 w-6" />,
      title: "Sustainable Marketplace",
      description: "Exchange, donate, or recycle items within your campus community.",
      linkTo: "/marketplace",
      benefits: [
        "Promotes circular economy",
        "Reduces waste through reuse",
        "Reward system for sustainable actions"
      ],
      delay: 300
    },
    {
      icon: <Terminal className="h-6 w-6" />,
      title: "Code Benchmarking",
      description: "Compare energy efficiency metrics across programming languages.",
      linkTo: "/benchmarking",
      benefits: [
        "Measure power consumption of code",
        "Compare languages & frameworks",
        "Optimize for energy efficiency"
      ],
      delay: 500
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Green Compiler",
      description: "Automatically optimize code for better energy efficiency.",
      linkTo: "/compiler",
      benefits: [
        "AI-powered code optimization",
        "Reduce carbon footprint",
        "Support for multiple languages"
      ],
      delay: 700
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
            />
          ))}
        </div>
      </div>
    </section>
  );
}
