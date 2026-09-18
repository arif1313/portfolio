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
            <div className="hidden md:block sticky top-0 z-50 border-b border-white/10 bg-[#050c0d]/90 backdrop-blur-xl shadow-[0_12px_28px_rgba(0,0,0,0.32)]">
                <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between gap-4  py-4 ">
                    <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-[#28e98c]/70 bg-[#0a1716] text-sm font-bold text-[#28e98c] shadow-[0_0_18px_rgba(40,233,140,0.25)]">
                            AH
                        </div>

                        <div>
                            <h3 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#eefdf6]">Arif Hossen</h3>
                            <p className="text-[9px] uppercase tracking-[0.28em] text-[#28e98c]">MERN Stack Developer</p>
                        </div>
                    </div>

                    <nav className="flex items-center gap-2 rounded-full border border-white/10 bg-[#0c1716]/90 p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                        {links.map(link => (
                            <button
                                key={link.id}
                                onClick={() => handleClick(link.id)}
                                className={`
                                    rounded-full px-4 py-2 text-[11px] font-medium uppercase tracking-[0.12em] transition-all duration-300 whitespace-nowrap
                                    ${active === link.id
                                        ? "bg-[#28e98c] text-[#07110d] shadow-[0_10px_25px_rgba(40,233,140,0.28)]"
                                        : "text-[#eefdf6] hover:bg-white/5 hover:text-white"
                                    }
                                `}
                            >
                                {link.label}
                            </button>
                        ))}
                    </nav>

                    <a
                        href="#contact"
                        onClick={(e) => {
                            e.preventDefault();
                            handleClick("contact");
                        }}
                        className="rounded-full border border-[#28e98c]/60 bg-[#0d1715] px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.12em] text-[#eefdf6] transition-all duration-300 hover:bg-[#28e98c] hover:text-[#07110d]"
                    >
                        Download CV
                    </a>
                </div>
            </div>

            <div className="md:hidden fixed bottom-0 left-0 w-full bg-slate-950/90 text-white flex justify-around p-2 shadow-lg z-50 backdrop-blur-xl border-t border-white/10">
                {links.map(link => (
                    <button
                        key={link.id}
                        className={`
                            flex flex-col items-center justify-center p-2 rounded-xl transition-all duration-300 transform
                            ${active === link.id
                                ? "bg-[#28e98c] text-[#07110d] scale-105"
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
