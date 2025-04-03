
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <Stats />
      <Testimonials />
      <CallToAction />
    </Layout>
  );
};

export default Index;
