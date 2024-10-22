/* File written by: Venkata Sri Dheeraj Chintapalli, Student Id: 1002111350 */
import React, { useState } from 'react'; // Importing necessary React hooks
import '../css/submitThesis.css'; // Importing CSS for styling the component
import SearchNavBar from "./SearchNavBar"; // Importing the SearchNavBar component
import '../css/logo.css'; // Importing additional CSS for logo styling
import Footer from './Footer'; // Importing the Footer component

const ResolveInquiry = () => {
    // Function to handle the form submission
    const handleFormSubmit = (e) => {
        e.preventDefault(); // Prevents the default form submission behavior
    };

    return (
        <div>
            <SearchNavBar /> {/* Render the navigation bar at the top of the page */}

            <div className="fcenter"> {/* Centering the content */}
                <fieldset className='fieldset'> {/* Fieldset for grouping related elements */}
                    <legend className='legendA'> {/* Legend for the fieldset */}
                        <h2>Resolve Inquiry</h2> {/* Title for the form */}
                    </legend>
                    <form action="#" className="submitform" id="forms" onSubmit={handleFormSubmit}>
                        <div className="containerB"> {/* Container for form elements */}
                            {/* Display-only Fields */}
                            <p><strong>Name:</strong> John Doe</p> {/* Displaying the name of the person */}
                            <p><strong>ThesisID:</strong> T123</p> {/* Displaying the Thesis ID */}
                            <p><strong>Type of Issue:</strong> Inquiry/Contact </p> {/* Type of inquiry */}
                            <p><strong>Date of the Issue Raised:</strong> 10/20/2024 </p> {/* Date of inquiry */}
                            <p><strong>Raised by:</strong> John2908, <strong>&nbsp;Role:</strong> Student </p> {/* User details */}
                            <p><strong>Email:</strong> John.de@gmail.com</p> {/* User email */}
                            <p><strong>Brief Issue:</strong> Not able to raise a re-request</p> {/* Brief description of the issue */}
                            <p><strong>Supporting Documents:</strong> NA</p> {/* Any supporting documents, if applicable */}
                          
                            {/* Type Response Input Field */}
                            <textarea id="response" placeholder="Type Response" className="text-input" required></textarea>
                            {/* A textarea for typing the response, marked as required */}

                            <br /> {/* Line break for spacing */}

                            {/* Submit Button */}
                            <div className='input3'> {/* Container for the button */}
                                <button className="button-85">
                                    Send Response {/* Text on the button */}
                                </button>
                            </div>
                        </div>
                    </form>
                </fieldset>
            </div>
            <Footer /> {/* Render the footer at the bottom of the page */}
        </div>
    );
}

export default ResolveInquiry; // Exporting the component for use in other parts of the application
