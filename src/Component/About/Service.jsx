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
            icon: <CgWebsite className="text-3xl text-[#28E98C]" />,
            label: "Development",
            shortDesc: "Modern, responsive websites built with the MERN stack and clean, user-focused interfaces.",
            fullDesc: (
                <>
                    I build modern and responsive websites using <b>React, Tailwind CSS, HTML, CSS, JavaScript, Redux</b>.
                    Focused on clean design, high performance, and responsive UI.
                </>
            ),
        },
        {
            title: "App Development",
            icon: <SiBmcsoftware className="text-3xl text-[#28E98C]" />,
            label: "Development",
            shortDesc: "Scalable full-stack applications with reliable APIs, secure data flow, and smooth integrations.",
            fullDesc: (
                <>
                    Experienced in building scalable applications using <b>Node.js, Express, MongoDB, TypeScript, Firebase, Multer, Docker</b>.
                    I ensure secure and efficient backend systems with smooth API integration.
                </>
            ),
        },
        {
            title: "UI / UX Design",
            icon: <VscTerminalTmux className="text-3xl text-[#28E98C]" />,
            label: "Design",
            shortDesc: "Simple and engaging interfaces designed to feel clear, accessible, and easy to use.",
            fullDesc: (
                <>
                    Skilled in <b>Figma, Adobe XD, Sketch, and Design Thinking</b>.
                    Creating intuitive and engaging interfaces that enhance user experience.
                </>
            ),
        },
        {
            title: "Frontend Development",
            icon: <FaCode className="text-3xl text-[#28E98C]" />,
            label: "Frontend",
            shortDesc: "Fast, responsive frontends with polished interactions and consistent visual structure.",
            fullDesc: (
                <>
                    Focused on building pixel-perfect frontends with <b>React, Tailwind, HTML, CSS, JavaScript, Redux</b>.
                    Optimized for performance and accessibility.
                </>
            ),
        },
        {
            title: "Backend Development",
            icon: <FaServer className="text-3xl text-[#28E98C]" />,
            label: "Backend",
            shortDesc: "Robust backend systems with maintainable APIs, databases, authentication, and secure logic.",
            fullDesc: (
                <>
                    Expertise in <b>Node.js, Express, MongoDB, TypeScript, Firebase</b>.
                    Implementing robust server-side logic, API endpoints, and secure database management.
                </>
            ),
        },
        {
            title: "Programming Languages",
            icon: <DiPython className="text-3xl text-[#28E98C]" />,
            label: "Engineering",
            shortDesc: "Strong programming fundamentals used for problem solving, algorithms, and practical development.",
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
        <div className="min-h-screen overflow-hidden bg-[#07110d]">
            <div className="mx-auto w-full max-w-[1400px] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
                {/* Heading */}
                <div className="mb-10 text-center md:text-left lg:mb-12">
                    <p className="mb-2 text-xs font-medium uppercase tracking-[0.25em] text-[#28e98c]">What I offer</p>
                    <h1 className="mb-4 text-3xl font-extrabold tracking-wide text-white lg:text-4xl">
                        My <span className="text-[#28E98C]">Services</span>
                    </h1>
                    <div className="flex justify-center md:justify-start">
                        <div className="h-px w-24 bg-[#28E98C]" />
                    </div>
                </div>

                {/* Services grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="group relative min-h-[290px] overflow-hidden rounded-[22px] border border-[rgba(40,233,140,0.12)] bg-[linear-gradient(180deg,#101b18_0%,#060d0b_100%)] p-5 shadow-[0_18px_45px_rgba(0,0,0,0.28)] transition-shadow duration-300 hover:border-[rgba(40,233,140,0.3)] hover:shadow-[0_18px_38px_rgba(40,233,140,0.07)]"
                            whileHover={{ y: -4 }}
                            initial="hidden"
                            animate="visible"
                            variants={cardVariants}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                        <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#28e98c]/60 to-transparent" />
                        <div className="flex flex-col items-start gap-4 text-left">
                            <div className="flex w-full items-center justify-between gap-4">
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[rgba(40,233,140,0.2)] bg-[#0d1715]">
                                    {service.icon}
                                </div>
                                <span className="rounded-full bg-[#28e98c]/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#28e98c]">
                                    {service.label}
                                </span>
                            </div>

                            <h2 className="text-lg font-bold leading-snug text-white sm:text-xl">{service.title}</h2>

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
                                        className="text-sm leading-7 text-[#b7d9ca]"
                                    >
                                        {service.fullDesc}
                                    </motion.div>
                                ) : (
                                    <motion.p
                                        key="short"
                                        className="text-sm leading-7 text-[#b7d9ca]"
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
                                className="mt-2 inline-flex items-center gap-2 rounded-full border border-[rgba(40,233,140,0.28)] bg-[#28e98c]/10 px-3.5 py-2 text-xs font-semibold text-[#28e98c] transition-colors duration-300 hover:bg-[#28e98c] hover:text-[#07110d]"
                            >
                                {openIndex === index ? "Show less" : "Learn more"} <FaLongArrowAltRight />
                            </button>
                        </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Service;
