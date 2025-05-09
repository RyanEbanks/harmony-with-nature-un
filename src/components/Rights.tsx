import React from 'react'
import Map2 from './Map2';
import events from '../lawData';
import policyEvents from '../policyData';
import '../index.css';
import { Leaf, BookOpen, FileText, ArrowRight } from 'lucide-react'
import { Button } from './ui/button'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

type RightsProps = {
    setLaw: React.Dispatch<React.SetStateAction<keyof typeof events>>
    setPolicy: React.Dispatch<React.SetStateAction<keyof typeof policyEvents>>
}

const Rights: React.FC<RightsProps> = ({ setLaw, setPolicy }) => {
    return (
        <>
            <div className='flex min-h-screen flex-col'>
                <div className='w-full h-full'>
                    <Map2 setLaw={setLaw} setPolicy={setPolicy} />
                </div>

                {/* Title */}
                <div className='flex-1'>
                    <section className='w-full py-12 md:py-24 lg:py-32 bg-stone-50'>
                        <div className='container w-[80%] mx-auto px-4 md:px-6'>
                            <div className='grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]'>
                                <div className='flex flex-col justify-center space-y-4'>
                                    <div className='space-y-2'>
                                        <div className='inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm text-emerald-700'>
                                            <Leaf className='mr-1 h-3 w-3' />
                                            Earth Jurisprudence
                                        </div>
                                        <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none'>Rights of Nature</h1>
                                        <p className='max-w-[600px] text-muted-foreground md:text-xl'>
                                            Recognizing nature as a rights-bearing partner with which humanity has co-evolved.
                                        </p>
                                    </div>
                                </div>
                                <img
                                    src='/images/rolf-allard-van-hagen.jpg'
                                    alt='Nature taken by Rolf Allard Van Hagen'
                                    width={600}
                                    height={400}
                                    className='mx-auto aspect-video overflow-hidden rounded-xl object-cover'
                                />
                            </div>
                        </div>
                    </section>

                    {/* Understanding rights */}
                    <section className='w-full py-12 md:py-24 lg:py-32'>
                        <div className=' w-[80%] mx-auto container px-4 md:px-6'>
                            <div className='mx-auto max-w-[800px] space-y-12'>
                                <div className='space-y-4 text-center'>
                                    <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
                                        Understanding Rights of Nature
                                    </h2>
                                    <p className='text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                                        A new legal paradigm that recognizes and honors the inherent rights of the natural world.
                                    </p>
                                </div>

                                <Card className='border-none shadow-md'>
                                    <CardContent className='p-6 pt-6'>
                                        <p className='mb-4 leading-7 [&:not(:first-child)]:mt-6'>
                                            The law has seen the beginning of an evolution toward recognition of the inherent rights of Nature
                                            to exist, thrive and evolve. This evolving legal approach acknowledges that the traditional
                                            environmental regulatory systems generally described herein regard nature as property to be used for
                                            human benefit, rather than a rights-bearing partner with which humanity has co-evolved.
                                        </p>
                                        <p className='mb-4 leading-7 text-emerald-700 font-medium'>
                                            Rights of Nature is grounded in the recognition that humankind and Nature share a fundamental,
                                            non-anthropocentric relationship given our shared existence on this planet, and it creates guidance
                                            for actions that respect this relationship.
                                        </p>
                                        <p className='mb-4 leading-7 [&:not(:first-child)]:mt-6'>
                                            Legal provisions recognizing the Rights of Nature, sometimes referred to as Earth Jurisprudence,
                                            include constitutions, national statutes, and local laws. In addition, new policies, guidelines and
                                            resolutions are increasingly pointing to the need for a legal approach that recognizes the rights of
                                            the Earth to well-being.
                                        </p>
                                        <p className='leading-7 [&:not(:first-child)]:mt-6'>
                                            Furthermore, educational activities on the rights of Nature are on the increase in the professional
                                            and public spheres to advance Earth Jurisprudence worldwide.
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </section>

                    {/* Legal Framework */}
                    <section className='w-full py-12 md:py-24 lg:py-32 bg-stone-50'>
                        <div className='w-[80%] mx-auto container px-4 md:px-6'>
                            <div className='grid gap-10 sm:grid-cols-2 md:gap-16'>
                                <div className='space-y-4'>
                                    <div className='inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100'>
                                        <BookOpen className='h-5 w-5 text-emerald-700' />
                                    </div>
                                    <h3 className='text-xl font-bold'>Legal Framework</h3>
                                    <div className='h-1 w-12 bg-amber-500' />
                                    <p className='text-muted-foreground'>
                                        Explore the various legal instruments and frameworks that recognize and protect the Rights of Nature
                                        across different jurisdictions.
                                    </p>
                                    {/* <div className='pt-4'>
                                        <Button variant='outline' className='group'>
                                            Explore Legal Framework
                                            <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
                                        </Button>
                                    </div> */}
                                </div>
                                <div className='space-y-4'>
                                    <div className='inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100'>
                                        <FileText className='h-5 w-5 text-emerald-700' />
                                    </div>
                                    <h3 className='text-xl font-bold'>Policy Development</h3>
                                    <div className='h-1 w-12 bg-amber-500' />
                                    <p className='text-muted-foreground'>
                                        Learn about ongoing policy initiatives and developments in the field of Earth Jurisprudence and Rights
                                        of Nature.
                                    </p>
                                    {/* <div className='pt-4'>
                                        <Button variant='outline' className='group'>
                                            Explore Policy Development
                                            <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
                                        </Button>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}

export default Rights;