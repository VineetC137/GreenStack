
import React, { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building, Clock, AlertCircle, Calendar, PlusCircle, Edit2, Save, XCircle, Users, Lightbulb } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";

export default function SchedulingPage() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [showNewScheduleDialog, setShowNewScheduleDialog] = useState(false);
  const [newSchedule, setNewSchedule] = useState({
    course: "",
    room: "",
    time: "",
    date: "",
    capacity: "",
  });

  const handleAddNewSchedule = () => {
    if (!newSchedule.course || !newSchedule.room || !newSchedule.time) {
      toast({
        title: "Missing information",
        description: "Please fill all required fields",
        variant: "destructive",
      });
      return;
    }
    
    // Here we would normally send this data to the backend
    toast({
      title: "Schedule Created",
      description: "New schedule has been added successfully",
    });
    
    setShowNewScheduleDialog(false);
    setNewSchedule({
      course: "",
      room: "",
      time: "",
      date: "",
      capacity: "",
    });
  };

  return (
    <Layout>
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-2 gradient-heading">Smart Class Scheduling System</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Optimize classroom allocation to minimize energy consumption and improve resource utilization.
        </p>
        
        <Tabs defaultValue="dashboard" value={activeTab} onValueChange={setActiveTab} className="w-full mb-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
            <TabsTrigger value="analytics">Energy Analytics</TabsTrigger>
          </TabsList>
          
          <TabsContent value="dashboard" className="pt-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="border-l-4 border-l-green-500">
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
              
              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="mr-2 h-5 w-5 text-blue-500" />
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
                      <div className="h-1 bg-blue-500 rounded" style={{ width: '40%', marginLeft: '25%' }}></div>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">23:59</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-green-500">
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="mr-2 h-5 w-5 text-indigo-500" />
                    Occupancy Insights
                  </CardTitle>
                  <CardDescription>Live sensor data from classrooms</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Building A</span>
                      <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">78% Occupied</span>
                    </div>
                    <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 rounded-full" style={{ width: '78%' }}></div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Building B</span>
                      <span className="text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">45% Occupied</span>
                    </div>
                    <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-yellow-500 rounded-full" style={{ width: '45%' }}></div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Building C</span>
                      <span className="text-sm bg-red-100 text-red-800 px-2 py-1 rounded-full">92% Occupied</span>
                    </div>
                    <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-red-500 rounded-full" style={{ width: '92%' }}></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Lightbulb className="mr-2 h-5 w-5 text-amber-500" />
                    Smart Power Controls
                  </CardTitle>
                  <CardDescription>Automated lighting & climate systems</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Room A104</p>
                        <p className="text-xs text-gray-500">Lighting</p>
                      </div>
                      <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">Auto-dimmed (30%)</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Room B210</p>
                        <p className="text-xs text-gray-500">Climate Control</p>
                      </div>
                      <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Eco Mode Active</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Building C</p>
                        <p className="text-xs text-gray-500">Power Savings</p>
                      </div>
                      <span className="text-sm bg-amber-100 text-amber-800 px-2 py-1 rounded-full">18.5 kWh Saved Today</span>
                    </div>
                    
                    <Button variant="outline" className="w-full mt-2">
                      <Edit2 className="mr-2 h-4 w-4" />
                      Adjust Power Settings
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="schedule" className="pt-4">
            <Card className="mb-8">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Schedule Optimization</CardTitle>
                  <CardDescription>Upcoming classes and room assignments</CardDescription>
                </div>
                <Dialog open={showNewScheduleDialog} onOpenChange={setShowNewScheduleDialog}>
                  <DialogTrigger asChild>
                    <Button className="flex items-center bg-green-600 hover:bg-green-700">
                      <PlusCircle className="mr-2 h-5 w-5" />
                      Add New Schedule
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add New Class Schedule</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="course" className="text-right">Course</Label>
                        <Input 
                          id="course" 
                          value={newSchedule.course}
                          onChange={(e) => setNewSchedule({...newSchedule, course: e.target.value})}
                          className="col-span-3" 
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="room" className="text-right">Room</Label>
                        <Select 
                          onValueChange={(value) => setNewSchedule({...newSchedule, room: value})}
                        >
                          <SelectTrigger className="col-span-3">
                            <SelectValue placeholder="Select room" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="A104">Room A104</SelectItem>
                            <SelectItem value="B210">Room B210</SelectItem>
                            <SelectItem value="C150">Room C150</SelectItem>
                            <SelectItem value="D120">Room D120</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="time" className="text-right">Time</Label>
                        <Input 
                          id="time" 
                          value={newSchedule.time}
                          onChange={(e) => setNewSchedule({...newSchedule, time: e.target.value})}
                          placeholder="e.g. 09:00 - 10:30"
                          className="col-span-3" 
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="date" className="text-right">Date</Label>
                        <Input 
                          id="date" 
                          value={newSchedule.date}
                          onChange={(e) => setNewSchedule({...newSchedule, date: e.target.value})}
                          placeholder="e.g. Monday, Wednesday, Friday" 
                          className="col-span-3" 
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="capacity" className="text-right">Capacity</Label>
                        <Input 
                          id="capacity" 
                          type="number" 
                          value={newSchedule.capacity}
                          onChange={(e) => setNewSchedule({...newSchedule, capacity: e.target.value})}
                          className="col-span-3" 
                        />
                      </div>
                    </div>
                    <div className="flex justify-end space-x-2">
                      <Button variant="outline" onClick={() => setShowNewScheduleDialog(false)}>
                        <XCircle className="mr-2 h-4 w-4" />
                        Cancel
                      </Button>
                      <Button onClick={handleAddNewSchedule} className="bg-green-600 hover:bg-green-700">
                        <Save className="mr-2 h-4 w-4" />
                        Save
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
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
                        <th scope="col" className="px-6 py-3">Actions</th>
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
                        <td className="px-6 py-4">
                          <Button variant="ghost" size="sm">
                            <Edit2 className="h-4 w-4" />
                          </Button>
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
                        <td className="px-6 py-4">
                          <Button variant="ghost" size="sm">
                            <Edit2 className="h-4 w-4" />
                          </Button>
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
                        <td className="px-6 py-4">
                          <Button variant="ghost" size="sm">
                            <Edit2 className="h-4 w-4" />
                          </Button>
                        </td>
                      </tr>
                      <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <td className="px-6 py-4 font-medium">15:00 - 16:30</td>
                        <td className="px-6 py-4">Introduction to Psychology</td>
                        <td className="px-6 py-4">Room D120</td>
                        <td className="px-6 py-4">35/40</td>
                        <td className="px-6 py-4">
                          <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded dark:bg-green-900 dark:text-green-300">
                            Optimized
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <Button variant="ghost" size="sm">
                            <Edit2 className="h-4 w-4" />
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>AI Scheduling Recommendations</CardTitle>
                <CardDescription>Energy-optimized adjustments for upcoming classes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800">
                    <h3 className="font-medium flex items-center gap-2 text-amber-800 dark:text-amber-400">
                      <AlertCircle className="h-4 w-4" /> Recommendation for Environmental Science
                    </h3>
                    <p className="text-sm mt-1 text-amber-700 dark:text-amber-300">
                      Move from Room C150 (capacity 60) to Room B110 (capacity 30) to save approximately 4.5 kWh per session.
                    </p>
                    <div className="flex gap-2 mt-2">
                      <Button size="sm" variant="outline" className="text-xs">Ignore</Button>
                      <Button size="sm" className="bg-amber-600 hover:bg-amber-700 text-xs">Apply Change</Button>
                    </div>
                  </div>
                  
                  <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800">
                    <h3 className="font-medium flex items-center gap-2 text-green-800 dark:text-green-400">
                      <AlertCircle className="h-4 w-4" /> Consolidate Evening Classes
                    </h3>
                    <p className="text-sm mt-1 text-green-700 dark:text-green-300">
                      Consolidate all evening classes (after 18:00) to Building A to optimize heating/cooling and reduce lighting costs.
                    </p>
                    <div className="flex gap-2 mt-2">
                      <Button size="sm" variant="outline" className="text-xs">Ignore</Button>
                      <Button size="sm" className="bg-green-600 hover:bg-green-700 text-xs">Apply Change</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="analytics" className="pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Energy Consumption by Building</CardTitle>
                  <CardDescription>Monthly usage statistics (kWh)</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    {/* Chart would go here in a real implementation */}
                    <div className="flex flex-col h-full justify-between">
                      <div className="flex justify-between items-end border-b border-dashed border-gray-300 pb-2">
                        <div className="w-1/4 text-center">
                          <div className="h-32 bg-green-500 rounded-t-sm w-8 mx-auto" style={{height: '60%'}}></div>
                          <p className="text-xs mt-2">Building A</p>
                          <p className="text-xs font-bold">1,245 kWh</p>
                        </div>
                        <div className="w-1/4 text-center">
                          <div className="h-32 bg-blue-500 rounded-t-sm w-8 mx-auto" style={{height: '80%'}}></div>
                          <p className="text-xs mt-2">Building B</p>
                          <p className="text-xs font-bold">1,855 kWh</p>
                        </div>
                        <div className="w-1/4 text-center">
                          <div className="h-32 bg-purple-500 rounded-t-sm w-8 mx-auto" style={{height: '70%'}}></div>
                          <p className="text-xs mt-2">Building C</p>
                          <p className="text-xs font-bold">1,650 kWh</p>
                        </div>
                        <div className="w-1/4 text-center">
                          <div className="h-32 bg-amber-500 rounded-t-sm w-8 mx-auto" style={{height: '50%'}}></div>
                          <p className="text-xs mt-2">Building D</p>
                          <p className="text-xs font-bold">1,100 kWh</p>
                        </div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500 pt-2">
                        <span>Last Month</span>
                        <span>Current Month</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Energy Savings Report</CardTitle>
                  <CardDescription>Optimization impact analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Lighting Optimization</span>
                        <span className="text-sm font-medium text-green-600">24% Saved</span>
                      </div>
                      <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 rounded-full" style={{ width: '24%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">HVAC Efficiency</span>
                        <span className="text-sm font-medium text-green-600">31% Saved</span>
                      </div>
                      <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 rounded-full" style={{ width: '31%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Room Consolidation</span>
                        <span className="text-sm font-medium text-green-600">45% Saved</span>
                      </div>
                      <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 rounded-full" style={{ width: '45%' }}></div>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t">
                      <div className="flex justify-between text-base font-semibold">
                        <span>Total Energy Saved</span>
                        <span className="text-green-600">2,456 kWh</span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>Carbon Reduction</span>
                        <span>1.2 tons CO2</span>
                      </div>
                    </div>
                    
                    <Button className="w-full mt-2 bg-green-600 hover:bg-green-700">
                      Generate Detailed Report
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Predictive Energy Optimization</CardTitle>
                  <CardDescription>AI-powered forecasting for next month</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800">
                      <h3 className="font-medium">Seasonal Adjustment Recommendation</h3>
                      <p className="text-sm mt-1 text-gray-600 dark:text-gray-400">
                        Based on historical data and weather forecasts, our AI suggests reducing HVAC usage in Buildings B and C by 15% during midday hours when solar gain is highest. Estimated savings: 320 kWh per month.
                      </p>
                    </div>
                    
                    <div className="p-4 border rounded-lg bg-purple-50 dark:bg-purple-950/30 border-purple-200 dark:border-purple-800">
                      <h3 className="font-medium">Occupancy Pattern Analysis</h3>
                      <p className="text-sm mt-1 text-gray-600 dark:text-gray-400">
                        Our AI has detected consistent underutilization of east wing classrooms on Friday afternoons. Recommendation: Consolidate all Friday afternoon classes to the west wing to reduce energy usage by approximately 180 kWh per month.
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t">
                      <div className="text-center p-4 border rounded-lg">
                        <h4 className="font-medium">Estimated Monthly Savings</h4>
                        <p className="text-2xl font-bold text-green-600 mt-2">$340</p>
                      </div>
                      
                      <div className="text-center p-4 border rounded-lg">
                        <h4 className="font-medium">Energy Reduction Potential</h4>
                        <p className="text-2xl font-bold text-green-600 mt-2">12.5%</p>
                      </div>
                      
                      <div className="text-center p-4 border rounded-lg">
                        <h4 className="font-medium">Implementation Difficulty</h4>
                        <p className="text-2xl font-bold text-amber-600 mt-2">Medium</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
