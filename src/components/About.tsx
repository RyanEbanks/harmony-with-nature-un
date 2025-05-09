import '../App.css';
import '../index.css';
import { ChevronRight, Leaf } from 'lucide-react';

// import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Button } from './ui/button';
import TeamMember from './TeamMember';


function About() {

  return (
    <div className='new-about-parent-container antialiased'>
      {/* Mission */}
      <div className='flex-1'>
        <section className='w-full py-12 md:py-24 lg:py-32 bg-stone-50'>
          <div className='container px-4 md:px-6 w-[80%] mx-auto flex justify-center items-center'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <div className='inline-block rounded-lg border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-700'>Empowering Global Voices</div>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl py-2'>Our Mission</h2>
                <p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed py-2'>
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
          </div>
        </section>

        {/* Approach */}
        <section className='w-[80%] mx-auto py-12 md:py-24 lg:py-32'>
          <div className='container px-4 md:px-6'>
            <div className='grid gap-10 lg:grid-cols-2 lg:gap-12'>
              <Card className='border-0 shadow-sm'>
                <CardHeader>
                  <div className='flex items-center gap-2'>
                    <div className='rounded-full bg-stone-100 p-2'>
                      <Leaf className='h-5 w-5 text-stone-600' />
                    </div>
                    <CardTitle className='text-2xl'>Our Approach</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className='space-y-4 text-muted-foreground'>
                  <p>
                    This special project of 1 Ocean Fund seeks to help remove barriers to understanding the Rights of
                    Nature. We make our expertise available to help developing country government delegations better
                    understand the concepts surrounding the Rights of Nature within the context of deliberations
                    convened under the auspices of the United Nations and regional meetings.
                  </p>
                </CardContent>
              </Card>
              <Card className='border-0 shadow-sm'>
                <CardHeader>
                  <div className='flex items-center gap-2'>
                    <div className='rounded-full bg-stone-100 p-2'>
                      <Leaf className='h-5 w-5 text-stone-600' />
                    </div>
                    <CardTitle className='text-2xl'>Our Services</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className='space-y-4 text-muted-foreground'>
                  <p>
                    We provide personalized consultations with small delegations to explain the institutional and policy
                    framework that currently informs the Rights of Nature within the context of the United Nations. Our
                    consultations provide these delegations with a critical analysis of upcoming meetings and the
                    different ways that the subject matter could be interpreted.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Meet the team */}
        <section className='flex-1 py-12 md:py-24 lg:py-32 bg-stone-50'>
          <div className='container w-[80%] mx-auto px-4 md:px-6'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl'>Meet Our Team</h2>
                <p className='max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  Our experienced professionals are dedicated to advancing the Rights of Nature globally.
                </p>
              </div>
            </div>
            <div className='mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 pt-12'>
              <TeamMember
                name='Kevin Hill'
                role='Fund Administrator'
                imageSrc='/images/Kevin-Hill.jpg'
                bio='This project is led by Kevin Hill, a former United Nations staff member
                  with over 30 years’ experience in facilitating international
                  environmental negotiations, dating back to the deliberations for the
                  1992 United Nations Conference on Environment and Development,
                  otherwise better known as the Earth Summit.'
              />
              <TeamMember
                name='Julio Orellana'
                role='Legal Research Associate'
                imageSrc='/images/Julio-Orellana.jpg'
                bio='Mr. Hill is supported by our Legal Research Associate, Julio Orellana,
                  a Master of Laws in Environmental Law (’23) graduate of Pace University’s
                  Elisabeth Haub School of Law.  Mr. Orellana also teaches three courses
                  on environmental law at the Universidad Científica del Sur, Lima,
                  Peru.'
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;