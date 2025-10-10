const SingleWorkDiv = ({ work }) => {
    const { icon, title, description } = work;

    return (
        <div className="bg-[#4F4F4F] hover:bg-[#292929] transition-all duration-300 border border-transparent hover:border-[#28E98C] rounded-2xl p-6 flex flex-col items-start gap-4 shadow-md hover:shadow-[#28E98C]/40">

            {/* Icon */}
            <div className="flex items-center justify-center w-16 h-16 bg-[#1a1a1a] rounded-full shadow-inner">
                <img className="h-10 w-10 object-contain" src={icon} alt={title} />
            </div>

            {/* Title */}
            <h2 className="text-xl lg:text-2xl font-bold text-white">{title}</h2>

            {/* Description */}
            <p className="text-neutral-300 text-sm lg:text-base leading-relaxed text-justify">{description}</p>
        </div>
    );
};

export default SingleWorkDiv;
