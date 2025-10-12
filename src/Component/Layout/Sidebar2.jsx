import { useState, useEffect, useRef, useMemo } from "react";
import { FaHome, FaUser, FaToolbox, FaProjectDiagram, FaEnvelope, FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';
import mypicshort from '../../../public/mypic45.png';
import { FaX } from "react-icons/fa6";

const Sidebar2 = () => {
    const [active, setActive] = useState("home");
    const observer = useRef(null);

    const links = useMemo(() => [
        { id: "home", label: "Home", icon: <FaHome /> },
        { id: "about", label: "About", icon: <FaUser /> },
        { id: "services", label: "Services", icon: <FaToolbox /> },
        { id: "projects", label: "Projects", icon: <FaProjectDiagram /> },
        { id: "contact", label: "Contact", icon: <FaEnvelope /> },
    ], []);

    useEffect(() => {
        const sections = links.map(link => document.getElementById(link.id));

        observer.current = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            {
                root: null,
                rootMargin: "-50% 0px -50% 0px",
                threshold: 0,
            }
        );

        sections.forEach(sec => sec && observer.current.observe(sec));

        return () => {
            sections.forEach(sec => sec && observer.current.unobserve(sec));
        };
    }, [links]);

    const handleClick = (id) => {
        setActive(id);
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div>
            {/* Desktop Sidebar */}
            <div className="sm:hidden md:flex fixed top-0 left-0 h-full w-1/4 bg-gray-900 text-white lg:flex flex-col p-6 z-50">

                {/* Profile Section */}
                <div className="flex flex-col items-center p-4">
                    <div className="rounded-full bg-[#54B689] overflow-hidden h-20 w-20">
                        <img
                            src={mypicshort}
                            alt="Profile"
                            className="object-cover h-full w-full"
                        />
                    </div>
                    <div className="py-3 text-neutral-100 text-center">
                        <h3 className="font-bold text-2xl">Arif Hossen</h3>
                        <h5 className="font-bold text-sm">Full-Stack Developer</h5>
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-5 py-3">
                        <div className="border p-1 rounded-full">
                            <a
                                href="https://www.facebook.com/mdarifhossen.sagor/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaFacebook className="text-[#54B689] text-xl" />
                            </a>
                        </div>
                        <div className="border p-1 rounded-full">
                            <a
                                href="https://twitter.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaX className="text-[#54B689] text-xl" />
                            </a>
                        </div>
                        <div className="border p-1 rounded-full">
                            <a
                                href="https://github.com/arif1313?tab=repositories"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaGithub className="text-[#54B689] text-xl" />
                            </a>
                        </div>
                        <div className="border p-1 rounded-full">
                            <a
                                href="https://www.linkedin.com/in/arifhossen13/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedin className="text-[#54B689] text-xl" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Navigation Links (center aligned + wider buttons) */}
                <ul className="flex flex-col gap-3 items-center mt-4 w-full">
                    {links.map(link => (
                        <li
                            key={link.id}
                            className={`
                w-[70%] cursor-pointer flex items-center justify-center gap-3 
                py-3 rounded-lg transition-all duration-300 transform text-center
                ${active === link.id
                                    ? "bg-[#54B689] text-white border-l-4 border-white"
                                    : "hover:bg-[#54B689] hover:text-white hover:scale-105"
                                }
            `}
                            onClick={() => handleClick(link.id)}
                        >
                            <div className="flex items-center justify-center gap-3">
                                <span className="text-xl">{link.icon}</span>
                                <span className="text-lg font-medium">{link.label}</span>
                            </div>
                        </li>
                    ))}
                </ul>

            </div>

            {/* Mobile Bottom Navbar */}
            <div className="md:hidden fixed bottom-0 left-0 w-full bg-gray-900 text-white flex justify-around p-2 shadow-lg z-50">
                {links.map(link => (
                    <button
                        key={link.id}
                        className={`
                            flex flex-col items-center justify-center p-2 rounded-lg transition-all duration-300 transform
                            ${active === link.id
                                ? "bg-green-500 text-white scale-110"
                                : "text-gray-300 hover:bg-gray-700 hover:text-white hover:scale-110"
                            }
                        `}
                        onClick={() => handleClick(link.id)}
                    >
                        {link.icon}
                        <span className="text-xs mt-1">{link.label}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Sidebar2;
