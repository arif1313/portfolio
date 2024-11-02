import { useEffect, useState } from "react";
import SingleWorkDiv from "./SingleWorkDiv";


const Woks = () => {
    const [works, setworks] = useState([])
    useEffect(() => {
        // Fetch data inside useEffect to avoid fetching on every render
        fetch('/myWork.json')
            .then((response) => response.json())
            .then((data) => setworks(data.works
            ))
    }, []);
    return (
        <div className="grid grid-cols-2 gap-5 py-10">
            {works.map((work, inx) => (<SingleWorkDiv key={inx} work={work}>

            </SingleWorkDiv>)

            )}
        </div>
    );
};

export default Woks;