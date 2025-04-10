import React, { useState } from 'react';
import {
  CalendarIcon,
  ClockIcon,
  UsersIcon,
  BoltIcon,
  BuildingOfficeIcon,
} from '@heroicons/react/24/outline';

const rooms = [
  { id: 1, name: 'Room 101', capacity: 30, currentOccupancy: 25, energyUsage: '2.5 kWh' },
  { id: 2, name: 'Room 102', capacity: 40, currentOccupancy: 0, energyUsage: '0.5 kWh' },
  { id: 3, name: 'Room 103', capacity: 25, currentOccupancy: 20, energyUsage: '2.1 kWh' },
  { id: 4, name: 'Room 104', capacity: 35, currentOccupancy: 30, energyUsage: '2.8 kWh' },
];

const timeSlots = [
  '09:00 AM - 10:00 AM',
  '10:00 AM - 11:00 AM',
  '11:00 AM - 12:00 PM',
  '12:00 PM - 01:00 PM',
  '02:00 PM - 03:00 PM',
  '03:00 PM - 04:00 PM',
  '04:00 PM - 05:00 PM',
];

export default function SmartScheduling() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedRoom, setSelectedRoom] = useState(null);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Smart Class Scheduling
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            AI-powered classroom allocation system for optimal energy efficiency.
          </p>
        </div>

        <div className="flex justify-end">
          <button
            type="button"
            className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          >
            Optimize Schedule
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-x-8 gap-y-8 pt-4 md:grid-cols-3">
        {/* Room Status Cards */}
        <div className="md:col-span-2 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {rooms.map((room) => (
            <div
              key={room.id}
              className={`relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6 cursor-pointer hover:shadow-md transition-shadow duration-300 ${selectedRoom === room.id ? 'ring-2 ring-green-500' : ''}`}
              onClick={() => setSelectedRoom(room.id)}
            >
              <dt>
                <div className="absolute rounded-md bg-green-500 p-3">
                  <BuildingOfficeIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <p className="ml-16 truncate text-sm font-medium text-gray-500">{room.name}</p>
              </dt>
              <dd className="ml-16 flex flex-col gap-y-2">
                <div className="flex items-center">
                  <UsersIcon className="h-5 w-5 text-gray-400 mr-2" />
                  <span className="text-sm text-gray-600">
                    {room.currentOccupancy} / {room.capacity} students
                  </span>
                </div>
                <div className="flex items-center">
                  <BoltIcon className="h-5 w-5 text-gray-400 mr-2" />
                  <span className="text-sm text-gray-600">{room.energyUsage}</span>
                </div>
              </dd>
            </div>
          ))}
        </div>

        {/* Schedule Panel */}
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-medium text-gray-900">Schedule</h3>
            <div className="flex items-center space-x-2">
              <CalendarIcon className="h-5 w-5 text-gray-400" />
              <input
                type="date"
                className="rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                value={selectedDate.toISOString().split('T')[0]}
                onChange={(e) => setSelectedDate(new Date(e.target.value))}
              />
            </div>
          </div>

          <div className="space-y-4">
            {timeSlots.map((slot) => (
              <div
                key={slot}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 cursor-pointer"
              >
                <div className="flex items-center space-x-3">
                  <ClockIcon className="h-5 w-5 text-gray-400" />
                  <span className="text-sm text-gray-900">{slot}</span>
                </div>
                <button
                  type="button"
                  className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  Book
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Energy Usage Chart Placeholder */}
      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Energy Usage Overview</h3>
        <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">Energy usage chart will be implemented here</p>
        </div>
      </div>
    </div>
  );
}