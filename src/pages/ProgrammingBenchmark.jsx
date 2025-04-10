import React, { useState } from 'react';
import {
  CodeBracketIcon,
  BoltIcon,
  ClockIcon,
  ChartBarIcon,
  CpuChipIcon,
  PlayIcon,
} from '@heroicons/react/24/outline';

const languages = [
  { id: 'python', name: 'Python', icon: '🐍' },
  { id: 'javascript', name: 'JavaScript', icon: '🟨' },
  { id: 'java', name: 'Java', icon: '☕' },
  { id: 'cpp', name: 'C++', icon: '🔷' },
  { id: 'rust', name: 'Rust', icon: '⚙️' },
];

const sampleCode = `def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

result = fibonacci(10)
print(result)`;

export default function ProgrammingBenchmark() {
  const [selectedLanguage, setSelectedLanguage] = useState('python');
  const [code, setCode] = useState(sampleCode);
  const [isRunning, setIsRunning] = useState(false);

  const handleRunBenchmark = () => {
    setIsRunning(true);
    // Simulate benchmark running
    setTimeout(() => setIsRunning(false), 2000);
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Programming Benchmark
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Compare and optimize energy efficiency of different programming languages.
          </p>
        </div>

        <div className="flex justify-end">
          <button
            type="button"
            className={`rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 ${isRunning ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-500'}`}
            onClick={handleRunBenchmark}
            disabled={isRunning}
          >
            {isRunning ? (
              <>
                <ArrowPathIcon className="-ml-0.5 h-5 w-5 inline-block mr-2 animate-spin" aria-hidden="true" />
                Running...
              </>
            ) : (
              <>
                <PlayIcon className="-ml-0.5 h-5 w-5 inline-block mr-2" aria-hidden="true" />
                Run Benchmark
              </>
            )}
          </button>
        </div>
      </div>

      {/* Language Selection */}
      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Select Language</h3>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
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

      {/* Code Editor and Results */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Code Editor */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-4 bg-gray-50 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Code Editor</h3>
          </div>
          <div className="p-4">
            <textarea
              rows={12}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 font-mono text-sm"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </div>
        </div>

        {/* Benchmark Results */}
        <div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {/* Execution Time */}
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex items-center">
                <div className="rounded-md bg-green-500 p-3">
                  <ClockIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <div className="ml-4">
                  <h4 className="text-sm font-medium text-gray-900">Execution Time</h4>
                  <p className="mt-1 text-2xl font-semibold text-gray-900">245ms</p>
                </div>
              </div>
            </div>

            {/* CPU Usage */}
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex items-center">
                <div className="rounded-md bg-blue-500 p-3">
                  <CpuChipIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <div className="ml-4">
                  <h4 className="text-sm font-medium text-gray-900">CPU Usage</h4>
                  <p className="mt-1 text-2xl font-semibold text-gray-900">45%</p>
                </div>
              </div>
            </div>

            {/* Power Consumption */}
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex items-center">
                <div className="rounded-md bg-yellow-500 p-3">
                  <BoltIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <div className="ml-4">
                  <h4 className="text-sm font-medium text-gray-900">Power Consumption</h4>
                  <p className="mt-1 text-2xl font-semibold text-gray-900">0.8W</p>
                </div>
              </div>
            </div>

            {/* Carbon Footprint */}
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex items-center">
                <div className="rounded-md bg-green-500 p-3">
                  <ChartBarIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <div className="ml-4">
                  <h4 className="text-sm font-medium text-gray-900">Carbon Footprint</h4>
                  <p className="mt-1 text-2xl font-semibold text-gray-900">0.2g CO₂</p>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Chart Placeholder */}
          <div className="mt-4 bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Performance Analysis</h3>
            <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Performance chart will be implemented here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}