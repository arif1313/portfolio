import { useEffect, useState } from "react";

const SkillsMarquee = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        fetch('/myWork.json')
            .then((res) => res.json())
            .then((data) => setSkills(data.works));
    }, []);

    if (!skills.length) return null;

    // নিচের row এর জন্য reverse করা লিস্ট (last theke first)
    const reversedSkills = [...skills].reverse();

    return (
        <div className="w-full max-w-[1400px] mx-auto py-10">
            <div className="mb-10 text-center">
                <p className="mb-2 text-xs font-medium uppercase tracking-[0.25em] text-[#28e98c]">
                    Skills
                </p>
                <h2 className="text-3xl font-bold text-[#eefdf6] md:text-4xl">
                    My Skills
                </h2>
            </div>

            {/* Row 1: first -> last, left theke right e scroll */}
            <MarqueeRow items={skills} direction="ltr" />

            {/* Row 2: last -> first, right theke left e scroll */}
            <MarqueeRow items={reversedSkills} direction="rtl" />

            <style>{`
                @keyframes scroll-ltr {
                    0%   { transform: translateX(-50%); }
                    100% { transform: translateX(0%); }
                }
                @keyframes scroll-rtl {
                    0%   { transform: translateX(0%); }
                    100% { transform: translateX(-50%); }
                }
                .animate-scroll-ltr {
                    animation: scroll-ltr 30s linear infinite;
                }
                .animate-scroll-rtl {
                    animation: scroll-rtl 30s linear infinite;
                }
                .marquee-track:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </div>
    );
};

const MarqueeRow = ({ items, direction }) => {
    const animClass = direction === "ltr" ? "animate-scroll-ltr" : "animate-scroll-rtl";

    return (
        <div className="relative mb-6 w-full overflow-hidden">
            {/* dui pashe fade effect, jate scroll hoye asha/jawa smooth dekhay */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#141D19] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#141D19] to-transparent" />

            {/* items ke 2 bar repeat kora hoyeche - seamless infinite loop er jonno */}
            <div className={`marquee-track flex w-max gap-5 ${animClass}`}>
                {[...items, ...items].map((skill, index) => (
                    <SkillPill key={index} skill={skill} />
                ))}
            </div>
        </div>
    );
};

const SkillPill = ({ skill }) => {
    const { icon, title } = skill;

    return (
        <div className="flex shrink-0 items-center gap-3 rounded-full border border-[#28e98c]/15 bg-[linear-gradient(180deg,#101b18_0%,#060d0b_100%)] px-5 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#28e98c]/25 bg-[#0d1715]">
                <img className="h-5 w-5 object-contain" src={icon} alt={title} />
            </div>
            <span className="whitespace-nowrap text-sm font-semibold text-[#eefdf6]">
                {title}
            </span>
        </div>
    );
};

export default SkillsMarquee;
