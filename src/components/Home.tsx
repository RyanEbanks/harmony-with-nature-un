import React from 'react';
// import picture1 from '../images/UN2009.jpg';
// import picture2 from '../images/UN2009-2.jpg';
import '../App.css'
import '../index.css';

function Home() {
  return (
    <div className='home-container'>
      <div className='pl-[50px] md:pl-[210px] py-10 flex overflow-x-scroll gap-4 bg-[#FAF9F6]'>
        <div className='home-link-container overflow-hidden'>
          <a href='https://www.youtube.com/watch?v=A7OPXQA-2GI' target='_blank' rel='noopener noreferrer' className='block'>
            <img 
              src='/images/general-assembly.jpg' 
              alt='general-assembly' 
              className='home-video-thumbnail-container' 
            />
            <div className='home-link-container-content'>
              <h1 className='home-link-container-h1'>Sonia Guajajara</h1>
              <p className='home-link-container-p'>Dialogue of the General Assembly on Harmony with Nature 2023</p>
            </div>
          </a>
        </div>
        <div className='home-link-container overflow-hidden'>
          <a href='https://www.youtube.com/watch?v=FeU4hRWg_SU' target='_blank' rel='noopener noreferrer'>
            <img 
              src='/images/camila-zarate.jpg' 
              alt='camila-zarate' 
              className='home-video-thumbnail-container' 
            />
            <div className='home-link-container-content'>
              <h1 className='home-link-container-h1'>Camila Zarate</h1>
              <p className='home-link-container-p'>Commission Rights of Nature 2022</p>
            </div>
          </a>
        </div>
        <div className='home-link-container overflow-hidden'>
          <a href='https://www.youtube.com/watch?v=h3D-n1zq1bc' target='_blank' rel='noopener noreferrer'>
            <img 
              src='/images/frank-tumusiime.jpg' 
              alt='franktumusiime' 
              className='home-video-thumbnail-container' 
            />
            <div className='home-link-container-content'>
              <h1 className='home-link-container-h1'>Frank Tumusiime</h1>
              <p className='home-link-container-p'>UNGA Dialogue on Harmony with Nature 2022</p>
            </div>
          </a>
        </div>
        <div className='home-link-container overflow-hidden'>
          <a href='https://www.youtube.com/watch?v=VSuvB_7O59k' target='_blank' rel='noopener noreferrer'>
            <img 
              src='/images/general-assembly-nigeria.jpg' 
              alt='general-assembly-nigeria' 
              className='home-video-thumbnail-container' 
            />
            <div className='home-link-container-content'>
              <h1 className='home-link-container-h1'>Nigeria UN</h1>
              <p className='home-link-container-p'>General Assembly Nigeria on Harmony with Nature 2023</p>
            </div>
          </a>
        </div>
        <div className='home-link-container overflow-hidden'>
          <a href='https://www.youtube.com/watch?v=ySrmWHf1sQo' target='_blank' rel='noopener noreferrer'>
            <img 
              src='/images/manjeri-subin.jpg' 
              alt='manjeri-subin.jpg' 
              className='home-video-thumbnail-container' 
            />
            <div className='home-link-container-content'>
              <h1 className='home-link-container-h1'>Manjeri Subin</h1>
              <p className='home-link-container-p'>UN GA Dialogue on Harmony with Nature 2022</p>
            </div>
          </a>
        </div>
        <div className='home-link-container overflow-hidden'>
          <a href='https://www.youtube.com/watch?v=KZD9oPr1_do' target='_blank' rel='noopener noreferrer'>
            <img 
              src='/images/general-assembly-spain.jpg' 
              alt='general-assembly-spain' 
              className='home-video-thumbnail-container' 
            />
            <div className='home-link-container-content'>
              <h1 className='home-link-container-h1'>Spain UN</h1>
              <p className='home-link-container-p'>General Assembly Spain on Harmony with Nature 2023</p>
            </div>
          </a>
        </div>
        <div className='home-link-container overflow-hidden'>
          <a href='https://www.youtube.com/watch?v=egvFugMiNrk' target='_blank' rel='noopener noreferrer'>
            <img 
              src='/images/marie-toussaint.jpg' 
              alt='marie-toussaint' 
              className='home-video-thumbnail-container' 
            />
            <div className='home-link-container-content'>
              <h1 className='home-link-container-h1'>Marie Toussaint</h1>
              <p className='home-link-container-p'>Europian Union General Assembly on Harmony with Nature 2022</p>
            </div>
          </a>
        </div>
        <div className='home-link-container overflow-hidden'>
          <a href='https://www.youtube.com/watch?v=W_uRXnnew4A' target='_blank' rel='noopener noreferrer'>
            <img 
              src='/images/cintia-balaudo.jpg' 
              alt='cintia-balaudo' 
              className='home-video-thumbnail-container' 
            />
            <div className='home-link-container-content'>
              <h1 className='home-link-container-h1'>Cintia Balaudo</h1>
              <p className='home-link-container-p'>General Assembly Argentina on Harmony with Nature 2022</p>
            </div>
          </a>
        </div>
      </div>
      {/* old bg for div on line 10: bg-[#afb482] bg-opacity-80 */}
      <div className='flex flex-col lg:flex-row justify-center pt-10 pb-10 overflow-hidden max-w-full'>

        <div className='text-lg md:text-2xl lg:w-[80%] flex flex-col font-normal text-center md:text-left lg:my-auto mx-5 md:mx-8 pt-5 lg:pt-0 px-5 lg:px-[50px]'>
          <h1 className='ml-auto my-20 text-end text-2xl md:text-5xl font-light border-r-8 border-[#F0910c] w-full lg:w-1/4 pr-4'>HARMONY WITH NATURE</h1>
          <p className='font-light leading-golden lg:leading-golden-lg'>
            The Harmony with Nature Knowledge Network is an online platform uniting practitioners, academics, and researchers committed to promoting an Earth-centered worldview known as Earth Jurisprudence.
            This collaborative initiative encompasses various disciplines to enhance understanding of the intrinsic value of Nature and human-Earth relationships. By drawing on Indigenous knowledge and
            interdisciplinary expertise, the Network aims to provide resources that inform policy-making and encourage societies to engage more harmoniously with the natural world.
          </p>
        </div>
      </div>
      <div className='w-full lg:w-[80%] lg:mx-auto '>
        <div className='flex flex-col lg:flex-row mt-[160px] pb-5 mb-[38px]'>
          <div className='pr-8 flex flex-col lg:mr-5'>
            <h1 className='text-center lg:text-left text-2xl md:text-5xl font-light mx-8 lg:mx-0 border-b-[6px] border-[#40916C] pb-2 mb-[27px] w-[85%]'>International Mother Earth Day</h1>
            <img className='lg:hidden flex mx-auto lg:mx-0 home-picture-styling lg:ml-0 mb-10 lg:mb-0' alt='United Nations Hall 2009' src='/images/UN2009.jpg'></img>
            <p className='text-center lg:text-left text-xl font-normal mx-8 md:mx-auto lg:mx-0 leading-golden lg:leading-golden-lg'>In 2009, the United Nations established International Mother Earth Day to promote Harmony with Nature and address the urgent need for sustainable
              practices. This initiative emphasizes the importance of balancing economic, social, and environmental needs to safeguard our planet and future generations.
            </p>
            <button disabled className='btn-primary home-btn-styling mx-auto lg:ml-0 cursor-not-allowed'>Learn More</button>
          </div>
          <img className='hidden lg:flex home-picture-styling ml-8 lg:ml-0 mb-10 lg:mb-0' alt='United Nations Hall 2009' src='/images/UN2009.jpg'></img>
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