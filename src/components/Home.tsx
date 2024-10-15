import React, { useState } from 'react';
import picture1 from '../images/UN2009.jpg';
import picture2 from '../images/UN2009-2.jpg';
import { Link } from 'react-router-dom';
import '../App.scss'

function Home() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const menuSelect = () => {
    setToggleMenu(!toggleMenu);
  }

  return (
    <div className='home-container'>
      <div className='video-container'>
        <div className='iframe-container'>
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
        <div className='video-text'>
          <p>
          The Harmony with Nature Knowledge Network is an online platform uniting practitioners, academics, and researchers committed to promoting an Earth-centered worldview known as Earth Jurisprudence. 
          This collaborative initiative encompasses various disciplines to enhance understanding of the intrinsic value of Nature and human-Earth relationships. By drawing on Indigenous knowledge and 
          interdisciplinary expertise, the Network aims to provide resources that inform policy-making and encourage societies to engage more harmoniously with the natural world.
          </p>
        </div>
      </div>
      <div className='home-info'>
        <img className='img-size-1' alt='United Nations Hall 2009' src={picture1}></img>
        <div className='first-p-container'>
          <p className='home-base-txt'>In 2009, the United Nations General Assembly designated April 22 as International Mother Earth Day, recognizing the critical need to promote Harmony with Nature.
            This acknowledgment underscores the importance of balancing economic, social, and environmental needs for the well-being of future generations. The UN has raised
            awareness of the devastating impacts of unsustainable consumption on our planet, including biodiversity loss, climate change, and the disruption of natural systems.
            These issues highlight the urgency of rethinking how we interact with and value Nature.
          </p>
          <button className='home-btn btn'>Learn More</button>
        </div>
      </div>
      <div className='home-info'>
        <div className='second-p-container'>
          <p className='home-base-txt'>The UN’s resolutions encourage a new, non-anthropocentric relationship with Nature—one that respects the Earth not as a commodity, but as a
            living entity essential to human survival. By advocating for a shift in perspectives toward sustainability, these initiatives aim to create a world where the Earth’s
            resources are preserved, and the rights of Nature are integral to promoting sustainable development. The phrase “Mother Earth” symbolizes a shared responsibility to protect
            our planet across countries and cultures.
          </p>
          <button className='home-btn btn'>Learn More</button>
        </div>
        <img className='img-size-2' alt='United Nations Hall 2009 Personnel' src={picture2}></img>
      </div>
    </div>
  );
}

export default Home;
