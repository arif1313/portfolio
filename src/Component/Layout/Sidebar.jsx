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
            <div className=" max-w-[1400px] mx-auto hidden md:flex fixed top-0 left-0 h-full w-[290px] bg-slate-950/90 text-white flex-col p-6 border-r border-white/10 backdrop-blur-xl shadow-[0_0_40px_rgba(0,0,0,0.55)] z-50">
                <div className="flex flex-col items-center px-4 pt-4 pb-6">
                    <div className="rounded-full bg-gradient-to-br from-[#2dd4bf] to-[#0f766e] p-1.5 shadow-[0_0_25px_rgba(45,212,191,0.45)]">
                        <div className="rounded-full overflow-hidden h-24 w-24 border-2 border-white/20">
                            <img
                                src={mypicshort}
                                alt="Profile"
                                className="object-cover h-full w-full"
                            />
                        </div>
                    </div>

                    <div className="py-4 text-center">
                        <h3 className="font-semibold tracking-[0.12em] text-lg uppercase text-slate-100">Arif Hossen</h3>
                        <p className="mt-2 text-xs font-medium uppercase tracking-[0.22em] text-[#2dd4bf]">Full-Stack Developer</p>
                    </div>

                    <div className="flex gap-3 py-2">
                        {[
                            { href: "https://www.facebook.com/mdarifhossen.sagor/", icon: <FaFacebook className="text-lg" /> },
                            { href: "https://twitter.com/", icon: <FaX className="text-lg" /> },
                            { href: "https://github.com/arif1313?tab=repositories", icon: <FaGithub className="text-lg" /> },
                            { href: "https://www.linkedin.com/in/arifhossen13/", icon: <FaLinkedin className="text-lg" /> },
                        ].map((item, idx) => (
                            <a
                                key={idx}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#2dd4bf] transition-all duration-300 hover:bg-[#2dd4bf] hover:text-slate-950 hover:scale-105"
                            >
                                {item.icon}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="mt-6 flex-1">
                    <ul className="flex flex-col gap-3 w-full">
                        {links.map(link => (
                            <li
                                key={link.id}
                                className={`
                                    w-full cursor-pointer rounded-2xl border transition-all duration-300
                                    ${active === link.id
                                        ? "border-[#2dd4bf]/40 bg-[#2dd4bf]/10 text-white shadow-[0_10px_30px_rgba(45,212,191,0.18)]"
                                        : "border-transparent bg-white/0 text-slate-300 hover:border-white/10 hover:bg-white/5 hover:text-white"
                                    }
                                `}
                                onClick={() => handleClick(link.id)}
                            >
                                <div className="flex items-center gap-3 px-4 py-3">
                                    <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${active === link.id ? "bg-[#2dd4bf] text-slate-950" : "bg-slate-800 text-slate-300"}`}>
                                        {link.icon}
                                    </span>
                                    <span className="text-base font-medium tracking-wide">{link.label}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="md:hidden fixed bottom-0 left-0 w-full bg-slate-950/90 text-white flex justify-around p-2 shadow-lg z-50 backdrop-blur-xl border-t border-white/10">
                {links.map(link => (
                    <button
                        key={link.id}
                        className={`
                            flex flex-col items-center justify-center p-2 rounded-xl transition-all duration-300 transform
                            ${active === link.id
                                ? "bg-[#2dd4bf] text-slate-950 scale-105"
                                : "text-slate-300 hover:bg-slate-800 hover:text-white hover:scale-105"
                            }
                        `}
                        onClick={() => handleClick(link.id)}
                    >
                        {link.icon}
                        <span className="text-[10px] mt-1">{link.label}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Sidebar2;
