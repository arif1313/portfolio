import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Title from "../Title/Title";


const WhatDo = ({ headingTitle, headingDescrip }) => {

    const handleserviceclick = () => {
        const contactSection = document.getElementById("services");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <div className="py-10">
            <Title headingTitle={headingTitle} />
            <div className="py-10 pr-2 text-neutral-100">
                <p>{headingDescrip}</p>
            </div>

            {/*  Fixed Link text */}
            <Link
                onClick={handleserviceclick}
                className="inline-block px-6 py-2 text-sm font-medium text-white bg-[#28E98C] rounded-lg hover:bg-[#085c33] transition-all"
            >
                Services & Pricing
            </Link>
        </div>
    );
};

WhatDo.propTypes = {
    headingTitle: PropTypes.string.isRequired,
    headingDescrip: PropTypes.string.isRequired,
};

export default WhatDo;
