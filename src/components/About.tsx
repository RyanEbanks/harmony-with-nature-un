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
          <div className='w-full lg:w-[60%] lg:mx-auto mt-20 mb-10'>
            <h3 className='text-3xl lg:text-4xl font-semibold mb-5 text-center'>Our Mission</h3>
            <p className='text-xl lg:text-2xl my-1 w-[90%] lg:w-full mx-auto text-center lg:text-left'>Developing country government delegations are all too often at a
              disadvantage in their participation in international deliberations at
              the United Nations.  Their staffs are either too few or are
              inadequately knowledgeable about the subject matter that they are
              assigned to cover, or both.  Their budgets are also insufficient,
              if not lacking, to hire experts that can provide them with the kind
              of information they need to carry out their remits.</p>
          </div>
        </div>
        <div className='w-full lg:w-[60%] lg:mx-auto my-10'>
          <h1 className='text-2xl lg:text-5xl my-1 mt-1 mb-4 lg:w-full mx-auto font-semibold italic text-center lg:text-left'>Our team is equipped with the expertise and resources necessary to provide tailored support
            and effective solutions for delegations.</h1>
          <div className='my-20 flex flex-col lg:flex-row lg:w-full mx-auto lg:mx-0'>
            <div className='mx-2 my-10'>
              <h3 className='about-primary-h3-styling'>Our Approach</h3>
              <p className='text-md lg:text-xl font-[350]'>This special project of 1 Ocean Fund seeks to help remove this barrier.
                We will make available our expertise to help developing country
                government delegations to better understand the concepts surrounding
                the Rights of Nature within the context of deliberations convened
                under the auspices of the United Nations and regional meetings
                convened by sponsoring governments and organizations.</p>
            </div>
            <div className='mx-2 my-10'>
              <h3 className='about-primary-h3-styling'>Our Services</h3>
              <p className='text-md lg:text-xl font-[350]'>
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
        <div className='flex flex-col lg:flex-row mx-auto w-[80%] mb-20'>
          <div className='about-img-div-styling'>
            <img className='about-img' alt='A picture of Kevin Hill' src='/images/Kevin-Hill.jpg'></img>
            <div className='tertiary-child-content'>
              <h1 className='about-primary-h1-styling'>Kevin Hill</h1>
              <h3 className='about-secondary-h3-styling'>Fund Administrator</h3>
              <p className='about-secondary-p-styling'>This project is led by Kevin Hill, a former United Nations staff member
                with over 30 years’ experience in facilitating international
                environmental negotiations, dating back to the deliberations for the
                1992 United Nations Conference on Environment and Development,
                otherwise better known as the Earth Summit.</p>
            </div>
          </div>
          <div className='about-img-div-styling'>
            <img className='about-img' alt='A picture of Julio Orellana' src='/images/Julio-Orellana.jpg'></img>
            <div className='tertiary-child-content'>
              <h1 className='about-primary-h1-styling'>Julio Orellana</h1>
              <h3 className='about-secondary-h3-styling'>Legal Research Associate</h3>
              <p className='about-secondary-p-styling'>Mr. Hill is supported by our Legal Research Associate, Julio Orellana,
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