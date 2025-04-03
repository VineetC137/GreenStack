
import React from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Code, Check, Zap, FileCode } from "lucide-react";

export default function CompilerPage() {
  return (
    <Layout>
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-6 gradient-heading">Green Compiler</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Automatically optimize your code for better energy efficiency.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Tabs defaultValue="input" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="input">Input Code</TabsTrigger>
                <TabsTrigger value="output">Optimized Output</TabsTrigger>
              </TabsList>
              <TabsContent value="input" className="border rounded-md">
                <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-t-md flex justify-between items-center">
                  <div className="flex items-center">
                    <FileCode className="h-5 w-5 text-gray-600 dark:text-gray-300 mr-2" />
                    <span className="text-sm font-medium">example.py</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <select className="text-xs border rounded px-2 py-1 bg-white dark:bg-gray-800">
                      <option>Python</option>
                      <option>JavaScript</option>
                      <option>Java</option>
                      <option>C++</option>
                      <option>Rust</option>
                    </select>
                    <Button size="sm" variant="outline" className="text-xs">
                      Upload File
                    </Button>
                  </div>
                </div>
                <div className="p-4 bg-white dark:bg-gray-800 h-96 font-mono text-sm overflow-auto">
                  <pre className="whitespace-pre-wrap text-gray-800 dark:text-gray-200">
{`def fibonacci(n):
    # Calculate Fibonacci numbers recursively
    if n <= 1:
        return n
    else:
        return fibonacci(n-1) + fibonacci(n-2)

# Generate and store Fibonacci numbers
results = []
for i in range(30):
    results.append(fibonacci(i))

# Print all results
for i, result in enumerate(results):
    print(f"Fibonacci({i}) = {result}")
`}
                  </pre>
                </div>
                <div className="p-4 border-t">
                  <Button className="w-full bg-green-600 hover:bg-green-700 flex items-center justify-center">
                    Optimize Code
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="output" className="border rounded-md">
                <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-t-md flex justify-between items-center">
                  <div className="flex items-center">
                    <FileCode className="h-5 w-5 text-green-600 mr-2" />
                    <span className="text-sm font-medium">example_optimized.py</span>
                  </div>
                  <Button size="sm" variant="outline" className="text-xs">
                    Download
                  </Button>
                </div>
                <div className="p-4 bg-white dark:bg-gray-800 h-96 font-mono text-sm overflow-auto">
                  <pre className="whitespace-pre-wrap text-gray-800 dark:text-gray-200">
{`def fibonacci(n):
    # Use dynamic programming for better performance
    fib = [0, 1]
    for i in range(2, n + 1):
        fib.append(fib[i-1] + fib[i-2])
    return fib[n]

# Generate Fibonacci numbers more efficiently
results = [fibonacci(i) for i in range(30)]

# Print all results in a single batch
for i, result in enumerate(results):
    print(f"Fibonacci({i}) = {result}")
`}
                  </pre>
                </div>
                <div className="p-4 border-t bg-green-50 dark:bg-green-900/20">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Check className="h-5 w-5 text-green-600 mr-2" />
                      <span className="text-sm font-medium text-green-800 dark:text-green-300">Optimized Successfully</span>
                    </div>
                    <span className="text-xs font-medium bg-green-100 text-green-800 py-1 px-2 rounded-full dark:bg-green-900 dark:text-green-300">
                      85% More Efficient
                    </span>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Optimization Results</CardTitle>
                <CardDescription>Performance improvements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Energy Usage</span>
                      <span className="text-sm font-medium text-green-600">-85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: "15%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Execution Time</span>
                      <span className="text-sm font-medium text-green-600">-94%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: "6%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Memory Usage</span>
                      <span className="text-sm font-medium text-yellow-600">+5%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "105%" }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Optimizations Applied</CardTitle>
                <CardDescription>Changes made to improve efficiency</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex">
                    <Zap className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Dynamic Programming</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Replaced recursive function with iterative approach to avoid redundant calculations.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <Zap className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Memory Reuse</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Store previous results in an array to avoid recomputation.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <Zap className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">List Comprehension</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">More efficient than appending in a loop.</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
