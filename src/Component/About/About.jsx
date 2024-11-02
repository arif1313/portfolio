import gif from '../../../public/bio.gif';
import InfoHeading from "../InfoHeading/InfoHeading";

const About = () => {
    return (
        <div className="min-h-screen bg-black text-neutral-100 p-10" id="about">
            <div className="container mx-auto">
                <div className="text-center md:text-left">
                    <h1 className="font-semibold text-3xl mb-4">
                        ABOUT <span className="text-[#28E98C]">ME</span>
                    </h1>
                    <div className="flex items-center justify-center md:justify-start">
                        <div className="w-48 h-1 bg-[#28E98C] rounded-xl"></div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row md:justify-between mt-6">
                    {/* About Description */}
                    <div className="md:w-2/3 text-justify leading-relaxed mt-6 md:mt-0">
                        <p className="text-xl">
                            Hello, I am Arif Hossen, a passionate <span className="text-[#28E98C]">MERN stack developer</span> dedicated to crafting robust and scalable web applications. With a background in computer science and a keen interest in cutting-edge technologies, I thrive in creating seamless user experiences and solving complex problems through code.
                        </p>
                    </div>

                    {/* Personal Info */}
                    <div className="md:w-1/3 mt-10 md:mt-0 flex flex-col gap-4">
                        <InfoHeading Role="Nationality" Option="Bangladeshi" />
                        <InfoHeading Role="Date of Birth" Option="05 September 2000" />
                        <InfoHeading Role="Home Town" Option="Barishal" />
                        <InfoHeading Role="Address" Option="Barishal, Bakergong, Bangladesh" />
                    </div>
                </div>

                {/* Gif Section */}
                <div className="mt-12 flex justify-center md:justify-end">
                    <img src={gif} alt="Animated Bio" className="w-2/3 md:w-full max-w-sm" />
                </div>
            </div>
        </div>
    );
};

export default About;
