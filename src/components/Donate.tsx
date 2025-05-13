import React, { useRef } from 'react';
import PaymentButton from './PaymentButton';
import '../index.css';
import emailjs from '@emailjs/browser';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { HelpCircle, Mail } from 'lucide-react';

const Donate = () => {
  const form = useRef<HTMLFormElement>(null);
  
    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if(form.current) {
          // Add this information to an environment file for actual production
        emailjs
            .sendForm('service_du8kfd3', 'template_en0h9fs', form.current, {
                publicKey: 'NhjZ_RQDzZs44eENb',
            })
            .then(
                () => {
                    console.log('Message sent!');
                    form.current?.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
          }
    };

    // const handleNumberInput = (e) => {
    //     const value = e.target.value;
    //     // Replace any non-digit characters and limit to 10 digits
    //     e.target.value = value.replace(/\D/g, '').slice(0, 10);
    // };

  return (
    <div className='donate-container bg-[#FAF9F6] pt-10'>
      <div className='bg-[#40916C] relative flex rounded-md mb-20 md:mb-40 lg:mb-0 mt-10 w-full md:w-[60%] mx-auto'>
        <div className='relative'>
      <img className='donate-picture-styling w-full lg:w-1/2 h-full ml-auto rounded-md' alt='charity' src='/images/charity.svg'></img>
      <div className='z-20 absolute left-[15%] top-[105%] md:left-[23%] md:top-[110%] lg:left-[10%] lg:top-[40%]'>
      <PaymentButton />
      </div>
        </div>
      </div>

      <div className="container px-4 py-12 md:py-16 lg:py-20 lg:w-[80%] mx-auto">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
              Connect with Us About Donations
            </h2>
            <p className="mb-8 text-lg text-stone-600">
              We'd love to hear from you. Whether you have questions about your donation or need assistance, our team is
              here to help.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4 rounded-lg border border-stone-200 bg-white p-4 shadow-sm">
                <div className="mt-1 rounded-full bg-emerald-100 p-2 text-emerald-700">
                  <HelpCircle className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium text-stone-900">Questions About Your Donation?</h3>
                  <p className="mt-1 text-stone-600">
                    If you've already donated and have questions about your contribution, we're happy to help.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-lg border border-stone-200 bg-white p-4 shadow-sm">
                <div className="mt-1 rounded-full bg-emerald-100 p-2 text-emerald-700">
                  <HelpCircle className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium text-stone-900">Have Questions Before You Donate?</h3>
                  <p className="mt-1 text-stone-600">
                    We understand you may want more information before making a donation. Feel free to reach out.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-lg border border-stone-200 bg-white p-4 shadow-sm">
                <div className="mt-1 rounded-full bg-emerald-100 p-2 text-emerald-700">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium text-stone-900">Contact Us Directly</h3>
                  <p className="mt-1 text-stone-600">
                    For immediate assistance, you can email us at{" "}
                    <a href="mailto:contact@harmonynature.org" className="text-emerald-700 hover:underline">
                      contact@harmonynature.org
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-stone-200 bg-white p-6 shadow-sm md:p-8">
            <h3 className="mb-6 text-xl font-semibold text-stone-900">Send Us a Message</h3>
            <form className="space-y-4" ref={form} onSubmit={sendEmail}>
              <div className="space-y-2">
                <label htmlFor="fullName" className="text-sm font-medium text-stone-700">
                  Full Name
                </label>
                <Input id="fullName" placeholder="Your full name" className="w-full" />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-stone-700">
                  Email
                </label>
                <Input id="email" type="email" placeholder="you@example.com" className="w-full" />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-stone-700">
                  Subject
                </label>
                <Input id="subject" placeholder="What is your message about?" className="w-full" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-stone-700">
                  Message
                </label>
                <textarea id="message" placeholder="Type your message here..." className="text-sm font-medium min-h-[120px] w-full border-black border-[1.5px] rounded-md shadow-sm px-3 py-1" />
              </div>

              <Button type="submit" className="w-full bg-emerald-700 hover:bg-emerald-600 text-white">
                Submit Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
