
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="bg-green-600">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          <span className="block">Ready to go green?</span>
          <span className="block text-green-100">Start your sustainability journey today.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <Button className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-green-50">
              Get started
              <ArrowRight className="ml-3 -mr-1 h-5 w-5" />
            </Button>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <Button variant="outline" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-transparent hover:bg-green-700">
              Learn more
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
