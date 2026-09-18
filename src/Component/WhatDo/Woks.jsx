import { useEffect, useState } from "react";
import SingleWorkDiv from "./SingleWorkDiv";
import SkillsMarquee from "./SkillsMarquee";

const Woks = () => {
    const [works, setWorks] = useState([]);

    useEffect(() => {
        fetch('/myWork.json')
            .then((res) => res.json())
            .then((data) => setWorks(data.works));
    }, []);

    return (
        <div className="w-full max-w-[1400px] mx-auto py-10">
            {/* Marquee section - upor row: first -> last, left theke right e scroll
                nicher row: last -> first, right theke left e scroll, infinite loop */}
            <SkillsMarquee />

            {/* <div className="mb-8 flex items-end justify-between gap-4">
                <div>
                    <p className="mb-2 text-xs font-medium uppercase tracking-[0.25em] text-[#28e98c]">Portfolio</p>
                    <h2 className="text-3xl font-bold text-[#eefdf6] md:text-4xl">My Works</h2>
                </div>
                <div className="hidden h-px flex-1 bg-gradient-to-r from-[#28e98c]/50 via-[#28e98c]/15 to-transparent md:block" />
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {works.map((work, index) => (
                    <SingleWorkDiv key={index} work={work} />
                ))}
            </div> */}
        </div>
    );
};

export default Woks;
