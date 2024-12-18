import { Link } from "react-scroll";
// import './nav.css';
// import cv from '../../public/resume.pdf'
const links =
    <>
        <li> <Link to="home2"

            smooth={true}
            spy={true}
            offset={-100} activeClass=""
            className="block "
        >
            Home
        </Link>
        </li>
        <li>
            <Link to="about"

                smooth={true}
                spy={true}
                offset={-100} activeClass=""
                className="block "
            >
                About
            </Link>
        </li>
        <li>
            <Link to="service"

                smooth={true}
                spy={true}
                offset={-100} activeClass=""
                className="block "
            >
                Services
            </Link>
        </li>

        <li>  <Link to="project"

            smooth={true}
            spy={true}
            offset={-100} activeClass=""
            className="block "
        >
            Project
        </Link></li>

        <li> <Link to="contact"

            smooth={true}
            spy={true}
            offset={-100} activeClass=""
            className="block "
        >
            Contact
        </Link></li>
    </>


const Navbar = () => {
    return (
        <div className="navbar  fixed z-30 bg-[#000000] text-TextWhite font-bold name">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className=" menu-sm  dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="  menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">

            </div>
        </div>


    );
};

export default Navbar;