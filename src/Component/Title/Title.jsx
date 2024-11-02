

const Title = ({ headingTitle }) => {
    return (
        <div>
            <div className="flex gap-2">
                <div className="bg-[#28E98C]  w-1">

                </div>
                <div>
                    <h1 className="text-5xl font-bold text-neutral-100">{headingTitle}</h1>
                </div>
            </div>
        </div>
    );
};

export default Title;