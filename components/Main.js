import Image from 'next/image';
import React from 'react';
import { AiFillMail } from 'react-icons/ai';
import { FaFacebook, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
    return (
        <div className='w-full min-h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto grid place-items-center py-8 px-4'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-10 place-items-center'>
                    <div className='rounded-lg overflow-hidden border-brand border-2'>
                        <Image src={"/assets/profile.jpg"} alt='profile' width={500} height={500} />
                    </div>
                    <div className='md:col-span-2'>
                        <h1 className='lg:text-6xl'>Hi there,</h1>
                        <h1 className='lg:text-6xl my-4'>I am <span className='text-brand'>Md. Nazmul Hasan Rony</span></h1>
                        <h2 className='mb-4 md:text-4xl'>A Front-End Web Developer</h2>
                        <p>
                            I enjoy creating reliable, scalable frontend applications with excellent user experiences. I am now focusing on developing responsive front-end apps while learning about back-end technologies.
                        </p>
                        <a href="https://drive.google.com/uc?export=download&id=1bEYiQs7V8h83BG19TlIKcNvuBjdB3_49"><button className='bg-brand px-6 py-2 my-4'>Resume</button></a>
                        <div className='flex justify-center gap-6'>
                            <div className='p-2 cursor-pointer rounded-full bg-zinc-900 shadow-lg shadow-black/50 hover:scale-110 duration-300'>
                                <FaLinkedinIn className='text-brand' size={20} />
                            </div>
                            <div className='p-2 cursor-pointer rounded-full bg-zinc-900 shadow-lg shadow-black/50 hover:scale-110 duration-300'>
                                <FaGithub className='text-brand' size={20} />
                            </div>
                            <div className='p-2 cursor-pointer rounded-full bg-zinc-900 shadow-lg shadow-black/50 hover:scale-110 duration-300'>
                                <AiFillMail className='text-brand' size={20} />
                            </div>
                            <div className='p-2 cursor-pointer rounded-full bg-zinc-900 shadow-lg shadow-black/50 hover:scale-110 duration-300'>
                                <FaFacebook className='text-brand' size={20} />
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Main;