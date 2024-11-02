

const SingleWorkDiv = ({ work }) => {

    const { icon, title, description } = work;
    return (
        <div className="hover:border flex flex-col gap-3 hover:border-[#28E98C] hover:delay-300 bg-[#4F4F4F] hover:bg-[#292929]  p-5">
            <div>
                <img className="h-10 w-10 rounded-full" src={icon} alt="" />
            </div>
            <div>
                <h2 className="text-xl font-bold text-neutral-100"> {title}</h2>
            </div>
            <div>
                <p className="text-neutral-100">{description}</p>
            </div>
        </div>
    );
};

export default SingleWorkDiv;