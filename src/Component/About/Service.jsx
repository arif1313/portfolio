import { useState } from "react";
import { CgWebsite } from "react-icons/cg";
import { FaLongArrowAltRight, FaServer, FaCode } from "react-icons/fa";
import { SiBmcsoftware } from "react-icons/si";
import { VscTerminalTmux } from "react-icons/vsc";
import { DiPython } from "react-icons/di";
import { motion, AnimatePresence } from "framer-motion";

const Service = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const services = [
        {
            title: "Web Development",
            icon: <CgWebsite className="text-7xl text-[#28E98C]" />,
            shortDesc: "MERN Stack Website Development",
            fullDesc: (
                <>
                    I build modern and responsive websites using <b>React, Tailwind CSS, HTML, CSS, JavaScript, Redux</b>.
                    Focused on clean design, high performance, and responsive UI.
                </>
            ),
        },
        {
            title: "App Development",
            icon: <SiBmcsoftware className="text-7xl text-[#28E98C]" />,
            shortDesc: "Full Stack Application Development",
            fullDesc: (
                <>
                    Experienced in building scalable applications using <b>Node.js, Express, MongoDB, TypeScript, Firebase, Multer, Docker</b>.
                    I ensure secure and efficient backend systems with smooth API integration.
                </>
            ),
        },
        {
            title: "UI / UX Design",
            icon: <VscTerminalTmux className="text-7xl text-[#28E98C]" />,
            shortDesc: "Responsive & User-friendly Design",
            fullDesc: (
                <>
                    Skilled in <b>Figma, Adobe XD, Sketch, and Design Thinking</b>.
                    Creating intuitive and engaging interfaces that enhance user experience.
                </>
            ),
        },
        {
            title: "Frontend Development",
            icon: <FaCode className="text-7xl text-[#28E98C]" />,
            shortDesc: "Modern, responsive & interactive UI",
            fullDesc: (
                <>
                    Focused on building pixel-perfect frontends with <b>React, Tailwind, HTML, CSS, JavaScript, Redux</b>.
                    Optimized for performance and accessibility.
                </>
            ),
        },
        {
            title: "Backend Development",
            icon: <FaServer className="text-7xl text-[#28E98C]" />,
            shortDesc: "APIs, Databases & Secure Systems",
            fullDesc: (
                <>
                    Expertise in <b>Node.js, Express, MongoDB, TypeScript, Firebase</b>.
                    Implementing robust server-side logic, API endpoints, and secure database management.
                </>
            ),
        },
        {
            title: "Programming Languages",
            icon: <DiPython className="text-7xl text-[#28E98C]" />,
            shortDesc: "C, C++, Python, Java",
            fullDesc: (
                <>
                    Problem-solving and algorithm development using <b>C, C++, Python, Java</b>.
                    Competent in competitive programming platforms like <b>LeetCode, CodeChef, URI Online Judge</b>.
                </>
            ),
        },
    ];

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    const contentVariants = {
        collapsed: { height: 0, opacity: 0 },
        expanded: { height: "auto", opacity: 1 },
    };

    return (
        <div className="min-h-screen bg-[#292929] p-10" id="service">
            {/* Heading */}
            <div className="text-center md:text-left mb-12">
                <h1 className="font-extrabold text-4xl lg:text-5xl mb-4 tracking-wide text-white">
                    My <span className="text-[#28E98C]">Services</span>
                </h1>
                <div className="flex justify-center md:justify-start">
                    <div className="w-24 h-1 bg-[#28E98C] rounded-full animate-pulse"></div>
                </div>
            </div>

            {/* Services grid */}
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        className="card bg-[#0f0f0f] shadow-lg p-6 rounded-2xl cursor-pointer"
                        whileHover={{ scale: 1.05, boxShadow: "0 0 20px #28E98C" }}
                        initial="hidden"
                        animate="visible"
                        variants={cardVariants}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <div className="flex flex-col items-center text-center gap-4">
                            {service.icon}
                            <h2 className="card-title text-xl text-white">{service.title}</h2>

                            {/* Animated Expand/Collapse */}
                            <AnimatePresence initial={false}>
                                {openIndex === index ? (
                                    <motion.div
                                        key="content"
                                        variants={contentVariants}
                                        initial="collapsed"
                                        animate="expanded"
                                        exit="collapsed"
                                        transition={{ duration: 0.5 }}
                                        className="text-neutral-300 text-sm"
                                    >
                                        {service.fullDesc}
                                    </motion.div>
                                ) : (
                                    <motion.p
                                        key="short"
                                        className="text-neutral-300 text-sm"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {service.shortDesc}
                                    </motion.p>
                                )}
                            </AnimatePresence>

                            <button
                                onClick={() =>
                                    setOpenIndex(openIndex === index ? null : index)
                                }
                                className="btn btn-sm mt-2 bg-[#28E98C] bg-opacity-80 text-black font-semibold 
                hover:bg-transparent hover:text-[#28E98C] border border-[#28E98C] flex items-center gap-2 transition-all duration-300"
                            >
                                {openIndex === index ? "Show less" : "Learn more"} <FaLongArrowAltRight />
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Service;
