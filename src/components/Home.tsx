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


  const carousel = ytVideos.map((item) => (
    <div className='home-link-container overflow-hidden'>
      <a href={`${item.link}`} target='_blank' rel='noopener noreferrer' className='block'>
        <img
          src={`/images/${item.source}.jpg`}
          alt={`${item.source}`}
          className='home-video-thumbnail-container'
        />
        <div className='home-link-container-content'>
          <h1 className='home-link-container-h1'>{item.name}</h1>
          <p className='home-link-container-p'>{item.subText}</p>
        </div>
      </a>
    </div>
  ))

  return (
    <div className='home-container'>
      <div className='thumbnail-parent-container'>
        <div ref={videoContainerRef} className='home-video-container mask-gradient'>
          {carousel}
        </div>
        <div className='button-scroll'>
          <button onClick={scrollLeft} className=''>
            <img src='/images/Chevron_Left.svg' alt='left arrow' className='w-12 h-12' />
          </button>
          <button onClick={scrollRight} className=''>
            <img src='/images/Chevron_Right.svg' alt='right arrow' className='w-12 h-12' />
          </button>
        </div>
      </div>
      {/* old bg for div on line 10: bg-[#afb482] bg-opacity-80 */}
      <div className='flex flex-col lg:flex-row justify-center pt-10 pb-10 overflow-hidden max-w-full mt-10'>

        <div className='text-lg md:text-2xl lg:w-[80%] flex flex-col font-normal text-center md:text-left lg:my-auto mx-5 md:mx-8 pt-5 lg:pt-0 px-5 lg:px-[50px]'>
          <div className='mx-auto mb-5 text-center text-2xl md:text-5xl font-light w-full lg:w-1/2 pr-4'>
            <h1 className=''>HARMONY WITH NATURE</h1>
          </div>
          <p className='font-light leading-golden lg:leading-golden-lg'>
            The Harmony with Nature Knowledge Network is an online platform uniting practitioners, academics, and researchers committed to promoting an Earth-centered worldview known as Earth Jurisprudence.
            This collaborative initiative encompasses various disciplines to enhance understanding of the intrinsic value of Nature and human-Earth relationships. By drawing on Indigenous knowledge and
            interdisciplinary expertise, the Network aims to provide resources that inform policy-making and encourage societies to engage more harmoniously with the natural world.
          </p>
        </div>
      </div>

      <div className='w-full lg:w-[80%] lg:mx-auto'>
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
  );
}

export default Home;