import React, { useRef, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/ContactUs.css';
import { IoHome } from "react-icons/io5";
import Navbar from './NavBar';
import Footer from './Footer';

const handleFormSubmit = (e) => {
    e.preventDefault();
};

const ContactUs = () => {
    return (
        <div>
            <Navbar />
            <div className='fcenter'>
                <fieldset className='fieldsetAC'>
                    <legend className='legendA'>
                        <h2>CONTACT US</h2>
                    </legend>
                    <form action="#" className="formM" id="form1" onSubmit={handleFormSubmit}>
                        <div className='names'>
                            <input type='text' name="firstName" placeholder='First Name' className="input22" required />
                            &nbsp;
                            <input type='text' name="lastName" placeholder='Last Name' className="input22" required />
                        </div>
                        <br />
                        <input type="email" name="email" placeholder="Email" className="input" required />
                        <br />
                        <select className="input" defaultValue="" aria-label="Inquiry Type" required>
                            <option value="" disabled>Select Inquiry Type</option>
                            <option value="general">General Inquiry</option>
                            <option value="technical">Technical Issue</option>
                            <option value="other">Other</option>
                        </select>
                        <br />
                        <input type="text" name="thesisId" placeholder="Thesis ID (optional)" className="input" />
                        <br />
                        <textarea name="comment" className="input6" placeholder="Enter your message here..." required></textarea>
                        <br />
                        <div className='input3'>
                            <button className="button-85" type="submit">Submit Inquiry</button>
                        </div>
                        <br />
                    </form>
                </fieldset>
            </div>
            <br></br>
            <Footer />
            <br />
            <br />
        </div>
    );
};

export default ContactUs;
