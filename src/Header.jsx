import React from "react";
import logo from "./Images/logo.png";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import 

const Headers = () => {
    return <>
        <div className="container-fluid header">
            <div className="container ">
                <img className="logo" src={logo} alt="logo" height="60px" width="60px" />
                <span className="brand_name">Keeps Notes</span>
            </div>
        </div>
    </>
}
export default Headers;