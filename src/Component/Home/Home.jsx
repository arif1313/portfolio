import TypeAnimate from "../TypeAnimate/TypeAnimate";
import '../Home/clip.css';

import pic from '../../../public/mypic.jpg';
import Navbar from "../Navbar/Navbar";
import cv from '../../../public/resume.pdf';

const Home = () => {
    return (
        <div className="min-h-screen bg-cover relative" id="home" style={{
            backgroundImage: `url(${pic})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }}>

            <Navbar />

            <div className="bg-[#FEFAF3] h-full w-4/5 flex absolute items-center top-0 justify-start clip">

                <div className="p-5">
                    <h2 className="text-xl lg:text-2xl font-bold text-black">Hello, I am ...</h2>
                    <h1 className="text-2xl lg:text-5xl font-bold mt-5">
                        <span className="text-[#F59E0B]">MD Arif Hossen</span>
                    </h1>
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
        </div>
    );
};

export default Home;
