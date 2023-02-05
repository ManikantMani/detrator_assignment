import React from "react";
import "./navbar.css"
import logo from "../../Images/logo.png"

const Navbar = () => {

    const [colorChange, setColorchange] = React.useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 50) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);

    return (
        <>
            <div className={colorChange ? "navbar__container colorChange_nav" : "navbar__container"}>
                <div className="navbar__container_left">
                    <img src={logo} alt="" className="brand__logo" />
                    <h2>DETRATOR PROJECT</h2>
                </div>
                <div className="navbar__container_right">
                    <h2>ALL POSTS</h2>
                </div>
            </div>
        </>
    )
}

export default Navbar;