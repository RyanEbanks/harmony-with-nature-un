import '../App.css';
import '../index.css';

function About() {

  return (
    <div className='about-parent-container antialiased'>
      <div className='w-full h-full'>
        {/* Mission Section */}
        <div className='relative bg-[#FAF9F6] py-16 md:py-24'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-16'>
              <h3 className='inline-block text-4xl md:text-6xl font-light mb-8 relative border-b-4 border-[#F0910c] pb-2'>
                Our Mission
              </h3>
            </div>

            <div className='bg-white rounded-lg shadow-lg p-8 md:p-12'>
              <div className='max-w-4xl mx-auto'>
                <p className='text-center md:text-left text-xl md:text-2xl font-light leading-relaxed text-gray-700'>
                  Developing country government delegations are all too often at a
                  disadvantage in their participation in international deliberations at
                  the United Nations. Their staffs are either too few or are
                  inadequately knowledgeable about the subject matter that they are
                  assigned to cover, or both. Their budgets are also insufficient,
                  if not lacking, to hire experts that can provide them with the kind
                  of information they need to carry out their remits.
                </p>
              </div>
            </div>

            {/* Quote Section */}
            <div className='mt-16 max-w-4xl mx-auto'>
              <blockquote className='text-2xl md:text-3xl font-light italic text-center text-gray-600'>
                'Our team is equipped with the expertise and resources necessary to provide tailored support
                and effective solutions for delegations.'
                <footer className='mt-4 text-lg md:text-xl text-[#40916C] font-normal'>
                  — Kevin Hill
                </footer>
              </blockquote>
            </div>
          </div>
        </div>

        <div className='w-full lg:w-[90%] lg:mx-auto my-10'>
          {/* Services Section */}
      <div className='bg-gray-50 py-16 md:py-24'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid md:grid-cols-2 gap-12'>
            {/* Approach */}
            <div className='bg-white p-8 rounded-lg shadow-lg'>
              <h2 className='text-center md:text-left text-2xl md:text-3xl font-light mb-6 border-b-4 border-[#40916C] pb-2'>
                Our Approach
              </h2>
              <p className='text-center md:text-left text-lg font-light leading-relaxed'>
                This special project of 1 Ocean Fund seeks to help remove this barrier.
                We will make available our expertise to help developing country
                government delegations to better understand the concepts surrounding
                the Rights of Nature within the context of deliberations convened
                under the auspices of the United Nations and regional meetings
                convened by sponsoring governments and organizations.
              </p>
            </div>

            {/* Services */}
            <div className='bg-white p-8 rounded-lg shadow-lg'>
              <h2 className='text-center md:text-left text-2xl md:text-3xl font-light mb-6 border-b-4 border-[#40916C] pb-2'>
                Our Services
              </h2>
              <p className='text-center md:text-left text-lg font-light leading-relaxed'>
                We will provide personalized consultations with small delegations to
                explain the institutional and policy framework that currently informs
                the Rights of Nature within the context of the United Nations.
                Our consultations will provide these delegations with a critical
                analysis of upcoming meetings and the different ways that the subject
                matter could be interpreted.
              </p>
            </div>
          </div>
        </div>

          </div>
        </div>
        <div className='flex flex-col'>
          <div>
            <h1 className='text-center text-3xl md:text-4xl font-semibold mb-5'>Meet Our Team</h1>
          </div>
          <div className='flex flex-col lg:flex-row mx-auto w-[90%] mb-20'>
            <div className='flex flex-col md:flex-row items-center about-img-div-styling'>
              <img className='about-img' alt='Kevin Hill' src='/images/Kevin-Hill.jpg'></img>
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
            <div className='flex flex-col md:flex-row items-center about-img-div-styling'>
              <img className='about-img' alt='Julio Orellana' src='/images/Julio-Orellana.jpg'></img>
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
    </div>
  );
}

export default About;