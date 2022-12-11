import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiFillMail, AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn, FaMailBulk } from 'react-icons/fa';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    }
    return (
        <div className=' py-4 sticky top-0 z-50 shadow-lg shadow-black/10 bg-dark'>
            <div className='flex justify-between items-center px-4 lg:px-16'>
                <div className="grid place-items-center ">
                    <Link href={"/"}>
                        <Image src="/assets/logo.png" alt="/" width={40} height={40} />
                    </Link>

                </div>
                <ul className="hidden md:flex gap-8 uppercase">
                    <Link href="/">
                        <li className=" hover:border-b border-brand duration-150">Home</li>
                    </Link>
                    <Link href='/#about'>
                        <li className="hover:border-b border-brand duration-150">About</li>
                    </Link>
                    <Link href='#skills'>
                        <li className="hover:border-b border-brand duration-150">Skills</li>
                    </Link>
                    <Link href="#projects">
                        <li className="hover:border-b border-brand duration-150">Projects</li>
                    </Link>
                    <Link href="/#contact">
                        <li className="hover:border-b border-brand duration-150">Contact</li>
                    </Link>
                    <Link href="/#blogs">
                        <li className="hover:border-b border-brand duration-150">Blogs</li>
                    </Link>
                </ul>
                <div onClick={handleNav} className="md:hidden">
                    <AiOutlineMenu size={25} />
                </div>
            </div>
            <div className={nav ? 'fixed top-0 left-0 w-full h-screen bg-black/70 md:hidden' : ''}>
                <div className={nav ? 'fixed top-0 left-0 w-[75%] sm:w-[60%] md:w-[40%] h-screen p-10 bg-dark ease-in duration-500' :
                    'fixed top-0 left-[-100%]  p-10 bg-dark ease-in duration-500'
                }>
                    <div className=" w-full flex justify-between items-center ">
                        <Image src="/assets/logo.png" alt="/" width={40} height={40} />
                        <div onClick={handleNav} className="p-2 rounded-full bg-brand cursor-pointer">
                            <AiOutlineClose size={20} />
                        </div>
                    </div>
                    <div className="py-4">
                        <ul className="uppercase">
                            <Link href="/">
                                <li className="py-4 text-sm">Home</li>
                            </Link>
                            <Link href="/">
                                <li className="py-4 text-sm">About</li>
                            </Link>
                            <Link href="/">
                                <li className="py-4 text-sm">Skills</li>
                            </Link>
                            <Link href="/">
                                <li className="py-4 text-sm">Projects</li>
                            </Link>
                            <Link href="/">
                                <li className="py-4 text-sm">Contact</li>
                            </Link>
                        </ul>
                        <div className="pt-40">
                            <p className="uppercase tracking-widest">Find me on</p>
                            <div className="flex justify-start mt-4 gap-4">
                                <div className="p-3 rounded-full bg-zinc-900  shadow-lg shadow-black/50">
                                    <FaLinkedinIn className="text-brand" />
                                </div>
                                <div className="p-3 rounded-full bg-zinc-900  shadow-lg shadow-black/50">
                                    <FaGithub className="text-brand" />
                                </div>
                                <div className="p-3 rounded-full bg-zinc-900  shadow-lg shadow-black/50">
                                    <AiFillMail className="text-brand" />
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Navbar;