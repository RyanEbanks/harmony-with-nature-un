import React, { useState } from 'react';
import picture1 from '../images/UN2009.jpg';
import picture2 from '../images/UN2009-2.jpg';
import { Link } from 'react-router-dom';
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
        <div className='text-[1.6rem] mr-[10%] flex font-normal items-center px-[50px] text-[#4A4A4A]'>
          <p>
          The Harmony with Nature Knowledge Network is an online platform uniting practitioners, academics, and researchers committed to promoting an Earth-centered worldview known as Earth Jurisprudence. 
          This collaborative initiative encompasses various disciplines to enhance understanding of the intrinsic value of Nature and human-Earth relationships. By drawing on Indigenous knowledge and 
          interdisciplinary expertise, the Network aims to provide resources that inform policy-making and encourage societies to engage more harmoniously with the natural world.
          </p>
        </div>
      </div>
      <div className='flex flex-row mt-5 pb-5'>
        <img className='h-[404px] w-[404px] border-2 border-red-500 rounded-md ml-[10%]' alt='United Nations Hall 2009' src={picture1}></img>
        <div className='flex flex-col m-5 px-5 border-2 border-green-500 justify-center mr-[10%]'>
          <p className='text-[1.6rem] font-extralight'>In 2009, the United Nations General Assembly designated April 22 as International Mother Earth Day, recognizing the critical need to promote Harmony with Nature.
            This acknowledgment underscores the importance of balancing economic, social, and environmental needs for the well-being of future generations. The UN has raised
            awareness of the devastating impacts of unsustainable consumption on our planet, including biodiversity loss, climate change, and the disruption of natural systems.
            These issues highlight the urgency of rethinking how we interact with and value Nature.
          </p>
          <button className='bg-[#F0910C] border-0 text-white px-5 py-2.5 max-h-[50px] hover:bg-[#F0910C] hover:bg-opacity-50 hover:text-white/90'>Learn More</button>
        </div>
      </div>
      <div className='flex flex-row mt-5 pb-5'>
        <div className='flex flex-col m-5 mr-[10%] px-5 border-2 border-green-500 justify-center ml-[10%]'>
          <p className='text-[1.6rem] font-extralight'>The UN’s resolutions encourage a new, non-anthropocentric relationship with Nature—one that respects the Earth not as a commodity, but as a
            living entity essential to human survival. By advocating for a shift in perspectives toward sustainability, these initiatives aim to create a world where the Earth’s
            resources are preserved, and the rights of Nature are integral to promoting sustainable development. The phrase “Mother Earth” symbolizes a shared responsibility to protect
            our planet across countries and cultures.
          </p>
          <button className='text-[1.5rem] max-w-[200px] bg-[#F0910C] border-0 text-white px-5 py-2.5 max-h-[50px] hover:bg-[#F0910C] hover:bg-opacity-50 hover:text-white/90'>Learn More</button>
        </div>
        <img className='h-[404px] w-[404px] border-2 border-red-500 rounded-md mr-[10%]' alt='United Nations Hall 2009 Personnel' src={picture2}></img>
      </div>
    </div>
  );
}

export default Home;
