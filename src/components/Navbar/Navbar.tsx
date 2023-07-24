import { ReactComponentElement, ReactElement } from "react";
import "./Navbar.css";


const Navbar = ()=> {
    return(
        <div className="navBar_container">
            <div className="navBar_img">
                <h2>Aquí va el logo</h2>
            </div>
            <div className="navBar_name">
                <h1>Mr WHO?</h1>
            </div>
            <div className="navBar_login">
                <button className="button-item">Login</button>
            </div>
        </div>
    )
}

export default Navbar;