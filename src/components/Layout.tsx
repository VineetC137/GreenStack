
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useIsMobile } from "@/hooks/use-mobile";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isMobile={isMobile} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
