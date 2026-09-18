const SingleProject = ({ project }) => {
    const { name, description, features, technologies_used, github_url, live_demo_url, image } = project;

    return (
        <div className="group relative z-10 overflow-hidden rounded-[22px] border border-[#28e98c]/10 bg-[#0d1715]  shadow-[0_18px_45px_rgba(0,0,0,0.25)] transition-all duration-500 hover:-translate-y-1 hover:border-[#28e98c]/45 hover:shadow-[0_22px_50px_rgba(40,233,140,0.12)]">
            <div className="overflow-hidden border-b border-[#28e98c]/10">
                <img
                    src={image || "https://via.placeholder.com/400x250"}
                    alt={name}
                    className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>
            
            <div className="space-y-4 p-5">
                <div className="flex items-center justify-between gap-3">
                    <h2 className="text-xl font-bold text-white transition-colors group-hover:text-[#28e98c]">
                        {name}
                    </h2>
                    <span className="rounded-full border border-[#28e98c]/30 bg-[#28e98c]/10 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-[#28e98c]">
                        Project
                    </span>
                </div>

                <p className="text-sm leading-6 text-[#b7d9ca]">{description}</p>

                <div className="flex flex-wrap gap-2">
                    {technologies_used.map((tech, idx) => (
                        <span
                            key={idx}
                            className="rounded-full border border-[#28e98c]/20 bg-[#28e98c]/5 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.08em] text-[#28e98c]"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {features && (
                    <ul className="space-y-2 text-sm text-[#b7d9ca]">
                        {features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#28e98c]" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                )}

                <div className="flex justify-between gap-3 pt-2">
                    <a
                        href={live_demo_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex flex-1 items-center justify-center rounded-xl bg-[#28e98c] px-3 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#07110d] transition-all hover:bg-[#71f5b1]"
                    >
                        Live Demo
                    </a>
                    <a
                        href={github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex flex-1 items-center justify-center rounded-xl border border-[#28e98c]/20 bg-[#0b1715] px-3 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#28e98c] transition-all hover:border-[#28e98c]/40 hover:bg-[#28e98c]/5"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SingleProject;
