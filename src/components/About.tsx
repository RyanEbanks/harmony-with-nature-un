import React, { useState } from 'react';
// import picture1 from '/images/hwni-logo.svg';
// import kevin from '../images/Kevin-Hill.jpg';
// import julio from '../images/Julio-Orellana.jpg';
import '../App.css';

function About() {

  return (
    <div className='about-parent-container antialiased'>
      <div className='w-full h-full'>
        <div className='flex flex-col'>
          <div className='mx-auto w-[60%] my-10 rounded-lg p-5'>
            <h1 className='text-5xl my-1 mt-1 mb-4 text-center font-semibold'>Who We Are</h1>
            <div className='w-[50%] h-[50%] mx-auto my-10 p-5'>
              <img className='w-full h-full' alt='Harmony with nature institue logo' src='/images/hwni-logo.svg'></img>
            </div>
          </div>
          <div className='w-[60%] mx-auto my-10'>
            <h3 className='text-4xl font-semibold mb-5'>Our Mission</h3>
            <p className='text-2xl my-1'>Developing country government delegations are all too often at a
              disadvantage in their participation in international deliberations at
              the United Nations.  Their staffs are either too few or are
              inadequately knowledgeable about the subject matter that they are
              assigned to cover, or both.  Their budgets are also insufficient,
              if not lacking, to hire experts that can provide them with the kind
              of information they need to carry out their remits.</p>
          </div>
        </div>
        <div className='w-[60%] mx-auto my-10'>
          <h1 className='text-5xl my-1 mt-1 mb-4 font-semibold italic'>Our team is equipped with the expertise and resources necessary to provide tailored support
            and effective solutions for delegations.</h1>
          <div className='my-20 flex flex-row'>
            <div className='mx-2 my-10'>
              <h3 className='text-2xl font-semibold mb-5'>Our Approach</h3>
              <p className='text-xl font-[350]'>This special project of 1 Ocean Fund seeks to help remove this barrier.
                We will make available our expertise to help developing country
                government delegations to better understand the concepts surrounding
                the Rights of Nature within the context of deliberations convened
                under the auspices of the United Nations and regional meetings
                convened by sponsoring governments and organizations.</p>
            </div>
            <div className='mx-2 my-10'>
              <h3 className='text-2xl font-semibold mb-5'>Our Services</h3>
              <p className='text-xl font-[350]'>
                We will provide personalized consultations with small delegations to
                explain the institutional and policy framework that currently informs
                the Rights of Nature within the context of the United Nations.
                Our consultations will provide these delegations with a critical
                analysis of upcoming meetings and the different ways that the subject
                matter could be interpreted, helping the delegations be better
                informed and prepared for a more effective engagement.
              </p>
            </div>
          </div>
        </div>
        <div className='flex flex-row mx-auto w-[75%] mb-20'>
          <div className='my-10 rounded-lg p-5 w-1/2 mx-10'>
            <img className='w-[200px] h-[200px] my-auto rounded-full' alt='A picture of Kevin Hill' src='/images/Kevin-Hill.jpg'></img>
            <div className='tertiary-child-content'>
              <h1 className='text-4xl font-semibold m-1'>Kevin Hill</h1>
              <h3 className='text-2xl m-1'>Fund Administrator</h3>
              <p className='text-xl font-[350] m-1'>This project is led by Kevin Hill, a former United Nations staff member
                with over 30 years’ experience in facilitating international
                environmental negotiations, dating back to the deliberations for the
                1992 United Nations Conference on Environment and Development,
                otherwise better known as the Earth Summit.</p>
            </div>
          </div>
          <div className='flex-grow my-10 rounded-lg p-5 w-1/2 mx-10'>
            <img className='w-[200px] h-[200px] my-auto rounded-full' alt='A picture of Julio Orellana' src='/images/Julio-Orellana.jpg'></img>
            <div className='tertiary-child-content'>
              <h1 className='text-4xl font-semibold m-1'>Julio Orellana</h1>
              <h3 className='text-xl m-1'>Legal Research Associate</h3>
              <p className='text-xl font-[350] m-1'>Mr. Hill is supported by our Legal Research Associate, Julio Orellana,
                a Master of Laws in Environmental Law (’23) graduate of Pace University’s
                Elisabeth Haub School of Law.  Mr. Orellana also teaches three courses
                on environmental law at the Universidad Científica del Sur, Lima,
                Peru. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;