/* File written by: Chavda, Yugamsinh Udayansinh, Student ID: 100206917171 */
import React from 'react'; // Importing React to create the component
import { Link, useNavigate } from 'react-router-dom'; // Importing Link for navigation and useNavigate (not used here)
import '../css/DepartmentAdminHomePage.css'; // Importing custom CSS for styling
import NavbarWithoutLinks from './NavbarWithoutLinks'; // Importing a navbar without links for the admin page
import Footer from './Footer'; // Importing the Footer component

// Main component for the Department Admin Home Page
function DepartmentAdminHomePage() {
    return (
        <div className="dashboard"> {/* Main wrapper for the dashboard */}
            <NavbarWithoutLinks /> {/* Rendering the NavbarWithoutLinks component */}

            <main> {/* Main content area */}
                <div className="app-container"> {/* Container for the app content */}
                    <div className="main-content"> {/* Main content area */}
                        <div className="row"> {/* Row for the first set of sections */}
                            <Section title="Manage Department Advisors" type="advisor" /> {/* Section for managing advisors */}
                            <Section title="Manage Students" type="student" /> {/* Section for managing students */}
                        </div>
                        <div className="row"> {/* Row for thesis management */}
                            <Section title="Manage Thesis" type="thesis" /> {/* Section for managing theses */}
                        </div>
                        <div className="row last-row"> {/* Last row for inquiries */}
                            <InquiryList /> {/* Component displaying inquiries */}
                        </div>
                    </div>
                </div>
            </main>
            <Footer /> {/* Rendering the Footer component */}
        </div>
    );
}

// Functional component to render sections of the admin page
function Section({ title, type }) {
    // Function to render the appropriate content based on section type
    const renderContent = () => {
        if (type === 'advisor' || type === 'student') {
            return (
                <>
                    {[1, 2, 3].map((item) => ( // Mapping through dummy data for advisors and students
                        <div className="button-group" key={item}>
                            <span>{type === 'advisor' ? `Advisor ${item}` : `Student ${item}`}</span> {/* Displaying advisor or student name */}
                            <div>
                                <button className="insidebuttons">Review Profile</button> {/* Button to review profile */}
                                <button className="insidebuttons">Manage Access</button> {/* Button to manage access */}
                            </div>
                        </div>
                    ))}
                </>
            );
        } else if (type === 'thesis') {
            return (
                <>
                    {[1, 2, 3].map((item) => ( // Mapping through dummy data for theses
                        <div className="button-group" key={item}>
                            <span>Thesis {item}</span> {/* Displaying thesis name */}
                            <div>
                                <button className="insidebuttons">Review Thesis</button> {/* Button to review thesis */}
                            </div>
                        </div>
                    ))}
                </>
            );
        }
    };

    return (
        <div className="section-container"> {/* Container for each section */}
            <h2 className="section-title">{title}</h2> {/* Section title */}
            <div className="search-container"> {/* Container for search input */}
                <input placeholder="Hinted search text" /> {/* Search input field */}
                <button className="action-button button-85">Search</button> {/* Search button */}
            </div>
            {renderContent()} {/* Rendering the content based on type */}
        </div>
    );
}

// Component for displaying inquiries to be answered
function InquiryList() {
    return (
        <div className="section-container"> {/* Container for the inquiry list */}
            <h2 className="section-title">Answer an Inquiry</h2> {/* Title for the inquiry section */}
            {[201, 202, 203].map((item) => ( // Mapping through dummy inquiry data
                <div className="button-group" key={item}>
                    <Link to="/resolve-inquiry">Inquiry {item}</Link> {/* Link to resolve an inquiry */}
                </div>
            ))}
        </div>
    );
}

// Exporting the DepartmentAdminHomePage component for use in other parts of the application
export default DepartmentAdminHomePage;
