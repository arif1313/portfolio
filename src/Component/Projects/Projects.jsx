import { useEffect, useState } from "react";
import SingleProject from "./SingleProject";
import Title from "../Title/Title";

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('/project.json')
            .then(response => response.json())
            .then((data) => setProjects(data.projects));
    }, []);

    // Category wise filtering
    const frontendProjects = projects.filter(p => p.category === "frontend");
    const backendProjects = projects.filter(p => p.category === "backend");
    const mobileProjects = projects.filter(p => p.category === "mobile");
    const codingProjects = projects.filter(p => p.category === "coding");

    return (
   <div className=" py-10 bg-[#07110d]">
  <section className="py-8 lg:py-10 max-w-[1400px] mx-auto min-h-screen ">


               {/* Heading */}
            <div className=" mb-12">
                <h1 className="font-extrabold text-4xl lg:text-5xl mb-4 tracking-wide text-white">
                    My <span className="text-[#28E98C]">Projects</span>
                </h1>
                <div className="flex ">
                    <div className="w-32 h-1 bg-[#28E98C] rounded-full animate-pulse"></div>
                </div>
            </div>

            {/* Intro Paragraph */}
            <div className="   mb-20">
                <p className="text-gray-300 text-base lg:text-lg leading-relaxed">
                    My projects reflect my journey as a developer, showcasing a blend of{" "}
                    <span className="text-[#28E98C] font-medium">creativity</span>,{" "}
                    <span className="text-[#28E98C] font-medium">problem-solving</span>, and{" "}
                    <span className="text-[#28E98C] font-medium">technical expertise</span>.
                    From building engaging{" "}
                    <span className="font-semibold text-white">frontend web apps</span>
                    with React and Tailwind CSS, to designing{" "}
                    <span className="font-semibold text-white">robust backend systems</span>
                    with Node.js and MongoDB, each project highlights my skills in creating
                    scalable solutions. I’ve also developed{" "}
                    <span className="font-semibold text-white">mobile applications</span>
                    using React Native and worked on{" "}
                    <span className="font-semibold text-white">coding projects</span>
                    in C, C++, Java, and Python, focusing on algorithms and problem-solving.
                </p>
            </div>

            <div className="w-full space-y-24">
                {/* Frontend Projects */} <div> <div className="text-center mb-10"> <Title headingTitle="🎨 Frontend Web Projects" /> <p className="text-gray-400 mt-2"> Interactive and modern UI/UX web apps built with React, Tailwind, and more. </p> </div> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"> {frontendProjects.map((project, idx) => (<SingleProject project={project} key={idx} />))} </div> </div>

                {/* Backend Projects */}
                <div>
                    <div className="text-center mb-10">
                        <Title headingTitle="⚙️ Backend Projects" />
                        <p className="text-gray-400 mt-2 text-sm lg:text-base">
                            Robust and scalable backend systems with Node.js, Express, and MongoDB.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {backendProjects.map((project, idx) => (
                            <SingleProject project={project} key={idx} />
                        ))}
                    </div>
                </div>

                {/* Mobile Projects */}
                <div>
                    <div className="text-center mb-10">
                        <Title headingTitle="📱 Mobile Application Projects" />
                        <p className="text-gray-400 mt-2 text-sm lg:text-base">
                            Cross-platform mobile apps built using React Native.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 z-4-">
                        {mobileProjects.map((project, idx) => (
                            <SingleProject project={project} key={idx} />
                        ))}
                    </div>
                </div>

                {/* Coding Projects */}
                <div>
                    <div className="text-center mb-10">
                        <Title headingTitle="💻 Coding Projects" />
                        <p className="text-gray-400 mt-2 text-sm lg:text-base">
                            Problem solving and algorithm-based projects using C, C++, Java, and Python.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {codingProjects.map((project, idx) => (
                            <SingleProject project={project} key={idx} />
                        ))}
                    </div>
                </div>
            </div>
   
        </section>
   </div>

    );
};

export default Projects;
