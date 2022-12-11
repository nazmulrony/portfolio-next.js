import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { GoPrimitiveDot } from 'react-icons/go';
import { BsGearFill } from 'react-icons/bs';
import Link from 'next/link';

const PhoneKinun = () => {
    return (
        <div id='about' className="w-full">
            <div className="max-w-[1240px] w-full h-full mx-auto grid place-items-center px-4 py-16">
                <div>
                    <h2 className='text-left md:text-4xl my-2 text-brand'>Phone Kinun</h2>
                    <Carousel>
                        <div>
                            <img src="/assets/projects/phone-kinun/1.png" />
                        </div>
                        <div>
                            <img src="/assets/projects/phone-kinun/2.png" />
                        </div>
                        <div>
                            <img src="/assets/projects/phone-kinun/3.png" />
                        </div>
                    </Carousel>
                    <div className='grid md:grid-cols-5 gap-6'>
                        <div className='md:col-span-4'>
                            <p className='text-lg uppercase text-brand tracking-widest font-semibold'>Project</p>
                            <h2 className='md:text-4xl mb-4'>Overview</h2>
                            <p className='my-2'> <GoPrimitiveDot className='inline' />This is a full-stack CRUD operation-based web application created using ReactJS, NodeJS, ExpressJs, and MongoDB. </p>
                            <p className='my-2'> <GoPrimitiveDot className='inline' />Regular users can book any product or can add any product to their wishlist. From my order or wishlist, they can complete the payment process for a specific product.</p>
                            <p className='my-2'> <GoPrimitiveDot className='inline' />Payment functionality is implemented using the stripe payment gateway.</p>
                            <p className='my-2'> <GoPrimitiveDot className='inline' />Sellers can add new products for selling. They can manage their added products. They can also advertise their products</p>
                            <p className='my-2'> <GoPrimitiveDot className='inline' />Admin can manage both buyers and sellers. He can also verify a specific seller.</p>
                            <p className='my-2'> <GoPrimitiveDot className='inline' />For user authentication, firebase auth has been used. User authorization is integrated using JWT.</p>
                            <p className='my-2'> <GoPrimitiveDot className='inline' />User-specific private routes have been used to protect the admin routes, seller routes, and buyer routes.</p>
                            <p className='my-2'> <GoPrimitiveDot className='inline' />AXIOS and React query have been used for dealing with APIs</p>
                            <div className='mt-4 flex items-center gap-6'>
                                <Link target={"_blank"} href={"https://phone-kinun.web.app/"}><button className='px-6 py-2 bg-brand '>View Demo</button></Link>
                                <Link target={"_blank"} href={"https://github.com/nazmulrony/phone-kinun-client"}><button className='px-6 py-2 bg-brand '>View Code</button></Link>
                            </div>
                        </div>
                        <div className='md:col-span-1 shadow-xl bg-zinc-900 shadow-black/40 rounded-xl p-4'>
                            <h2 className='text-brand'>Technologies</h2>
                            <p className='flex items-center gap-1 my-2'><BsGearFill />Javascript</p>
                            <p className='flex items-center gap-1 my-2'><BsGearFill />ReactJS</p>
                            <p className='flex items-center gap-1 my-2'><BsGearFill />Tailwind CSS</p>
                            <p className='flex items-center gap-1 my-2'><BsGearFill />React Router</p>
                            <p className='flex items-center gap-1 my-2'><BsGearFill />NodeJS</p>
                            <p className='flex items-center gap-1 my-2'><BsGearFill />ExpressJS</p>
                            <p className='flex items-center gap-1 my-2'><BsGearFill />MongoDB</p>
                            <p className='flex items-center gap-1 my-2'><BsGearFill />AXIOS</p>
                            <p className='flex items-center gap-1 my-2'><BsGearFill />React Hook Form</p>
                            <p className='flex items-center gap-1 my-2'><BsGearFill />JSON Web Token</p>
                            <p className='flex items-center gap-1 my-2'><BsGearFill />Firebase Authentication</p>
                            <p className='flex items-center gap-1 my-2'><BsGearFill />React Query</p>
                        </div>

                    </div>
                    <Link href={"/#projects"} className="border-b border-brand text-brand inline-block mt-6 ">Back</Link>
                </div>

            </div>
        </div>
    );
};

export default PhoneKinun;