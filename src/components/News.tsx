import React from 'react'

const News = () => {
  return (
    <div>
      <h1 className='my-10 text-center text-4xl'>All Posts</h1>
      <div className='main-post w-3/4 mx-auto flex flex-row relative border border-[#B4B4B4]'>
        <div className='flex w-[60%]'>
        <img className='w-full h-full' alt='picture of a lagoon' src='../images/new-placeholder/the-lagoon.webp' />
        </div>
        <div className='flex flex-col w-[40%] p-5'>
          <p className='font-extralight text-sm'>Posted by: Kevin Hill</p>
          <p className='font-extralight text-sm'>Date: December 9, 2024</p>
        <h1 className='text-4xl font-semibold pt-10'>The Lagoon Of Hope</h1>
        <p className='pt-5 font-light'>Coral reffs could disappear before 2050. The temperature of our oceans is increasing...</p>
        <div className='pt-20 border-b border-[#B4B4B4] w-[98%] mr-5'></div>
        <a className='pt-5 font-light'>Click here to learn more -&#8250;</a>
        </div>
      </div>

      <div className='flex flex-row flex-wrap'>

      <div className='main-post m-10 w-[40%] mx-auto flex flex-row relative border border-[#B4B4B4]'>
        <div className='flex w-[45%]'>
        <img className='w-full h-full object-fill' alt='picture of a lagoon' src='../images/new-placeholder/Cap-Roux.webp' />
        </div>
        <div className='flex flex-col w-[55%] p-5'>
          <p className='font-extralight text-sm'>Posted by: Bob Brown</p>
          <p className='font-extralight text-sm'>Date: December 7, 2024</p>
        <h1 className='text-4xl font-semibold pt-10'>Cap Roux</h1>
        <p className='pt-5 font-light'>The Cap Roux Fishing Cantonment is a 450 hectare marine protected area....</p>
        <div className='pt-20 border-b border-[#B4B4B4] w-[98%] mr-5'></div>
        <a className='pt-5 font-light'>Click here to learn more -&#8250;</a>
        </div>
      </div>

      <div className='main-post m-10 w-[40%] mx-auto flex flex-row relative border border-[#B4B4B4]'>
        <div className='flex w-[45%]'>
        <img className='w-full h-full object-fill' alt='picture of a lagoon' src='../images/new-placeholder/Pelagos.webp' />
        </div>
        <div className='flex flex-col w-[55%] p-5'>
          <p className='font-extralight text-sm'>Posted by: Mark White</p>
          <p className='font-extralight text-sm'>Date: December 6, 2024</p>
        <h1 className='text-4xl font-semibold pt-10'>Pelagos</h1>
        <p className='pt-5 font-light'>Like many marine species, cetaceans are strongly impacted by human activity...</p>
        <div className='pt-20 border-b border-[#B4B4B4] w-[98%] mr-5'></div>
        <a className='pt-5 font-light'>Click here to learn more -&#8250;</a>
        </div>
      </div>

      <div className='main-post m-10 w-[40%] mx-auto flex flex-row relative border border-[#B4B4B4]'>
        <div className='flex w-[45%]'>
        <img className='w-full h-full object-fill' alt='picture of a lagoon' src='../images/new-placeholder/Entrecasteaux.webp' />
        </div>
        <div className='flex flex-col w-[55%] p-5'>
          <p className='font-extralight text-sm'>Posted by: John Doe</p>
          <p className='font-extralight text-sm'>Date: December 5, 2024</p>
        <h1 className='text-4xl font-semibold pt-10'>Entrecasteaux</h1>
        <p className='pt-5 font-light'>In the far west of the Pacific Ocean, between the Australian coasts and the Vanuatu archipelago...</p>
        <div className='pt-20 border-b border-[#B4B4B4] w-[98%] mr-5'></div>
        <a className='pt-5 font-light'>Click here to learn more -&#8250;</a>
        </div>
      </div>

      </div>
    </div>
  )
}

export default News;