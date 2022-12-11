import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { GoPrimitiveDot } from 'react-icons/go';
import { BsGearFill } from 'react-icons/bs';
import Link from 'next/link';

const ESkills = () => {
    return (
        <div id='about' className="w-full">
            <div className="max-w-[1240px] w-full h-full mx-auto grid place-items-center px-4 py-16">
                <div>
                    <h2 className='text-left md:text-4xl my-2 text-brand'>Creative Canvas</h2>
                    <div className='w-full'>
                        <Carousel className=''>
                            <div>
                                <img src="/assets/projects/e-skill/1.png" />
                            </div>
                            <div>
                                <img src="/assets/projects/e-skill/2.png" />
                            </div>
                            <div>
                                <img src="/assets/projects/e-skill/3.png" />
                            </div>
                        </Carousel>
                    </div>
                    <div className='grid md:grid-cols-5 gap-6'>
                        <div className='md:col-span-4'>
                            <p className='text-lg uppercase text-brand tracking-widest font-semibold'>Project</p>
                            <h2 className='md:text-4xl mb-4'>Overview</h2>
                            <p className='my-2'> <GoPrimitiveDot className='inline' />This is about an online learning platform inspired form udemy. I built this project using React JS and Express JS. </p>
                            <p className='my-2'> <GoPrimitiveDot className='inline' />In this project, you can sign up using your email and password, or you can login with google or GitHub. These user authentication systems are integrated using firebase authentication.</p>
                            <p className='my-2'> <GoPrimitiveDot className='inline' />For this project I created an API using Express JS. Total 6 categories of courses and 30 courses data was created for this API. This API was used for this project.</p>
                            <p className='my-2'> <GoPrimitiveDot className='inline' />This project provides a user-friendly UI created with React JS and Tailwind CSS.</p>
                            <p className='my-2'> <GoPrimitiveDot className='inline' />The home page contains a stunning landing page. In the courses tab, you will find the courses based on their categories. You can click on a course to see its all details</p>
                            <p className='my-2'> <GoPrimitiveDot className='inline' />A pdf downloading system is also integrated which contains the detailed information in a pdf file.</p>
                            <p className='my-2'> <GoPrimitiveDot className='inline' />Private route was used to secure the pages that can not be visited without login.</p>
                            <p className='my-2'> <GoPrimitiveDot className='inline' />This is also responsive for mobile devices which also looks really great.</p>
                            <div className='mt-4 flex items-center gap-6'>
                                <Link target={"_blank"} href={"https://e-skill-f39eb.web.app/"}><button className='px-6 py-2 bg-brand '>View Demo</button></Link>
                                <Link target={"_blank"} href={"https://github.com/nazmulrony/E-Skill-client"}><button className='px-6 py-2 bg-brand '>View Code</button></Link>
                            </div>
                        </div>
                        <div className='md:col-span-1 shadow-xl bg-zinc-900 shadow-black/40 rounded-xl p-4'>
                            <h2 className='text-brand'>Technologies</h2>
                            <p className='flex items-center gap-1 my-2'><BsGearFill />Javascript</p>
                            <p className='flex items-center gap-1 my-2'><BsGearFill />ReactJS</p>
                            <p className='flex items-center gap-1 my-2'><BsGearFill />React Router</p>
                            <p className='flex items-center gap-1 my-2'><BsGearFill />Tailwind CSS</p>
                            <p className='flex items-center gap-1 my-2'><BsGearFill />NodeJS</p>
                            <p className='flex items-center gap-1 my-2'><BsGearFill />ExpressJS</p>
                            <p className='flex items-center gap-1 my-2'><BsGearFill />Firebase</p>
                        </div>

                    </div>
                    <Link href={"/#projects"} className="border-b border-brand text-brand inline-block mt-6 ">Back</Link>
                </div>
            </div>
        </div>
    );
};

export default ESkills;