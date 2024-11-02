import React from 'react'

const HeroComp = () => {
  return (
    <>
    <div className='w-full h-full py-8 flex justify-center items-center' >
        <div className='w-[80%] h-full flex justify-between items-center ' >
           <div className='w-[50%] h-full flex flex-col justify-center gap-8 items-start ' >
             <p className='text-4xl font-bold' >Welcome to our website</p>
             <h1 className='text-6xl font-bold' >We are Blog Writers</h1>
                <p className='text-2xl' >We are a team of talented Content Creators making Blogs with Best Practices</p>
                <div className='flex w-full gap-4' >
                    <button className='px-4 py-2 active:scale-90 bg-blue-500 text-white rounded-md' >Get Started</button>
                    <button className='px-4 py-2 active:scale-90 bg-white text-blue-500 rounded-md' > Learn More </button>
                </div>
           </div>
           <div className='w-[50%] h-full flex  justify-center items-center ' >
            <img src='/blog-bg.png' alt='hero' className=' rounded-3xl object-cover' />
           </div>
        </div>

    </div>
    </>
  )
}

export default HeroComp