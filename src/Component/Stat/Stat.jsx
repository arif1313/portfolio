const Stat = () => {
    return (
        <div className="py-10 px-4 md:px-10 max-w-[1400px] mx-auto">
            <div className="flex items-center justify-around gap-4 rounded-[20px] border border-[#28e98c]/10 bg-[#0d1715] py-8 shadow-[0_16px_30px_rgba(0,0,0,0.22)]">
                <div className="flex flex-1 flex-col items-center text-center">
                    <div className="text-3xl font-bold text-[#28e98c] sm:text-4xl md:text-5xl">1K+</div>
                    <div className="mt-2 text-sm text-[#eefdf6] sm:text-base md:text-lg">Lines of Code</div>
                </div>
                <div className="flex flex-1 flex-col items-center text-center">
                    <div className="text-3xl font-bold text-[#28e98c] sm:text-4xl md:text-5xl">40+</div>
                    <div className="mt-2 text-sm text-[#eefdf6] sm:text-base md:text-lg">Projects Completed</div>
                </div>
                <div className="flex flex-1 flex-col items-center text-center">
                    <div className="text-3xl font-bold text-[#28e98c] sm:text-4xl md:text-5xl">100%</div>
                    <div className="mt-2 text-sm text-[#eefdf6] sm:text-base md:text-lg">Client Satisfaction</div>
                </div>
            </div>
        </div>
    );
};


export default Stat;
