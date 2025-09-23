// src/components/Sidebar.js

import { CgMail } from 'react-icons/cg';
import mypic from '../../../public/mypic5out.png';
import mypicshort from '../../../public/mypic45.png';
import { FaHome, FaUser, FaToolbox, FaProjectDiagram, FaEnvelope, FaWhatsapp, FaFacebookMessenger, FaLinkedin, FaMailBulk, FaFacebook, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaX } from 'react-icons/fa6';
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const links = [
    { to: "/", label: "Home", icon: <FaHome /> },
    { to: "/about", label: "About", icon: <FaUser /> },
    { to: "/services", label: "Services", icon: <FaToolbox /> },
    { to: "/projects", label: "Projects", icon: <FaProjectDiagram /> },
    { to: "/contact", label: "Contact", icon: <FaEnvelope /> },
  ];

  return (
    <div className="h-full w-full bg-[#4F4F4F] flex flex-col border-r-4 border-[#54B689]">
      {/* Profile */}
      <div className="flex flex-col items-center p-4">
        <div className="rounded-full bg-[#54B689] overflow-hidden h-20 w-20">
          <img
            src={mypicshort}
            alt="Profile"
            className="object-cover h-full w-full"
          />
        </div>
        <div className="py-3 text-neutral-100 text-center">
          <h3 className="font-bold text-2xl">Arif Hossen</h3>
          <h5 className="font-bold text-sm">Full-Stack Developer</h5>
        </div>

        {/* Socials */}
        <div className="flex gap-5 py-3">
          <div className="border p-1 rounded-full">
            <FaFacebook className="text-[#54B689]" />
          </div>
          <div className="border p-1 rounded-full">
            <FaX className="text-[#54B689]" />
          </div>
          <div className="border p-1 rounded-full">
            <FaInstagram className="text-[#54B689]" />
          </div>
          <div className="border p-1 rounded-full">
            <FaLinkedin className="text-[#54B689]" />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <ul className="w-full flex flex-col items-center gap-3 py-3 text-neutral-100">
        {links.map((link, index) => (
          <li key={index}>
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                `inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md transition duration-300 ease-in-out
                ${isActive
                  ? "bg-[#54B689] text-white border-l-4 border-white"
                  : "hover:bg-[#54B689] hover:text-white hover:scale-105"}`
              }
            >
              {link.icon}
              <span>{link.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;










