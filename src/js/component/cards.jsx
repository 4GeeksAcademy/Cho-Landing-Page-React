import React from "react";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Cards = () => {
    return (
        <div className="card mt-2" style={{ width: "18rem" }}>
            <img src="https://via.placeholder.com/500x325" className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title text-center">Card title</h5>
                <p className="card-text text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos laudantium aut ipsa commodi, veniam magnam. </p>
                <div className="d-flex justify-content-center border-top">
                    <a href="#" className="btn btn-primary mt-3 ">Find out more!</a>
                </div>
            </div>
        </div>
    );
};

export default Cards;
