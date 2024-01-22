import React from "react";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Footer = () => {
    return (
        <footer className="bg-dark text-center text-lg-start mt-3 fixed-bottom">
            <div className="text-center text-light p-3">
                Copyright @ Your website 2019
            </div>
        </footer>
    );
};

export default Footer;
