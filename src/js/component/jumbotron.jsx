import React from "react";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Jumbotron = () => {
    return (
        <div className="jumbotron bg-body-secondary mt-2">
            <div className="p-2">
                <h1 className="display-4">A Warm Welcome!</h1>
                <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ex et ut nostrum ullam voluptas facilis accusamus, illum atque modi aliquid optio reprehenderit neque exercitationem temporibus, necessitatibus sit eaque unde.</p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
                </p>
            </div>
        </div>
    );
};

export default Jumbotron;
