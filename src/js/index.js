//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Jumbotron from "./component/jumbotron.jsx";
import Navbar from "./component/navbar.jsx";
import Cards from "./component/cards.jsx";
import Footer from "./component/footer.jsx";

//render your react application
ReactDOM.render(
    <>
        <Navbar />
        <div className="container">
            <Jumbotron />
            <div className="row">
                <div className="col-3">
                    <Cards />
                </div>
                <div className="col-3">
                    <Cards />
                </div>
                <div className="col-3">
                    <Cards />
                </div>
                <div className="col-3">
                    <Cards />
                </div>
            </div>
        </div>
        <Footer />
    </>,
    document.querySelector("#app")
);