import TypeAnimate from "../TypeAnimate/TypeAnimate";


const Home = () => {
    return (
        <div className="min-h-screen " id="home">
            <section className="flex pt-16 ">
                <div className="flex-1 flex flex-col h-screen justify-center items-center">
                    <div >
                        
                        <h2>Hello I am </h2>
                        <h1 className="text-4xl"><span className="text-orange-600">MD Arif hossen</span> </h1>
                       
                        
                    </div>
                   
                    <h2 className="text-2xl"><TypeAnimate></TypeAnimate></h2>
                    
                </div>
                <div className="w-1/3 border-2 h-screen border-green-400 flex justify-center items-center   bottom-0">
                    <div className=" bottom-0 rounded-full overflow-hidden border-2 border-red-700">
                        <img className=" w-56 h-56" src="https://as2.ftcdn.net/v2/jpg/02/45/56/35/1000_F_245563558_XH9Pe5LJI2kr7VQuzQKAjAbz9PAyejG1.jpg" alt="" />
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Home;
// todo: color and design photo and butto text 