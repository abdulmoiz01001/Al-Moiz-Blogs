import React from 'react';
import { format, parseISO } from 'date-fns';
import { MdForwardToInbox } from "react-icons/md";
import { AiOutlineBulb } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { useAppStore } from '../../store';
import { Link } from 'react-router-dom';

const DashboardHeaderComp = () => {

    const { setOpenModalState } = useAppStore(state => (state));
    

    const handleOpenModal = () => {
        // setCurrentBlog(blog);
        setOpenModalState(true);
        console.log('Open modal');
        // setModalOpen(true);
      };
     
  return (
    <>
    <header className="w-full bg-white border-b-2 flex justify-between items-center h-20">
      <div className="flex justify-start pl-9 items-center xxs:w-[60%] xs:w-[60%] sm:w-[30%] md:w-[30%] w-[20%] h-full">
        <h1 className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-300">
          Al Moiz Blogs
        </h1>
        
      </div>
      <Link to={"/"} >
          <button  className='bg-blue-500 active:scale-90 text-white px-4 py-2 rounded-md' >User</button>
      </Link>

      <nav className="flex justify-end xxs:hidden xs:hidden sm:flex md:flex items-center gap-4 pr-8 w-[6  0%] h-full">
        <div className="w-[40%] relative">
          <FaSearch className="absolute top-3 left-3" size={20} />
          <input
            className="w-full h-10 pl-14 outline-none placeholder:text-[16px] font-normal rounded-3xl bg-gray-100"
            type="search"
            name="search"
            id="search"
            placeholder="Search here"
          />
        </div>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
        <button onClick={handleOpenModal} className="px-4 py-2 z-50 bg-blue-500 active:scale-90 text-white rounded-md">Add Post</button>

        <div className="relative flex justify-center cursor-pointer items-center rounded-full w-12 h-12 bg-gray-100">
          <MdForwardToInbox size={30} />
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full px-1">3</span>
        </div>

        {/* Notification Popover */}
        <div className="absolute z-10 hidden">
          <div className="bg-white shadow-lg rounded p-4">
            <h2 className="font-bold">Notifications</h2>
            <div className="mb-2 p-2 rounded bg-gray-100">
              <div className="flex items-center justify-between mb-1">
                <span className="font-bold">User:</span>
                <span>John Doe</span>
              </div>
              <div className="flex items-center justify-between mb-1">
                <span className="font-bold">Message:</span>
                <span>New order received!</span>
              </div>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>{format(parseISO("2023-01-01T12:34:56Z"), 'dd/MM/yyyy')}</span>
                <span>{format(parseISO("2023-01-01T12:34:56Z"), 'hh:mm a')}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center cursor-pointer items-center rounded-full w-12 h-12 bg-gray-100">
          <AiOutlineBulb size={30} />
        </div>

        <div className="h-14 w-14 cursor-pointer">
          {/* <Avatar alt="Dan Abrahmov" src="https://bit.ly/dan-abramov" /> */}
        </div>
      </nav>

      {/* Drawer Menu Button */}
      <div className="xxs:flex xs:flex sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden flex justify-end pr-4 w-[40%]">
        <button className="text-xl">Menu</button>
      </div>

      {/* Drawer Menu */}
      <div className="fixed top-0 right-0 h-full bg-white shadow-lg z-50 transform translate-x-full transition-transform duration-300 ease-in-out xxs:flex xs:flex sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden flex flex-col items-center gap-4 p-4">
        <button className="self-end text-2xl mb-4">×</button>
        <div className="w-full relative">
          <FaSearch className="absolute top-3 left-3" size={20} />
          <input
            className="w-full h-10 pl-14 outline-none placeholder:text-[16px] font-normal rounded-3xl bg-gray-100"
            type="search"
            name="search"
            id="search"
            placeholder="Search here"
          />
        </div>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
        <button onClick={handleOpenModal} className="px-4 py-2 bg-green-500 active:scale-90 text-white rounded-md">Add Post</button>

        <div className="relative flex justify-center cursor-pointer items-center rounded-full w-12 h-12 bg-gray-100">
          <MdForwardToInbox size={30} />
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full px-1">3</span>
        </div>

        <div className="flex justify-center cursor-pointer items-center rounded-full w-12 h-12 bg-gray-100">
          <AiOutlineBulb size={30} />
        </div>
        
        <div className="h-14 w-14 cursor-pointer">
        
        </div>
      </div>
    </header>
    </>
  );
}

export default DashboardHeaderComp;
