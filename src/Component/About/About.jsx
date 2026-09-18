import { useEffect, useRef, useState } from 'react';
import gif from '../../../public/bio.gif';
import InfoHeading from "../InfoHeading/InfoHeading";
import Woks from '../WhatDo/Woks';

// ---------- Custom hook: element viewport e dhukle true hoye jabe, animation trigger korar jonno ----------
const useInView = (options = { threshold: 0.2 }) => {
    const ref = useRef(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsInView(true);
                observer.unobserve(node);
            }
        }, options);

        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    return [ref, isInView];
};

// ---------- Simple inline icons (no external library needed) ----------
const GraduationCapIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M22 10 12 5 2 10l10 5 10-5Z" />
        <path d="M6 12v5c0 1.5 2.5 3 6 3s6-1.5 6-3v-5" />
        <path d="M22 10v6" />
    </svg>
);

const CubeIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 2 3 7v10l9 5 9-5V7l-9-5Z" />
        <path d="M3 7l9 5 9-5" />
        <path d="M12 12v10" />
    </svg>
);

const BookIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M2 6.5c2.2-1.2 5-1.2 7 0v13c-2-1.2-4.8-1.2-7 0v-13Z" />
        <path d="M22 6.5c-2.2-1.2-5-1.2-7 0v13c2-1.2 4.8-1.2 7 0v-13Z" />
    </svg>
);

const LaptopCodeIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect x="3" y="4.5" width="18" height="11" rx="1.5" />
        <path d="M9.5 8.5 7.5 10l2 1.5" />
        <path d="M13.5 8.5l2 1.5-2 1.5" />
        <path d="M2 19.5h20" />
    </svg>
);

const UserIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="12" cy="8" r="3.6" />
        <path d="M4.5 20c0-3.9 3.4-6 7.5-6s7.5 2.1 7.5 6" />
    </svg>
);

const BriefcaseIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect x="3" y="7.5" width="18" height="12" rx="2" />
        <path d="M8 7.5v-2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        <path d="M3 12.5h18" />
    </svg>
);

// ---------- Educational qualification + working experience, purono theke notun ----------
const timelineData = [
    {
        type: 'Education',
        date: '2014',
        title: 'Secondary School Certificate (SSC)',
        place: 'Hazi Pancham Ali High School',
        meta: 'GPA : 4.78',
        icon: GraduationCapIcon,
    },
    {
        type: 'Education',
        date: '2017 - 2019',
        title: 'Higher Secondary Certificate (HSC)',
        place: 'Helal Uddin Ahammed College',
        meta: 'GPA : 4.58',
        icon: CubeIcon,
    },
    {
        type: 'Education',
        date: '2021 - 2025',
        title: 'B.Sc in CSE',
        place: 'Sonargaon University',
        meta: 'CGPA : Not Published',
        icon: BookIcon,
    },
    {
        type: 'Experience',
        date: 'Jan 05, 2026',
        title: 'Frontend Intern',
        place: 'Softvence Omga (under Betopia)',
        meta: 'Joined as a Frontend Intern',
        icon: LaptopCodeIcon,
    },
    {
        type: 'Experience',
        date: 'Jul 2026',
        title: 'Frontend Developer',
        place: 'Softvence Omga (under Betopia)',
        meta: 'Promoted to Permanent role after 6 months',
        icon: UserIcon,
    },
    {
        type: 'Experience',
        date: 'Present',
        title: 'Frontend Developer',
        place: 'Softvence Omga (under Betopia)',
        meta: 'Currently working here',
        icon: BriefcaseIcon,
    },
];

const IconBox = ({ icon: Icon }) => (
    <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#28e98c] to-[#0d6b46] shadow-[0_10px_25px_rgba(40,233,140,0.35)]">
        <div className="pointer-events-none absolute inset-0 rounded-2xl border border-white/15" />
        <Icon className="h-7 w-7 text-white" />
    </div>
);

const JourneyCard = ({ item, side }) => {
    const [ref, isInView] = useInView({ threshold: 0.15 });
    const hiddenTranslate = side === 'left' ? 'md:-translate-x-8' : 'md:translate-x-8';

    return (
        <div
            ref={ref}
            className={`group relative flex items-center gap-4 overflow-hidden rounded-[22px] border border-[rgba(40,233,140,0.15)] bg-[linear-gradient(180deg,#101b18_0%,#060d0b_100%)] p-5 shadow-[0_18px_45px_rgba(0,0,0,0.35)] transition-all duration-700 ease-out hover:-translate-y-1 hover:border-[rgba(40,233,140,0.35)] hover:shadow-[0_20px_50px_rgba(40,233,140,0.12)]
            ${side === 'right' ? 'md:flex-row-reverse md:text-right' : ''}
            ${isInView ? 'translate-x-0 translate-y-0 opacity-100' : `translate-y-6 opacity-0 ${hiddenTranslate}`}`}
        >
            <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#28e98c]/70 to-transparent opacity-70" />

            <IconBox icon={item.icon} />

            <div className="min-w-0 flex-1">
                <div className={`mb-2 flex flex-wrap items-center gap-2 ${side === 'right' ? 'md:justify-end' : ''}`}>
                    <span className="rounded-full bg-[#28e98c]/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#28e98c]">
                        {item.type}
                    </span>
                    <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-[#7fa896]">
                        {item.date}
                    </span>
                </div>
                <h4 className="text-base font-bold leading-snug text-white sm:text-lg">{item.title}</h4>
                <p className="mt-1 text-sm text-[#b7d9ca]">{item.place}</p>
                <span className="mt-3 inline-block rounded-full border border-[#28e98c]/15 bg-[#28e98c]/5 px-3 py-1 text-xs text-[#9fe6c3]">
                    {item.meta}
                </span>
            </div>
        </div>
    );
};

const JourneyTimeline = () => (
    <div className="relative">
        {/* ---------- Desktop / tablet: alternating left-right timeline ---------- */}
        <div className="relative hidden md:block">
            <div className="pointer-events-none absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#28e98c]/25 to-transparent" />

            <div className="flex flex-col gap-12">
                {timelineData.map((item, index) => {
                    const side = index % 2 === 0 ? 'left' : 'right';
                    return (
                        <div key={`${item.title}-${index}`} className="relative flex w-full items-center">
                            <span className="absolute left-1/2 top-1/2 z-10 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#28e98c] bg-[#07110d] shadow-[0_0_14px_rgba(40,233,140,0.55)]" />
                            <div
                                className={`absolute top-1/2 h-px w-[5%] -translate-y-1/2 bg-[#28e98c]/30 ${side === 'left' ? 'left-[45%]' : 'right-[45%]'
                                    }`}
                            />
                            <div className={`w-[45%] ${side === 'left' ? 'mr-auto' : 'ml-auto'}`}>
                                <JourneyCard item={item} side={side} />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>

        {/* ---------- Mobile: single column, left aligned line ---------- */}
        <div className="relative flex flex-col gap-8 md:hidden">
            <div className="pointer-events-none absolute left-[27px] top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-[#28e98c]/25 to-transparent" />
            {timelineData.map((item, index) => (
                <div key={`${item.title}-m-${index}`} className="relative pl-1">
                    <span className="absolute left-[21px] top-7 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-[#28e98c] bg-[#07110d] shadow-[0_0_10px_rgba(40,233,140,0.5)]" />
                    <div className="pl-6">
                        <JourneyCard item={item} side="left" />
                    </div>
                </div>
            ))}
        </div>
    </div>
);

const About = () => {
    return (
        <div className='overflow-hidden bg-[#010202]'>
            <div className="min-h-screen max-w-[1400px] mx-auto text-neutral-100 px-4 py-10 sm:px-6 lg:px-8" id="about">
                <div className="flex flex-col-reverse items-center gap-10 md:flex-row md:items-start md:justify-between md:gap-6">
                    <div className="w-full md:max-w-xl">
                        <div className="mb-4 flex items-center gap-3">
                            <span className="h-px w-8 bg-[#28e98c]" />
                            <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#28e98c]">
                                Education &amp; Experience
                            </span>
                        </div>
                        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                            My <span className="text-[#28e98c]">Journey</span>
                        </h2>
                        <p className="mt-3 max-w-xl text-sm leading-6 text-[#b7d9ca] sm:text-base">
                            A timeline of my education and professional journey, where I gained knowledge,
                            skills, and real-world experience.
                        </p>
                    </div>

                    <div className="relative h-[420px] w-[460px] shrink-0 overflow-hidden rounded-[28px] bg-[#0d1715]  sm:h-[260px] sm:w-[320px]">
                        <img src={gif} alt="Education" className="h-full w-full object-cover opacity-90" />
                    </div>
                </div>

                <div className="mt-16 sm:mt-20">
                    <JourneyTimeline />
                </div>
            </div>
        </div>
    );
};

export default About;
