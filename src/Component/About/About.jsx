import { Link } from "react-scroll";
import Title from "../Title/Title";
import { NavLink } from "react-router-dom";
import { FaRegArrowAltCircleLeft, FaHome } from "react-icons/fa";
import { useState } from "react";
import Bio from "./Bio";
import Education from "./Education";
import Expience from "./Expience";
import { BiSolidInfoCircle } from "react-icons/bi";
import { FaGraduationCap } from "react-icons/fa6";
import { MdWorkOutline } from "react-icons/md";
import gif from '../../../public/mygOne.gif';
import gif2 from '../../../public/mygTwo.gif';
import InfoHeading from "../InfoHeading/InfoHeading";
import EducationPic from "./EducationPic";

const aboutLink =
    <>
        <Link to="bio"

            smooth={true}
            spy={true}
            offset={-100} activeClass=""
            className="block "
        >
            <BiSolidInfoCircle></BiSolidInfoCircle>
        </Link>


        <Link to="edu"

            smooth={true}
            spy={true}
            offset={-100} activeClass=""
            className="block "
        >
            <FaGraduationCap></FaGraduationCap>
        </Link>

        <Link to="expri"

            smooth={true}
            spy={true}
            offset={-100} activeClass=""
            className="block "
        >
            <MdWorkOutline></MdWorkOutline>
        </Link>
        {/* <li>  <Link to="project"

    smooth={true}
    spy={true}
    offset={-100} activeClass=""
    className="block "
>
    Project
</Link></li> */}
    </>

const About = () => {
    // const[open, setOpen] = useState(false);
    return (
        <div className="min-h-screen relative bg-[#FDF6F1] text-textBlack " id="about">

            <div className="flex justify-between">

                {/* <div className=" flex justify-center  p-4 bg-TextWhite  bg-sky-800 absolute  ">
                    

                    <div className="flex flex-col gap-7">


                        {
                            aboutLink
                        }


                    </div>
                </div> */}

                <div className="w-1/2  ">

                    <Title title={"About"}></Title>
                    <div className="p-10">
                        <p>👋 Hello, I am Arif Hossen, a passionate MERN stack developer dedicated to crafting robust and scalable web applications. With a background in computer science and a keen interest in cutting-edge technologies, I thrive in creating seamless user experiences and solving complex problems through code.</p>

                  

                    </div>

                </div>
                <div className="w-1/2">
                    <img className="" src={gif} alt="" />
                </div>


            </div>
            <div className="grid grid-cols-3 py-10 px-10 gap-10">
                <EducationPic></EducationPic>
                <Education></Education>
            </div>
            <div className="flex justify-between mt-16 ">
                <div className="w-1/2">
                    <img src={gif2} alt="" />
                </div>

                <div className=" w-1/2 px-5 grid grid-cols-2">
                    <InfoHeading Role="Nationality : " Option="Bangladeshi"></InfoHeading>

                    <InfoHeading Role="Date of Birth : " Option=" 05 september 2000"></InfoHeading>

                    <InfoHeading Role="Home Town : " Option="Barishal"></InfoHeading>
                    <InfoHeading Role="Adress : " Option="Barishal, Bakergong, Bangladesh."></InfoHeading>
                    <InfoHeading Role="Date of Birth : " Option=" 05 september 2000"></InfoHeading>
                    <InfoHeading Role="Date of Birth : " Option=" 05 september 2000"></InfoHeading>
                </div>

            </div>
        </div>
    );
};

export default About;
{/* <FaRegArrowAltCircleLeft className={`${open && "rotate-180"} duration-1000 border-2 bg-sky-800 rounded-full border-sky-800 text-white text-2xl absolute -right-3 top-9`} ></FaRegArrowAltCircleLeft> */ }
{/* <NavLink to={"#"} className={`flex gap-4 mb-10`} >
                       
                    </NavLink> */}