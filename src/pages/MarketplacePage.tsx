
import React from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Filter, Tag, ShoppingBag, Recycle } from "lucide-react";
import { Input } from "@/components/ui/input";

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  category: string;
  condition: string;
  type: "sell" | "donate" | "recycle";
}

function ProductCard({ image, title, price, category, condition, type }: ProductCardProps) {
  const getTypeColor = () => {
    switch (type) {
      case "sell":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "donate":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
      case "recycle":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  const getTypeLabel = () => {
    switch (type) {
      case "sell":
        return "For Sale";
      case "donate":
        return "To Donate";
      case "recycle":
        return "To Recycle";
      default:
        return "";
    }
  };

  const getTypeIcon = () => {
    switch (type) {
      case "sell":
        return <Tag className="h-4 w-4 mr-1" />;
      case "donate":
        return <ShoppingBag className="h-4 w-4 mr-1" />;
      case "recycle":
        return <Recycle className="h-4 w-4 mr-1" />;
      default:
        return null;
    }
  };

  return (
    <Card className="overflow-hidden">
      <div className="h-48 bg-gray-200 dark:bg-gray-700 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{title}</CardTitle>
          <span className={`px-2 py-1 rounded text-xs font-medium flex items-center ${getTypeColor()}`}>
            {getTypeIcon()}
            {getTypeLabel()}
          </span>
        </div>
        <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
          <span>{category}</span>
          <span>Condition: {condition}</span>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="font-bold text-lg">
          {price}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-green-600 hover:bg-green-700">
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
}

export default function MarketplacePage() {
  return (
    <Layout>
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-6 gradient-heading">Sustainable Marketplace</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Buy, sell, donate, or recycle items within your campus community.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input 
                className="pl-10" 
                placeholder="Search for items..." 
              />
            </div>
          </div>
          <Button variant="outline" className="flex items-center">
            <Filter className="mr-2 h-5 w-5" />
            Filters
          </Button>
          <Button className="flex items-center bg-green-600 hover:bg-green-700">
            List an Item
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <ProductCard 
            image="https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            title="Calculus Textbook"
            price="$45"
            category="Books"
            condition="Like New"
            type="sell"
          />
          <ProductCard 
            image="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            title="Wireless Headphones"
            price="$30"
            category="Electronics"
            condition="Good"
            type="sell"
          />
          <ProductCard 
            image="https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            title="Desk Lamp"
            price="Free"
            category="Furniture"
            condition="Used"
            type="donate"
          />
          <ProductCard 
            image="https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            title="Old Laptop (Parts)"
            price="Recycle"
            category="Electronics"
            condition="Broken"
            type="recycle"
          />
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Eco Impact</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-1">
                  235
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Items Successfully Reused
                </p>
              </div>
              <div>
                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-1">
                  78
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Items Properly Recycled
                </p>
              </div>
              <div>
                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-1">
                  1.2
                  <span className="text-xl text-gray-500 dark:text-gray-400"> tons</span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Waste Diverted from Landfill
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
