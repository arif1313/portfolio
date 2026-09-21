import TypeAnimate from "../TypeAnimate/TypeAnimate";
import pic from "../../../public/mypic5out.png";
import "./roted.css";
import WhatDo from "../WhatDo/WhatDo";
import Stat from "../Stat/Stat";
import Woks from "../WhatDo/Woks";
import { Helmet, HelmetProvider } from 'react-helmet-async';
const Home4 = () => {
    const handleHireMeClick = () => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="w-full min-w-0 overflow-hidden bg-[#07110d] px-4 py-8 md:px-8 lg:px-10 lg:py-10">
            <div className=" max-w-[1400px] mx-auto flex flex-col items-center justify-between gap-10 lg:flex-row">
            <div className="min-w-0 max-w-full flex-1 text-center lg:text-left">
                    <p className="mb-4 text-sm font-medium uppercase tracking-[0.32em] text-[#28e98c]">
                        Hello, I am
                    </p>
                    <h2 className="text-3xl font-semibold text-[#eefdf6] lg:text-5xl">
                        <span className="mt-2 block text-[#eefdf6]">MD. Arif Hossen</span>
                        <span className="mt-2 block text-sm font-medium uppercase tracking-[0.18em] text-[#28e98c] lg:text-lg">
                            MERN Stack Developer
                        </span>
                    </h2>

                    <div className="mt-5 text-lg font-medium text-[#dfeff0] lg:text-2xl">
                        <TypeAnimate />
                    </div>

                    <p className="mt-6 max-w-xl text-base leading-8 text-[#b7d9ca] lg:text-lg">
                        I build modern, scalable web apps with clean code, responsive design,
                        and smooth user experiences across the full development stack.
                    </p>

                    <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
                        <button
                            onClick={handleHireMeClick}
                            className="inline-flex items-center justify-center rounded-xl bg-[#28e98c] px-6 py-3 text-base font-semibold text-[#07110d] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#71f5b1]"
                        >
                            Hire me
                        </button>

                        <a
                            href=""
                            download="Md Arif resume"
                            className="inline-flex items-center justify-center rounded-xl border border-[#28e98c]/40 bg-[#0b1715] px-6 py-3 text-base font-semibold text-[#28e98c] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#28e98c] hover:text-[#07110d]"
                        >
                            Download CV
                        </a>
                    </div>

                    <div className="mt-8 flex items-center justify-center gap-4 lg:justify-start">
                        {[
                            { label: 'f', href: 'https://www.facebook.com/mdarifhossen.sagor/' },
                            { label: 'x', href: 'https://twitter.com/' },
                            { label: 'g', href: 'https://github.com/arif1313?tab=repositories' },
                            { label: 'in', href: 'https://www.linkedin.com/in/arifhossen13/' },
                        ].map((item, idx) => (
                            <a
                                key={idx}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#28e98c]/25 bg-[#0d1715] text-sm font-bold text-[#28e98c] transition-all duration-300 hover:bg-[#28e98c] hover:text-[#07110d]"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="flex flex-1 items-center justify-center lg:justify-end">
                    <div className="relative h-64 w-64 md:h-80 md:w-80">
                        <div className="absolute inset-0 rounded-full border border-[#28e98c]/25"></div>
                        <div className="absolute inset-5 rounded-full border border-[#28e98c]/15"></div>
                        <div className="absolute inset-0 orbit">
                            <div className="bubble absolute top-1/2 left-0 -translate-y-1/2 h-4 w-4 rounded-full bg-[#28e98c] shadow-[0_0_18px_rgba(40,233,140,0.9)]"></div>
                            <div className="bubble absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-[#71f5b1] shadow-[0_0_18px_rgba(113,245,177,0.9)]"></div>
                        </div>

                        <div className="relative z-10 h-full w-full overflow-hidden rounded-full border-4 border-[#28e98c]/80 bg-slate-900 shadow-[0_25px_60px_rgba(40,233,140,0.18)]">
                            <img
                                className="h-full w-full object-cover"
                                src={pic}
                                alt="MD Arif Hossen"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-16">
                <Stat />
            </div>

            <div className="mt-8">
                <Woks />
            </div>
        </div>
    );
};

export default Home4;
