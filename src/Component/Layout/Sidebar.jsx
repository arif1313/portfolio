// src/components/Sidebar.js

import { CgMail } from 'react-icons/cg';
import mypic from '../../../public/mypic5out.png';
import mypicshort from '../../../public/mypic45.png';
import { FaHome, FaUser, FaToolbox, FaProjectDiagram, FaEnvelope, FaWhatsapp, FaFacebookMessenger, FaLinkedin, FaMailBulk, FaFacebook, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaX } from 'react-icons/fa6';

const Sidebar = () => {
    const links2 =
        <>
            <li> <Link to="home2"

                smooth={true}
                spy={true}
                offset={-100} activeClass=""
                className="block "
            >
                Home
            </Link>
            </li>
            <li>
                <Link to="about"

                    smooth={true}
                    spy={true}
                    offset={-100} activeClass=""
                    className="block "
                >
                    About
                </Link>
            </li>
            <li>
                <Link to="service"

                    smooth={true}
                    spy={true}
                    offset={-100} activeClass=""
                    className="block "
                >
                    Services
                </Link>
            </li>

            <li>  <Link to="project"

                smooth={true}
                spy={true}
                offset={-100} activeClass=""
                className="block "
            >
                Project
            </Link></li>

            <li> <Link to="contact"

                smooth={true}
                spy={true}
                offset={-100} activeClass=""
                className="block "
            >
                Contact
            </Link></li>
        </>
    const links = [
        { to: "/", label: "Home", icon: <FaHome /> },
        { to: "/about", label: "About", icon: <FaUser /> },
        { to: "/services", label: "Services", icon: <FaToolbox /> },
        { to: "/projects", label: "Projects", icon: <FaProjectDiagram /> },
        { to: "/contact", label: "Contact", icon: <FaEnvelope /> },
    ];

    return (
        <div className="fixed top-0 left-0 w-1/3 h-full bg-gray-200  border-r-4 border-[#54B689]  flex">
            <div className='w-1/4 bg-[#292929]'> icon</div>
            <div className='bg-[#4F4F4F] w-full flex flex-col items-center ' id='div1'>
                <div className=" flex flex-col items-center p-4">
                    <div className=" rounded-full bg-[#54B689] overflow-hidden h-20 w-20">
                        <img src={mypicshort} alt="Profile" className="object-cover h-full w-full" />
                    </div>
                    <div className='py-3  text-neutral-100 '>
                        <h3 className='font-bold text-2xl'>Arif Hossen</h3>
                        <h5 className='font-bold text-sm'>Full-Stack Devloper</h5>
                    </div>
                    <div className=''>

                        <div className='flex gap-5 py-3 '>
                            <div className='border p-1  rounded-full'>
                                <FaFacebook className='rounded-full text-[#54B689]'></FaFacebook>
                            </div>
                            <div className='border p-1  rounded-full'>
                                <FaX className='rounded-full text-[#54B689]'></FaX>
                            </div>
                            <div className='border p-1  rounded-full'>
                                <FaInstagram className='rounded-full text-[#54B689]'></FaInstagram>
                            </div>
                            <div className='border p-1  rounded-full'>
                                <FaLinkedin className='rounded-full text-[#54B689]'></FaLinkedin>
                            </div>
                        </div>
                    </div>
                </div>


                <div>

                    <hr className='' />
                    <ul className="space-y-2 overflow-y-auto py-3 text-neutral-100">
                        {links.map((link, index) => (
                            <li key={index} className="flex items-center cursor-pointer hover:bg-gray-300 p-2 rounded">
                                <Link to={link.to} className="flex items-center w-full">
                                    <span className="mr-2">{link.icon}</span>
                                    <span>{link.label}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Sidebar;
