import { useEffect, useState } from "react";
import SingleProject from "./SingleProject";

const Projects = () => {
    const [projects,setProjects]=useState([]);
 useEffect(()=>{
    fetch('/project.json')
    .then(response => response.json())
    .then((data) => setProjects(data.projects))
 },[])

 console.log("project",projects);
      
    return (
        <div className="min-h-screen bg-secondBg" id="project">
           <div className="grid grid-cols-2 pt-5 gap-5 container mx-auto">
            {
                projects.map((project,inx)=>
                <SingleProject project={project} key={inx}></SingleProject>)
            }
           </div>
        </div>
    );
};

export default Projects;