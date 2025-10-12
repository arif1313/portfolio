
import gif from '../../../public/bio.gif';
import InfoHeading from "../InfoHeading/InfoHeading";
import Title from '../Title/Title';

const About = () => {
    return (
        <div className=' bg-[#292929]'>

            <div className="min-h-screen bg-black text-neutral-100 p-10 rounded-lg" id="about">

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
                <div className="flex flex-col gap-16">

                    {/* Intro Text */}
                    <div className="text-justify text-lg lg:text-xl leading-relaxed space-y-4">
                        <p>
                            Hello! I am <span className="text-[#28E98C] font-semibold">MD Arif Hossen</span>,
                            a passionate <span className="text-[#28E98C] font-semibold">MERN stack developer</span>
                            dedicated to crafting robust and scalable web applications.
                        </p>
                        <p>
                            With a background in computer science and a keen interest in cutting-edge technologies,
                            I thrive in creating seamless user experiences and solving complex problems through
                            clean and efficient code.
                        </p>
                    </div>



                    {/* Educational */}
                    <div className="flex flex-col gap-8">
                        <Title headingTitle={'Educational'} />

                        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
                            {/* Image */}
                            <div className="w-64 h-64 md:w-80 md:h-80 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
                                <img src={gif} alt="Education" className="w-full h-full object-cover" />
                            </div>

                            {/* Education Cards */}
                            <div className="w-full space-y-6">
                                {/* University */}
                                <div className="bg-[#0f0f0f] p-6 rounded-2xl shadow-md hover:shadow-[#28E98C]/40 transition-shadow duration-300">
                                    <h1 className="font-bold text-2xl text-[#28E98C]">B.Sc in CSE</h1>
                                    <p className="text-lg font-medium">Sonargaon University</p>
                                    <p className="text-sm opacity-80">CGPA : Not Published</p>
                                    <p className="text-sm opacity-70">2021 - 2025</p>
                                </div>

                                {/* College */}
                                <div className="bg-[#0f0f0f] p-6 rounded-2xl shadow-md hover:shadow-[#28E98C]/40 transition-shadow duration-300">
                                    <h1 className="font-bold text-2xl text-[#28E98C]">Higher Secondary Certificate (HSC)</h1>
                                    <p className="text-lg font-medium">Helal Uddin Ahammed College</p>
                                    <p className="text-sm opacity-80">GPA : 4.58</p>
                                    <p className="text-sm opacity-70">2017 - 2019</p>
                                </div>

                                {/* School */}
                                <div className="bg-[#0f0f0f] p-6 rounded-2xl shadow-md hover:shadow-[#28E98C]/40 transition-shadow duration-300">
                                    <h1 className="font-bold text-2xl text-[#28E98C]">Secondary School Certificate (SSC)</h1>
                                    <p className="text-lg font-medium">Hazi Pancham Ali High School</p>
                                    <p className="text-sm opacity-80">GPA : 4.78</p>
                                    <p className="text-sm opacity-70">2014 - 2014</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* My Information */}
                    <div className="flex flex-col gap-8">
                        <Title headingTitle={'My Information'} />

                        <div className="flex flex-col lg:flex-row-reverse items-center lg:items-start gap-10">
                            {/* Image */}
                            {/* <div className="w-64 h-64 md:w-80 md:h-80 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
                            <img src={gif} alt="Animated Bio" className="w-full h-full object-cover" />
                        </div> */}

                            {/* Info */}
                            <div className="w-full space-y-6">
                                <InfoHeading Role="Nationality" Option="Bangladeshi" />
                                <InfoHeading Role="Date of Birth" Option="05 September 2000" />
                                <InfoHeading Role="Home Town" Option="Barishal" />
                                <InfoHeading Role="Address" Option="Barishal, Bakergong, Bangladesh" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;
