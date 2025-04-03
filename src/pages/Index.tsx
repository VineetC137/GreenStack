
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import { Button } from "@/components/ui/button";
import { BarChart2 } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <div className="bg-green-50 dark:bg-gray-800/50 p-4 rounded-lg max-w-7xl mx-auto my-8 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center">
          <BarChart2 className="h-8 w-8 text-green-600 mr-3" />
          <div>
            <h3 className="font-bold text-lg">New! Sustainability Dashboard</h3>
            <p className="text-gray-600 dark:text-gray-300">Track all your sustainability metrics in one place</p>
          </div>
        </div>
        <Link to="/dashboard">
          <Button className="mt-4 md:mt-0 bg-green-600 hover:bg-green-700">
            View Dashboard
          </Button>
        </Link>
      </div>
      <Features />
      <Stats />
      <Testimonials />
      <CallToAction />
    </Layout>
  );
};

export default Index;
