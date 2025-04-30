import React, { useRef } from 'react';
// import picture1 from '../images/UN2009.jpg';
// import picture2 from '../images/UN2009-2.jpg';
import '../App.css'
import '../assets/home.css';
import ytVideos from '../videos';

function Home() {
  const videoContainerRef = useRef<HTMLDivElement | null>(null);

  function scrollLeft() {
    videoContainerRef.current?.scrollBy({ left: -200, behavior: 'smooth' });
  }

  function scrollRight() {
    videoContainerRef.current?.scrollBy({ left: 200, behavior: 'smooth' });
  }


  return (
    <div className='home-container'>

      <div className="scroll-container bg-[#EFEFEE] pt-10">
      {/* Scrollable container */}
      <div ref={videoContainerRef}
        className="flex space-x-6 overflow-x-auto scrollbar-hide px-2 py-6 relative hide-scrollbar w-[80%] mx-auto"
      >
        {/* Video cards */}
        {ytVideos.map((item, i) => (
          <a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-[280px] max-w-[280px] bg-[#F9F9F9] rounded-xl overflow-hidden shadow-md hover:scale-[1.03] transition duration-300"
          >
            <img
              src={`/images/${item.source}.jpg`}
              alt={item.source}
              className="w-full h-44 object-cover"
            />
            <div className="p-4">
              <h2 className="text-[#40916C] font-semibold text-lg mb-1">{item.name}</h2>
              <p className="text-sm">{item.subText}</p>
            </div>
          </a>
        ))}
      </div>

      {/* Navigation buttons */}
      <div className="flex flex-row items-center justify-center space-x-16 mt-8 arrow-container pb-10">
        <div className="">
          <button onClick={scrollLeft} className="p-2 rounded-full hover:bg-white">
            <img src="/images/Chevron_Left.svg" alt="Scroll left" className="w-6 h-6" />
          </button>
        </div>
        <div className="">
          <button onClick={scrollRight} className="p-2 rounded-full hover:bg-white">
            <img src="/images/Chevron_Right.svg" alt="Scroll right" className="w-6 h-6" />
          </button>
        </div>
      </div>

      </div>

      {/* old bg for div on line 10: bg-[#afb482] bg-opacity-80 */}

      <div className="home-sub-container w-[80%] mx-auto mt-20">
        <div className='flex flex-col lg:flex-row justify-center pt-10 pb-10 overflow-hidden max-w-full mt-10'>

          <div className='text-lg md:text-2xl flex flex-col font-normal text-center md:text-left lg:my-20 mx-5 md:mx-8 pt-5 lg:pt-0 px-5 lg:px-[50px]'>
            <div className='mx-auto mb-5 text-center text-2xl md:text-5xl font-light w-full lg:w-1/2 pr-4'>
              <h1 className='mb-4 border-b-[6px] border-[#F0910c]'>HARMONY WITH NATURE</h1>
            </div>
            <p className='text-sm md:text-lg lg:text-xl text-left md:text-center font-normal leading-golden lg:leading-golden-lg'>
              The Harmony with Nature Knowledge Network is an online platform uniting practitioners, academics, and researchers committed to promoting an Earth-centered worldview known as Earth Jurisprudence.
              This collaborative initiative encompasses various disciplines to enhance understanding of the intrinsic value of Nature and human-Earth relationships. By drawing on Indigenous knowledge and
              interdisciplinary expertise, the Network aims to provide resources that inform policy-making and encourage societies to engage more harmoniously with the natural world.
            </p>
          </div>
        </div>

        <div className='w-full'>
          <div className='home-content-parent-container my-40'>
            <div className="home-content-child-container flex flex-col lg:flex-row ">
              <div className='home-image flex-1'>
                <img className='home-picture-styling mx-auto lg:mr-auto lg:ml-0 mb-5 lg:mb-0' alt='United Nations Hall 2009 Personnel' src='/images/UN2009.jpg'></img>
              </div>
              <div className='home-content flex-1'>
                <h1 className='mx-auto lg:mx-0 w-3/4 text-center lg:text-left text-2xl md:text-5xl font-light border-b-[6px] border-[#40916C] pb-2 mb-[27px]'>International Mother Earth Day</h1>
                <p className='md:w-3/4 lg:w-full text-center lg:text-left text-sm md:text-lg lg:text-xl font-normal mx-8 md:mx-auto lg:mx-0 leading-golden lg:leading-golden-lg'>In 2009, the United Nations established International Mother Earth Day to promote Harmony with Nature and address the urgent need for sustainable
                  practices. This initiative emphasizes the importance of balancing economic, social, and environmental needs to safeguard our planet and future generations.
                </p>
                <button disabled className='hidden lg:block btn-primary home-btn-styling cursor-not-allowed'>Learn More</button>
              </div>
            </div>
          </div>

          <div className='home-content-parent-container mb-40'>
            <div className="home-content-child-container flex flex-col-reverse lg:flex-row ">
              <div className='home-content flex-1'>
                <h1 className='mx-auto lg:mx-0 w-3/4 text-center lg:text-left text-2xl md:text-5xl font-light border-b-[6px] border-[#F0910c] pb-2 mb-[27px]'>Nature as a Global Entity</h1>
                <p className='md:w-3/4 lg:w-full text-center lg:text-left text-sm md:text-lg lg:text-xl font-normal mx-8 md:mx-auto lg:mx-0 leading-golden lg:leading-golden-lg'>The UN’s resolutions advocate for a non-anthropocentric relationship with Nature, respecting Earth as a living entity vital to human survival rather
                  than a commodity. These initiatives emphasize sustainability by preserving Earth's resources and integrating the rights of Nature into global development efforts, promoting shared responsibility across cultures to protect the planet.
                </p>
                <button disabled className='hidden lg:block btn-secondary home-btn-styling cursor-not-allowed'>Learn More</button>
              </div>
              <div className='home-image flex-1'>
                <img className='home-picture-styling mx-auto lg:ml-auto lg:mr-0 mb-5 lg:mb-0' alt='United Nations Hall 2009 Personnel' src='/images/UN2009-2.jpg'></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;