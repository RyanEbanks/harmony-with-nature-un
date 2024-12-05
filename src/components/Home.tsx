import React from 'react';
// import picture1 from '../images/UN2009.jpg';
// import picture2 from '../images/UN2009-2.jpg';
import '../App.css'

function Home() {
  return (
    <div className='home-container'>
      <div className='flex flex-col lg:flex-row justify-center pt-10 pb-10 overflow-hidden max-w-full bg-[#afb482] bg-opacity-80'>
        <div className='flex mx-auto lg:ml-[10%]'>
          <iframe
            width="480"
            height="315"
            src="https://www.youtube.com/embed/kkP4oFIZf8s?si=fV2vb-ZudbQMp0v4"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className='text-xl md:text-2xl lg:mr-[10%] flex font-normal text-center md:text-left lg:my-auto mx-5 md:mx-8 pt-5 lg:pt-0 lg:px-[50px]'>
          <p>
            The Harmony with Nature Knowledge Network is an online platform uniting practitioners, academics, and researchers committed to promoting an Earth-centered worldview known as Earth Jurisprudence.
            This collaborative initiative encompasses various disciplines to enhance understanding of the intrinsic value of Nature and human-Earth relationships. By drawing on Indigenous knowledge and
            interdisciplinary expertise, the Network aims to provide resources that inform policy-making and encourage societies to engage more harmoniously with the natural world.
          </p>
        </div>
      </div>
      <div className='w-full lg:w-3/4 lg:mx-auto'>
        <div className='flex flex-col lg:flex-row mt-20 pb-5'>
          <img className='home-picture-styling ml-8 lg:ml-0 mb-10 lg:mb-0' alt='United Nations Hall 2009' src='/images/UN2009.jpg'></img>
          <div className='lg:mx-5 lg:my-auto lg:pl-5 justify-center'>
            <p className='text-xl md:text-2xl font-extralight mx-8 lg:mx-0'>In 2009, the United Nations General Assembly designated April 22 as International Mother Earth Day, recognizing the critical need to promote Harmony with Nature.
              This acknowledgment underscores the importance of balancing economic, social, and environmental needs for the well-being of future generations. The UN has raised
              awareness of the devastating impacts of unsustainable consumption on our planet, including biodiversity loss, climate change, and the disruption of natural systems.
              These issues highlight the urgency of rethinking how we interact with and value Nature.
            </p>
            <button className='btn-primary home-btn-styling ml-8 lg:ml-0'>Learn More</button>
          </div>
        </div>
        <div className='flex flex-col lg:flex-row mt-5 pb-5 mb-20'>
          <img className='lg:hidden home-picture-styling ml-8 lg:ml-0 my-10 lg:my-0' alt='United Nations Hall 2009 Personnel' src='/images/UN2009-2.jpg'></img>
          <div className='flex flex-col lg:mx-5 lg:my-auto pr-5 justify-center'>
            <p className='text-xl md:text-2xl font-extralight mx-8 lg:mx-0'>The UN’s resolutions encourage a new, non-anthropocentric relationship with Nature—one that respects the Earth not as a commodity, but as a
              living entity essential to human survival. By advocating for a shift in perspectives toward sustainability, these initiatives aim to create a world where the Earth’s
              resources are preserved, and the rights of Nature are integral to promoting sustainable development. The phrase “Mother Earth” symbolizes a shared responsibility to protect
              our planet across countries and cultures.
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