import React from 'react';
import { Link } from 'react-router-dom';
import {
  CalendarIcon,
  ShoppingBagIcon,
  CodeBracketIcon,
  CommandLineIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
} from '@heroicons/react/24/outline';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const stats = [
  { name: 'Energy Saved', value: '2.4 MWh', change: '+4.75%', changeType: 'positive' },
  { name: 'Carbon Reduced', value: '1.2 tons', change: '+2.15%', changeType: 'positive' },
  { name: 'Items Recycled', value: '234', change: '+5.25%', changeType: 'positive' },
  { name: 'Code Optimizations', value: '1,429', change: '+8.32%', changeType: 'positive' },
];

const energyData = [
  { month: 'Jan', energy: 1.2 },
  { month: 'Feb', energy: 1.5 },
  { month: 'Mar', energy: 1.8 },
  { month: 'Apr', energy: 2.1 },
  { month: 'May', energy: 2.4 },
];

const carbonData = [
  { month: 'Jan', carbon: 0.5 },
  { month: 'Feb', carbon: 0.7 },
  { month: 'Mar', carbon: 0.9 },
  { month: 'Apr', carbon: 1.0 },
  { month: 'May', carbon: 1.2 },
];

const recyclingData = [
  { name: 'Books', value: 124 },
  { name: 'Electronics', value: 85 },
  { name: 'Furniture', value: 46 },
  { name: 'Clothes', value: 156 },
  { name: 'Others', value: 92 },
];

const optimizationData = [
  { language: 'Python', optimizations: 450 },
  { language: 'JavaScript', optimizations: 380 },
  { language: 'Java', optimizations: 320 },
  { language: 'C++', optimizations: 180 },
  { language: 'Rust', optimizations: 99 },
];

const features = [
  {
    name: 'Smart Class Scheduling',
    description: 'AI-powered classroom allocation to minimize energy consumption',
    icon: CalendarIcon,
    href: '/smart-scheduling',
    color: 'bg-blue-500',
  },
  {
    name: 'Sustainable Shopping',
    description: 'Campus marketplace for donating, exchanging, and recycling items',
    icon: ShoppingBagIcon,
    href: '/sustainable-shopping',
    color: 'bg-green-500',
  },
  {
    name: 'Programming Benchmark',
    description: 'Compare and optimize energy efficiency of programming languages',
    icon: CodeBracketIcon,
    href: '/programming-benchmark',
    color: 'bg-purple-500',
  },
  {
    name: 'Green Compiler',
    description: 'AI-powered code optimization for energy efficiency',
    icon: CommandLineIcon,
    href: '/green-compiler',
    color: 'bg-orange-500',
  },
];

export default function Dashboard() {
  return (
    <div className="animate-fadeIn">
      <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2 pb-8">
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Overview</h2>
          <p className="mt-3 text-lg leading-7 text-gray-600">
            Track your sustainability impact and energy savings across all GreenStack features.
          </p>
        </div>
      </div>

      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.name}
            className="relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 sm:px-6 sm:pt-6 border border-gray-100"
          >
            <dt>
              <div className="absolute rounded-md bg-gradient-to-r from-green-500 to-green-600 p-3 transition-transform duration-300 hover:scale-110">
                <ArrowTrendingUpIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <p className="ml-16 truncate text-sm font-medium text-gray-500">{item.name}</p>
            </dt>
            <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
              <p className="text-2xl font-semibold text-gray-900">{item.value}</p>
              <p
                className={`ml-2 flex items-baseline text-sm font-semibold ${item.changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`}
              >
                {item.changeType === 'positive' ? (
                  <ArrowTrendingUpIcon className="h-5 w-5 flex-shrink-0 self-center text-green-500" aria-hidden="true" />
                ) : (
                  <ArrowTrendingDownIcon className="h-5 w-5 flex-shrink-0 self-center text-red-500" aria-hidden="true" />
                )}
                <span className="ml-1">{item.change}</span>
              </p>
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <Link
            key={feature.name}
            to={feature.href}
            className="relative overflow-hidden rounded-lg bg-white p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:bg-gradient-to-br hover:from-white hover:to-gray-50 border border-gray-100"
          >
            <dt>
              <div className={`absolute rounded-lg ${feature.color} p-3 transition-transform duration-300 hover:scale-110 bg-gradient-to-r from-current to-current/80`}>
                <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <p className="ml-16 text-lg font-semibold leading-8 text-gray-900">{feature.name}</p>
            </dt>
            <dd className="mt-2 ml-16 text-base text-gray-600">{feature.description}</dd>
          </Link>
        ))}
      </div>

      {/* Data Visualization Section */}
      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Energy Savings Trend */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Energy Savings Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={energyData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <defs>
                <linearGradient id="energyGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#22c55e" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#22c55e" stopOpacity={0.2}/>
                </linearGradient>
              </defs>
              <Line 
                type="monotone" 
                dataKey="energy" 
                stroke="#22c55e" 
                strokeWidth={3}
                dot={{ r: 6, strokeWidth: 2 }}
                activeDot={{ r: 8, strokeWidth: 2 }}
              />
              <Line 
                type="monotone" 
                dataKey="energy" 
                stroke="url(#energyGradient)" 
                strokeWidth={1} 
                fill="url(#energyGradient)"
                fillOpacity={0.2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Carbon Reduction Progress */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Carbon Reduction Progress</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={carbonData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <defs>
                <linearGradient id="carbonGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.2}/>
                </linearGradient>
              </defs>
              <Area 
                type="monotone" 
                dataKey="carbon" 
                stroke="#3b82f6" 
                strokeWidth={3}
                fill="url(#carbonGradient)"
                fillOpacity={1}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Recycling Distribution */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Recycling Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={recyclingData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                fill="#22c55e"
                dataKey="value"
                nameKey="name"
                label
                paddingAngle={5}
              >
                {recyclingData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={[
                      '#22c55e',
                      '#3b82f6',
                      '#8b5cf6',
                      '#ec4899',
                      '#f97316'
                    ][index % 5]} 
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Code Optimization by Language */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Code Optimization by Language</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={optimizationData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="language" />
              <YAxis />
              <Tooltip />
              <Legend />
              <defs>
                <linearGradient id="optimizationsGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.2}/>
                </linearGradient>
              </defs>
              <Bar 
                dataKey="optimizations" 
                fill="url(#optimizationsGradient)"
                radius={[10, 10, 0, 0]}
                barSize={40}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}