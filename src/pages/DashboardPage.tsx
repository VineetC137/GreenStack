
import React from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ArrowRight, Leaf, Zap, Recycle, ChartPie, BarChart2, TrendingUp } from "lucide-react";

const energyData = [
  { name: 'Jan', smart: 65, standard: 100 },
  { name: 'Feb', smart: 59, standard: 90 },
  { name: 'Mar', smart: 80, standard: 110 },
  { name: 'Apr', smart: 55, standard: 85 },
  { name: 'May', smart: 40, standard: 75 },
  { name: 'Jun', smart: 35, standard: 70 },
];

const recyclingData = [
  { name: 'Electronics', value: 35 },
  { name: 'Books', value: 25 },
  { name: 'Furniture', value: 20 },
  { name: 'Clothes', value: 15 },
  { name: 'Others', value: 5 },
];

const COLORS = ['#4CAF50', '#2E7D32', '#1976D2', '#1565C0', '#FFC107'];

const performanceData = [
  { name: 'Python', optimized: 85, standard: 100 },
  { name: 'JavaScript', optimized: 75, standard: 100 },
  { name: 'Java', optimized: 70, standard: 100 },
  { name: 'C++', optimized: 40, standard: 100 },
  { name: 'Rust', optimized: 30, standard: 100 },
];

export default function DashboardPage() {
  return (
    <Layout>
      <div className="container py-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2 gradient-heading">Sustainability Dashboard</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Track and analyze environmental impact across all initiatives
            </p>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            <Button variant="outline">
              Export Report
            </Button>
            <Button className="bg-green-600 hover:bg-green-700">
              Share Results
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-lg">
                <Leaf className="mr-2 h-5 w-5 text-green-500" />
                Carbon Footprint Saved
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-end">
                <div className="text-4xl font-bold text-green-600">15.2</div>
                <div className="text-xl ml-1 mb-1 text-gray-500 dark:text-gray-400">tons</div>
              </div>
              <div className="flex items-center mt-1">
                <span className="text-sm text-gray-600 dark:text-gray-300 mr-2">↑ 12% from last month</span>
                <TrendingUp className="h-4 w-4 text-green-500" />
              </div>
              <div className="mt-4 h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '68%' }} />
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                68% of yearly goal
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-lg">
                <Zap className="mr-2 h-5 w-5 text-green-500" />
                Energy Efficiency
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-end">
                <div className="text-4xl font-bold text-green-600">32</div>
                <div className="text-xl ml-1 mb-1 text-gray-500 dark:text-gray-400">%</div>
              </div>
              <div className="flex items-center mt-1">
                <span className="text-sm text-gray-600 dark:text-gray-300 mr-2">↑ 5% from last month</span>
                <TrendingUp className="h-4 w-4 text-green-500" />
              </div>
              <div className="mt-4 h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '32%' }} />
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                32% energy reduction
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-lg">
                <Recycle className="mr-2 h-5 w-5 text-green-500" />
                Recycled Items
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-end">
                <div className="text-4xl font-bold text-green-600">2,586</div>
                <div className="text-xl ml-1 mb-1 text-gray-500 dark:text-gray-400">items</div>
              </div>
              <div className="flex items-center mt-1">
                <span className="text-sm text-gray-600 dark:text-gray-300 mr-2">↑ 8% from last month</span>
                <TrendingUp className="h-4 w-4 text-green-500" />
              </div>
              <div className="mt-4 h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '52%' }} />
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                52% of yearly goal
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="mb-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">
              <ChartPie className="h-4 w-4 mr-2" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="energy">
              <Zap className="h-4 w-4 mr-2" />
              Energy Savings
            </TabsTrigger>
            <TabsTrigger value="code">
              <BarChart2 className="h-4 w-4 mr-2" />
              Code Efficiency
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recycled Items by Category</CardTitle>
                  <CardDescription>Distribution of recycled items on campus</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={recyclingData}
                          cx="50%"
                          cy="50%"
                          labelLine={true}
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {recyclingData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Overall Sustainability Score</CardTitle>
                  <CardDescription>Composite score based on all initiatives</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center h-80">
                  <div className="relative w-48 h-48">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-5xl font-bold text-green-600">84</div>
                    </div>
                    <svg className="w-48 h-48 transform -rotate-90" viewBox="0 0 100 100">
                      <circle 
                        cx="50" 
                        cy="50" 
                        r="45" 
                        fill="none" 
                        stroke="#e6e6e6" 
                        strokeWidth="10" 
                      />
                      <circle 
                        cx="50" 
                        cy="50" 
                        r="45" 
                        fill="none" 
                        stroke="#4CAF50" 
                        strokeWidth="10" 
                        strokeDasharray="282.7"
                        strokeDashoffset={(1 - 0.84) * 282.7} 
                      />
                    </svg>
                  </div>
                  <div className="mt-8 text-center">
                    <div className="font-medium">Excellent</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Your campus is in the top 15% of sustainable institutions</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="energy" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Energy Consumption Comparison</CardTitle>
                <CardDescription>Smart scheduling vs standard scheduling</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={energyData}
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
                      <Line type="monotone" dataKey="smart" stroke="#4CAF50" strokeWidth={2} name="Smart Scheduling" />
                      <Line type="monotone" dataKey="standard" stroke="#1976D2" strokeWidth={2} name="Standard Scheduling" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="code" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Code Efficiency by Language</CardTitle>
                <CardDescription>Energy consumption after optimization</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      width={500}
                      height={300}
                      data={performanceData}
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
                      <Bar dataKey="optimized" name="Optimized Code" fill="#4CAF50" />
                      <Bar dataKey="standard" name="Standard Code" fill="#1976D2" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-8">
          <h3 className="text-xl font-bold mb-4">Sustainability Tips</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
              <Leaf className="h-6 w-6 text-green-500 mb-2" />
              <h4 className="font-medium mb-1">Eco-Friendly Coding</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Choose Rust or Go for computationally intensive tasks to reduce energy consumption.</p>
            </div>
            <div className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
              <Zap className="h-6 w-6 text-green-500 mb-2" />
              <h4 className="font-medium mb-1">Classroom Scheduling</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Consolidate classes in fewer buildings during off-peak hours to reduce HVAC costs.</p>
            </div>
            <div className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
              <Recycle className="h-6 w-6 text-green-500 mb-2" />
              <h4 className="font-medium mb-1">Campus Recycling</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Donate or sell unused electronics through the marketplace rather than storing them.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
