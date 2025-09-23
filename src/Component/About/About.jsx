import gif from '../../../public/bio.gif';
import InfoHeading from "../InfoHeading/InfoHeading";

const About = () => {
    return (
        <div className="min-h-screen bg-black text-neutral-100 px-6 lg:px-20 py-16" id="about">
            {/* Heading */}
            <div className="text-center md:text-left mb-12">
                <h1 className="font-extrabold text-4xl lg:text-5xl mb-4 tracking-wide">
                    ABOUT <span className="text-[#28E98C]">ME</span>
                </h1>
                <div className="flex justify-center md:justify-start">
                    <div className="w-24 h-1 bg-[#28E98C] rounded-full animate-pulse"></div>
                </div>
            </div>

            {/* Main content */}
            <div className="flex flex-col lg:flex-row gap-12">
                {/* Left side: Text + Info */}
                <div className="lg:w-2/3 flex flex-col gap-8">
                    {/* Introduction */}
                    <div className="text-justify text-lg lg:text-xl leading-relaxed space-y-4">
                        <p>
                            Hello! I am <span className="text-[#28E98C] font-semibold">MD Arif Hossen</span>, a passionate <span className="text-[#28E98C] font-semibold">MERN stack developer</span> dedicated to crafting robust and scalable web applications.
                        </p>
                        <p>
                            With a background in computer science and a keen interest in cutting-edge technologies, I thrive in creating seamless user experiences and solving complex problems through clean and efficient code.
                        </p>
                    </div>


                </div>

                {/* Right side: Image */}
                <div className="lg:w-1/3 flex justify-center lg:justify-end">
                    <div className="w-64 h-64 md:w-80 md:h-80 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
                        <img src={gif} alt="Animated Bio" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>

            {/* Personal Info */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-6">
                <InfoHeading Role="Nationality" Option="Bangladeshi" />
                <InfoHeading Role="Date of Birth" Option="05 September 2000" />
                <InfoHeading Role="Home Town" Option="Barishal" />
                <InfoHeading Role="Address" Option="Barishal, Bakergong, Bangladesh" />
            </div>
        </div>
    );
};

export default About;

