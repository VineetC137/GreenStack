
import React from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building, Clock, AlertCircle, Calendar } from "lucide-react";

export default function SchedulingPage() {
  return (
    <Layout>
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-6 gradient-heading">Smart Class Scheduling System</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Optimize classroom allocation to minimize energy consumption and improve resource utilization.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Building className="mr-2 h-5 w-5 text-green-500" />
                Classroom Status
              </CardTitle>
              <CardDescription>Current classroom utilization</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-gray-900 dark:text-white mb-1">
                16<span className="text-xl text-gray-500 dark:text-gray-400">/24</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Classrooms currently in use
              </p>
              <div className="mt-4 h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 rounded-full" style={{ width: '66.7%' }}></div>
              </div>
              <div className="mt-2 flex justify-between text-xs text-gray-500 dark:text-gray-400">
                <span>0%</span>
                <span>100%</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="mr-2 h-5 w-5 text-green-500" />
                Peak Hours
              </CardTitle>
              <CardDescription>When classrooms are most utilized</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-gray-900 dark:text-white mb-1">
                10:00 - 14:00
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Current peak utilization hours
              </p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-xs text-gray-500 dark:text-gray-400">00:00</span>
                <div className="flex-1 mx-1 h-1 bg-gray-200 dark:bg-gray-700 rounded">
                  <div className="h-1 bg-green-500 rounded" style={{ width: '40%', marginLeft: '25%' }}></div>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400">23:59</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertCircle className="mr-2 h-5 w-5 text-green-500" />
                Energy Savings
              </CardTitle>
              <CardDescription>Efficiency improvements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-gray-900 dark:text-white mb-1">
                32<span className="text-xl text-gray-500 dark:text-gray-400">%</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Energy saved this month
              </p>
              <div className="mt-4 flex justify-between gap-2">
                <div className="h-16 w-4 bg-gray-100 dark:bg-gray-800 rounded-t-sm relative">
                  <div className="absolute bottom-0 left-0 right-0 bg-green-300 rounded-t-sm h-6"></div>
                </div>
                <div className="h-16 w-4 bg-gray-100 dark:bg-gray-800 rounded-t-sm relative">
                  <div className="absolute bottom-0 left-0 right-0 bg-green-300 rounded-t-sm h-8"></div>
                </div>
                <div className="h-16 w-4 bg-gray-100 dark:bg-gray-800 rounded-t-sm relative">
                  <div className="absolute bottom-0 left-0 right-0 bg-green-400 rounded-t-sm h-10"></div>
                </div>
                <div className="h-16 w-4 bg-gray-100 dark:bg-gray-800 rounded-t-sm relative">
                  <div className="absolute bottom-0 left-0 right-0 bg-green-500 rounded-t-sm h-14"></div>
                </div>
                <div className="h-16 w-4 bg-gray-100 dark:bg-gray-800 rounded-t-sm relative">
                  <div className="absolute bottom-0 left-0 right-0 bg-green-600 rounded-t-sm h-12"></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Schedule Optimization</CardTitle>
            <CardDescription>Upcoming classes and room assignments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-600 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-800 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">Time</th>
                    <th scope="col" className="px-6 py-3">Course</th>
                    <th scope="col" className="px-6 py-3">Room</th>
                    <th scope="col" className="px-6 py-3">Occupancy</th>
                    <th scope="col" className="px-6 py-3">Energy Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                    <td className="px-6 py-4 font-medium">09:00 - 10:30</td>
                    <td className="px-6 py-4">Introduction to Computer Science</td>
                    <td className="px-6 py-4">Room A104</td>
                    <td className="px-6 py-4">45/50</td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded dark:bg-green-900 dark:text-green-300">
                        Optimized
                      </span>
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                    <td className="px-6 py-4 font-medium">10:45 - 12:15</td>
                    <td className="px-6 py-4">Calculus I</td>
                    <td className="px-6 py-4">Room B210</td>
                    <td className="px-6 py-4">30/40</td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded dark:bg-green-900 dark:text-green-300">
                        Optimized
                      </span>
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                    <td className="px-6 py-4 font-medium">13:00 - 14:30</td>
                    <td className="px-6 py-4">Environmental Science</td>
                    <td className="px-6 py-4">Room C150</td>
                    <td className="px-6 py-4">22/60</td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded dark:bg-yellow-900 dark:text-yellow-300">
                        Needs review
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
        
        <div className="flex justify-center mt-8">
          <Button className="flex items-center bg-green-600 hover:bg-green-700">
            <Calendar className="mr-2 h-5 w-5" />
            Add New Schedule
          </Button>
        </div>
      </div>
    </Layout>
  );
}
