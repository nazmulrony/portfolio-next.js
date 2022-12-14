import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Projects = () => {
    return (
        <div id='projects' className="w-full">
            <div className="max-w-[1240px] w-full h-full mx-auto px-4 py-8 lg:py-16">
                <p className="text-lg uppercase tracking-widest text-brand font-semibold">Projects</p>
                <h2 className='md:text-4xl'>What I Built</h2>
                <div className='grid md:grid-cols-2 p-4 gap-6'>
                    <div className='relative grid place-items-center rounded-lg h-auto group hover:bg-zinc-900 duration-200  shadow-lg shadow-black/40'>
                        <Image src={"/assets/projects/1.png"} alt='' height={500} width={1000} className="rounded-lg group-hover:opacity-5" />
                        <div className='hidden group-hover:block text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                            <h2>Phone Kinun</h2>
                            <p>ReactJS</p>
                            <Link href={"/phone-kinun"}> <button className='px-6 py-2 block mx-auto bg-brand mt-2'>Show Details</button> </Link>
                        </div>
                    </div>
                    <div className='relative grid place-items-center rounded-lg h-auto group hover:bg-zinc-900 duration-200  shadow-lg shadow-black/40'>
                        <Image src={"/assets/projects/2.png"} alt='' height={500} width={1000} className="rounded-lg group-hover:opacity-5" />
                        <div className='hidden group-hover:block text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                            <h2>Creative Canvas</h2>
                            <p>ReactJS</p>
                            <Link href={"/creative-canvas"}> <button className='px-6 py-2 block mx-auto bg-brand mt-2'>Show Details</button> </Link>
                        </div>
                    </div>
                    <div className='relative grid place-items-center rounded-lg h-auto group hover:bg-zinc-900 duration-200  shadow-lg shadow-black/40'>
                        <Image src={"/assets/projects/3.png"} alt='' height={500} width={1000} className="rounded-lg group-hover:opacity-5" />
                        <div className='hidden group-hover:block text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                            <h2>Dental Lab</h2>
                            <p>ReactJS</p>
                            <Link href={"dental-lab"}> <button className='px-6 py-2 block mx-auto bg-brand mt-2'>Show Details</button> </Link>
                        </div>
                    </div>
                    <div className='relative grid place-items-center rounded-lg h-auto group hover:bg-zinc-900 duration-200  shadow-lg shadow-black/40'>
                        <Image src={"/assets/projects/4.png"} alt='' height={500} width={1000} className="rounded-lg group-hover:opacity-5" />
                        <div className='hidden group-hover:block text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                            <h2>E-Skills</h2>
                            <p>ReactJS</p>
                            <Link href={"e-skills"}> <button className='px-6 py-2 block mx-auto bg-brand mt-2'>Show Details</button> </Link>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default Projects;