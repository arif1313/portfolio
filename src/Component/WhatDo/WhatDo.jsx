import Button1 from "../Button/Button1";
import Title from "../Title/Title";


const WhatDo = ({ headingTitle, headingDescrip }) => {
    return (
        <div className="  py-10 ">
            <Title headingTitle={headingTitle}></Title>
            <div className="py-10 pr-2 text-neutral-100">
                <p>{headingDescrip}</p>

            </div>
            <Button1 link={''} title={'Services & Pricing'}></Button1>
        </div>
    );
};

export default WhatDo;