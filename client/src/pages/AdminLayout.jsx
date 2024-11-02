import React from 'react'
import DashboardHeaderComp from '../components/adminComp/DashboardHeaderComp'
import DashboardSidebar from '../components/adminComp/DashboardSidebar'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <>
    <div className='w-full h-full flex flex-col justify-start items-start' >
     <DashboardHeaderComp />
     <div className='w-full h-full flex justify-start items-start' >
      <DashboardSidebar />
       <Outlet />
     </div>

    </div>
    </>
  )
}

export default AdminLayout