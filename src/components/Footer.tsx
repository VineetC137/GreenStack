
import React from "react";
import { Link } from "react-router-dom";
import { Leaf, Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center">
              <Leaf className="h-6 w-6 text-green-500 mr-2" />
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                GreenStack
              </span>
            </Link>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
              Empowering sustainable technology practices through innovative solutions.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Platform
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/scheduling" className="text-base text-gray-600 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-500">
                  Smart Scheduling
                </Link>
              </li>
              <li>
                <Link to="/marketplace" className="text-base text-gray-600 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-500">
                  Eco Marketplace
                </Link>
              </li>
              <li>
                <Link to="/benchmarking" className="text-base text-gray-600 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-500">
                  Code Benchmarking
                </Link>
              </li>
              <li>
                <Link to="/compiler" className="text-base text-gray-600 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-500">
                  Green Compiler
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Resources
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-500">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-500">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-500">
                  Case Studies
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Company
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-500">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-500">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-500">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-8">
          <p className="text-center text-base text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} GreenStack, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
