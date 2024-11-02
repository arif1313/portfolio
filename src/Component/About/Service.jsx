
import { CgWebsite } from "react-icons/cg";
import { FaLongArrowAltRight } from "react-icons/fa";
import { SiBmcsoftware } from "react-icons/si";
import { VscTerminalTmux } from "react-icons/vsc";
const Service = () => {
    // const[open, setOpen] = useState(false);
    return (
        <div className="min-h-screen p-10 relative " id="service">
            <div className="flex items-center gap-2 ">
                <div className=" h-1 rounded-xl w-8 bg-[#28E98C] "></div>
                <div className="py-5"><h6 className="text-neutral-100">Services </h6></div>
            </div>
            <h1 className=" font-semibold  text-neutral-100 text-3xl  ">My
                <span className="text-[#28E98C]"> Services</span></h1>

            <div className="p-16 flex gap-10">


                <div className="rounded-full  hover:text-[#28E98C] hover:bg-opacity-40  card bg-[#000000]  shadow-xl">
                    <figure className="px-10 pt-10">
                        <CgWebsite className="text-8xl  "></CgWebsite>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Web Devlopment</h2>
                        <p>Marn-Stak Website Devlopment  </p>
                        <div className="card-actions">
                            <button className="btn btn-sm bg-[#28E98C] bg-opacity-80 text-neutral-200 hover:bg-[#28E98C] hover:text-[#28E98C] hover:bg-opacity-40">Learn more <FaLongArrowAltRight></FaLongArrowAltRight></button>
                        </div>
                    </div>
                </div>
                <div className="rounded-full  hover:text-[#28E98C]   card bg-[#000000] hover:bg-opacity-40  shadow-xl">
                    <figure className="px-10 pt-10">
                        <SiBmcsoftware className="text-8xl  "></SiBmcsoftware>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">App Devlopment</h2>
                        <p>Full Stack Application Devlopment </p>
                        <div className="card-actions">
                            <button className="btn btn-sm bg-[#28E98C] bg-opacity-80 text-neutral-200 hover:bg-[#28E98C] hover:text-[#28E98C] hover:bg-opacity-40">Learn more <FaLongArrowAltRight></FaLongArrowAltRight></button>
                        </div>
                    </div>
                </div>
                <div className="rounded-full  hover:text-[#28E98C]   card bg-[#000000] hover:bg-opacity-40  shadow-xl">
                    <figure className="px-10 pt-10">
                        <VscTerminalTmux className="text-8xl  "></VscTerminalTmux>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">UI/UX </h2>
                        <p>Responsive Userfriendly Design </p>
                        <div className="card-actions">
                            <button className="btn btn-sm bg-[#28E98C] bg-opacity-80 text-neutral-200 hover:bg-[#28E98C] hover:text-[#28E98C] hover:bg-opacity-40">Learn more <FaLongArrowAltRight></FaLongArrowAltRight></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;
