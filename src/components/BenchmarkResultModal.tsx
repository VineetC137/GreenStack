
import React from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Download, Share, Leaf } from "lucide-react";
import { toast } from "sonner";

interface BenchmarkResultModalProps {
  open: boolean;
  onClose: () => void;
}

const resultData = [
  {
    name: 'Original',
    energy: 100,
    time: 100,
    memory: 100,
  },
  {
    name: 'Optimized',
    energy: 45,
    time: 35,
    memory: 95,
  },
];

const BenchmarkResultModal = ({ open, onClose }: BenchmarkResultModalProps) => {
  const handleShare = () => {
    toast.success("Results shared to the community!");
  };

  const handleDownload = () => {
    toast.success("Results downloaded successfully!");
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <Leaf className="mr-2 h-5 w-5 text-green-500" />
            Benchmark Results
          </DialogTitle>
          <DialogDescription>
            Your code has been analyzed for energy efficiency
          </DialogDescription>
        </DialogHeader>
        
        <div className="py-4">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-lg font-semibold">Performance Summary</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                File: example_quicksort.py
              </p>
            </div>
            <div className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full dark:bg-green-900 dark:text-green-300">
              55% More Efficient
            </div>
          </div>

          <div className="h-60 mb-6">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                width={500}
                height={300}
                data={resultData}
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
                <Bar dataKey="energy" name="Energy Consumption (%)" fill="#4CAF50" />
                <Bar dataKey="time" name="Execution Time (%)" fill="#1976D2" />
                <Bar dataKey="memory" name="Memory Usage (%)" fill="#9C27B0" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-4 mb-6">
            <div>
              <h4 className="text-sm font-medium mb-1">Optimization Suggestions</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600 dark:text-gray-300">
                <li>Replace recursive function with iterative approach</li>
                <li>Use array indexing instead of list comprehensions for this case</li>
                <li>Minimize memory allocations inside the sorting loop</li>
                <li>Consider using NumPy's built-in sorting for large arrays</li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-medium mb-1">Environmental Impact</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                If this code runs 10,000 times daily, the optimized version would save approximately 0.5 kg CO₂ per day.
              </p>
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={handleDownload} className="mr-2">
            <Download className="mr-2 h-4 w-4" />
            Download Report
          </Button>
          <Button onClick={handleShare} className="bg-green-600 hover:bg-green-700">
            <Share className="mr-2 h-4 w-4" />
            Share to Community
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default BenchmarkResultModal;
