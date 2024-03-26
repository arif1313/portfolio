import TypeAnimate from "../TypeAnimate/TypeAnimate";
import '../Home/clip.css';

import pic from '../../../public/pic5.png';
import Navbar from "../Navbar/Navbar";
import cv from '../../../public/resume.pdf';

const Home2 = () => {
    return (
        <div className="min-h-screen bg-[#D6DDFA] " id="home2" >

            <Navbar />


            <div className=" lg:flex h-screen justify-between items-center border-2 border-yellow-500 ">
                <div className="p-5 w-1/2 flex justify-center text-center">
                    <div>
                        <h2 className="text-xl lg:text-2xl font-bold text-black">Hello, I am

                            <span className="text-[#F59E0B] text-xl lg:text-4xl font-bold"> MD Arif Hossen</span></h2>

                        <h2 className="mt-5 text-black font-bold">
                            <TypeAnimate />
                        </h2>
                        <div className=" flex gap-5 mt-5 ">
                            <div>
                                <a href={cv} download='Md Arif resume' className="btn bg-[#F59E0B] text-white border-none font-bold py-2 px-4 rounded-md hover:bg-[#D97706]">
                                    Hire me
                                </a>
                            </div>
                            <div>
                                <a href={cv} download='Md Arif resume' className="btn bg-[#FDF1D9] text-[#F59E0B] border-none hover:text-white py-2 px-4 rounded-md hover:bg-[#F59E0B]">
                                    Download CV
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" h-full flex flex-col justify-end w-1/2">
                    <div className=" h-full">
                        <img className="w-full h-full" src={pic} alt="" />
                    </div>
                </div>
            </div>




        </div>
    );
};

export default Home2;
