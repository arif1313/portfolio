import TypeAnimate from "../TypeAnimate/TypeAnimate";

import pic from '../../../public/mypic5out.png';
import Sidebar from "../Layout/Sidebar";
import './roted.css'
import WhatDo from "../WhatDo/WhatDo";
import Stat from "../Stat/Stat";
import Button1 from "../Button/Button1";
import Woks from "../WhatDo/Woks";
import Projects from "../Projects/Projects";
const Home4 = () => {
    return (

        <div className="pl-96 py-32 pr-5 bg-[#292929] ">
            <div className="flex  justify-around ">
                <div>
                    <Sidebar />
                </div>
                <div className="xl:flex  justify-center items-center">
                    <div className=" flex justify-center  ">
                        <div>
                            <h2 className="text-xl lg:text-2xl font-bold text-TextWhite text-left ">Hello, I am

                                <span className="block text-[#28E98C] text-xl lg:text-4xl font-bold"> MD Arif Hossen</span></h2>

                            <h2 className="mt-5 text-textBlack font-bold">
                                <TypeAnimate />

                            </h2>


                            <div className="py-5">
                                <p className="text-neutral-100">Im a software engineer specializing in scalable web apps. Explore my <span className="text-[#28E98c]">blog, project portfolio and online resume.</span>

                                </p>
                            </div>
                            <div className=" flex gap-5 py-10 ">
                                <Button1 link={''} title={'Hire me'}></Button1>
                                <div>
                                    <a href={''} download='Md Arif resume' className="btn bg-[#1a5e3d] text-[#28E98C] border-none hover:text-neutral-100 py-2 px-4 rounded-md hover:bg-[#28E98C]">
                                        Download CV
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center py-10">
                        <div className="relative w-80 h-80  "> {/* Increase width and height */}
                            <div className="rotating-bg absolute top-0 left-0 w-full h-full bg-[#28E98C] z-0"></div>
                            <div className='relative bg-neutral-100 w-full h-full z-10'>
                                <img className="w-full h-full object-cover" src={pic} alt="Static image" /> {/* Ensure image scales correctly */}
                            </div>
                        </div>
                    </div>





                </div>
            </div>
            <Stat></Stat>
            <hr />
            <WhatDo headingTitle={'What I do '} headingDescrip={`I have more than 1 years experience building Website for clients all over the world. Below is a quick overview of my main technical skill sets and technologies I use. Want to find out more about my experience? Check out my <span className="text-[#28E98C]">online resume</span> and <span className="text-[#28E98C]">project portfolio</span>.`}></WhatDo>
            <Woks></Woks>
            <Projects></Projects>
        </div>
    );
};

export default Home4;