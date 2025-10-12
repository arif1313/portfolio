const SingleProject = ({ project }) => {
    const { name, description, features, technologies_used, github_url, live_demo_url, image } = project;

    return (
        <div className="relative group bg-[#1E1E1E] rounded-2xl overflow-hidden shadow-lg hover:shadow-[#28E98C]/40 border border-gray-800 hover:border-[#28E98C] transition-all duration-500 z-10">

            {/* Image Section */}
            <div className="overflow-hidden h-52">
                <img
                    src={image || "https://via.placeholder.com/400x250"}
                    alt={name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
            </div>

            {/* Project Content */}
            <div className="p-6 space-y-4">
                {/* Title */}
                <h2 className="text-2xl font-bold text-white group-hover:text-[#28E98C] transition-colors">
                    {name}
                </h2>
                <p className="text-gray-300 text-sm leading-relaxed">{description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                    {technologies_used.map((tech, idx) => (
                        <span
                            key={idx}
                            className="px-3 py-1 text-xs rounded-full border border-[#28E98C]/40 text-[#28E98C] bg-[#28E98C]/10"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Features */}
                {features && (
                    <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
                        {features.map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                        ))}
                    </ul>
                )}

                {/* Buttons */}
                <div className="flex justify-between items-center pt-3">
                    <a
                        href={live_demo_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-[#28E98C] text-black text-sm font-semibold rounded-lg shadow hover:bg-[#1f8d60] transition-colors"
                    >
                        🚀 Live Demo
                    </a>
                    <a
                        href={github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-gray-800 text-white text-sm font-semibold rounded-lg hover:bg-gray-700 transition-colors"
                    >
                        💻 GitHub
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SingleProject;
