import React, { useState } from 'react';
import {
  ShoppingBagIcon,
  ArrowPathIcon,
  GiftIcon,
  CurrencyDollarIcon,
  TagIcon,
  PlusIcon,
} from '@heroicons/react/24/outline';

// Import category icons
import booksIcon from '../assets/books-category.svg';
import electronicsIcon from '../assets/electronics-category.svg';
import furnitureIcon from '../assets/furniture-category.svg';
import clothesIcon from '../assets/clothes-category.svg';

// Import product images
import engineeringBook from '../assets/engineering-book.svg';
import calculator from '../assets/calculator.svg';
import studyDesk from '../assets/study-desk.svg';
import labCoat from '../assets/lab-coat.svg';

const categories = [
  { id: 1, name: 'Books', count: 124, icon: booksIcon },
  { id: 2, name: 'Electronics', count: 85, icon: electronicsIcon },
  { id: 3, name: 'Furniture', count: 46, icon: furnitureIcon },
  { id: 4, name: 'Clothes', count: 156, icon: clothesIcon },
  { id: 5, name: 'Others', count: 92, icon: booksIcon },
];

const items = [
  {
    id: 1,
    name: 'Engineering Mathematics Textbook',
    category: 'Books',
    condition: 'Good',
    type: 'Donate',
    points: 50,
    image: engineeringBook,
  },
  {
    id: 2,
    name: 'Scientific Calculator',
    category: 'Electronics',
    condition: 'Excellent',
    type: 'Sell',
    price: 15,
    points: 30,
    image: calculator,
  },
  {
    id: 3,
    name: 'Study Desk',
    category: 'Furniture',
    condition: 'Fair',
    type: 'Exchange',
    points: 100,
    image: studyDesk,
  },
  {
    id: 4,
    name: 'Lab Coat',
    category: 'Clothes',
    condition: 'New',
    type: 'Donate',
    points: 40,
    image: labCoat,
  },
];

export default function SustainableShopping() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Sustainable Shopping Platform
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Donate, exchange, or recycle items within the campus community.
          </p>
        </div>

        <div className="flex justify-end">
          <button
            type="button"
            className="rounded-md bg-green-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          >
            <PlusIcon className="-ml-0.5 h-5 w-5 inline-block mr-2" aria-hidden="true" />
            List Item
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Categories</h3>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.name.toLowerCase())}
              className={`flex flex-col items-center p-4 rounded-lg border ${selectedCategory === category.name.toLowerCase() ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-green-500 hover:bg-green-50'}`}
            >
              <img src={category.icon} alt={category.name} className="w-8 h-8 mb-2" />
              <span className="text-sm font-medium text-gray-900">{category.name}</span>
              <span className="text-sm text-gray-500">{category.count} items</span>
            </button>
          ))}
        </div>
      </div>

      {/* Filters and Items */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
        {/* Filters */}
        <div className="lg:col-span-1">
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Filters</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-medium text-gray-900 mb-2">Type</h4>
                <div className="space-y-2">
                  {['Donate', 'Sell', 'Exchange', 'Recycle'].map((type) => (
                    <label key={type} className="flex items-center">
                      <input
                        type="radio"
                        name="type"
                        value={type.toLowerCase()}
                        checked={selectedType === type.toLowerCase()}
                        onChange={(e) => setSelectedType(e.target.value)}
                        className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300"
                      />
                      <span className="ml-2 text-sm text-gray-600">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-900 mb-2">Condition</h4>
                <div className="space-y-2">
                  {['New', 'Excellent', 'Good', 'Fair'].map((condition) => (
                    <label key={condition} className="flex items-center">
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded text-green-600 focus:ring-green-500 border-gray-300"
                      />
                      <span className="ml-2 text-sm text-gray-600">{condition}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Items Grid */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <div key={item.id} className="bg-white shadow rounded-lg overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-900">{item.name}</span>
                    <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${item.type === 'Donate' ? 'bg-green-100 text-green-700' : item.type === 'Sell' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'}`}>
                      {item.type}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center text-sm text-gray-500">
                      <TagIcon className="h-4 w-4 mr-1" />
                      {item.category}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <ArrowPathIcon className="h-4 w-4 mr-1" />
                      {item.condition}
                    </div>
                    {item.type === 'Sell' && (
                      <div className="flex items-center text-sm text-gray-500">
                        <CurrencyDollarIcon className="h-4 w-4 mr-1" />
                        ${item.price}
                      </div>
                    )}
                    <div className="flex items-center text-sm text-gray-500">
                      <GiftIcon className="h-4 w-4 mr-1" />
                      {item.points} eco-points
                    </div>
                  </div>
                  <button
                    type="button"
                    className="mt-4 w-full rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                  >
                    {item.type === 'Sell' ? 'Purchase' : item.type === 'Exchange' ? 'Offer Exchange' : 'Claim'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}