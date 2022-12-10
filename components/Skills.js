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
        <div className="w-full h-screen">
            <div className="max-w-[1240px] w-full h-full mx-auto px-4">
                <p className="text-lg text-brand tracking-widest font-semibold uppercase ">Skills</p>
                <h2 className="md:text-4xl">What I Can Do</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
                    {
                        skills.map((skill, i) => <Skill key={i} skill={skill} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Skills;