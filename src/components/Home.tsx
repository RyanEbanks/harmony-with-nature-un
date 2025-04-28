import React, { useRef } from 'react';
// import picture1 from '../images/UN2009.jpg';
// import picture2 from '../images/UN2009-2.jpg';
import '../App.css'
import '../assets/home.css';
import ytVideos from '../videos';

function Home() {
  const videoContainerRef = useRef<HTMLDivElement | null>(null);

  function scrollLeft() {
    videoContainerRef.current?.scrollBy({ left: -200, behavior: "smooth" });
  }

  function scrollRight() {
    videoContainerRef.current?.scrollBy({ left: 200, behavior: "smooth" });
  }


  const carousel = ytVideos.map((item) => (
    <div className="home-link-container overflow-hidden">
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
      <div className="thumbnail-parent-container">
        <div ref={videoContainerRef} className='home-video-container mask-gradient'>
        {carousel}
        </div>
        <div className="button-scroll">
          <button onClick={scrollLeft} className=''>
            <img src="/images/Chevron_Left.svg" alt="left arrow" className='w-12 h-12' />
          </button>
          <button onClick={scrollRight} className=''>
            <img src="/images/Chevron_Right.svg" alt="right arrow" className='w-12 h-12' />
          </button>
        </div>
      </div>
      {/* old bg for div on line 10: bg-[#afb482] bg-opacity-80 */}
      <div className='flex flex-col lg:flex-row justify-center pt-10 pb-10 overflow-hidden max-w-full'>

        <div className='text-lg md:text-2xl lg:w-[80%] flex flex-col font-normal text-center md:text-left lg:my-auto mx-5 md:mx-8 pt-5 lg:pt-0 px-5 lg:px-[50px]'>
          <div className='ml-auto my-20 text-end text-2xl md:text-5xl font-light border-r-8 border-[#F0910c] w-full lg:w-1/2 pr-4'>
            <h1 className=''>HARMONY WITH</h1>
            <h1 className=''>NATURE</h1>
          </div>
          <p className='font-light leading-golden lg:leading-golden-lg'>
            The Harmony with Nature Knowledge Network is an online platform uniting practitioners, academics, and researchers committed to promoting an Earth-centered worldview known as Earth Jurisprudence.
            This collaborative initiative encompasses various disciplines to enhance understanding of the intrinsic value of Nature and human-Earth relationships. By drawing on Indigenous knowledge and
            interdisciplinary expertise, the Network aims to provide resources that inform policy-making and encourage societies to engage more harmoniously with the natural world.
          </p>
        </div>
      </div>
      <div className='w-full lg:w-[80%] lg:mx-auto '>
        <div className='flex flex-col lg:flex-row mt-[160px] pb-5 mb-[38px]'>
          <div className='pr-8 flex flex-col lg:mr-5 w-1/2'>
            <div className='text-center lg:text-left text-2xl md:text-5xl font-light mx-8 lg:mx-0 border-b-[6px] border-[#40916C] pb-2 mb-[27px] w-[85%]'>
              <h1>International Mother</h1>
              <h1>Earth Day</h1>
            </div>
            <img className='lg:hidden flex mx-auto lg:mx-0 home-picture-styling lg:ml-0 mb-10 lg:mb-0' alt='United Nations Hall 2009' src='/images/UN2009.jpg'></img>
            <p className='text-center lg:text-left text-xl font-normal mx-8 md:mx-auto lg:mx-0 leading-golden lg:leading-golden-lg'>In 2009, the United Nations established International Mother Earth Day to promote Harmony with Nature and address the urgent need for sustainable
              practices. This initiative emphasizes the importance of balancing economic, social, and environmental needs to safeguard our planet and future generations.
            </p>
            <button disabled className='btn-primary home-btn-styling mx-auto lg:ml-0 cursor-not-allowed'>Learn More</button>
          </div>
          <img className='hidden lg:flex home-picture-styling ml-8 lg:ml-0 mb-10 lg:mb-0 w-[40%]' alt='United Nations Hall 2009' src='/images/UN2009.jpg'></img>
        </div>
        <div className='flex flex-col lg:flex-row mt-[160px] pb-5 mb-20'>
          <img className='home-picture-styling hidden lg:block' alt='United Nations Hall 2009 Personnel' src='/images/UN2009-2.jpg'></img>
          <div className='pl-8 flex flex-col lg:ml-5'>
            <h1 className='text-center lg:text-left text-2xl md:text-5xl font-light mx-8 lg:mx-0 border-b-[6px] border-[#F0910c] pb-2 mb-[27px] w-[85%]'>Nature as a Global Entity</h1>
            <img className='lg:hidden flex mx-auto lg:mx-0 home-picture-styling lg:ml-0 mb-10 lg:mb-0' alt='United Nations Hall 2009 Personnel' src='/images/UN2009-2.jpg'></img>
            <p className='text-center lg:text-left text-xl font-normal mx-8 lg:mx-0 leading-golden lg:leading-golden-lg'>The UN’s resolutions advocate for a non-anthropocentric relationship with Nature, respecting Earth as a living entity vital to human survival rather
              than a commodity. These initiatives emphasize sustainability by preserving Earth's resources and integrating the rights of Nature into global development efforts, promoting shared responsibility across cultures to protect the planet.
            </p>
            <button disabled className='btn-secondary home-btn-styling mx-auto lg:ml-0 cursor-not-allowed'>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;