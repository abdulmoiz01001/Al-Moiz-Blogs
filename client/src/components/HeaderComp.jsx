import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useAppStore } from '../store'
import useSearch from '../hooks/useSearch'

const HeaderComp = () => {
  const handleChange = (value) => {
    // useSearch(value)
  }

  const { setSearchTerm } = useAppStore(state => state)
  let navLinks = [
    {
      title: 'Home',
      slug: '/'
    },
    {
      title: 'About',
      slug: '/about'
    },
    {
      title: 'Services',
      slug: '/services'
    },
    {
      title: 'Contact',
      slug: '/contact'
    },
  ]
  return (
    <>
      <div className='w-full h-[10vh] sticky top-0 bg-white shadow-2xl shadow-blue-100  flex justify-between items-center' >
        <div className='w-[30%] flex items-center justify-center overflow-hidden' >
        < h1 className = 'text-4xl font-bold text-blue-500' > Al Moiz Blogs </h1>
        </div>
        <nav className='w-[40%]' >
          <ul className='flex gap-8 justify-center items-center' >
            {
              navLinks.map((link, index) => (
                <li key={index} className='active:scale-90' >
                  <Link href={link.slug} className='text-blue-500 text-lg' >{link.title}</Link>
                </li>
              ))
            }
            <Link to={"/admin"} >
          <button  className='bg-blue-500 active:scale-90 text-white px-4 py-2 rounded-md' >Admin</button>
            </Link>
          </ul>
        </nav>
        <div className='w-[20%]' >
          <div className="relative flex justify-start gap-2 items-center ">
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => handleChange(e.target.value)}
              className="border-2 border-blue-500 rounded-md px-2 py-1"
            />
            <button className=" active:scale-90 bg-blue-500 text-white rounded-md flex items-center">
              <FaSearch className="m-2 mx-4" />
         
            </button>
          </div>


        </div>

      </div>
    </>
  )
}

export default HeaderComp