import TypeAnimate from "../TypeAnimate/TypeAnimate";
import '../Home/clip.css'
import pic from '../../../public/mypic.jpg';
import Navbar from "../Navbar/Navbar";
const Home = () => {
    return (
        <div className="min-h-screen overflow-hidden bg-cover relative" id="home" style={{
            backgroundImage: `url(${pic})`,
            backgroundSize: 'cover', // Cover the entire page
            backgroundPosition: 'center', // Center the background image
            backgroundRepeat: 'no-repeat', // Do not repeat the image
          }}>
             <Navbar></Navbar>
           
            {/* <div className=" w-1/3 flex absolute justify-center items-center  -bottom-44 left-96">
                    <div className=" h-96 w-96 bottom-0 border-8 bg-[#D8DBCB] border-[#D8DBCB]  rounded-full overflow-hidden ">
                       
                    </div>

                </div> */}
                <div className="bg-[#D8DBCB] h-full w-4/5 flex absolute  items-center top-0 justify-start clip">
                    
                <div  className="p-5 ">
                        
                        <h2 className="text-2xl font-bold text-black ">Hello I am .....</h2>
                        <h1 className="text-5xl font-bold mt-5"><span className="text-[#55b1fb]">MD Arif hossen</span> </h1>
                        <h2 className="mt-5 text-black font-bold"><TypeAnimate></TypeAnimate></h2>
                        
                    </div>
                    

                </div>
        </div>
    );
};

export default Home;
// todo: color and design photo and butto text 