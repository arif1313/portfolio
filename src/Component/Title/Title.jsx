

const Title = ({ headingTitle }) => {
    return (
        <div>
            <div className="flex items-center gap-3 max-w-[1400px] mx-auto">
                <div className="h-7 w-1 rounded-full bg-[#28e98c]" />
                <div>
                    <h1 className="text-3xl font-bold text-white md:text-4xl">{headingTitle}</h1>
                </div>
            </div>
        </div>
    );
};

export default Title;