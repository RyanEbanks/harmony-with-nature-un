import React from 'react';
// import picture1 from '../images/UN2009.jpg';
// import picture2 from '../images/UN2009-2.jpg';
import '../App.css'

function Home() {
  return (
    <div className='home-container'>
      {/* old bg for div on line 10: bg-[#afb482] bg-opacity-80 */}
      <div className='flex flex-col lg:flex-row justify-center pt-10 pb-10 overflow-hidden max-w-full bg-[#FAF9F6]'>
        
        <div className='text-xl md:text-2xl lg:mr-[10%] flex font-normal text-center md:text-left lg:my-auto mx-5 md:mx-8 pt-5 lg:pt-0 lg:px-[50px]'>
          <p className='leading-golden lg:leading-golden-lg'>
            The Harmony with Nature Knowledge Network is an online platform uniting practitioners, academics, and researchers committed to promoting an Earth-centered worldview known as Earth Jurisprudence.
            This collaborative initiative encompasses various disciplines to enhance understanding of the intrinsic value of Nature and human-Earth relationships. By drawing on Indigenous knowledge and
            interdisciplinary expertise, the Network aims to provide resources that inform policy-making and encourage societies to engage more harmoniously with the natural world.
          </p>
        </div>
      </div>
      <div className='w-full lg:w-[80%] lg:mx-auto'>
        <div className='flex flex-col lg:flex-row mt-20 pb-5 mb-[38px]'>
          <img className='home-picture-styling ml-8 lg:ml-0 mb-10 lg:mb-0' alt='United Nations Hall 2009' src='/images/UN2009.jpg'></img>
          <div className=' flex flex-col lg:ml-5'>
            <h1 className='text-2xl md:text-5xl font-normal mx-8 lg:mx-0'>International Mother Earth Day</h1>
            <div className='w-[77%] pt-1'>
          <img src='/images/o-line.svg' alt='orange line' className='w-full h-[8px] mb-[27px] flex float-start' />
          </div>
            <p className='text-xl font-normal mx-8 lg:mx-0 leading-golden lg:leading-golden-lg'>In 2009, the United Nations established International Mother Earth Day to promote Harmony with Nature and address the urgent need for sustainable 
              practices. This initiative emphasizes the importance of balancing economic, social, and environmental needs to safeguard our planet and future generations.
            </p>
            <button className='btn-secondary home-btn-styling ml-8 lg:ml-0'>Learn More</button>
          </div>
        </div>
        <div className='flex flex-col lg:flex-row mt-5 pb-5 mb-20'>
          <img className='lg:hidden home-picture-styling ml-8 lg:ml-0 my-10 lg:my-0' alt='United Nations Hall 2009 Personnel' src='/images/UN2009-2.jpg'></img>
          <div className='flex flex-col lg:mr-5'>
          <h1 className='text-2xl md:text-5xl font-normal mx-8 lg:mx-0'>Nature as a Global Entity</h1>
          <div className='w-[62%] pt-1'>
          <img src='/images/g-line.svg' alt='green line' className='w-full h-[8px] mb-[27px] flex float-start' />
          </div>
            <p className='text-xl font-normal mx-8 lg:mx-0 leading-golden lg:leading-golden-lg'>The UN’s resolutions advocate for a non-anthropocentric relationship with Nature, respecting Earth as a living entity vital to human survival rather 
              than a commodity. These initiatives emphasize sustainability by preserving Earth's resources and integrating the rights of Nature into global development efforts, promoting shared responsibility across cultures to protect the planet.
            </p>
            <button className='btn-primary home-btn-styling ml-8 lg:ml-0'>Learn More</button>
          </div>
          <img className='home-picture-styling hidden lg:block' alt='United Nations Hall 2009 Personnel' src='/images/UN2009-2.jpg'></img>
        </div>
      </div>
    </div>
  );
}

export default Home;