import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Adjust based on your routing library
import { apiClient } from '../lib/api-client';
import { useAppStore } from '../store';
import useSearch from '../hooks/useSearch';

const BlogsSectionComp = () => {

  const [ blogData, setBlogData ] = useState([]);

  const { setSearchData , filteredData } = useAppStore(state => state);


  

   const getBlogs = async () =>{
      try {
        if(filteredData.length > 0){
          setBlogData(filteredData);
          return;
        }
         const response = await apiClient.get('/api/blog/get');
         console.log('response', response);
         console.log('Blogs fetched:', response.data);
         setBlogData(response.data);
         setSearchData(response.data);
      } catch (error) {
         console.log('error', error);
      }
   }
 

   useEffect(() => {
      getBlogs();
    }, [filteredData]);

   useEffect(() => {
      getBlogs();
   }, []);

    
   
      

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Our Latest Blog Posts</h1>
            <div className="h-1 w-20 bg-blue-500 rounded"></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            A haven for the effortlessly cool. Dive into a world where cardigans meet tote bags, and hexagons inspire
            more than just geometry. Here, we celebrate the offbeat – think Brooklyn rooftops, asymmetrical lines, and
            farm-to-table bites. Join us as we explore the layers of urban living, from subway-tiled cafés to heirloom
            recipes, and the art of humblebragging your favorite food truck finds. Whether you're a jianbing enthusiast
            or a man-bun philosopher, there's something here you probably haven’t heard of... yet.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {blogData.slice(0, 8).map((blog, index) => (
            <div key={index} className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg hover:opacity-90 transition-opacity duration-300">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={blog.image}
                  alt="content"
                />
                <h3 className="tracking-widest text-blue-500 text-xs font-medium title-font">{blog.subtitle}</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{blog.title}</h2>
                <p className="leading-relaxed text-base">
                  {blog.description.length > 100
                    ? `${blog.description.slice(0, 100)}... `
                    : blog.description}
                  <Link
                    to={`/blog/${blog.title.replace(/\s+/g, '-').toLowerCase()}`}
                    className="text-blue-500 hover:underline"
                  >
                    Read More
                  </Link>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsSectionComp;
