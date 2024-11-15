import React, { useState } from 'react';
import picture1 from '../images/hwni-logo.svg';
import kevin from '../images/Kevin-Hill.jpg';
import julio from '../images/Julio-Orellana.jpg';
import '../App.css';

function About() {

  return (
    <div className='about-parent-container'>
      <div className='w-full h-full'>
        <div className='flex flex-row bg-[#7A8220]/60'>
          <div className='flex-grow border-2 border-red-500 m-5 rounded-lg p-5'>
            <h1 className='text-2xl border-2 border-yellow-500 m-1'>Harmony with Nature Institute</h1>
            <p className='text-lg m-1'>Developing country government delegations are all too often at a
              disadvantage in their participation in international deliberations at
              the United Nations.  Their staffs are either too few or are
              inadequately knowledgeable about the subject matter that they are
              assigned to cover, or both.  Their budgets are also insufficient,
              if not lacking, to hire experts that can provide them with the kind
              of information they need to carry out their remits.</p>
          </div>
          <div className='flex-grow border-2 border-red-500 m-5 rounded-lg p-5'>
            <img className='about-logo' alt='Harmony with nature institue logo' src={picture1}></img>
          </div>
        </div>
        <div className='secondary-container'>
          <p className='text-lg m-1'>This special project of 1 Ocean Fund seeks to help remove this barrier.
            We will make available our expertise to help developing country
            government delegations to better understand the concepts surrounding
            the Rights of Nature within the context of deliberations convened
            under the auspices of the United Nations and regional meetings
            convened by sponsoring governments and organizations.</p>
          <p className='text-lg m-1'>
            We will provide personalized consultations with small delegations to
            explain the institutional and policy framework that currently informs
            the Rights of Nature within the context of the United Nations.
            Our consultations will provide these delegations with a critical
            analysis of upcoming meetings and the different ways that the subject
            matter could be interpreted, helping the delegations be better
            informed and prepared for a more effective engagement.
          </p>
        </div>
        <div className='tertiary-container'>
          <div className='flex-grow border-2 border-red-500 m-5 rounded-lg p-5'>
            <img className='about-img' alt='A picture of Kevin Hill' src={kevin}></img>
            <div className='tertiary-child-content'>
              <h1 className='text-2xl border-2 border-yellow-500 m-1'>Kevin Hill</h1>
              <h3 className='text-xl m-1'>Fund Administrator</h3>
              <p className='text-lg m-1'>This project is led by Kevin Hill, a former United Nations staff member
                with over 30 years’ experience in facilitating international
                environmental negotiations, dating back to the deliberations for the
                1992 United Nations Conference on Environment and Development,
                otherwise better known as the Earth Summit.</p>
            </div>
          </div>
          <div className='flex-grow border-2 border-red-500 m-5 rounded-lg p-5'>
            <img className='about-img' alt='A picture of Julio Orellana' src={julio}></img>
            <div className='tertiary-child-content'>
              <h1 className='text-2xl border-2 border-yellow-500 m-1'>Julio Orellana</h1>
              <h3 className='text-xl m-1'>Legal Research Associate</h3>
              <p className='text-lg m-1'>Mr. Hill is supported by our Legal Research Associate, Julio Orellana,
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
