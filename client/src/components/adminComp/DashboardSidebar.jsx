import React from 'react';
import { Link } from 'react-router-dom';
import { FaTachometerAlt, FaBox, FaShoppingCart, FaUsers } from 'react-icons/fa';
import { LuArrowUpLeftSquare } from 'react-icons/lu';

const DashboardSidebar = () => {
  return (
    <div className="h-full bg-white border-r-2 w-[25%] md:w-[20%] lg:w-[20%] flex flex-col gap-20 justify-start">
      <div className='w-full mt-10 flex flex-col justify-start'>
        <Link to='/dashboard'>
          <li className="h-16 w-full hover:bg-gray-100 flex items-center gap-3 pl-4 border-r-4 bg-gray-100 border-blue-500">
            <FaTachometerAlt className="text-blue-500" size={24} />
            <span className="text-lg font-bold text-blue-500">Dashboard</span>
          </li>
        </Link>
        <Link to='/admin/posts'>
          <li className="h-16 w-full hover:bg-gray-100 flex items-center gap-3 pl-4">
            <FaBox className="text-blue-500" size={24} />
            <span className="text-lg font-bold text-blue-500">Posts</span>
          </li>
        </Link>
        <Link to='/users'>
          <li className="h-16 w-full hover:bg-gray-100 flex items-center gap-3 pl-4">
            <FaUsers className="text-blue-500" size={24} />
            <span className="text-lg font-bold text-blue-500">Users</span>
          </li>
        </Link>
        <Link to='/comments'>
          <li className="h-16 w-full hover:bg-gray-100 flex items-center gap-3 pl-4">
            <FaShoppingCart className="text-blue-500" size={24} />
            <span className="text-lg font-bold text-blue-500">Comments</span>
          </li>
        </Link>
        <div className='w-12 mt-40 h-12 ml-4 cursor-pointer active:scale-95 flex justify-center items-center rounded-xl bg-gray-100'>
          <LuArrowUpLeftSquare size={30} />
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
