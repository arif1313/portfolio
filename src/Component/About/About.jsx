




import gif from '../../../public/bio.gif';


import InfoHeading from "../InfoHeading/InfoHeading";


const About = () => {
    // const[open, setOpen] = useState(false);
    return (
        <div className="min-h-screen relative bg-[#000000]" id="about">

            <div className="flex justify-between">

                {/* <div className=" flex justify-center  p-4 bg-TextWhite  bg-sky-800 absolute  ">
                    

                    <div className="flex flex-col gap-7">


                        {
                            aboutLink
                        }


                    </div>
                </div> */}

                <div className=" container">

                    <h1 className=" font-semibold p-10 text-neutral-100 text-3xl  ">ABOUT <span className="text-[#28E98C]">ME</span></h1>
                    <div className=" pl-10 pb-16 flex text-justify justify-center ">
                        <div className=" h-1 rounded-xl w-48 bg-[#28E98C]"></div>

                        <div className=" pl-4 text-xl text-neutral-100"> <p className=""> Hello, I am Arif Hossen, a passionate <span className="text-[#28E980]">MERN stack developer </span>dedicated to crafting robust and scalable web applications. With a background in computer science and a keen interest in cutting-edge technologies, I thrive in creating seamless user experiences and solving complex problems through code.</p></div>

                    </div>
                </div>


            </div>
            {/* <div className="grid grid-cols-3 px-10 gap-10"> */}

            {/* <Education></Education> */}
            {/* </div> */}
            <div className="flex items-center justify-between ">

                <div className="  px-10 ">
                    <InfoHeading Role="Nationality" Option="Bangladeshi"></InfoHeading>

                    <InfoHeading Role="Date of Birth" Option=" 05 september 2000"></InfoHeading>

                    <InfoHeading Role="Home Town" Option="Barishal"></InfoHeading>
                    <InfoHeading Role="Adress" Option="Barishal, Bakergong, Bangladesh."></InfoHeading>

                </div>
                <div>
                    <div className="">
                        <img className="" src={gif} alt="" />
                    </div>

                </div>

            </div>
            <h1 className=" font-semibold pt-10 text-3xl text-center "> <span className="text-[#28E98C]">SKILLS</span></h1>
            <div className="p-8 text-justify">
                <div className="radial-progress text-primary" style={{ "--value": 70 }} role="progressbar">
                    70%
                </div>

                <progress className="progress progress-secondary w-56" value="100" max="100"></progress>
            </div>
        </div>
    );
};

export default About;
{/* <FaRegArrowAltCircleLeft className={`${open && "rotate-180"} duration-1000 border-2 bg-sky-800 rounded-full border-sky-800 text-white text-2xl absolute -right-3 top-9`} ></FaRegArrowAltCircleLeft> */ }
{/* <NavLink to={"#"} className={`flex gap-4 mb-10`} >
                       
                    </NavLink> */}