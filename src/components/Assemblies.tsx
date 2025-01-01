import React from 'react'
import Map from './Map'

const Assemblies: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className='w-full h-full mt-[100px]'>
        <Map />
      </div>
      {/* Header Section */}
      <div className="w-full bg-[#FAF9F6] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-light mb-8">
            <span className="border-l-8 border-[#40916C] pl-6">Earth Assembly</span>
          </h1>
          <p className="text-xl md:text-2xl font-light text-gray-600 max-w-4xl">
            Exploring the possibility of convening a high-level meeting to strengthen Earth-centered approaches
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Overview Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl md:text-3xl font-light mb-6 border-b-4 border-[#F0910c] pb-2">
              Overview
            </h2>
            <p className="text-lg font-light leading-relaxed text-gray-700">
              The General Assembly, at its 77th session, adopted resolution 77/169 on Harmony with Nature, 
              requesting the President of the General Assembly to discuss the possibility of convening and 
              the scope of a high-level meeting, tentatively entitled "Earth Assembly", to be held on 22 April 2024.
            </p>
          </div>

          {/* Purpose Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl md:text-3xl font-light mb-6 border-b-4 border-[#F0910c] pb-2">
              Purpose
            </h2>
            <p className="text-lg font-light leading-relaxed text-gray-700">
              The evolving non-anthropocentric or Earth-centered paradigm continues to reinforce multilateralism 
              through the discussion of alternative holistic approaches based on diverse worldviews that may 
              contribute to the implementation of the 2030 Agenda for Sustainable Development and beyond.
            </p>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl md:text-3xl font-light mb-6 border-b-4 border-[#40916C] pb-2">
            Key Objectives
          </h2>
          <div className="space-y-6 text-lg font-light leading-relaxed text-gray-700">
            <p>
              The Earth Assembly aims to strengthen the recognition of Nature's rights and promote Earth 
              Jurisprudence principles at various levels of governance and policy-making. This includes:
            </p>
            <ul className="list-disc pl-6 space-y-4">
              <li>
                Advancing Earth-centered policies and laws that recognize the interconnectedness between 
                humanity and Nature
              </li>
              <li>
                Promoting sustainable approaches to development that respect Earth's natural cycles
              </li>
              <li>
                Fostering dialogue between different worldviews and traditional knowledge systems
              </li>
              <li>
                Supporting the implementation of the 2030 Agenda for Sustainable Development
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Assemblies