import TypeAnimate from "../TypeAnimate/TypeAnimate";
import myPic from '../../../public/profilepic.png'

const Home = () => {
    return (
        <div className="min-h-screen overflow-hidden bg-[#051d40]" id="home">
            <section className="flex pt-16 ">
                <div className="flex-1 flex flex-col h-screen justify-center items-center">
                    <div >
                        
                        <h2 className="text-2xl font-bold text-white ">Hello I am .....</h2>
                        <h1 className="text-5xl font-bold mt-5"><span className="text-[#55b1fb]">MD Arif hossen</span> </h1>
                       
                        
                    </div>
                   
                    <h2 className="mt-5 text-white font-bold"><TypeAnimate></TypeAnimate></h2>
                    
                </div>
                <div className=" w-1/3 flex  justify-center items-center  bottom-0">
                    <div className=" bottom-0 border-4 border-t-amber-400 border-b-[#55b1fb]  rounded-full overflow-hidden ">
                        <img className=" h-64  w-64" src={myPic} alt="" />
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Home;
// todo: color and design photo and butto text 