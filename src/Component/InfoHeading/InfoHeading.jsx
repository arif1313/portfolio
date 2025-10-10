const InfoHeading = ({ Role, Option }) => {
    return (
        <div className="flex justify-between items-center border-b border-gray-700 pb-2">
            <h1 className="font-semibold text-lg text-[#28E98C]">{Role}</h1>
            <span className="text-neutral-200 font-medium">{Option}</span>
        </div>
    );
};

export default InfoHeading;
