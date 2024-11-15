import React, { useState } from 'react';
// import picture1 from '../images/UN2009.jpg';
// import picture2 from '../images/UN2009-2.jpg';
import '../App.css'

function Home() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const menuSelect = () => {
    setToggleMenu(!toggleMenu);
  }

  return (
    <div className='home-container'>
      <div className='flex flex-row justify-center pt-10 pb-10 overflow-hidden max-w-full bg-[#afb482] bg-opacity-80'>
        <div className='flex ml-[10%]'>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/kkP4oFIZf8s?si=fV2vb-ZudbQMp0v4"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className='text-[1.6rem] mr-[10%] flex font-normal items-center px-[50px]'>
          <p>
            The Harmony with Nature Knowledge Network is an online platform uniting practitioners, academics, and researchers committed to promoting an Earth-centered worldview known as Earth Jurisprudence.
            This collaborative initiative encompasses various disciplines to enhance understanding of the intrinsic value of Nature and human-Earth relationships. By drawing on Indigenous knowledge and
            interdisciplinary expertise, the Network aims to provide resources that inform policy-making and encourage societies to engage more harmoniously with the natural world.
          </p>
        </div>
      </div>
      <div className='w-3/4 mx-auto'>
        <div className='flex flex-row mt-20 pb-5'>
          <img className='h-[404px] w-[404px] rounded-md' alt='United Nations Hall 2009' src='/images/UN2009.jpg'></img>
          <div className='m-5 pl-5 justify-center'>
            <p className='text-[1.6rem] font-extralight'>In 2009, the United Nations General Assembly designated April 22 as International Mother Earth Day, recognizing the critical need to promote Harmony with Nature.
              This acknowledgment underscores the importance of balancing economic, social, and environmental needs for the well-being of future generations. The UN has raised
              awareness of the devastating impacts of unsustainable consumption on our planet, including biodiversity loss, climate change, and the disruption of natural systems.
              These issues highlight the urgency of rethinking how we interact with and value Nature.
            </p>
            <button className='text-white font-normal text-[1.1rem] h-[50px] w-[150px] mt-5 mr-[20px] bg-[#F0910c] border-0 hover:bg-[rgba(240,145,12,0.5)] hover:text-[rgba(255,255,255,0.9)]'>Learn More</button>
          </div>
        </div>
        <div className='flex flex-row mt-5 pb-5 mb-20'>
          <div className='flex flex-col m-5 pr-5 justify-center'>
            <p className='text-[1.6rem] font-extralight'>The UN’s resolutions encourage a new, non-anthropocentric relationship with Nature—one that respects the Earth not as a commodity, but as a
              living entity essential to human survival. By advocating for a shift in perspectives toward sustainability, these initiatives aim to create a world where the Earth’s
              resources are preserved, and the rights of Nature are integral to promoting sustainable development. The phrase “Mother Earth” symbolizes a shared responsibility to protect
              our planet across countries and cultures.
            </p>
            <button className='text-white font-normal text-[1.1rem] h-[50px] w-[150px] mt-5 mr-[20px] bg-[#F0910c] border-0 hover:bg-[rgba(240,145,12,0.5)] hover:text-[rgba(255,255,255,0.9)]'>Learn More</button>
          </div>
          <img className='h-[404px] w-[404px] rounded-md' alt='United Nations Hall 2009 Personnel' src='/images/UN2009-2.jpg'></img>
        </div>
      </div>
    </div>
  );
}

export default Home;