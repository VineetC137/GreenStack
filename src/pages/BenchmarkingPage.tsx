
import React, { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { CheckCircle, Code, Upload, BarChart2, Database, Cpu, TrendingUp, Users, Leaf } from "lucide-react";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import BenchmarkResultModal from "@/components/BenchmarkResultModal";

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

const historyData = [
  { date: 'Jan', energy: 60 },
  { date: 'Feb', energy: 55 },
  { date: 'Mar', energy: 48 },
  { date: 'Apr', energy: 45 },
  { date: 'May', energy: 40 },
  { date: 'Jun', energy: 35 },
];

const communityBenchmarks = [
  {
    id: 1,
    language: "Python",
    algorithm: "Quicksort",
    user: "greencoder",
    energy: 42,
    time: 30,
    date: "2025-03-28"
  },
  {
    id: 2,
    language: "Rust",
    algorithm: "Neural Network",
    user: "ecodev",
    energy: 28,
    time: 18,
    date: "2025-04-01"
  },
  {
    id: 3,
    language: "JavaScript",
    algorithm: "Data Processing",
    user: "sustainablejs",
    energy: 55,
    time: 38,
    date: "2025-04-02"
  }
];

export default function BenchmarkingPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState("python");
  const [showResultModal, setShowResultModal] = useState(false);
  const [activeTab, setActiveTab] = useState("upload");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
      toast.success(`File "${e.target.files[0].name}" selected`);
    }
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguage(e.target.value);
  };

  const runBenchmark = () => {
    toast.promise(
      new Promise(resolve => setTimeout(resolve, 2000)),
      {
        loading: 'Running benchmark analysis...',
        success: () => {
          setShowResultModal(true);
          return 'Benchmark completed successfully!';
        },
        error: 'Error running benchmark',
      }
    );
  };

  return (
    <Layout>
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-6 gradient-heading">Sustainable Programming Benchmarking</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Compare and optimize energy efficiency of programming languages.
        </p>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="upload">
              <Upload className="mr-2 h-4 w-4" />
              Upload Code
            </TabsTrigger>
            <TabsTrigger value="community">
              <Users className="mr-2 h-4 w-4" />
              Community Benchmarks
            </TabsTrigger>
            <TabsTrigger value="history">
              <TrendingUp className="mr-2 h-4 w-4" />
              Your History
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="upload" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Upload Code for Benchmarking</CardTitle>
                <CardDescription>Upload your code file or paste your code to analyze its energy efficiency</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-8 text-center mb-6">
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">Drag and drop your file</h3>
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                    Supported formats: .py, .js, .java, .cpp, .c, .rs, .go
                  </p>
                  <div className="mt-4">
                    <Input 
                      id="file-upload" 
                      type="file" 
                      className="hidden" 
                      onChange={handleFileChange}
                      accept=".py,.js,.java,.cpp,.c,.rs,.go"
                    />
                    <Button 
                      className="mx-auto bg-green-600 hover:bg-green-700"
                      onClick={() => document.getElementById('file-upload')?.click()}
                    >
                      Select File
                    </Button>
                  </div>
                  {selectedFile && (
                    <div className="mt-4">
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Selected: <span className="font-semibold">{selectedFile.name}</span> ({Math.round(selectedFile.size / 1024)} KB)
                      </p>
                    </div>
                  )}
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-medium mb-2">Or paste your code:</h4>
                  <textarea 
                    className="w-full h-40 p-4 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 font-mono text-sm"
                    placeholder="// Paste your code here"
                  ></textarea>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">Programming Language</label>
                    <select 
                      className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-lg"
                      value={selectedLanguage}
                      onChange={handleLanguageChange}
                    >
                      <option value="python">Python</option>
                      <option value="javascript">JavaScript</option>
                      <option value="java">Java</option>
                      <option value="cpp">C++</option>
                      <option value="rust">Rust</option>
                      <option value="go">Go</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Algorithm Type</label>
                    <select className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-lg">
                      <option>Sorting</option>
                      <option>Search</option>
                      <option>Data Processing</option>
                      <option>Machine Learning</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Execution Environment</label>
                    <select className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-lg">
                      <option>Standard (Default)</option>
                      <option>High Performance</option>
                      <option>Low Energy</option>
                    </select>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button 
                  className="bg-green-600 hover:bg-green-700"
                  onClick={runBenchmark}
                  disabled={!selectedFile && !document.querySelector('textarea')?.value}
                >
                  <Cpu className="mr-2 h-4 w-4" />
                  Run Benchmark
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="community" className="mt-6">
            <div className="grid grid-cols-1 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>Community Benchmarks</CardTitle>
                    <div className="flex space-x-2">
                      <select className="text-xs border rounded px-2 py-1">
                        <option>All Languages</option>
                        <option>Python</option>
                        <option>JavaScript</option>
                        <option>Rust</option>
                        <option>C++</option>
                      </select>
                      <select className="text-xs border rounded px-2 py-1">
                        <option>Most Recent</option>
                        <option>Most Efficient</option>
                        <option>Most Popular</option>
                      </select>
                    </div>
                  </div>
                  <CardDescription>Benchmarks shared by the community</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-800 dark:text-gray-400">
                        <tr>
                          <th className="px-4 py-3">Language</th>
                          <th className="px-4 py-3">Algorithm</th>
                          <th className="px-4 py-3">User</th>
                          <th className="px-4 py-3">Energy (mW)</th>
                          <th className="px-4 py-3">Time (ms)</th>
                          <th className="px-4 py-3">Date</th>
                          <th className="px-4 py-3">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {communityBenchmarks.map((benchmark) => (
                          <tr key={benchmark.id} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                            <td className="px-4 py-3">{benchmark.language}</td>
                            <td className="px-4 py-3">{benchmark.algorithm}</td>
                            <td className="px-4 py-3">{benchmark.user}</td>
                            <td className="px-4 py-3">
                              <div className="flex items-center">
                                <span>{benchmark.energy}</span>
                                <div className={`ml-2 h-2 w-2 rounded-full ${benchmark.energy < 40 ? 'bg-green-500' : benchmark.energy < 50 ? 'bg-yellow-500' : 'bg-red-500'}`}></div>
                              </div>
                            </td>
                            <td className="px-4 py-3">{benchmark.time}</td>
                            <td className="px-4 py-3">{benchmark.date}</td>
                            <td className="px-4 py-3">
                              <Button variant="ghost" size="sm" className="h-8 px-2">
                                <Code className="h-4 w-4" />
                                <span className="sr-only">View Code</span>
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="flex justify-center mt-4">
                    <Button variant="outline" size="sm" className="text-xs">Load More Results</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="history" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Your Efficiency Trends</CardTitle>
                  <CardDescription>Progress in reducing energy consumption over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={historyData}
                        margin={{
                          top: 5,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="energy" stroke="#4CAF50" name="Energy Consumption (mW)" />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Your Achievements</CardTitle>
                  <CardDescription>Sustainability milestones</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-green-100 dark:bg-green-900 p-2 rounded-full mr-3">
                        <Leaf className="h-5 w-5 text-green-600 dark:text-green-300" />
                      </div>
                      <div>
                        <h4 className="font-medium">Carbon Saver</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Reduced carbon emissions by 15% through code optimizations</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-100 dark:bg-green-900 p-2 rounded-full mr-3">
                        <TrendingUp className="h-5 w-5 text-green-600 dark:text-green-300" />
                      </div>
                      <div>
                        <h4 className="font-medium">Efficiency Expert</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Achieved >30% improvement in 3 consecutive benchmarks</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-100 dark:bg-green-900 p-2 rounded-full mr-3">
                        <Users className="h-5 w-5 text-green-600 dark:text-green-300" />
                      </div>
                      <div>
                        <h4 className="font-medium">Community Contributor</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Shared 5+ optimized code samples with the community</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

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
      
      {showResultModal && (
        <BenchmarkResultModal open={showResultModal} onClose={() => setShowResultModal(false)} />
      )}
    </Layout>
  );
}
