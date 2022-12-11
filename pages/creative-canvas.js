import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { GoPrimitiveDot } from 'react-icons/go';
import { BsGearFill } from 'react-icons/bs';
import Link from 'next/link';

const CreativeCanvas = () => {
    return (
        <div id='about' className="w-full">
            <div className="max-w-[1240px] w-full h-full mx-auto grid place-items-center px-4 py-16">
                <div>
                    <h2 className='text-left md:text-4xl my-2 text-brand'>Creative Canvas</h2>
                    <Carousel>
                        <div>
                            <img src="/assets/projects/creative-canvas/1.png" />
                        </div>
                        <div>
                            <img src="/assets/projects/creative-canvas/2.png" />
                        </div>
                        <div>
                            <img src="/assets/projects/creative-canvas/3.png" />
                        </div>
                        <div>
                            <img src="/assets/projects/creative-canvas/4.png" />
                        </div>
                    </Carousel>
                    <div className='grid md:grid-cols-5'>
                        <div className='col-span-4'>
                            <p className='text-lg uppercase text-brand tracking-widest font-semibold'>Project</p>
                            <h2 className='md:text-4xl mb-4'>Overview</h2>
                            <p className='flex items-center gap-1 my-2'> <GoPrimitiveDot />This project is about photography site having basic CRUD operations. </p>
                            <p className='flex items-center gap-1 my-2'> <GoPrimitiveDot />Firebase authentication is used for user authentication.</p>
                            <p className='flex items-center gap-1 my-2'> <GoPrimitiveDot />The Landing page has a stunning hero section. Below that it shows some of the services.</p>
                            <p className='flex items-center gap-1 my-2'> <GoPrimitiveDot />In this basic application you can add any service with it relevant image and description.</p>
                            <p className='flex items-center gap-1 my-2'> <GoPrimitiveDot />Any customer can create visit this site and see the service description and details.</p>
                            <p className='flex items-center gap-1 my-2'> <GoPrimitiveDot />But if one wants to post a review to any service he must sign in or sign up.</p>
                            <p className='flex items-center gap-1 my-2'> <GoPrimitiveDot />Customers can see their posted reviews on the My Reviews tab. One can delete or update his post.</p>
                            <p className='flex items-center gap-1 my-2'> <GoPrimitiveDot />All the functionalitiesCreate Read Update and Delete are dynamic.</p>
                            <div className='mt-4 flex items-center gap-6'>
                                <Link target={"_blank"} href={"https://creative-photography-nhrony.web.app"}><button className='px-6 py-2 bg-brand '>View Demo</button></Link>
                                <Link target={"_blank"} href={"https://github.com/nazmulrony/Creative-canvas-client"}><button className='px-6 py-2 bg-brand '>View Code</button></Link>
                            </div>
                        </div>
                        <div className='col-span-4 md:col-span-1 shadow-xl bg-zinc-900 shadow-black/40 rounded-xl p-4'>
                            <h2 className='text-brand'>Technologies</h2>
                            <p className='flex items-center gap-1 my-2'><BsGearFill />Javascript</p>
                            <p className='flex items-center gap-1 my-2'><BsGearFill />ReactJS</p>
                            <p className='flex items-center gap-1 my-2'><BsGearFill />React Router</p>
                            <p className='flex items-center gap-1 my-2'><BsGearFill />Tailwind CSS</p>
                            <p className='flex items-center gap-1 my-2'><BsGearFill />MongoDB</p>
                            <p className='flex items-center gap-1 my-2'><BsGearFill />NodeJS</p>
                            <p className='flex items-center gap-1 my-2'><BsGearFill />ExpressJS</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreativeCanvas;