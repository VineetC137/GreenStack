import React, { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { 
  Play, 
  Code, 
  BarChart, 
  Zap, 
  Clock, 
  Award, 
  Save, 
  Download, 
  Share2, 
  PlusCircle,
  Cpu,
  Leaf,
  AlertTriangle
} from "lucide-react";
import { toast } from "@/components/ui/use-toast";

export default function BenchmarkingPage() {
  const [selectedLanguage, setSelectedLanguage] = useState("javascript");
  const [selectedAlgorithm, setSelectedAlgorithm] = useState("sorting");
  const [code, setCode] = useState(`// Example JavaScript sorting algorithm
function bubbleSort(array) {
  const arr = [...array];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

// Generate random array
const randomArray = Array.from({length: 1000}, () => Math.floor(Math.random() * 1000));

// Benchmark
console.time('bubbleSort');
const sortedArray = bubbleSort(randomArray);
console.timeEnd('bubbleSort');

console.log("First 5 elements:", sortedArray.slice(0, 5));`);
  
  const [isRunning, setIsRunning] = useState(false);
  const [activeTab, setActiveTab] = useState("code");
  const [optimizationLevel, setOptimizationLevel] = useState([50]);
  const [enablePowerSaving, setEnablePowerSaving] = useState(true);
  
  const handleRunBenchmark = () => {
    setIsRunning(true);
    toast({
      title: "Benchmark Started",
      description: "Running energy efficiency analysis...",
    });
    
    // Simulate benchmark running
    setTimeout(() => {
      setIsRunning(false);
      setActiveTab("results");
      toast({
        title: "Benchmark Complete",
        description: "Energy efficiency analysis finished successfully.",
      });
    }, 3000);
  };
  
  const languages = [
    { value: "javascript", label: "JavaScript" },
    { value: "python", label: "Python" },
    { value: "java", label: "Java" },
    { value: "cpp", label: "C++" },
    { value: "rust", label: "Rust" },
    { value: "go", label: "Go" },
  ];
  
  const algorithms = [
    { value: "sorting", label: "Sorting Algorithm" },
    { value: "search", label: "Search Algorithm" },
    { value: "matrix", label: "Matrix Operations" },
    { value: "string", label: "String Manipulation" },
    { value: "graph", label: "Graph Algorithm" },
    { value: "custom", label: "Custom Algorithm" },
  ];
  
  return (
    <Layout>
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-2 gradient-heading">Sustainable Programming Benchmarking</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Compare energy efficiency metrics across programming languages and optimize your code for sustainability.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Benchmark Configuration</CardTitle>
              <CardDescription>Set up your code benchmarking parameters</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="language">Programming Language</Label>
                <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                  <SelectTrigger id="language">
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    {languages.map((lang) => (
                      <SelectItem key={lang.value} value={lang.value}>
                        {lang.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="algorithm">Algorithm Type</Label>
                <Select value={selectedAlgorithm} onValueChange={setSelectedAlgorithm}>
                  <SelectTrigger id="algorithm">
                    <SelectValue placeholder="Select algorithm" />
                  </SelectTrigger>
                  <SelectContent>
                    {algorithms.map((algo) => (
                      <SelectItem key={algo.value} value={algo.value}>
                        {algo.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="iterations">Iterations</Label>
                <Input id="iterations" type="number" defaultValue="100" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="dataset">Dataset Size</Label>
                <Select defaultValue="medium">
                  <SelectTrigger id="dataset">
                    <SelectValue placeholder="Select size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">Small (1K elements)</SelectItem>
                    <SelectItem value="medium">Medium (10K elements)</SelectItem>
                    <SelectItem value="large">Large (100K elements)</SelectItem>
                    <SelectItem value="xlarge">X-Large (1M elements)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="optimization">Optimization Level</Label>
                  <span className="text-sm text-gray-500">{optimizationLevel}%</span>
                </div>
                <Slider
                  id="optimization"
                  min={0}
                  max={100}
                  step={10}
                  value={optimizationLevel}
                  onValueChange={setOptimizationLevel}
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <Switch 
                  id="power-saving" 
                  checked={enablePowerSaving}
                  onCheckedChange={setEnablePowerSaving}
                />
                <Label htmlFor="power-saving">Enable Power Saving Mode</Label>
              </div>
              
              <Button 
                className="w-full bg-green-600 hover:bg-green-700" 
                onClick={handleRunBenchmark}
                disabled={isRunning}
              >
                {isRunning ? (
                  <>
                    <Cpu className="mr-2 h-4 w-4 animate-spin" />
                    Running...
                  </>
                ) : (
                  <>
                    <Play className="mr-2 h-4 w-4" />
                    Run Benchmark
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
          
          <Card className="col-span-1 lg:col-span-2">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <CardTitle>Code & Results</CardTitle>
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-[400px]">
                  <TabsList>
                    <TabsTrigger value="code" className="flex items-center">
                      <Code className="mr-2 h-4 w-4" />
                      Code
                    </TabsTrigger>
                    <TabsTrigger value="results" className="flex items-center">
                      <BarChart className="mr-2 h-4 w-4" />
                      Results
                    </TabsTrigger>
                    <TabsTrigger value="compare" className="flex items-center">
                      <Zap className="mr-2 h-4 w-4" />
                      Compare
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </CardHeader>
            <CardContent>
              <TabsContent value="code" className="mt-0">
                <div className="space-y-4">
                  <div className="relative">
                    <Textarea 
                      className="min-h-[400px] font-mono text-sm p-4"
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                    />
                  </div>
                  <div className="flex justify-between">
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Load Template
                      </Button>
                      <Button variant="outline" size="sm">
                        <Save className="mr-2 h-4 w-4" />
                        Save
                      </Button>
                    </div>
                    <Button 
                      size="sm" 
                      className="bg-green-600 hover:bg-green-700"
                      onClick={handleRunBenchmark}
                      disabled={isRunning}
                    >
                      {isRunning ? "Running..." : "Run"}
                    </Button>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="results" className="mt-0">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex flex-col items-center">
                          <Zap className="h-8 w-8 text-amber-500 mb-2" />
                          <div className="text-2xl font-bold">42.3 mW</div>
                          <p className="text-sm text-gray-500">Energy Consumption</p>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex flex-col items-center">
                          <Clock className="h-8 w-8 text-blue-500 mb-2" />
                          <div className="text-2xl font-bold">156 ms</div>
                          <p className="text-sm text-gray-500">Execution Time</p>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex flex-col items-center">
                          <Leaf className="h-8 w-8 text-green-500 mb-2" />
                          <div className="text-2xl font-bold">B+</div>
                          <p className="text-sm text-gray-500">Efficiency Rating</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Energy Consumption Over Time</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[200px] flex items-end space-x-2">
                        {/* Simulated chart bars */}
                        <div className="flex-1 flex items-end justify-around">
                          {[40, 65, 85, 45, 35, 55, 75, 90, 65, 45].map((height, i) => (
                            <div 
                              key={i} 
                              className="w-8 bg-gradient-to-t from-green-500 to-green-300 rounded-t"
                              style={{ height: `${height}%` }}
                            ></div>
                          ))}
                        </div>
                      </div>
                      <div className="flex justify-between mt-2 text-xs text-gray-500">
                        <span>0s</span>
                        <span>0.5s</span>
                        <span>1.0s</span>
                        <span>1.5s</span>
                        <span>2.0s</span>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Optimization Recommendations</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3 p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                          <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-medium text-amber-800 dark:text-amber-300">Nested Loop Optimization</h4>
                            <p className="text-sm text-amber-700 dark:text-amber-400">
                              The nested loops in your bubble sort algorithm are causing high energy consumption. 
                              Consider using a more efficient sorting algorithm like QuickSort or MergeSort.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start space-x-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                          <Leaf className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-medium text-green-800 dark:text-green-300">Memory Usage</h4>
                            <p className="text-sm text-green-700 dark:text-green-400">
                              Creating a copy of the array with spread operator increases memory usage. 
                              Consider sorting the array in-place to reduce memory footprint and energy consumption.
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <div className="flex justify-between">
                    <Button variant="outline">
                      <Download className="mr-2 h-4 w-4" />
                      Export Results
                    </Button>
                    <Button variant="outline">
                      <Share2 className="mr-2 h-4 w-4" />
                      Share
                    </Button>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="compare" className="mt-0">
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">Language Comparison</h3>
                    <Select defaultValue="energy">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Metric" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="energy">Energy Consumption</SelectItem>
                        <SelectItem value="time">Execution Time</SelectItem>
                        <SelectItem value="memory">Memory Usage</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <span className="w-24 font-medium">Rust</span>
                      <div className="flex-1 h-4 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 rounded-full" style={{ width: '15%' }}></div>
                      </div>
                      <span className="w-16 text-right text-sm">12.1 mW</span>
                      <Badge className="ml-2 bg-green-600">Best</Badge>
                    </div>
                    
                    <div className="flex items-center">
                      <span className="w-24 font-medium">C++</span>
                      <div className="flex-1 h-4 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 rounded-full" style={{ width: '20%' }}></div>
                      </div>
                      <span className="w-16 text-right text-sm">16.5 mW</span>
                    </div>
                    
                    <div className="flex items-center">
                      <span className="w-24 font-medium">Go</span>
                      <div className="flex-1 h-4 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 rounded-full" style={{ width: '28%' }}></div>
                      </div>
                      <span className="w-16 text-right text-sm">23.2 mW</span>
                    </div>
                    
                    <div className="flex items-center">
                      <span className="w-24 font-medium">Java</span>
                      <div className="flex-1 h-4 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-amber-500 rounded-full" style={{ width: '38%' }}></div>
                      </div>
                      <span className="w-16 text-right text-sm">31.7 mW</span>
                    </div>
                    
                    <div className="flex items-center">
                      <span className="w-24 font-medium">JavaScript</span>
                      <div className="flex-1 h-4 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-amber-500 rounded-full" style={{ width: '52%' }}></div>
                      </div>
                      <span className="w-16 text-right text-sm">42.3 mW</span>
                      <Badge className="ml-2 bg-amber-600">Current</Badge>
                    </div>
                    
                    <div className="flex items-center">
                      <span className="w-24 font-medium">Python</span>
                      <div className="flex-1 h-4 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-red-500 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                      <span className="w-16 text-right text-sm">61.8 mW</span>
                    </div>
                  </div>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Leaderboard</CardTitle>
                      <CardDescription>Most energy-efficient implementations</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <Award className="h-5 w-5 text-yellow-500 mr-2" />
                            <div>
                              <p className="font-medium">QuickSort in Rust</p>
                              <p className="text-xs text-gray-500">by rustdev92</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">8.3 mW</p>
                            <p className="text-xs text-gray-500">100K elements</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <Award className="h-5 w-5 text-gray-400 mr-2" />
                            <div>
                              <p className="font-medium">MergeSort in C++</p>
                              <p className="text-xs text-gray-500">by cppmaster</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">10.1 mW</p>
                            <p className="text-xs text-gray-500">100K elements</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <Award className="h-5 w-5 text-amber-600 mr-2" />
                            <div>
                              <p className="font-medium">TimSort in Go</p>
                              <p className="text-xs text-gray-500">by gopher42</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">12.7 mW</p>
                            <p className="text-xs text-gray-500">100K elements</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Energy Efficiency Tips</CardTitle>
            <CardDescription>Best practices for sustainable programming</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-2">
                <h3 className="font-medium flex items-center">
                  <Cpu className="h-5 w-5 text-green-500 mr-2" />
                  Minimize CPU Usage
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Choose algorithms with lower computational complexity. O(n log n) algorithms are generally more energy-efficient than O(n²) algorithms for large datasets.
                </p>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-medium flex items-center">
                  <Zap className="h-5 w-5 text-amber-500 mr-2" />
                  Optimize Memory Access
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Reduce memory allocations and deallocations. Use data structures that minimize cache misses and memory fragmentation.
                </p>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-medium flex items-center">
                  <Leaf className="h-5 w-5 text-green-500 mr-2" />
                  Choose Efficient Languages
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Compiled languages like Rust, C++, and Go typically consume less energy than interpreted languages for computationally intensive tasks.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
