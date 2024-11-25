import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css"; // Ensure you still have any required styles
import FormModal from './FormModal';
import { imagePath } from "../images/imagePath";

const logo = imagePath.logo;

const Navbar = () => {
    const [showModal, setShowModal] = useState(false);
    const [buttonColor, setButtonColor] = useState("#6e2b21"); // Initial color
    const [isOpen, setIsOpen] = useState(false); // State for navbar toggle

    const handleShow = () => {
        setShowModal(true);
        setButtonColor("#6e2b21");
    };

    const handleClose = () => {
        setShowModal(false);
        setButtonColor("#000");
    };

    const toggleNavbar = () => {
        setIsOpen(!isOpen); // Toggle the navbar open/close state
    };

    return (
        <nav className="navbar navbar-expand-lg t bg-transparent">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="Resort in Palghar" style={{ maxHeight: "60px" }} />
                </Link>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    onClick={toggleNavbar} // Use the toggle function
                    aria-expanded={isOpen} // Update aria-expanded for accessibility
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0"> 
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/best-resort-in-kelve">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/resort-with-rooms-in-kelve">Rooms</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/resort-for-events-in-palghar">Events</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/resort-near-kelve-beach">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <button 
                                type="button" 
                                className="bookbutton" 
                                onClick={handleShow} 
                                style={{ backgroundColor: buttonColor, transition: 'background-color 0.3s ease' }} 
                            >
                                Book Now
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <FormModal show={showModal} handleClose={handleClose} />
        </nav>
    );
};

export default Navbar;
