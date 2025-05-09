import React, { useRef } from 'react';
// import picture1 from '../images/UN2009.jpg';
// import picture2 from '../images/UN2009-2.jpg';
import '../App.css'
import '../assets/home.css';
import ytVideos from '../videos';
import ContentSection from './ui/content-section';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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

      <div className='scroll-container pt-10'>
        {/* Scrollable container */}
        <div ref={videoContainerRef}
          className='flex space-x-6 overflow-x-auto scrollbar-hide px-2 py-6 relative hide-scrollbar w-[80%] mx-auto'
        >
          {/* Video cards */}
          {ytVideos.map((item, i) => (
            <a
              key={i}
              href={item.link}
              target='_blank'
              rel='noopener noreferrer'
              className='min-w-[280px] max-w-[280px] overflow-hidden border-[#EFEFEF] border-[0.5px] transition duration-300'
            >
              <img
                src={`/images/${item.source}.jpg`}
                alt={item.source}
                className='w-full h-44 object-cover'
              />
              <div className='p-4'>
                <h2 className='text-[#40916C] font-semibold text-lg mb-1'>{item.name}</h2>
                <p className='text-sm'>{item.subText}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Navigation buttons */}
        <div className='flex flex-row items-center justify-center space-x-16 mt-8 arrow-container'>
            {/* <button onClick={scrollLeft} className='p-2 rounded-full hover:bg-white'>
              <img src='/images/Chevron_Left.svg' alt='Scroll left' className='w-6 h-6' />
            </button>
          </div>
          <div className=''>
            <button onClick={scrollRight} className='p-2 rounded-full hover:bg-white'>
              <img src='/images/Chevron_Right.svg' alt='Scroll right' className='w-6 h-6' />
            </button> */}
                <Button
                onClick={scrollLeft}
                variant="outline"
                size="icon"
                className="-translate-y-1/2 rounded-full bg-white/80 shadow-md"
              >
                <ChevronLeft className="h-5 w-5" />
                <span className="sr-only">Previous</span>
              </Button>
              <Button
              onClick={scrollRight}
                variant="outline"
                size="icon"
                className="-translate-y-1/2 rounded-full bg-white/80 shadow-md"
              >
                <ChevronRight className="h-5 w-5" />
                <span className="sr-only">Next</span>
              </Button>
        </div>

      </div>

      {/* old bg for div on line 10: bg-[#afb482] bg-opacity-80 */}

      <div className='home-sub-container-new w-full mx-auto pt-12 md:pt-16'>
        <div className='bg-[#f6f6f7] flex py-12 md:py-16 w-full'>
          <div className='w-[90%] md:w-[60%] mx-auto text-center'>
            <h2 className='text-3xl font-bold tracking-tight text-stone-800 sm:text-4xl'>HARMONY WITH NATURE</h2>
            <div className='mt-2 h-1 w-32 bg-amber-500 mx-auto mb-6' />
            <p className='mt-6 text-base md:text-lg leading-8 text-stone-700'>
              The Harmony with Nature Knowledge Network is an online platform uniting practitioners, academics, and
              researchers committed to promoting an Earth-centered worldview known as Earth Jurisprudence. This
              collaborative initiative encompasses various disciplines to enhance understanding of the intrinsic value
              of Nature and human-Earth relationships. By drawing on Indigenous knowledge and interdisciplinary
              expertise, the Network aims to provide resources that inform policy-making and encourage societies to
              engage more harmoniously with the natural world.
            </p>
          </div>
        </div>

        {/* International Mother Earth Day Section */}
        <div className='w-[80%] mx-auto'>
          <ContentSection
            title='International Mother Earth Day'
            imageSrc='/images/UN2009.jpg'
            imageAlt='United Nations General Assembly Hall'
            content='In 2009, the United Nations established International Mother Earth Day to promote Harmony with Nature and address the urgent need for sustainable practices. This initiative emphasizes the importance of balancing economic, social, and environmental needs to safeguard our planet and future generations.'
            imagePosition='left'
          />

          {/* Nature as Global Entity Section */}
          <ContentSection
            title='Nature as a Global Entity'
            imageSrc='/images/UN2009-2.jpg'
            imageAlt='United Nations representatives'
            content="The UN's resolutions advocate for a non-anthropocentric relationship with Nature, respecting Earth as a living entity vital to human survival rather than a commodity. These initiatives emphasize sustainability by preserving Earth's resources and integrating the rights of Nature into global development efforts, promoting shared responsibility across cultures to protect the planet."
            imagePosition='right'
          />
        </div>

          {/* One Ocean Section */}
         <div className="w-full py-12 md:py-16 px-4 md:px-6 bg-blue-50">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <img
                src="/images/jeremy-bishop.jpg"
                alt="Taken by Jeremy Bishop"
                width={800}
                height={600}
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-stone-800">Get Involved</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl text-stone-700">
                    Check out 1Ocean Fund our other initiative.
                  </p>
                </div>
                <ul className="grid gap-2 text-stone-700">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-blue-600" />
                    <span>Supports ocean conservation through diving and research.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-blue-600" />
                    <span>Raises public awareness with underwater exploration.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-blue-600" />
                    <span>Engages communities in ocean protection efforts.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-blue-600" />
                    <span>Funds innovative marine research projects.</span>
                  </li>
                </ul>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-blue-500 hover:bg-blue-600">
                    <a href='https://1oceanfund.org/' target='_blank' rel='noopener noreferrer'>View Site</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

      </div>
    </div>
  );
}

export default Home;