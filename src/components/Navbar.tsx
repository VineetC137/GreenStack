
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Leaf, Moon, Sun, BarChart2 } from "lucide-react";

interface NavbarProps {
  isMobile: boolean | undefined;
}

export default function Navbar({ isMobile }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Smart Scheduling", path: "/scheduling" },
    { name: "Eco Marketplace", path: "/marketplace" },
    { name: "Code Benchmarking", path: "/benchmarking" },
    { name: "Green Compiler", path: "/compiler" }
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex justify-between w-full">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center">
                <Leaf className="h-6 w-6 text-green-500 mr-2" />
                <span className="text-xl font-bold text-gray-900 dark:text-white">
                  GreenStack
                </span>
              </Link>
            </div>
            
            {!isMobile && (
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-green-500 dark:text-gray-300 dark:hover:text-white dark:hover:border-green-500 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
            
            <div className="flex items-center">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleDarkMode}
                className="mr-2"
              >
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              
              {isMobile && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(!isOpen)}
                  className="sm:hidden"
                >
                  {isOpen ? (
                    <X className="h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Menu className="h-6 w-6" aria-hidden="true" />
                  )}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobile && isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-green-500 hover:text-gray-800 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
