const SingleWorkDiv = ({ work }) => {
    const { icon, title, description } = work;

    return (
        <div className="group relative overflow-hidden rounded-[28px] border border-[#28e98c]/12 bg-[linear-gradient(180deg,#101b18_0%,#060d0b_100%)] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#28e98c]/60 hover:shadow-[0_22px_60px_rgba(40,233,140,0.12)]">
            <div className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-[#28e98c]/80 to-transparent opacity-80" />

            <div className="mb-5 flex items-center justify-between">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#28e98c]/25 bg-[#0d1715] shadow-[inset_0_0_20px_rgba(40,233,140,0.08)]">
                    <img className="h-9 w-9 object-contain" src={icon} alt={title} />
                </div>

                <span className="rounded-full border border-[#28e98c]/20 bg-[#28e98c]/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#28e98c]">
                    Service
                </span>
            </div>

            <h2 className="text-xl font-bold text-white lg:text-2xl">{title}</h2>

            <p className="mt-4 text-sm leading-7 text-[#b7d9ca] lg:text-[15px]">{description}</p>

            <div className="mt-6 h-px w-full bg-gradient-to-r from-[#28e98c]/40 via-white/10 to-transparent" />
        </div>
    );
};

export default SingleWorkDiv;
