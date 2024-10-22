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
                                <p><strong>Date of the Issue Raised:</strong> 10/20/2024 </p>
                                <p><strong>Raised by:</strong> John2908, <strong>&nbsp;Role:</strong> Student </p>
                                <p><strong>Email:</strong> John.de@gmail.com</p>
                                <p><strong>Brief Issue:</strong>Not able to raise a re-request</p>
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
