

const InfoHeading = ({ Role, Option }) => {
    return (
        <div className="mb-5 grid grid-cols-[1fr_auto_1fr]">
            <div><h1 className="font-bold text-[#28E98C] text-xl">{Role}</h1></div>
            <div className="px-5"><h3 className="font-bold">:</h3></div>
            <div><h3 className="font-bold text-xl">{Option}</h3></div>
        </div>
    );
};

export default InfoHeading;