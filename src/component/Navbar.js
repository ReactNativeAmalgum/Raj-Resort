import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import FormModal from './FormModal';
import $ from "jquery";
import { useState } from "react";
import { imagePath } from "../images/imagePath";

const logo = imagePath.logo;
const Navbar = () => {
    const handleClick = (e) => {
        if ($(e.target).closest("#nav-check").length === 0) {
            $("#nav-check").prop("checked", false);
        } else {
            $("#nav-check").prop("checked", true);
        }
    };

    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    //   /*------------------
    // 		Navigation
    // 	--------------------*/
    //   $(".mobile-menu").slicknav({
    //     prependTo: '#mobile-menu-wrap',
    //     allowParentLinks: true
    // });

    return (
        <div>
            <header className="header-section d-flex ">
                <div className="container-fluid">
                    <div className="inner-header d-lg-block d-md-block d-none">
                        <div className="logo1 ">
                            <Link to="/">
                                <img src={logo} alt="" />
                            </Link>
                        </div>
                        <a className="nav-right">

                            <FormModal show={showModal} handleClose={handleClose} />
                        </a>

                        <nav className=" main-menu mobile-menu d-lg-block d-none">
                            <ul>
                                <li className="active">
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/About">About</Link>
                                </li>
                                <li>
                                    <Link to="/Rooms">Rooms</Link>
                                </li>

                                {/* <li>
            <a href="#">Pages</a>
            <ul className="drop-menu">
              <li>
                <a href="about-us.html">About Us</a>
              </li>
              <li>
                <a href="rooms.html">Rooms</a>
              </li>
              <li>
                <a href="services.html">Services</a>
              </li>
            </ul>
          </li> */}
                                <li>
                                    <Link to="/Services">Event</Link>
                                </li>
                                <li>
                                    <Link to="/Contact">Contact</Link>
                                </li>
                                <li>
                                    <button type="button" className="bookbutton" onClick={handleShow}>
                                        Book Now
                                    </button>
                                </li>
                            </ul>
                        </nav>

                    </div>
                    <div className="nav d-lg-none d-md-block d-sm-block">
                        <div className="logo1">
                            <Link to="/">
                                <img src="https://www.raj-resort.in/images/logo.png" alt="" />
                            </Link>
                        </div>
                        <input type="checkbox" id="nav-check" />

                        <div className="nav-btn">
                            <label htmlFor="nav-check">
                                <span></span>
                                <span></span>
                                <span></span>
                            </label>
                        </div>

                        <div className="nav-links">
                            <Link to="/" onClick={handleClick}>
                                Home
                            </Link>
                            <Link to="/About" onClick={handleClick}>
                                About
                            </Link>
                            <Link to="/Services" onClick={handleClick}>
                                Services
                            </Link>
                            <Link to="/Rooms" onClick={handleClick}>
                                Rooms
                            </Link>
                            <Link to="/Contact" onClick={handleClick}>
                                Contact
                            </Link>
                            <li>
                                <button type="button" className="bookbutton" onClick={handleShow}>
                                    Book Now
                                </button>
                            </li>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Navbar;
