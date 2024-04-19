import { useEffect, useState } from "react";
import SingleProject from "./SingleProject";
import gif2 from '../../../public/mygTwo.gif';
const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('/project.json')
            .then(response => response.json())
            .then((data) => setProjects(data.projects))
    }, [])

    console.log("project", projects);

    return (
       
    //     <div className="w-1/2">
    //     <img src={gif2} alt="" />
    // </div>
          
            <div className="min-h-screen bg-secondBg" id="project">
                <div className="grid grid-cols-2 pt-5 gap-5 container mx-auto">
                    {
                        projects.map((project, inx) =>
                            <SingleProject project={project} key={inx}></SingleProject>)
                    }
                </div>
         
        </div>

    );
};

export default Projects;