/* File written by: Chavda, Yugamsinh Udayansinh Student ID: 1002069171 */
import React from 'react'; // Importing React library
import { useNavigate, Link } from 'react-router-dom'; // Importing hooks and Link from React Router
import '../css/StudentThesisPage.css'; // Importing CSS for styling the Student Thesis Page
import SearchNavBar from './SearchNavBar'; // Importing the SearchNavBar component
import Footer from './Footer'; // Importing the Footer component

const StudentThesisPage = () => {
    const navigate = useNavigate(); // Hook to programmatically navigate to different routes

    return (
        <div className="dashboard"> {/* Main dashboard container */}
            <SearchNavBar /> {/* Render the search navigation bar */}

            <fieldset className='dashboardfs'> {/* Fieldset for styling */}
                <div className='fieldsetDashboard'> {/* Dashboard container */}
                    <div className='blocksDashboard'> {/* Container for thesis links */}
                        <div className='topLikedThesis'> {/* Section for the first link */}
                            <Link to="/student-thesis" className='alink'>Approved and Unpublished Theses</Link>
                        </div>
                        <div>
                            <Link to="/student-thesis" className='alink'>Pending Approval Theses</Link>
                        </div>
                        <div>
                            <Link to="/student-thesis" className='alink'>Approved and Published Theses</Link>
                        </div>
                        <div>
                            <Link to="/student-thesis" className='alink'>Declined Theses</Link>
                        </div>
                        <div>
                            <Link to="/student-thesis" className='alink'>Drafted Theses</Link>
                        </div>
                    </div>
                    <div className='input3'> {/* Container for the button */}
                        <button className="button-85" onClick={() => navigate('/submit-thesis')}>Submit a new thesis</button>
                    </div>
                </div>
            </fieldset>

            <Footer /> {/* Render the footer */}
        </div>
    );
}

export default StudentThesisPage; // Export the StudentThesisPage component for use in other files
