import React, { useState } from 'react';
import {
  CommandLineIcon,
  ArrowPathIcon,
  BoltIcon,
  ChartBarIcon,
  ArrowsPointingOutIcon,
  CodeBracketIcon,
} from '@heroicons/react/24/outline';

const languages = [
  { id: 'python', name: 'Python', icon: '🐍' },
  { id: 'javascript', name: 'JavaScript', icon: '🟨' },
  { id: 'java', name: 'Java', icon: '☕' },
  { id: 'cpp', name: 'C++', icon: '🔷' },
  { id: 'rust', name: 'Rust', icon: '⚙️' },
  { id: 'go', name: 'Go', icon: '🔵' },
  { id: 'kotlin', name: 'Kotlin', icon: '🟣' },
  { id: 'php', name: 'PHP', icon: '🐘' },
];

const sampleCode = `// Inefficient code example
function calculateSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(calculateSum(1000));`;

const optimizedCode = `// Optimized code using mathematical formula
function calculateSum(n) {
  return (n * (n + 1)) / 2;
}

console.log(calculateSum(1000));`;

export default function GreenCompiler() {
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');
  const [sourceCode, setSourceCode] = useState(sampleCode);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [showOptimized, setShowOptimized] = useState(false);

  const handleOptimize = () => {
    setIsOptimizing(true);
    // Simulate optimization process
    setTimeout(() => {
      setIsOptimizing(false);
      setShowOptimized(true);
    }, 2000);
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Green Compiler
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            AI-powered code optimization for better energy efficiency.
          </p>
        </div>

        <div className="flex justify-end">
          <button
            type="button"
            className={`rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 ${isOptimizing ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-500'}`}
            onClick={handleOptimize}
            disabled={isOptimizing}
          >
            {isOptimizing ? (
              <>
                <ArrowPathIcon className="-ml-0.5 h-5 w-5 inline-block mr-2 animate-spin" aria-hidden="true" />
                Optimizing...
              </>
            ) : (
              <>
                <BoltIcon className="-ml-0.5 h-5 w-5 inline-block mr-2" aria-hidden="true" />
                Optimize Code
              </>
            )}
          </button>
        </div>
      </div>

      {/* Language Selection */}
      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Select Language</h3>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {languages.map((lang) => (
            <button
              key={lang.id}
              onClick={() => setSelectedLanguage(lang.id)}
              className={`flex items-center justify-center p-4 rounded-lg border ${selectedLanguage === lang.id ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-green-500 hover:bg-green-50'}`}
            >
              <span className="text-2xl mr-2">{lang.icon}</span>
              <span className="text-sm font-medium text-gray-900">{lang.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Code Editor and Optimization */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Source Code */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-4 bg-gray-50 border-b border-gray-200 flex items-center justify-between">
            <h3 className="text-lg font-medium text-gray-900">Source Code</h3>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <CodeBracketIcon className="h-5 w-5" />
              <span>Original</span>
            </div>
          </div>
          <div className="p-4">
            <textarea
              rows={15}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 font-mono text-sm"
              value={sourceCode}
              onChange={(e) => setSourceCode(e.target.value)}
            />
          </div>
        </div>

        {/* Optimized Code */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-4 bg-gray-50 border-b border-gray-200 flex items-center justify-between">
            <h3 className="text-lg font-medium text-gray-900">Optimized Code</h3>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <BoltIcon className="h-5 w-5" />
              <span>Optimized</span>
            </div>
          </div>
          <div className="p-4">
            <textarea
              rows={15}
              readOnly
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 font-mono text-sm bg-gray-50"
              value={showOptimized ? optimizedCode : '// Optimized code will appear here...'}
            />
          </div>
        </div>
      </div>

      {/* Optimization Results */}
      {showOptimized && (
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-6">Optimization Results</h3>
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {/* Performance Improvement */}
            <div className="rounded-lg border border-gray-200 p-4">
              <div className="flex items-center">
                <ArrowsPointingOutIcon className="h-5 w-5 text-green-500" />
                <h4 className="ml-2 text-sm font-medium text-gray-900">Performance Improvement</h4>
              </div>
              <p className="mt-2 text-2xl font-semibold text-green-600">+85%</p>
              <p className="mt-1 text-sm text-gray-500">Faster execution time</p>
            </div>

            {/* Energy Savings */}
            <div className="rounded-lg border border-gray-200 p-4">
              <div className="flex items-center">
                <BoltIcon className="h-5 w-5 text-green-500" />
                <h4 className="ml-2 text-sm font-medium text-gray-900">Energy Savings</h4>
              </div>
              <p className="mt-2 text-2xl font-semibold text-green-600">-65%</p>
              <p className="mt-1 text-sm text-gray-500">Power consumption</p>
            </div>

            {/* Carbon Reduction */}
            <div className="rounded-lg border border-gray-200 p-4">
              <div className="flex items-center">
                <ChartBarIcon className="h-5 w-5 text-green-500" />
                <h4 className="ml-2 text-sm font-medium text-gray-900">Carbon Reduction</h4>
              </div>
              <p className="mt-2 text-2xl font-semibold text-green-600">-70%</p>
              <p className="mt-1 text-sm text-gray-500">CO₂ emissions</p>
            </div>
          </div>

          {/* Optimization Suggestions */}
          <div className="mt-6">
            <h4 className="text-sm font-medium text-gray-900 mb-4">Optimization Suggestions</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-sm font-medium text-green-600">1</span>
                </div>
                <p className="ml-3 text-sm text-gray-600">
                  Replaced iterative calculation with mathematical formula for O(1) time complexity.
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-sm font-medium text-green-600">2</span>
                </div>
                <p className="ml-3 text-sm text-gray-600">
                  Eliminated unnecessary memory allocation and variable updates.
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-sm font-medium text-green-600">3</span>
                </div>
                <p className="ml-3 text-sm text-gray-600">
                  Improved code readability with better variable naming and comments.
                </p>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}