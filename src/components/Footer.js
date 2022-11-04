import React from 'react';

import {FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className="py-3 mt-5 bg-dark d-flex flex-wrap justify-content-between align-items-center fixed-bottom border-top">
        <div className="container d-flex justify-content-between">
            <div className="col-md-4 d-flex align-items-center">
            <span className="text-info">Copy&copy; rights reserved 2022 </span>
            </div>
        
            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3 fs-2"><Link to=""><FaFacebook></FaFacebook></Link></li>
            <li className="ms-3 fs-2"><Link to=""><FaTwitter></FaTwitter></Link></li>
            <li className="ms-3 fs-2"><Link to=""><FaInstagram></FaInstagram></Link></li>
            
            </ul>
        </div>
      </footer>
        
        
    );
};

export default Footer;