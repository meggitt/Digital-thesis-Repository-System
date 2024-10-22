/* File written by: Chavda, Yugamsinh Udayansinh, Student ID: 1002069171 */

// Import necessary libraries and components
import React from 'react'; // Importing React library to create the component
import { Link } from 'react-router-dom'; // Importing Link for navigation within the app
import '../css/Dashboard.css'; // Importing custom CSS for the Dashboard styling
import { useNavigate } from 'react-router-dom'; // Importing useNavigate for programmatic navigation
import logo from "../images/lo.png"; // Importing a logo image (not used in the current code)
import SearchNavBar from "./SearchNavBar"; // Importing the SearchNavBar component
import Footer from "./Footer"; // Importing the Footer component

const Dashboard = () => {
    const navigate = useNavigate(); // Hook for navigating programmatically within the app

    return (
        <div className="dashboard"> {/* Main wrapper for the dashboard */}
            <SearchNavBar /> {/* Rendering the SearchNavBar component */}
            <br></br>

            {/* Fieldset to group dashboard elements with styling */}
            <fieldset className='dashboardfs'>
                <div className='fieldsetDashboard'>
                    <div className='blocksDashboard'>
                        {/* Links for top liked thesis and subscribed keywords */}
                        <div className='topLikedThesis'>
                            <a href="/" className='alink'>Top Liked Thesis</a> {/* Link to top liked thesis */}
                        </div>
                        <br></br>
                        <div className='subscribedkw1'>
                            <a href="/" className='alink'>Subscribed Keyword Thesis 1</a> {/* Link for subscribed keyword thesis 1 */}
                        </div>
                        <br></br>
                        <div className='subscribedkw2'>
                            <a href="/" className='alink'>Subscribed Keyword Thesis 2</a> {/* Link for subscribed keyword thesis 2 */}
                        </div>
                        <br></br>
                        <div className='subscribedkw3'>
                            <a href="/" className='alink'>Subscribed Keyword Thesis 3</a> {/* Link for subscribed keyword thesis 3 */}
                        </div>
                    </div>

                    <br></br>
                    <br></br>
                    <br></br>
                    
                    {/* Button to submit a new thesis, navigating to the submit-thesis page */}
                    <div className='input3'>
                        <button className="button-85" onClick={() => navigate('/submit-thesis')}>
                            Submit a new thesis
                        </button> {/* Button with an onClick event that uses navigate */}
                    </div>
                </div>
            </fieldset>
            <br></br>

            {/* Rendering the Footer component */}
            <Footer />
        </div>
    );
}

// Exporting the Dashboard component so it can be used in other parts of the application
export default Dashboard;
