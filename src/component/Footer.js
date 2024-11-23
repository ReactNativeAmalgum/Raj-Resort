import React from 'react'
import { Link } from "react-router-dom";
import '../css/Footer.css'
import log from "../images/raj-logo-removebg-preview.c85a7fee59978f7e34ac.png";
const Footer = () => {
    return (
        <div>
            <footer className="footer-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="footer-item">
                                <div className="footer-logo">
                                    <a href="#">
                                        <img src={log} alt="" />
                                    </a>
                                </div>
                                <p>
                                    Our journey began with a simple vision - to provide a sanctuary where weary souls could escape the hustle and bustle of city life and reconnect with nature's tranquility.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="footer-item">
                                <h5>Contact Info</h5>
                                <ul className="">
                                    <li>
                                        <i className="fa fa-map-marker"></i>
                                        Bus Stop, Mangelwada, Palghar
                                        <br />
                                        Kelwa, Maharashtra 401401


                                    </li>
                                    <li>
                                        <i className="fa fa-phone"></i>
                                        +91 9225102497
                                    </li>
                                    <li>
                                        <i className="fa fa-phone"></i>
                                        +91 9890165286
                                    </li>

                                </ul>

                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="footer-item">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15032.679428294427!2d72.73501!3d19.6200347!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7025e431104f7%3A0xf163edc0020f5ca5!2sRaj%20Resort%20Kelve%20Beach!5e0!3m2!1sen!2sin!4v1714374510781!5m2!1sen!2sin" width="300" height="220" loading="lazy" ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
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
                                        <Link to="/Services">Services</Link>
                                    </li>
                                    <li>
                                        <Link to="/Contact">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="row pt-5">
                            <div className="col-lg-12 ">
                                <div className="small text-white text-center">
                                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                    Copyright ©2022 All rights reserved | <br /> Developed by&nbsp;
                                    <a href="https://skdm.in" className="text-white" target="_blank">
                                        Shree Krishna Digital Marketing
                                    </a>
                                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer

