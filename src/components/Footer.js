import '../css/AboutUs.css';
import React, { useRef, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Footer = () => {
    return (
        <div className="footer">
            <div className='inputF'>
            <Link to='/aboutUs'>About Us</Link>
            <Link to='/contactUs'>Contact Us</Link>
            <Link to='/faq'>FAQs</Link>
            </div>
            <p>&copy; All Rights Reserved 2024</p>
        </div>
    );
};
export default Footer;