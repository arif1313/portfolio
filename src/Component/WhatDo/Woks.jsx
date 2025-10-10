import { useEffect, useState } from "react";
import SingleWorkDiv from "./SingleWorkDiv";

const Woks = () => {
    const [works, setWorks] = useState([]);

    useEffect(() => {
        fetch('/myWork.json')
            .then((res) => res.json())
            .then((data) => setWorks(data.works));
    }, []);

    return (
        <div className="container mx-auto py-10 px-4">
            <h2 className="text-3xl font-bold text-[#28E98C] mb-6">My Works</h2>
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {works.map((work, index) => (
                    <SingleWorkDiv key={index} work={work} />
                ))}
            </div>
        </div>
    );
};

export default Woks;
