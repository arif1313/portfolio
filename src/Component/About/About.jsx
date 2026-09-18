
import gif from '../../../public/bio.gif';
import InfoHeading from "../InfoHeading/InfoHeading";
import Title from '../Title/Title';

const About = () => {
    return (
        <div className='bg-[#07110d]'>
            <div className="min-h-screen max-w-[1400px] mx-auto text-neutral-100 px-0 py-6 " id="about">
                <div className="mb-8 text-left">
                    <div className="mb-4 flex items-center gap-3">
                        <span className="h-px w-8 bg-[#28e98c]" />
                        <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#28e98c]">About Me</span>
                    </div>
                    <h1 className="font-extrabold text-4xl lg:text-5xl tracking-wide text-white">
                        What I Do
                    </h1>
                </div>

                <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
                    <div className="flex-1 space-y-6 text-justify text-lg leading-relaxed text-[#b7d9ca]">
                        <p>
                            I am <span className="font-semibold text-[#28e98c]">MD Arif Hossen</span>, a passionate
                            <span className="font-semibold text-[#28e98c]"> MERN stack developer</span> focused on building powerful,
                            responsive, and user-friendly web applications.
                        </p>
                        <p>
                            I enjoy turning product ideas into seamless digital experiences with clean architecture,
                            scalable APIs, and elegant interfaces that feel fast and intuitive.
                        </p>

                        <button className="mt-2 inline-flex items-center justify-center rounded-xl bg-[#28e98c] px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#07110d] transition-all duration-300 hover:bg-[#71f5b1]">
                            More About Me
                        </button>
                    </div>

                    <div className="flex flex-1 justify-center">
                        <div className="relative h-[260px] w-[320px] overflow-hidden rounded-[28px] border border-[#28e98c]/20 bg-[#0d1715] shadow-[0_25px_60px_rgba(40,233,140,0.1)]">
                            <img src={gif} alt="Education" className="h-full w-full object-cover opacity-90" />
                        </div>
                    </div>
                </div>

                <div className="mt-16 flex flex-col gap-8">
                    <Title headingTitle={'My Skills'} />

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            ['JavaScript', 'Modern, async, scalable front-end logic'],
                            ['Node.js', 'REST APIs, backend logic, auth'],
                            ['React', 'Component-based UI with strong state flow'],
                            ['MongoDB', 'Flexible document-based database design'],
                            ['Express', 'Middleware-driven backend architecture'],
                            ['Tailwind', 'Responsive, elegant, production UI'],
                            ['Firebase', 'Realtime features and rapid integrations'],
                            ['C++', 'Algorithmic problem solving and logic'],
                        ].map(([title, desc]) => (
                            <div key={title} className="rounded-2xl border border-[#28e98c]/10 bg-[#0d1715] p-5 shadow-[0_10px_24px_rgba(0,0,0,0.2)]">
                                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#28e98c]/10 text-lg font-bold text-[#28e98c]">{title.slice(0, 2)}</div>
                                <h3 className="mb-2 text-xl font-semibold text-white">{title}</h3>
                                <p className="text-sm leading-6 text-[#b7d9ca]">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-16 flex flex-col gap-8">
                    <Title headingTitle={'Educational'} />

                    <div className="space-y-5">
                        {[
                            ['B.Sc in CSE', 'Sonargaon University', 'CGPA : Not Published', '2021 - 2025'],
                            ['Higher Secondary Certificate (HSC)', 'Helal Uddin Ahammed College', 'GPA : 4.58', '2017 - 2019'],
                            ['Secondary School Certificate (SSC)', 'Hazi Pancham Ali High School', 'GPA : 4.78', '2014 - 2014']
                        ].map(([title, school, result, year]) => (
                            <div key={title} className="rounded-2xl border border-[#28e98c]/10 bg-[#0d1715] p-5">
                                <h4 className="text-xl font-bold text-[#28e98c]">{title}</h4>
                                <p className="mt-2 text-base text-white">{school}</p>
                                <div className="mt-2 flex flex-wrap gap-4 text-sm text-[#b7d9ca]">
                                    <span>{result}</span>
                                    <span>{year}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
