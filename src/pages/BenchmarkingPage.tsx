
import React from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { CheckCircle, Code, Upload, BarChart2 } from "lucide-react";

const benchmarkData = [
  {
    name: 'Python',
    energy: 45,
    time: 32,
    memory: 28,
  },
  {
    name: 'JavaScript',
    energy: 60,
    time: 40,
    memory: 35,
  },
  {
    name: 'Java',
    energy: 75,
    time: 65,
    memory: 50,
  },
  {
    name: 'C++',
    energy: 35,
    time: 25,
    memory: 45,
  },
  {
    name: 'Rust',
    energy: 30,
    time: 20,
    memory: 30,
  },
];

export default function BenchmarkingPage() {
  return (
    <Layout>
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-6 gradient-heading">Sustainable Programming Benchmarking</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Compare and optimize energy efficiency of programming languages.
        </p>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Upload Code for Benchmarking</CardTitle>
            <CardDescription>Upload your code file or paste your code to analyze its energy efficiency</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-8 text-center">
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">Drag and drop your file</h3>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                Supported formats: .py, .js, .java, .cpp, .c, .rs, .go
              </p>
              <div className="mt-4">
                <Button className="mx-auto bg-green-600 hover:bg-green-700">
                  Select File
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <BarChart2 className="mr-2 h-5 w-5 text-green-500" />
              Benchmarking Results
            </CardTitle>
            <CardDescription>Comparison of energy usage across programming languages</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  width={500}
                  height={300}
                  data={benchmarkData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="energy" name="Energy Consumption (mW)" fill="#4CAF50" />
                  <Bar dataKey="time" name="Execution Time (ms)" fill="#1976D2" />
                  <Bar dataKey="memory" name="Memory Usage (MB)" fill="#9C27B0" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Energy-Efficient Languages</CardTitle>
              <CardDescription>Programming languages with the lowest energy consumption</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center justify-between p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Rust</span>
                  </div>
                  <span className="text-sm font-medium bg-green-100 text-green-800 py-1 px-2 rounded-full dark:bg-green-900 dark:text-green-300">
                    30 mW
                  </span>
                </li>
                <li className="flex items-center justify-between p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>C++</span>
                  </div>
                  <span className="text-sm font-medium bg-green-100 text-green-800 py-1 px-2 rounded-full dark:bg-green-900 dark:text-green-300">
                    35 mW
                  </span>
                </li>
                <li className="flex items-center justify-between p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Python</span>
                  </div>
                  <span className="text-sm font-medium bg-yellow-100 text-yellow-800 py-1 px-2 rounded-full dark:bg-yellow-900 dark:text-yellow-300">
                    45 mW
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Optimization Tips</CardTitle>
              <CardDescription>Recommendations to make your code more energy-efficient</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex">
                  <Code className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Minimize I/O Operations</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Batch read and write operations to reduce power consumption.</p>
                  </div>
                </li>
                <li className="flex">
                  <Code className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Use Efficient Data Structures</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Choose data structures that minimize CPU and memory usage for your specific use case.</p>
                  </div>
                </li>
                <li className="flex">
                  <Code className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Reduce Memory Allocations</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Reuse memory and avoid unnecessary allocations to improve efficiency.</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
