import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';

const Contact = () => {

    useEffect(() => {
        window.onbeforeunload = () => {
            for (const form of document.getElementsByTagName('form')) {
                form.reset();
            }
        }
    })
    return (
        <div id='contact' className="w-full ">
            <div className="max-w-[1240px] w-full h-full mx-auto  px-4 py-16">
                <p className='text-brand uppercase text-lg font-semibold tracking-widest'>Contact me</p>
                <div className='grid place-items-center gap-10 md:grid-cols-2'>
                    <div className='w-full'>
                        <Image src={"/assets/email.png"} alt="" width={900} height={600} />
                    </div>
                    <div className='w-full'>
                        <form action="https://formspree.io/f/xaykrvqy" method='POST' className='bg-zinc-900 flex flex-col lg:p-20 p-6 rounded-lg shadow-lg shadow-black/40 '>
                            <div>
                                <label htmlFor="">Name</label>
                                <input
                                    type="text"
                                    name='name'
                                    required
                                    placeholder='Enter your name'
                                    className='p-2 rounded-lg border-brand border w-full my-2 text-dark'
                                />
                                <label htmlFor="">Phone</label>
                                <input
                                    type="text"
                                    name='phone'
                                    required
                                    placeholder='Enter your phone'
                                    className='p-2 rounded-lg border-brand border w-full my-2 text-dark'
                                />
                                <label htmlFor="">Email</label>
                                <input
                                    type="email"
                                    name='email'
                                    required
                                    placeholder='Enter your email'
                                    className='p-2 rounded-lg border-brand border w-full my-2 text-dark'
                                />
                                <label htmlFor="">Message</label>
                                <textarea
                                    type="text"
                                    name='message'
                                    rows={6}
                                    required
                                    placeholder='Type your message'
                                    className='p-2 rounded-lg border-brand border w-full text-dark'
                                />
                                <button className='py-2 px-6 bg-brand mt-3 w-full'>Send Message</button>
                            </div>


                        </form>
                    </div>
                </div>
                <div className='flex justify-center mt-20'>
                    <Link href={"/"} className="mx-auto bg-zinc-900 rounded-full p-3"><BsFillArrowUpCircleFill className='text-brand' size={30} /></Link>
                </div>
            </div>
        </div>
    );
};

export default Contact;