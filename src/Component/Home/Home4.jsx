import TypeAnimate from "../TypeAnimate/TypeAnimate";
import pic from "../../../public/mypic5out.png";
import "./roted.css";
import WhatDo from "../WhatDo/WhatDo";
import Stat from "../Stat/Stat";
import Woks from "../WhatDo/Woks";
import { Button } from "react-scroll";
import { Link } from "react-router-dom";

const Home4 = () => {
    return (
        <div className="bg-[#292929] px-4 md:px-10 lg:px-20 py-10">
            {/* HERO SECTION */}
            <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
                {/* LEFT SIDE */}
                <div className="flex-1 text-center lg:text-left">
                    <h2 className="text-xl lg:text-2xl font-bold text-white">
                        Hello, I am
                        <span className="block text-[#28E98C] text-2xl lg:text-4xl font-bold">
                            MD Arif Hossen
                        </span>
                    </h2>

                    <h2 className="mt-5 text-neutral-300 font-semibold">
                        <TypeAnimate />
                    </h2>

                    <p className="mt-5 text-neutral-100 leading-relaxed">
                        I’m a software engineer specializing in scalable web apps. Explore
                        my <span className="text-[#28E98C]">blog</span>,{" "}
                        <span className="text-[#28E98C]">project portfolio</span>, and{" "}
                        <span className="text-[#28E98C]">online resume</span>.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
                        <Link to="/contact" className="inline-block px-6 py-3 text-black font-bold bg-[#28E98C] rounded-lg hover:bg-[#085c33] transition-all">

                            Hire me

                        </Link>

                        <a
                            href=""
                            download="Md Arif resume"
                            className="inline-block bg-[#1a5e3d] text-[#28E98C] border-none hover:text-neutral-100 py-3 px-6 rounded-md hover:bg-[#28E98C] transition-all"
                        >
                            Download CV
                        </a>
                    </div>
                </div>

                {/* RIGHT SIDE (IMAGE) */}

                <div className="flex-1 flex justify-center items-center mt-10 lg:mt-0">
                    <div className="relative w-64 h-64 md:w-80 md:h-80">
                        {/* Orbit container */}
                        <div className="absolute inset-0 orbit">
                            {/* Bubble 1 */}
                            <div className="bubble absolute top-1/2 left-0 -translate-y-1/2 w-4 h-4 bg-[#28E98C] rounded-full shadow-[0_0_5px_#28E98C,0_0_10px_#28E98C]"></div>
                            {/* Bubble 2 — opposite side */}
                            <div className="bubble absolute top-1/2 right-0 -translate-y-1/2 w-4 h-4 bg-[#28E98C] rounded-full shadow-[0_0_5px_#28E98C,0_0_10px_#28E98C]"></div>
                        </div>

                        {/* Main image container */}
                        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#28E98C] z-10 shadow-lg shadow-[#28E98C]/30">
                            <img
                                className="w-full h-full object-cover"
                                src={pic}
                                alt="MD Arif Hossen"
                            />
                        </div>
                    </div>
                </div>



            </div>

            {/* STATS SECTION */}
            <div className="mt-16">
                <Stat />
            </div>

            <hr className="my-10 border-neutral-700" />

            {/* WHAT I DO SECTION */}
            <WhatDo
                headingTitle={"What I Do"}
                headingDescrip={`I have more than 1 year's experience building websites for clients all over the world. Below is a quick overview of my main technical skills and technologies I use. Want to find out more about my experience? Check out my `}
            >
                <span className="text-[#28E98C]">online resume</span> and{" "}
                <span className="text-[#28E98C]">project portfolio</span>.
            </WhatDo>

            {/* WORKS SECTION */}
            <div className="mt-16">
                <Woks />
            </div>
        </div >
    );
};

export default Home4;
