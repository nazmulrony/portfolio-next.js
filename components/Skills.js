import Image from "next/image";
import Skill from "./Skill";


const Skills = () => {
    const skills = [
        {
            name: 'HTML',
            photo: "/assets/skills/html.png",
            knowledge: 45
        },
        {
            name: 'CSS',
            photo: "/assets/skills/css.png",
            knowledge: 25
        },
        {
            name: 'JavaScript',
            photo: "/assets/skills/javascript.png",
            knowledge: 85
        },
        {
            name: 'React',
            photo: "/assets/skills/react.png",
            knowledge: 46
        },
        {
            name: 'Bootstrap',
            photo: "/assets/skills/bootstrap.png",
            knowledge: 80
        },
        {
            name: 'Tailwind CSS',
            photo: "/assets/skills/tailwind.png",
            knowledge: 80
        },
        {
            name: 'GitHub',
            photo: "/assets/skills/github.png",
            knowledge: 30
        },
        {
            name: 'NextJS',
            photo: "/assets/skills/nextjs.png",
            knowledge: 30
        },
        {
            name: 'NodeJS',
            photo: "/assets/skills/node.png",
            knowledge: 50
        },
        {
            name: 'ExpressJS',
            photo: "/assets/skills/express.png",
            knowledge: 50
        },

        {
            name: 'MongoDB',
            photo: "/assets/skills/mongo.png",
            knowledge: 50
        },
        {
            name: 'Firebase',
            photo: "/assets/skills/firebase.png",
            knowledge: 50
        },
    ]

    return (
        <div id="skills" className="w-full">
            <div className="max-w-[1240px] w-full h-full mx-auto px-4 py-16">
                <p className="text-lg text-brand tracking-widest font-semibold uppercase ">Skills</p>
                <h2 className="md:text-4xl">What I Can Do</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
                    <div className="rounded-lg grid grid-cols-3 bg-zinc-900 p-10 shadow-lg shadow-black/40">
                        <Image src={"/assets/skills/html.png"} alt="" width={64} height={64} />
                        <div className="col-span-2">
                            <p className="text-brand text-lg font-semibold">HTML</p>
                            <div className="bg-brand/20 h-2 mt-4 w-full rounded-full">
                                <div className={`w-[85%] bg-brand h-2 rounded-full`}></div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg grid grid-cols-3 bg-zinc-900 p-10 shadow-lg shadow-black/40">
                        <Image src={"/assets/skills/css.png"} alt="" width={64} height={64} />
                        <div className="col-span-2">
                            <p className="text-brand text-lg font-semibold">CSS</p>
                            <div className="bg-brand/20 h-2 mt-4 w-full rounded-full">
                                <div className={`w-[80%] bg-brand h-2 rounded-full`}></div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg grid grid-cols-3 bg-zinc-900 p-10 shadow-lg shadow-black/40">
                        <Image src={"/assets/skills/javascript.png"} alt="" width={64} height={64} />
                        <div className="col-span-2">
                            <p className="text-brand text-lg font-semibold">JavaScript</p>
                            <div className="bg-brand/20 h-2 mt-4 w-full rounded-full">
                                <div className={`w-[85%] bg-brand h-2 rounded-full`}></div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg grid grid-cols-3 bg-zinc-900 p-10 shadow-lg shadow-black/40">
                        <Image src={"/assets/skills/react.png"} alt="" width={64} height={64} />
                        <div className="col-span-2">
                            <p className="text-brand text-lg font-semibold">React</p>
                            <div className="bg-brand/20 h-2 mt-4 w-full rounded-full">
                                <div className={`w-[75%] bg-brand h-2 rounded-full`}></div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg grid grid-cols-3 bg-zinc-900 p-10 shadow-lg shadow-black/40">
                        <Image src={"/assets/skills/bootstrap.png"} alt="" width={64} height={64} />
                        <div className="col-span-2">
                            <p className="text-brand text-lg font-semibold">Bootstrap</p>
                            <div className="bg-brand/20 h-2 mt-4 w-full rounded-full">
                                <div className={`w-[80%] bg-brand h-2 rounded-full`}></div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg grid grid-cols-3 bg-zinc-900 p-10 shadow-lg shadow-black/40">
                        <Image src={"/assets/skills/tailwind.png"} alt="" width={64} height={64} />
                        <div className="col-span-2">
                            <p className="text-brand text-lg font-semibold">Tailwind CSS</p>
                            <div className="bg-brand/20 h-2 mt-4 w-full rounded-full">
                                <div className={`w-[80%] bg-brand h-2 rounded-full`}></div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg grid grid-cols-3 bg-zinc-900 p-10 shadow-lg shadow-black/40">
                        <Image src={"/assets/skills/github.png"} alt="" width={64} height={64} />
                        <div className="col-span-2">
                            <p className="text-brand text-lg font-semibold">GitHub</p>
                            <div className="bg-brand/20 h-2 mt-4 w-full rounded-full">
                                <div className={`w-[60%] bg-brand h-2 rounded-full`}></div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg grid grid-cols-3 bg-zinc-900 p-10 shadow-lg shadow-black/40">
                        <Image src={"/assets/skills/nextjs.png"} alt="" width={64} height={64} />
                        <div className="col-span-2">
                            <p className="text-brand text-lg font-semibold">NextJS</p>
                            <div className="bg-brand/20 h-2 mt-4 w-full rounded-full">
                                <div className={`w-[30%] bg-brand h-2 rounded-full`}></div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg grid grid-cols-3 bg-zinc-900 p-10 shadow-lg shadow-black/40">
                        <Image src={"/assets/skills/node.png"} alt="" width={64} height={64} />
                        <div className="col-span-2">
                            <p className="text-brand text-lg font-semibold">NodeJS</p>
                            <div className="bg-brand/20 h-2 mt-4 w-full rounded-full">
                                <div className={`w-[50%] bg-brand h-2 rounded-full`}></div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg grid grid-cols-3 bg-zinc-900 p-10 shadow-lg shadow-black/40">
                        <Image src={"/assets/skills/express.png"} alt="" width={64} height={64} />
                        <div className="col-span-2">
                            <p className="text-brand text-lg font-semibold">ExpressJS</p>
                            <div className="bg-brand/20 h-2 mt-4 w-full rounded-full">
                                <div className={`w-[50%] bg-brand h-2 rounded-full`}></div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg grid grid-cols-3 bg-zinc-900 p-10 shadow-lg shadow-black/40">
                        <Image src={"/assets/skills/mongo.png"} alt="" width={64} height={64} />
                        <div className="col-span-2">
                            <p className="text-brand text-lg font-semibold">MongoDB</p>
                            <div className="bg-brand/20 h-2 mt-4 w-full rounded-full">
                                <div className={`w-[50%] bg-brand h-2 rounded-full`}></div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg grid grid-cols-3 bg-zinc-900 p-10 shadow-lg shadow-black/40">
                        <Image src={"/assets/skills/firebase.png"} alt="" width={64} height={64} />
                        <div className="col-span-2">
                            <p className="text-brand text-lg font-semibold">Firebase</p>
                            <div className="bg-brand/20 h-2 mt-4 w-full rounded-full">
                                <div className={`w-[40%] bg-brand h-2 rounded-full`}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;