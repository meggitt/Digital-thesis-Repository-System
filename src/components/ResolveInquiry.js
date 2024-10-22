import React, { useState } from 'react';

import '../css/submitThesis.css'
import SearchNavBar from "./SearchNavBar";
import '../css/logo.css'
import Footer from './Footer'

const ResolveInquiry = () => {

    const handleFormSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <SearchNavBar />

            <div className="fcenter">

                <fieldset className='fieldset'>
                    <legend className='legendA'>
                        <h2>Resolve Inquiry</h2>
                    </legend>
                    <form action="#" className="submitform" id="forms" onSubmit={handleFormSubmit}>
                        <div className="containerB">
                            {/* Display-only Fields */}
                            
                                <p><strong>Name:</strong> John Doe</p>
                                <p><strong>ThesisID:</strong> T123</p>
                                <p><strong>Type of Issue:</strong> Inquiry/Contact </p>
                                <p><strong>Date of the Issue raised:</strong> 10/20/2024 </p>
                                <p><strong>User Profile:</strong> John2908 </p>
                                <p><strong>role:</strong> Visitor </p>
                                <p><strong>Email:</strong> XYZ@gmail.com</p>
                                <p><strong>Brief Issue:</strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat </p>
                                <p><strong>Supporting Documents:</strong> NA</p>
                          

                            {/* Type Response Input Field */}
                            <textarea id="response" placeholder="Type Response" className="text-input" required></textarea>
                            <br />

                            {/* Submit Button */}
                            <div className='input3'>
                                <button className="button-85">
                                    Send Response
                                </button>
                            </div>
                        </div>
                    </form>
                </fieldset>
            </div>
            <Footer />

        </div>
    );
}

export default ResolveInquiry;
