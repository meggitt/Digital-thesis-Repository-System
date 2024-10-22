import React, { useRef, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/ForgotPassword.css';
import { IoHome } from "react-icons/io5";
import Navbar from './NavBar';
import Footer from './Footer';



const handleFormSubmit = (e) => {
    e.preventDefault();
};

const ForgotPassword = () => {
    return (
        <div>
            <Navbar />
            <div className='fcenter'>
            <fieldset className='fieldsetA'>
                <legend className='legendA'>
                    <h2>Password Change</h2>
                </legend>
                <form action="#" className="formM" id="form1" onSubmit={handleFormSubmit}>
                    <input type="email" name="email" placeholder="Email" className="inputFp" required />
                    <br></br>
                    <div className='input3'>
                        <button className="button-85">Send One Time Password</button>
                    </div>
                    <br></br>
                    <input type="password" name="otp" placeholder="One Time Password" className="inputFp" required />
                    <br></br>
                    <div className='input3'>
                        <button className="button-85">Verify One Time Password</button>
                    </div>
                    <br></br>
                    <input type="password" name="password" placeholder="New Password" className="inputFp" required />
                        <br></br>
                        <input type="password" name="cPassword" placeholder="Re-enter New Password" className="inputFp" required />
                        <br />
                    <div className='input3'>
                        <button className="button-85">Reset Password</button>
                    </div>
                    <br />
                </form>
            </fieldset>
            </div>
            <br></br>
            <Footer />
            <br></br>
            <br></br>
        </div>

    );
};


export default ForgotPassword;