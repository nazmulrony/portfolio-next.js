import Image from 'next/image';

const About = () => {
    return (
        <div id='about' className="w-full">
            <div className="max-w-[1240px] w-full h-full mx-auto grid place-items-center px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-10">
                    <div className="md:col-span-2">
                        <p className="text-lg uppercase text-brand tracking-widest font-semibold">About me</p>
                        <h2 className="md:text-4xl">Who I am</h2>
                        <p className="my-3">
                            I am a Frontend Developer based in Bangladesh. I graduated in Computer Science and Telecommunication Engineering from Noakhali Science and Technology University in 2022 with a CGPA of 3.59. During my graduation, I learned HTML CSS, BootStrap, and a little bit of Javascript and built a few projects for my academic purpose.
                        </p>
                        <p>In 2022, I began exploring javascript in depth. I have studied advanced React after learning the fundamentals of javascript. I have accomplished a number of projects with React. I have also worked with NodeJS and ExpressJS, as well as MongoDB. My goal is to become a full-stack developer, so I am studying the latest technologies in full-stack development.</p>
                    </div>
                    <div>
                        <Image src={"/assets/about.jpg"} alt='' width={500} height={500} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;