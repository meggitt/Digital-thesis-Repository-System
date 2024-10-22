/* File written by: Chavda, Yugamsinh Udayansinh Student ID: 1002069171 */
import React from 'react';
import '../css/SuperAdminHomePage.css';
import NavbarWithoutLinks from './NavbarWithoutLinks';
import Footer from './Footer';
import {Link} from 'react-router-dom';
// Main component for the Super Admin Home Page
function SuperAdminHomePage() {
    return (
        <div className="dashboard">
            {/* Render the navigation bar without links */}
            <NavbarWithoutLinks />

            <main>
                <div className="app-container">
                    <div className="main-content">
                        {/* Rows for different management sections */}
                        <div className="row">
                            {/* Section for managing department admins */}
                            <Section title="Manage Department Admins" type="admin" />
                            {/* Section for managing students */}
                            <Section title="Manage Students" type="student" />
                        </div>
                        <div className="row">
                            {/* Section for managing department advisors */}
                            <Section title="Manage Department Advisors" type="advisor" />
                            {/* Section for managing thesis submissions */}
                            <Section title="Manage Thesis" type="thesis" />
                        </div>
                        <div className="row last-row">
                            {/* List of inquiries to be answered */}
                            <InquiryList />
                        </div>
                    </div>
                </div>
            </main>
            {/* Render the footer component */}
            <Footer />
        </div>
    );
}

// Section component to render different management sections
function Section({ title, type }) {
    // Function to render content based on the type of section
    const renderContent = () => {
        // Handle cases for admin, advisor, and student sections
        if (type === 'admin' || type === 'advisor' || type === 'student') {
            return (
                <>
                    {[1, 2, 3].map((item) => (
                        <div className="button-group" key={item}>
                            {/* Display appropriate title based on type */}
                            <span>{type === 'admin' ? `Admin ${item}` : type === 'advisor' ? `Advisor ${item}` : `Student ${item}`}</span>
                            <div>
                                {/* Buttons to review profiles and manage access */}
                                <button className="insidebuttons">Review Profile</button>
                                <button className="insidebuttons">Manage Access</button>
                            </div>
                        </div>
                    ))}
                </>
            );
        } 
        // Handle thesis management section
        else if (type === 'thesis') {
            return (
                <>
                    {[1, 2, 3].map((item) => (
                        <div className="button-group" key={item}>
                            <span>Thesis {item}</span>
                            <div>
                                {/* Button to review thesis */}
                                <button className="insidebuttons">Review Thesis</button>
                            </div>
                        </div>
                    ))}
                </>
            );
        } 
        // Handle inquiry section
        else if (type === 'inquiry') {
            return (
                <>
                    {[1, 2, 3].map((item) => (
                        <div className="button-group" key={item}>
                            <span>Inquiry {item}</span>
                            <div>
                                {/* Buttons to view and respond to inquiries */}
                                <button className="action-button">View</button>
                                <button className="action-button">Respond</button>
                            </div>
                        </div>
                    ))}
                </>
            );
        }
    };

    return (
        <div className="section-container">
            <h2 className="section-title">{title}</h2>
            {/* Search container for filtering results */}
            <div className="search-container">
                <input placeholder="Hinted search text" />
                <button className="action-button button-85">Search</button>
            </div>
            {/* Render the content specific to the section type */}
            {renderContent()}
        </div>
    );
}

// Component to display a list of inquiries for the super admin to answer
function InquiryList() {
    return (
        <div className="section-container">
            <h2 className="section-title">Answer an Inquiry</h2>
            {/* List of inquiries that can be resolved */}
            {[201, 202, 203].map((item) => (
                <div className="button-group" key={item}>
                    {/* Link to resolve the specific inquiry */}
                    <Link to="/resolve-inquiry">Inquiry {item}</Link>
                </div>
            ))}
        </div>
    );
}

// Export the SuperAdminHomePage component for use in other files
export default SuperAdminHomePage;
