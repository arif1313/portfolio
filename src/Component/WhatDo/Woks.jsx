import { useEffect, useState } from "react";
import SingleWorkDiv from "./SingleWorkDiv";
import SkillsMarquee from "./SkillsMarquee";
import About from "../About/About";

const Woks = () => {
    const [works, setWorks] = useState([]);

    useEffect(() => {
        fetch('/myWork.json')
            .then((res) => res.json())
            .then((data) => setWorks(data.works));
    }, []);

    return (
        <div className="w-full max-w-[1400px] mx-auto">
          
            <SkillsMarquee />
        

        </div>
    );
};

export default Woks;
