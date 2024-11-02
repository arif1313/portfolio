

const Skills = () => {
    return (
        <div className="min-h-screen bg-[#000] p-10 relative " id="skils">
            <div className="flex items-center gap-2 ">
                <div className=" h-1 rounded-xl w-8 bg-[#28E98C] "></div>
                <div className="py-5"><h6 className="text-neutral-100">Skills </h6></div>
            </div>
            <h1 className=" font-semibold  text-neutral-100 text-3xl  ">My
                <span className="text-[#28E98C]"> Skills</span></h1>

            <div className="p-8 text-justify">
                {/* <div className="radial-progress text-primary" style={{ "--value": 70 }} role="progressbar">
                    70%
                </div>

                <progress className="progress progress-secondary w-56" value="100" max="100"></progress> */}
            </div>
        </div>
    );
};

export default Skills;