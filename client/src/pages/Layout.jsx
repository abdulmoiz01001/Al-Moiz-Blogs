import React from 'react'
import HeaderComp from '../components/HeaderComp'
import { Outlet } from 'react-router-dom'
import FooterComp from '../components/FooterComp'

const Layout = () => {
  return (
    <>
    <HeaderComp />
    <Outlet />
    <FooterComp />
    </>
  )
}

export default Layout