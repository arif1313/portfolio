import { useEffect, useMemo, useState } from "react";
import SingleProject from "./SingleProject";

// Category config - label, icon, subtitle - ekhane notun category add korte hole shudhu ei array e ekta entry barale hobe
const categories = [
    {
        key: "frontend",
        label: "Frontend",
        icon: "🎨",
        description: "Interactive and modern UI/UX web apps built with React, Tailwind, and more.",
    },
    {
        key: "backend",
        label: "Backend",
        icon: "⚙️",
        description: "Robust and scalable backend systems with Node.js, Express, and MongoDB.",
    },
    {
        key: "mobile",
        label: "Mobile Apps",
        icon: "📱",
        description: "Cross-platform mobile apps built using React Native.",
    },
    {
        key: "coding",
        label: "Coding",
        icon: "💻",
        description: "Problem solving and algorithm-based projects using C, C++, Java, and Python.",
    },
];

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [activeCategory, setActiveCategory] = useState(categories[0].key);

    useEffect(() => {
        fetch('/project.json')
            .then(response => response.json())
            .then((data) => setProjects(data.projects));
    }, []);

    const filteredProjects = useMemo(
        () => projects.filter((p) => p.category === activeCategory),
        [projects, activeCategory]
    );

    const activeMeta = categories.find((c) => c.key === activeCategory);

    return (
        <div className="bg-[#000000] py-10">
            <section className="mx-auto min-h-screen max-w-[1400px] py-8 lg:py-10">

                {/* Heading */}
                <div className="mb-12">
                       <h1 className="mb-4 text-3xl font-extrabold tracking-wide text-white text-center lg:text-4xl">
                        My <span className="text-[#28E98C]">Projects</span>
                    </h1>
              
                    <div className="flex algin-center justify-center">
                        <div className="h-1 w-32 animate-pulse rounded-full bg-[#28E98C]"></div>
                    </div>
                </div>
                {/* Intro Paragraph */}
                <div className="mb-16">
                    <p className=" text-sm leading-7 text-[#b7d9ca] sm:text-base  text-wrap text-justify-center">
                        My projects reflect my journey as a developer, showcasing a blend of{" "}
                        <span className="font-medium text-[#28E98C]">creativity</span>,{" "}
                        <span className="font-medium text-[#28E98C]">problem-solving</span>, and{" "}
                        <span className="font-medium text-[#28E98C]">technical expertise</span>.
                        From building engaging{" "}
                        <span className="font-semibold text-white">frontend web apps</span>
                        with React and Tailwind CSS, to designing{" "}
                        <span className="font-semibold text-white">robust backend systems</span>
                        with Node.js and MongoDB, each project highlights my skills in creating
                        scalable solutions. I've also developed{" "}
                        <span className="font-semibold text-white">mobile applications</span>
                        using React Native and worked on{" "}
                        <span className="font-semibold text-white">coding projects</span>
                        in C, C++, Java, and Python, focusing on algorithms and problem-solving.
                    </p>
                </div>

                {/* Category Tabs */}
                <div className="mb-4 flex flex-wrap justify-center gap-3">
                    {categories.map((cat) => {
                        const isActive = cat.key === activeCategory;
                        return (
                            <button
                                key={cat.key}
                                type="button"
                                onClick={() => setActiveCategory(cat.key)}
                                className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold tracking-wide transition-all duration-300 ${isActive
                                        ? "border-[#28E98C] bg-[#28E98C] text-[#07110d] shadow-[0_10px_25px_rgba(40,233,140,0.3)]"
                                        : "border-[#28E98C]/20 bg-[#0d1715] text-gray-300 hover:border-[#28E98C]/50 hover:text-[#28E98C]"
                                    }`}
                            >
                                <span>{cat.icon}</span>
                                {cat.label}
                            </button>
                        );
                    })}
                </div>

                {/* Active category subtitle */}
                <div className="mb-10 text-center">
                    <p className="text-sm text-gray-400 lg:text-base">{activeMeta?.description}</p>
                </div>

                {/* Projects grid - shudhu active category r project gulo dekhabe */}
                {filteredProjects.length > 0 ? (
                    <div
                        key={activeCategory}
                        className="grid animate-[fadeIn_0.4s_ease-out] grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3"
                    >
                        {filteredProjects.map((project, idx) => (
                            <SingleProject project={project} key={project.name ?? idx} />
                        ))}
                    </div>
                ) : (
                    <p className="py-16 text-center text-gray-500">
                        No projects found in this category yet.
                    </p>
                )}

                <style>{`
                    @keyframes fadeIn {
                        0% { opacity: 0; transform: translateY(10px); }
                        100% { opacity: 1; transform: translateY(0); }
                    }
                `}</style>

            </section>
        </div>
    );
};

export default Projects;
