/* File written by: Chavda, Yugamsinh Udayansinh Student ID: 100206917171 */
import React from 'react'; // Importing React to create the component
import { useLocation } from 'react-router-dom'; // Importing useLocation to access query parameters from the URL
import '../css/DepartmentHomePage.css'; // Importing custom CSS for styling
import thesesData from '../sample-thesis.json'; // Importing thesis data from a sample JSON file
import ThesisCard from './ThesisCard'; // Importing the ThesisCard component for displaying individual thesis information
import Footer from './Footer'; // Importing the Footer component
import NavbarWithoutLinks from './NavbarWithoutLinks'; // Importing a navbar without links for the department page

// Function to filter theses based on the search term
function filterTheses(searchTerm) {
    return thesesData.filter(thesis =>
        thesis.title.toLowerCase().includes(searchTerm) || // Checking if the title includes the search term
        thesis.authors.toLowerCase().includes(searchTerm) || // Checking if the authors include the search term
        thesis.publishedBy.toLowerCase().includes(searchTerm) || // Checking if the publisher includes the search term
        thesis.uploadDate.includes(searchTerm) || // Checking if the upload date includes the search term
        thesis.keywords.toLowerCase().includes(searchTerm) // Checking if the keywords include the search term
    );
}

// Component to display trending theses
function TrendingThesis() {
    const location = useLocation(); // Getting the current location to access URL parameters
    const queryParams = new URLSearchParams(location.search); // Creating a URLSearchParams object to easily access query parameters
    const searchTerm = queryParams.get('query')?.toLowerCase() || ''; // Getting the 'query' parameter and converting it to lowercase

    // Filter and sort theses based on the number of downloads
    const filteredSortedTheses = filterTheses(searchTerm)
        .sort((a, b) => b.numberOfDownloads - a.numberOfDownloads) // Sorting by number of downloads in descending order
        .slice(0, 4); // Taking only the first 4 theses

    return (
        <div className="statistics-dashboard">
            <main className="statistics-dashboard-content">
                <section className="thesis-section">
                    <h2 className='SearchTitle'>Trending Thesis</h2> {/* Title for the trending theses section */}
                    <div className="thesis-row">
                        {filteredSortedTheses.map(thesis => (
                            <div key={thesis.id} className="thesis-card-wrapper"> {/* Wrapper for each thesis card */}
                                <ThesisCard
                                    thesis={thesis} // Passing the thesis data to ThesisCard
                                    isTrending={true} // Indicating that this thesis is trending
                                />
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}

// Component to display theses pending review
function PendingReview() {
    const location = useLocation(); // Getting the current location to access URL parameters
    const queryParams = new URLSearchParams(location.search); // Creating a URLSearchParams object
    const searchTerm = queryParams.get('query')?.toLowerCase() || ''; // Getting the 'query' parameter

    // Filter and sort theses based on the number of likes
    const filteredSortedTheses = filterTheses(searchTerm)
        .sort((a, b) => b.numberOfLikes - a.numberOfLikes) // Sorting by number of likes in descending order
        .slice(0, 4); // Taking only the first 4 theses

    return (
        <div className="statistics-dashboard">
            <main className="statistics-dashboard-content">
                <section className="thesis-section">
                    <h2 className='SearchTitle'>Pending Review</h2> {/* Title for the pending review section */}
                    <div className="thesis-row">
                        {filteredSortedTheses.map(thesis => (
                            <ThesisCard
                                key={thesis.id} // Setting the key for each ThesisCard
                                thesis={thesis} // Passing the thesis data to ThesisCard
                                isTrending={true} // Indicating that this thesis is trending
                            />
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}

// Main component for the department home page
function DepartmentHomePage() {
    return (
        <div>
            <NavbarWithoutLinks /> {/* Rendering the navbar */}
            <br />
            <TrendingThesis /> {/* Displaying the trending theses */}
            <PendingReview /> {/* Displaying the theses pending review */}
            <br />
            <Footer /> {/* Rendering the footer */}
        </div>
    );
}

// Exporting the DepartmentHomePage component for use in other parts of the application
export default DepartmentHomePage;
