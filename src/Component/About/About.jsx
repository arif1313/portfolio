import { Link } from "react-scroll";
import Title from "../Title/Title";
import { NavLink } from "react-router-dom";
import { FaRegArrowAltCircleLeft ,FaHome} from "react-icons/fa";
import { useState } from "react";
import Bio from "./Bio";
import Education from "./Education";
import Expience from "./Expience";
const aboutLink = 
    <>
     <Link to="bio"

    smooth={true}
    spy={true}
    offset={-100} activeClass=""
    className="block "
>
    About Bio
</Link>


    <Link to="edu"

        smooth={true}
        spy={true}
        offset={-100} activeClass=""
        className="block "
    >
       Education 
    </Link>

<Link to="expri"

    smooth={true}
    spy={true}
    offset={-100} activeClass=""
    className="block "
>
    Exprience
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
    const[open, setOpen] = useState(false);
    return (
        <div className="min-h-screen bg-white text-black " id="about">
          
          <div className="flex">
                <div className={`${open ? "w-20" : "w-72"} p-4 pr-0 min-h-screen bg-sky-800 relative  duration-1000`}>
                    <FaRegArrowAltCircleLeft className={`${open && "rotate-180"} duration-1000 border-2 bg-sky-800 rounded-full border-sky-800 text-white text-2xl absolute -right-3 top-9`} onClick={() => setOpen(!open)}></FaRegArrowAltCircleLeft>
                    <NavLink to={"#"} className={`flex gap-4 mb-10`} >
                        <FaHome className="text-4xl text-white"></FaHome> <h3 className={`${open && 'hidden '}  text-white text-2xl font-semibold`}> Home</h3>
                    </NavLink>

                    <div className="flex flex-col gap-7">
                        
                     
                      {
                        aboutLink
                      }
                     
                   
                    </div>
                </div>
               <div className="flex-1  ">
               <Title title={"About"}></Title>
               <div className="p-10">
               <p>👋 Hello, I am Arif Hossen, a passionate MERN stack developer dedicated to crafting robust and scalable web applications. With a background in computer science and a keen interest in cutting-edge technologies, I thrive in creating seamless user experiences and solving complex problems through code.</p>
            <p className="mt-5">🔧 Leveraging my proficiency in HTML, CSS, and JavaScript, I design responsive and intuitive front-end interfaces with React.js, ensuring an engaging user experience across devices. Meanwhile, on the back end, I harness the flexibility of Node.js and Express.js to develop robust server-side applications, seamlessly integrating with MongoDB to manage data efficiently.</p>
            <p className="mt-5">
            💻 My journey into the world of web development began with a curiosity for building dynamic websites. As I delved deeper, I discovered the power and versatility of the MERN stack – MongoDB, Express.js, React.js, and Node.js. These technologies form the backbone of my expertise, allowing me to architect efficient solutions for various projects.
            </p>
            <p className="mt-5">
            📫 Interested in discussing potential collaborations or just want to connect? Feel free to reach out to me via [ arifhossen13131@gmail.com ]. Lets build something amazing together!
            </p>
               <Bio></Bio>
               <Education></Education>
               <Expience></Expience>
               </div>
               </div>
              
            </div>
        </div>
    );
};

export default About;