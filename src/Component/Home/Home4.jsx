import TypeAnimate from "../TypeAnimate/TypeAnimate";

import pic from '../../../public/mypic5out.png';
import Sidebar from "../Layout/Sidebar";
import './roted.css'
const Home4 = () => {
    return (

        <div className="pl-96 bg-[#292929] ">
            <div className="flex  justify-around ">
                <div>
                    <Sidebar />
                </div>
                <div className="xl:flex  justify-center items-center">
                    <div className="p-5  pt-32 flex justify-center  ">
                        <div>
                            <h2 className="text-xl lg:text-2xl font-bold text-TextWhite text-left ">Hello, I am

                                <span className="block text-[#28E98C] text-xl lg:text-4xl font-bold"> MD Arif Hossen</span></h2>

                            <h2 className="mt-5 text-textBlack font-bold">
                                <TypeAnimate />

                            </h2>


                            <div className="py-5">
                                <p className="">Im a software engineer specializing in scalable web apps. Explore my <span className="text-[#28E98c]">blog, project portfolio and online resume.</span>

                                </p>
                            </div>
                            <div className=" flex gap-5 mt-5 ">
                                <div>
                                    <a href={''} download='Md Arif resume' className="btn bg-[#28E98C] text-TextWhite border-none font-bold py-2 px-4 rounded-md hover:bg-hoverButton">
                                        Hire me
                                    </a>
                                </div>
                                <div>
                                    <a href={''} download='Md Arif resume' className="btn bg-[#1a5e3d] text-[#28E98C] border-none hover:text-TextWhite py-2 px-4 rounded-md hover:bg-[#F59E0B]">
                                        Download CV
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center py-10">
                        <div className="relative w-72 h-72  "> {/* Increase width and height */}
                            <div className="rotating-bg absolute top-0 left-0 w-full h-full bg-[#28E98C] z-0"></div>
                            <div className='relative bg-neutral-100 w-full h-full z-10'>
                                <img className="w-full h-full object-cover" src={pic} alt="Static image" /> {/* Ensure image scales correctly */}
                            </div>
                        </div>
                    </div>





                </div>
            </div>
            <div className="stats shadow bg-[#292929]">
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-8 w-8 stroke-current">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </div>
                    <div className="stat-title">Downloads</div>
                    <div className="stat-value">31K</div>
                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-8 w-8 stroke-current">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                        </svg>
                    </div>
                    <div className="stat-title">New Users</div>
                    <div className="stat-value">4,200</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-8 w-8 stroke-current">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
                        </svg>
                    </div>
                    <div className="stat-title">New Registers</div>
                    <div className="stat-value">1,200</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>
            </div>
        </div>
    );
};

export default Home4;