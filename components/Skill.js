import Image from "next/image";


const Skill = ({ skill }) => {
    const skillWidth = `w-[${skill.knowledge}%]`
    console.log(typeof skillWidth);
    return (
        <div className="rounded-lg grid grid-cols-3 bg-zinc-900 p-10 shadow-lg shadow-black/40">
            <Image src={skill.photo} alt="" width={64} height={64} />
            <div className="col-span-2">
                <p className="text-brand text-lg font-semibold">{skill.name} {skillWidth}</p>
                <div className="bg-brand/20 h-2 mt-4 w-full rounded-full">
                    {/* <div className={`w-[86%]  h-2 rounded-full bg-brand`}></div> */}
                    <div className={`${skillWidth} bg-brand h-2 rounded-full`}></div>
                </div>
            </div>

        </div>
    );
};

export default Skill;