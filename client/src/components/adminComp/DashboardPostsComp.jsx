import React, { useEffect, useState } from 'react';
import BlogModal from './BlogModal';
import { useAppStore } from '../../store';
import { apiClient } from '../../lib/api-client';
const DashboardPostsComp = () => {

  const [posts, setPosts] = useState([]);
  // Sample blog posts data
  // const posts = [
  //   {
  //     id: 1,
  //     title: 'Exploring the Great Barrier Reef',
  //     subtitle: 'A Dive into Nature',
  //     image: 'https://source.unsplash.com/2H8WcFuxZ0I/720x400',
  //     description: 'Discover the underwater paradise that is the Great Barrier Reef, a UNESCO World Heritage site.',
  //   },
  //   {
  //     id: 2,
  //     title: 'The Mysteries of Stonehenge',
  //     subtitle: 'An Ancient Enigma',
  //     image: 'https://source.unsplash.com/QDPEsF0O19M/720x400',
  //     description: 'Unravel the secrets of Stonehenge, one of the most famous prehistoric monuments in the world.',
  //   },
  //   {
  //     id: 3,
  //     title: 'The Wonders of the Amazon Rainforest',
  //     subtitle: 'A Journey through Biodiversity',
  //     image: 'https://source.unsplash.com/mgM7yn8JtP8/720x400',
  //     description: 'Explore the rich biodiversity of the Amazon, home to countless species and indigenous cultures.',
  //   },
  //   {
  //     id: 4,
  //     title: 'The Beauty of Kyoto',
  //     subtitle: 'A Cultural Heritage',
  //     image: 'https://source.unsplash.com/LlGclSHEcQo/720x400',
  //     description: 'Experience the stunning temples and traditional tea houses of Kyoto, a city steeped in history.',
  //   },
  // ];
 
  const getBlogs = async () =>{
    try {
       const response = await apiClient.get('/api/blog/get');
       console.log('response', response);
       console.log('Blogs fetched:', response.data);
       setPosts(response.data);
    } catch (error) {
       console.log('error', error);
    }
 }

 useEffect(() => {
    getBlogs();
 }, []);

//   const [isModalOpen, setModalOpen] = useState(false);


  const { modalOpen , setOpenModalState } = useAppStore(state => state);
 console.log('openModalState', modalOpen);

 


  const handleCloseModal = () => {
    // setModalOpen(false);
    setOpenModalState(false);

  };



  return (
    <div className="p-6 w-[75%]">
      <h1 className="text-2xl font-bold mb-4">Dashboard Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {posts.map((post) => (
          <div key={post.id} className="bg-white shadow-md rounded-lg p-4 transition-transform transform hover:scale-105">
            <img src={post.image} alt={post.title} className="w-full h-40 object-cover rounded-t-lg" />
            <h2 className="text-lg font-semibold mt-2">{post.title}</h2>
            <h3 className="text-sm text-gray-600">{post.subtitle}</h3>
            <p className="text-gray-800 mt-1">{post.description}</p>
            <button className="mt-2 text-blue-500 hover:underline">
              Read More
            </button>
          </div>
        ))}
      </div>
      <BlogModal
      getBlogs={getBlogs}
        isOpen={modalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default DashboardPostsComp;
