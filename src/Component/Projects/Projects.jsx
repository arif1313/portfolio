import { useEffect, useState } from "react";
import SingleProject from "./SingleProject";
import Title from "../Title/Title";
import WhatDo from "../WhatDo/WhatDo";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('/project.json')
            .then(response => response.json())
            .then((data) => setProjects(data.projects))
    }, [])



    return (

        <div className="py-10">
            <WhatDo headingTitle={'Featured Projects'} headingDescrip={'My step-by-step guide ensures a smooth project journey, from the initial consultation to the final delivery. I take care of every detail, allowing you to focus on what you do best.'}></WhatDo>
            <Title headingTitle={'Featured Projects'}></Title>
            <div>

            </div>
        </div>


        // <div className="min-h-screen bg-secondBg" id="project">
        //     <div className="grid grid-cols-2 pt-5 gap-5 container mx-auto">
        //         {
        //             projects.map((project, inx) =>
        //                 <SingleProject project={project} key={inx}></SingleProject>)
        //         }
        //     </div>

        // </div>

    );
};

export default Projects;