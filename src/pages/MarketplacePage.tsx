
import React, { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Filter, Tag, ShoppingBag, Recycle, Award, ArrowRight, TrendingUp, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  category: string;
  condition: string;
  type: "sell" | "donate" | "recycle";
  endTime?: string;
  bids?: number;
}

function ProductCard({ image, title, price, category, condition, type, endTime, bids }: ProductCardProps) {
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
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
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
        <div className="font-bold text-lg mb-2">
          {price}
        </div>
        
        {bids && endTime && (
          <div className="text-xs text-gray-500 dark:text-gray-400 space-y-1">
            <div className="flex justify-between items-center">
              <span className="flex items-center"><TrendingUp className="h-3 w-3 mr-1" /> {bids} bids</span>
              <span className="flex items-center"><Clock className="h-3 w-3 mr-1" /> {endTime}</span>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-green-600 hover:bg-green-700">
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
}

interface CategoryButtonProps {
  name: string;
  icon: React.ReactNode;
  count: number;
  active: boolean;
  onClick: () => void;
}

function CategoryButton({ name, icon, count, active, onClick }: CategoryButtonProps) {
  return (
    <Button 
      variant={active ? "default" : "outline"} 
      className={`flex items-center justify-between w-full ${active ? "bg-green-600 hover:bg-green-700" : ""}`}
      onClick={onClick}
    >
      <div className="flex items-center">
        {icon}
        <span className="ml-2">{name}</span>
      </div>
      <Badge variant="secondary" className="ml-2">{count}</Badge>
    </Button>
  );
}

function AIClassification() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>AI Product Classification</CardTitle>
        <CardDescription>Upload a photo or describe your item for an AI recommendation</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center hover:border-green-500 transition-colors cursor-pointer">
          <p className="text-gray-500 dark:text-gray-400">Drag & drop an image or click to upload</p>
        </div>
        <Input placeholder="Describe your item (e.g. 'Old laptop with cracked screen')" />
        <Button className="w-full bg-green-600 hover:bg-green-700">
          Get Recommendation
        </Button>
      </CardContent>
      <CardFooter className="flex flex-col items-start space-y-4">
        <div className="w-full">
          <div className="flex justify-between mb-1">
            <span className="text-sm">Recommended Action:</span>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" className="flex-1">
              <Recycle className="mr-2 h-4 w-4" />
              Recycle
              <Badge className="ml-2 bg-green-600">85%</Badge>
            </Button>
            <Button variant="outline" className="flex-1">
              <ShoppingBag className="mr-2 h-4 w-4" />
              Donate
              <Badge className="ml-2">12%</Badge>
            </Button>
            <Button variant="outline" className="flex-1">
              <Tag className="mr-2 h-4 w-4" />
              Sell
              <Badge className="ml-2">3%</Badge>
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

function EcoPointsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Award className="h-5 w-5 mr-2 text-green-600" /> Your Eco Points
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-center">
          <div className="text-4xl font-bold mb-2 text-green-600">475</div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            You're in the top 15% of eco-conscious users!
          </p>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm">Level Progress</span>
                <span className="text-sm font-bold">475/500</span>
              </div>
              <Progress value={95} className="h-2" />
              <p className="text-xs text-right mt-1 text-gray-500">25 points to Level 5</p>
            </div>
            <Button className="w-full" variant="outline">
              View Rewards <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
      <CardFooter className="block space-y-2">
        <h4 className="font-medium text-sm">Recent Activity</h4>
        <ul className="text-sm space-y-2">
          <li className="flex justify-between items-center">
            <span>Recycled Electronics</span>
            <span className="text-green-600 font-medium">+75 pts</span>
          </li>
          <li className="flex justify-between items-center">
            <span>Donated Textbooks</span>
            <span className="text-green-600 font-medium">+50 pts</span>
          </li>
          <li className="flex justify-between items-center">
            <span>Listed Item for Reuse</span>
            <span className="text-green-600 font-medium">+25 pts</span>
          </li>
        </ul>
      </CardFooter>
    </Card>
  );
}

export default function MarketplacePage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [activeTab, setActiveTab] = useState<string>("browse");

  const categories = [
    { name: "All", icon: <Filter className="h-4 w-4" />, count: 145 },
    { name: "Books", icon: <Tag className="h-4 w-4" />, count: 42 },
    { name: "Electronics", icon: <Tag className="h-4 w-4" />, count: 38 },
    { name: "Furniture", icon: <Tag className="h-4 w-4" />, count: 27 },
    { name: "Clothes", icon: <Tag className="h-4 w-4" />, count: 23 },
    { name: "Other", icon: <Tag className="h-4 w-4" />, count: 15 }
  ];

  return (
    <Layout>
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-3 gradient-heading">Sustainable Marketplace</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Buy, sell, donate, or recycle items within your campus community. Earn eco-points for sustainable actions!
        </p>
        
        <Tabs defaultValue="browse" className="mb-8" onValueChange={(value) => setActiveTab(value)}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="browse">Browse Marketplace</TabsTrigger>
            <TabsTrigger value="list">List an Item</TabsTrigger>
            <TabsTrigger value="my-items">My Items & Bids</TabsTrigger>
          </TabsList>
          
          <TabsContent value="browse" className="mt-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Categories</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {categories.map((category) => (
                      <CategoryButton
                        key={category.name}
                        name={category.name}
                        icon={category.icon}
                        count={category.count}
                        active={activeCategory === category.name}
                        onClick={() => setActiveCategory(category.name)}
                      />
                    ))}
                  </CardContent>
                </Card>
                
                <EcoPointsCard />
              </div>
              
              <div className="md:w-3/4">
                <div className="flex flex-col md:flex-row gap-4 mb-6">
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
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
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
                    endTime="3h 45m left"
                    bids={5}
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
                  <ProductCard 
                    image="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    title="Psychology Textbooks"
                    price="$35 each"
                    category="Books"
                    condition="Good"
                    type="sell"
                  />
                  <ProductCard 
                    image="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    title="Camera Accessories"
                    price="$25"
                    category="Electronics"
                    condition="Like New"
                    type="sell"
                    endTime="1d 5h left"
                    bids={8}
                  />
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="list" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>List Your Item</CardTitle>
                    <CardDescription>Complete the form below to list your item on the marketplace</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Item Title</label>
                      <Input placeholder="Enter a descriptive title" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Category</label>
                      <select className="w-full h-10 rounded-md border border-input bg-background px-3 py-2">
                        <option value="">Select a category</option>
                        <option value="books">Books</option>
                        <option value="electronics">Electronics</option>
                        <option value="furniture">Furniture</option>
                        <option value="clothes">Clothes</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Condition</label>
                      <select className="w-full h-10 rounded-md border border-input bg-background px-3 py-2">
                        <option value="">Select condition</option>
                        <option value="new">Brand New</option>
                        <option value="like-new">Like New</option>
                        <option value="good">Good</option>
                        <option value="fair">Fair</option>
                        <option value="poor">Poor</option>
                        <option value="broken">Broken/For Parts</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Listing Type</label>
                      <div className="flex space-x-2">
                        <Button variant="outline" className="flex-1 justify-start">
                          <Tag className="mr-2 h-4 w-4" />
                          Sell
                        </Button>
                        <Button variant="outline" className="flex-1 justify-start">
                          <ShoppingBag className="mr-2 h-4 w-4" />
                          Donate
                        </Button>
                        <Button variant="outline" className="flex-1 justify-start">
                          <Recycle className="mr-2 h-4 w-4" />
                          Recycle
                        </Button>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Price (if selling)</label>
                      <Input placeholder="Enter price" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Description</label>
                      <textarea 
                        className="w-full rounded-md border border-input bg-background px-3 py-2 min-h-[100px]" 
                        placeholder="Describe your item in detail"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Upload Photos</label>
                      <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center hover:border-green-500 transition-colors cursor-pointer">
                        <p className="text-gray-500 dark:text-gray-400">Drag & drop up to 5 photos or click to upload</p>
                      </div>
                    </div>
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      List Item
                    </Button>
                  </CardContent>
                </Card>
              </div>
              
              <div>
                <AIClassification />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="my-items" className="mt-6">
            <div className="grid grid-cols-1 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Your Listed Items</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-md">
                      <div className="flex items-center">
                        <div className="w-16 h-16 bg-gray-200 rounded mr-4"></div>
                        <div>
                          <h4 className="font-medium">Chemistry Textbook</h4>
                          <p className="text-sm text-gray-500">Listed 3 days ago</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold">$40</div>
                        <Badge className="bg-blue-500">2 Offers</Badge>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 border rounded-md">
                      <div className="flex items-center">
                        <div className="w-16 h-16 bg-gray-200 rounded mr-4"></div>
                        <div>
                          <h4 className="font-medium">Desk Chair</h4>
                          <p className="text-sm text-gray-500">Listed 1 week ago</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold">Free</div>
                        <Badge className="bg-purple-500">Donation</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Your Active Bids</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-md">
                      <div className="flex items-center">
                        <div className="w-16 h-16 bg-gray-200 rounded mr-4"></div>
                        <div>
                          <h4 className="font-medium">Bluetooth Speaker</h4>
                          <p className="text-sm text-gray-500">Ends in 2 days</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold">Your bid: $35</div>
                        <p className="text-xs text-gray-500">Current highest: $38</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Eco Impact</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
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
              <div>
                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-1">
                  12,350
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Total Eco Points Earned
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Top Eco Contributors</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-2">
                {[
                  { name: "Alex Johnson", points: 825, badge: "Eco Champion" },
                  { name: "Samantha Lee", points: 764, badge: "Recycling Pro" },
                  { name: "Michael Chen", points: 701, badge: "Reuse Expert" },
                  { name: "Taylor Smith", points: 652, badge: "Sustainability Star" },
                  { name: "Jamie Williams", points: 589, badge: "Green Innovator" }
                ].map((user, i) => (
                  <li key={i} className="flex items-center justify-between border-b pb-2 last:border-0">
                    <div className="flex items-center">
                      <span className="font-bold mr-2">{i + 1}.</span>
                      <span>{user.name}</span>
                    </div>
                    <div className="flex items-center">
                      <Badge variant="outline" className="mr-2">{user.badge}</Badge>
                      <span className="font-bold text-green-600">{user.points}</span>
                    </div>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Monthly Transactions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span>Items Sold</span>
                <Progress value={75} className="w-32 h-2" />
                <span className="font-medium">48</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Items Donated</span>
                <Progress value={65} className="w-32 h-2" />
                <span className="font-medium">36</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Items Recycled</span>
                <Progress value={40} className="w-32 h-2" />
                <span className="font-medium">24</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Eco Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-3 bg-green-50 dark:bg-green-900/30 rounded-md">
                  <p className="text-sm">
                    <span className="font-bold">✓</span> Electronics contain valuable materials that can be recycled. Always list broken electronics for recycling instead of throwing them away.
                  </p>
                </div>
                <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-md">
                  <p className="text-sm">
                    <span className="font-bold">✓</span> Books in good condition can be donated to the campus library or sold to incoming students for the next semester.
                  </p>
                </div>
                <div className="p-3 bg-amber-50 dark:bg-amber-900/30 rounded-md">
                  <p className="text-sm">
                    <span className="font-bold">✓</span> Consider the environmental impact of packaging when sending items. Use recycled materials or minimal packaging when possible.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
