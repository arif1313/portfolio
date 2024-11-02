

const Button1 = ({ link, title }) => {
    return (
        <div>
            <div>
                <a href={link} download='Md Arif resume' className="btn bg-[#28E98C] text-neutral-100 border-none font-bold py-2 px-4 rounded-md hover:bg-[#4F4F4F]">
                    {title}
                </a>
            </div>
        </div>
    );
};

export default Button1;