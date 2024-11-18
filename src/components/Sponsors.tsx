import React from 'react'

const Sponsors = () => {
  return (
    <div className='flex flex-col md:flex-row mx-auto md:mx-44'>
    <div className='flex flex-col mt-8 max-w-lg md:w-1/2 md:mt-32 mx-auto'>
        <h1 className='mb-4 text-left text-4xl font-semibold'>Become a Sponsor</h1>
        <p className='text-left text-xl'>
        Contact us because we are dedicated to empowering delegations with the knowledge, tools, and support they need to navigate international deliberations effectively.
           </p>
    </div>
    <div className='flex flex-col mt-8 md:items-center md:justify-center md:p-12 md:w-1/2 mx-auto'>
  <div className='mx-auto w-full max-w-lg md:max-w-[550px]'>
    <form>
      <div className='mb-5'>
        <label
          htmlFor='name'
          className='mb-3 block text-base font-medium'
        >
          Full Name
        </label>
        <input
          type='text'
          name='name'
          id='name'
          placeholder='Full Name'
          className='w-full border border-[#e0e0e0] text-[#6B7280] bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#6A64F1] focus:shadow-md'
        />
      </div>
      <div className='mb-5'>
        <label
          htmlFor='email'
          className='mb-3 block text-base font-medium'
        >
          Email 
        </label>
        <input
          type='email'
          name='email'
          id='email'
          placeholder='example@example.com'
          className='w-full border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
        />
      </div>
      <div className='mb-5'>
        <label
          htmlFor='subject'
          className='mb-3 block text-base font-medium'
        >
          Subject
        </label>
        <input
          type='text'
          name='subject'
          id='subject'
          placeholder='Enter your subject'
          className='w-full border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
        />
      </div>
      <div className='mb-5'>
        <label
          htmlFor='message'
          className='mb-3 block text-base font-medium'
        >
          Message
        </label>
        <textarea
          rows={4}
          name='message'
          id='message'
          placeholder='Type your message'
          className='w-full resize-none border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
        ></textarea>
      </div>
      <div className='mb-8'>
        <button
          className='bg-[#F0910c] border-0 hover:bg-[rgba(240,145,12,0.5)] hover:text-[rgba(255,255,255,0.9)] py-3 px-8 text-base font-semibold text-white outline-none'
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</div>
    </div>
  )
}

export default Sponsors