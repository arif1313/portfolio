

const InfoHeading = ({Role,Option}) => {
    return (
        <div className="mb-5 ">
            <h1 className=" font-bold text-textYallow text-xl">{Role}</h1>
            <h3 className="mt-3 text-textBlack/20 font-bold">{Option}</h3>
            
        </div>
    );
};

export default InfoHeading;