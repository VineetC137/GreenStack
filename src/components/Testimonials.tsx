
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  delay: number;
}

function TestimonialCard({ quote, author, role, delay }: TestimonialCardProps) {
  return (
    <Card className="eco-card animate-fade-in" style={{animationDelay: `${delay}ms`}}>
      <CardContent className="p-6">
        <Quote className="h-6 w-6 text-green-500 mb-4" />
        <p className="text-gray-600 dark:text-gray-300 mb-4">{quote}</p>
        <div>
          <p className="font-medium text-gray-900 dark:text-white">{author}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">{role}</p>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Testimonials() {
  const testimonials = [
    {
      quote: "GreenStack's smart scheduling system reduced our campus energy consumption by 27% in just three months. The data insights have been invaluable.",
      author: "Dr. Sarah Kim",
      role: "Sustainability Director, Pacific University",
      delay: 100
    },
    {
      quote: "The eco marketplace has transformed how our students think about consumption. We've seen a significant reduction in waste across campus.",
      author: "Mark Johnson",
      role: "Student Body President",
      delay: 300
    },
    {
      quote: "As a computer science professor, the code benchmarking tool has been revolutionary for teaching students about energy-efficient programming.",
      author: "Prof. David Chen",
      role: "Computer Science Department",
      delay: 500
    }
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold gradient-heading sm:text-4xl">
            What People Are Saying
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
            See how GreenStack is making a difference in organizations worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard
              key={i}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              delay={testimonial.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
