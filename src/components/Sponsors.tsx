import React from 'react'
import '../index.css';

const Sponsors = () => {
  return (
    <div className='flex flex-col mx-auto'>
      <div className='mb-10'>
        <div className='mt-[160px] mb-8 w-[80%] mx-auto'>
          <h1 className='text-gray-400 text-6xl font-bold border-l-[6px] pl-8 border-[#004d6f] '>Our Partners</h1>
        </div>
        <h3 className='text-lg md:text-xl my-1 w-[80%] mx-auto text-center lg:text-left'>The Harmony with Nature Institute thrives because of the incredible support from organizations, businesses, and individuals who share
          our vision. Your contributions help us explore innovative ways to connect with nature, deepen our understanding of its wonders, and
          champion its preservation for generations to come.
        </h3>
      </div>
      <div className='flex flex-col'>
        <div className='bg-[#fafafa]'>
          <div className='flex flex-row py-20'>
            <div className='mx-auto w-1/4 flex flex-col justify-center'>
              <h1 className='text-3xl font-normal'>Planting Seeds for a better Future</h1>
              <p className='text-base font-light my-5'>Your support makes every effort in advancing our mission possible.</p>
            </div>
            <div className='flex flex-wrap w-1/4 mr-auto justify-center my-auto py-10'>
              <img className='about-img' alt='1 Ocean Logo' src='/images/sponsors/Group-130dsfg.png' />
              <img className='about-img' alt='Sellsy Logo' src='/images/sponsors/1-OCEAN-Logo-rond-site-Sellsy-1536x1536.png' />
              <img className='about-img' alt='CNRS Logo' src='/images/sponsors/cnrs_rond.png' />
              <img className='about-img' alt='Criobe Logo' src='/images/sponsors/criobe_rond.png' />
              <img className='about-img' alt='Dreamy Yatch Logo' src='/images/sponsors/dreamyacht_rond.png' />
              <img className='about-img' alt='IRIS Logo' src='/images/sponsors/Group-174f.png' />
              <img className='about-img' alt='Paul Ricard Logo' src='/images/sponsors/institutpaulricard_rond.png' />
              <img className='about-img' alt='Lacaza logo' src='/images/sponsors/lacazaproductions_rond.png' />
              <img className='about-img' alt='Lecob Logo' src='/images/sponsors/lecob_rond.png' />
              <img className='about-img' alt='Marine Ocean Logo' src='/images/sponsors/Logo_Marine-et-ocean_rond.png' />
              <img className='about-img' alt='Unesco Logo' src='/images/sponsors/logoMBunesco-1536x1536.png' />
            </div>
          </div>
        </div>
        {/* <div className='py-[96px] mx-auto'>
          <div className='relative'>
            <div className='w-[225px] h-[254px] bg-[#F0910c] absolute right-12'></div>
            <img src='/images/sponsor-picture.png' alt='picture of a plant' className='w-[450px] h-[508px] z-50' />
          </div>
        </div> */}
        <div className='bg-[#fafafa]'>
          <div className='flex flex-row py-20'>
            <div className='mx-auto flex flex-wrap w-1/4 mr-auto justify-center my-auto py-10'>
              <img className='about-img' alt='Brother Logo' src='/images/sponsors/Logo-rond-BROTHIER-site-1536x1536.png' />
              <img className='about-img' alt='Change Logo' src='/images/sponsors/Logo-rond-Change-site-1.png' />
              <img className='about-img' alt='Fondation De La Mer Logo' src='/images/sponsors/Logo-rond-FONDATION-DE-LA-MER-site-1536x1536.png' />
              <img className='about-img' alt='Sense Logo' src='/images/sponsors/logosense-e1679913536786.png' />
              <img className='about-img' alt='Nausicaa Logo' src='/images/sponsors/nausicaa_rond.png' />
              <img className='about-img' alt='Ouest France Logo' src='/images/sponsors/ouestfrance_rond.png' />
              <img className='about-img' alt='Gares Logo' src='/images/sponsors/sncfgares_rond.png' />
              <img className='about-img' alt='Sony Logo' src='/images/sponsors/sony_rond.png' />
              <img className='about-img' alt='Subsea Tech Logo' src='/images/sponsors/subseatech_rond.png' />
              <img className='about-img' alt='Unesco Rond Logo' src='/images/sponsors/unesco_rond.png' />
              <img className='about-img' alt='Unesco Coi Logo' src='/images/sponsors/unescocoi_rond.png' />
              <img className='about-img' alt='Vilebrequin Logo' src='/images/sponsors/vilebrequin_rond.png' />
            </div>
            <div className='mr-auto w-1/4 flex flex-col justify-center'>
              <h1 className='text-3xl font-normal'>Driving Change Through Unity</h1>
              <p className='text-base font-light my-5'>You're part of the change we create.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sponsors