import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { GoPrimitiveDot } from 'react-icons/go';
import { BsGearFill } from 'react-icons/bs';
import Link from 'next/link';

const DentalLab = () => {
    return (
        <div id='about' className="w-full">
            <div className="max-w-[1240px] w-full h-full mx-auto grid place-items-center px-4 py-16">
                <div>
                    <h2 className='text-left md:text-4xl my-2 text-brand'>Dental Lab</h2>
                    <Carousel>
                        <div>
                            <img src="/assets/projects/dental-lab/2.png" />
                        </div>
                        <div>
                            <img src="/assets/projects/dental-lab/3.png" />
                        </div>
                        <div>
                            <img src="/assets/projects/dental-lab/4.png" />
                        </div>
                    </Carousel>
                    <div className='grid md:grid-cols-5 gap-6'>
                        <div className='md:col-span-4'>
                            <p className='text-lg uppercase text-brand tracking-widest font-semibold'>Project</p>
                            <h2 className='md:text-4xl mb-4'>Overview</h2>
                            <p className='my-2'> <GoPrimitiveDot className='inline' />A Full-stack CRUD operation-based application where users can book appointments and pay for a specific appointment.</p>
                            <p className='my-2'> <GoPrimitiveDot className='inline' />Users can only book only one appointment for e specific service on a specific date.</p>
                            <p className='my-2'> <GoPrimitiveDot className='inline' />Admin can add doctors, manage them, and also can delete them. Admin can view user list and make users admin.</p>
                            <p className='my-2'> <GoPrimitiveDot className='inline' />The modern UI design is implemented using Tailwind CSS.</p>
                            <p className='my-2'> <GoPrimitiveDot className='inline' />User authentication and user authorization are implemented using firebase authentication and JWT.</p>
                            <p className='my-2'> <GoPrimitiveDot className='inline' />The payment system is integrated using the Stripe payment gateway.</p>
                            <p className='my-2'> <GoPrimitiveDot className='inline' />Private has been used to secure user-specific routes.</p>
                            <p className='my-2'> <GoPrimitiveDot className='inline' />Spinner has been used for a better user experience.</p>
                            <p className='my-2'> <GoPrimitiveDot className='inline' />APIs are handled using React Query.</p>
                            <p className='my-2'> <GoPrimitiveDot className='inline' />React Hook Form has been used for form validation.</p>
                            <div className='mt-4 flex items-center gap-6'>
                                <Link target={"_blank"} href={"https://dental-lab-7c086.web.app/"}><button className='px-6 py-2 bg-brand '>View Demo</button></Link>
                                <Link target={"_blank"} href={"https://github.com/nazmulrony/dental-lab-client"}><button className='px-6 py-2 bg-brand '>View Code</button></Link>
                            </div>
                        </div>
                        <div className='md:col-span-1 shadow-xl bg-zinc-900 shadow-black/40 rounded-xl p-4'>
                            <h2 className='text-brand'>Technologies</h2>
                            <p className='flex items-center gap-1 my-2'><BsGearFill />Javascript</p>
                            <p className='flex items-center gap-1 my-2'><BsGearFill />ReactJS</p>
                            <p className='flex items-center gap-1 my-2'><BsGearFill />React Router</p>
                            <p className='flex items-center gap-1 my-2'><BsGearFill />Tailwind CSS</p>
                            <p className='flex items-center gap-1 my-2'><BsGearFill />NodeJS</p>
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

export default DentalLab;