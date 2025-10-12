const Stat = () => {
    return (
        <div className="py-10 px-4 md:px-10">
            <div className="bg-[rgb(41,41,41)] shadow-lg rounded-xl flex  justify-around items-center gap-6 sm:gap-10 py-8">
                <div className="flex flex-col items-center flex-1 text-center">
                    <div className="text-[#28E98C] text-3xl sm:text-4xl md:text-5xl font-bold">1K</div>
                    <div className="text-neutral-100 text-sm sm:text-base md:text-lg mt-2">Clients Worldwide</div>
                </div>
                <div className="flex flex-col items-center flex-1 text-center">
                    <div className="text-[#28E98C] text-3xl sm:text-4xl md:text-5xl font-bold">40+</div>
                    <div className="text-neutral-100 text-sm sm:text-base md:text-lg mt-2">Projects Completed</div>
                </div>
                <div className="flex flex-col items-center flex-1 text-center">
                    <div className="text-[#28E98C] text-3xl sm:text-4xl md:text-5xl font-bold">1</div>
                    <div className="text-neutral-100 text-sm sm:text-base md:text-lg mt-2">Years of Experience</div>
                </div>

            </div>
        </div>
    );
};

export default Stat;
