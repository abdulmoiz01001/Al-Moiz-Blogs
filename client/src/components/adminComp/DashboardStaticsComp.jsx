import React from 'react';
import { FaDollarSign, FaShoppingCart, FaUsers, FaChartLine } from 'react-icons/fa';

const DashboardStaticsComp = () => {
    const statisticsData = [
        {
          id: 1,
          title: 'Total Sales',
          value: '$20,000',
          icon: <FaDollarSign className="text-green-500" />,
        },
        {
          id: 2,
          title: 'Total Orders',
          value: '150',
          icon: <FaShoppingCart className="text-blue-500" />,
        },
        {
          id: 3,
          title: 'Total Users',
          value: '1,200',
          icon: <FaUsers className="text-orange-500" />,
        },
        {
          id: 4,
          title: 'Total Revenue',
          value: '$15,000',
          icon: <FaChartLine className="text-purple-500" />,
        },
      ];
      
  return (
    <>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-6">
      {statisticsData.map(stat => (
        <div
          key={stat.id}
          className="flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 duration-200"
        >
          <div className="text-4xl mb-4">{stat.icon}</div>
          <h2 className="text-xl font-semibold">{stat.title}</h2>
          <p className="text-lg text-gray-600">{stat.value}</p>
        </div>
      ))}
    </div>

    </>
  )
}

export default DashboardStaticsComp