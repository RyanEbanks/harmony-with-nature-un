import React from 'react'
import Map2 from './Map2';
import events from '../lawData';
import policyEvents from '../policyData';
import '../index.css';

type RightsProps = {
    setLaw: React.Dispatch<React.SetStateAction<keyof typeof events>>
    setPolicy: React.Dispatch<React.SetStateAction<keyof typeof policyEvents>>
}

const Rights: React.FC<RightsProps> = ({ setLaw, setPolicy }) => {
    return (
        <div className="min-h-screen bg-white antialiased">
          <div className='w-full h-full mt-[40px] lg:mt-[100px]'>
            <Map2 setLaw={setLaw} setPolicy={setPolicy} />
          </div>
            
            {/* Header Section */}
            <div className="w-full bg-[#FAF9F6] py-16 md:py-24 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-6xl font-light mb-8 transform transition-all duration-300 hover:translate-x-2">
                        <span className="border-l-8 border-[#40916C] pl-6">Rights of Nature</span>
                    </h1>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
                <div className="bg-white rounded-xl shadow-xl p-8 md:p-12 hover:shadow-2xl transition-shadow duration-300">
                    <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-700 mb-8">
                        The law has seen the beginning of an evolution toward recognition of 
                        the inherent rights of Nature to exist, thrive and evolve. This 
                        evolving legal approach acknowledges that the traditional 
                        environmental regulatory systems generally described herein regard 
                        nature as property to be used for human benefit, rather than a 
                        rights-bearing partner with which humanity has co-evolved.
                    </p>
                    
                    <div className="space-y-8">
                        <p className="text-lg font-light leading-relaxed text-gray-600 hover:text-gray-700 transition-colors duration-200">
                            Rights of Nature is grounded in the recognition that humankind and Nature 
                            share a fundamental, non-anthropocentric relationship given our 
                            shared existence on this planet, and it creates guidance for 
                            actions that respect this relationship.
                        </p>
                        
                        <p className="text-lg font-light leading-relaxed text-gray-600 hover:text-gray-700 transition-colors duration-200">
                            Legal provisions recognizing the Rights of Nature, sometimes referred to as Earth 
                            Jurisprudence, include constitutions, national statutes, and local 
                            laws. In addition, new policies, guidelines and resolutions are 
                            increasingly pointing to the need for a legal approach that 
                            recognizes the rights of the Earth to well-being.
                        </p>
                        
                        <p className="text-lg font-light leading-relaxed text-gray-600 hover:text-gray-700 transition-colors duration-200">
                            Furthermore, educational activities on the rights of Nature are on the increase 
                            in the professional and public spheres to advance Earth 
                            Jurisprudence worldwide.
                        </p>
                    </div>
                </div>

                {/* Additional Content Section */}
                <div className="mt-12 grid md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-xl shadow-xl p-8 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                        <h2 className="text-2xl font-light mb-6 border-b-4 border-[#F0910c] pb-2">
                            Legal Framework
                        </h2>
                        <p className="text-lg font-light leading-relaxed text-gray-600 hover:text-gray-700 transition-colors duration-200">
                            Explore the various legal instruments and frameworks that recognize 
                            and protect the Rights of Nature across different jurisdictions.
                        </p>
                    </div>

                    <div className="bg-white rounded-xl shadow-xl p-8 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                        <h2 className="text-2xl font-light mb-6 border-b-4 border-[#F0910c] pb-2">
                            Policy Development
                        </h2>
                        <p className="text-lg font-light leading-relaxed text-gray-600 hover:text-gray-700 transition-colors duration-200">
                            Learn about ongoing policy initiatives and developments in the 
                            field of Earth Jurisprudence and Rights of Nature.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Rights;