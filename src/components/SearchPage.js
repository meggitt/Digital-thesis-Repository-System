/* File written by: Chagamreddy, Navya Sree, Student ID: 1002197805 */
import React from 'react'; // Importing React
import { useLocation } from 'react-router-dom'; // Importing useLocation for access to URL parameters
import '../css/SearchPage.css'; // Importing CSS for styling the search page
import SearchNavbar from './SearchNavBar'; // Importing the SearchNavbar component
import thesesData from '../sample-thesis.json'; // Importing sample thesis data
import ThesisCard from './ThesisCard'; // Importing ThesisCard component to display individual thesis
import Footer from './Footer'; // Importing Footer component
import { useState } from 'react'; // Importing useState hook for managing state

// Function to filter theses based on the search term
function filterTheses(searchTerm) {
    return thesesData.filter(thesis =>
        thesis.title.toLowerCase().includes(searchTerm) || // Filter by title
        thesis.authors.toLowerCase().includes(searchTerm) || // Filter by authors
        thesis.publishedBy.toLowerCase().includes(searchTerm) || // Filter by publisher
        thesis.uploadDate.includes(searchTerm) || // Filter by upload date
        thesis.keywords.toLowerCase().includes(searchTerm) // Filter by keywords
    );
}

// Component for displaying the most recent theses
function SPMostRecent() {
    const location = useLocation(); // Getting the current location
    const queryParams = new URLSearchParams(location.search); // Extracting query parameters from URL
    const searchTerm = queryParams.get('query')?.toLowerCase() || ''; // Getting the search term

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1); // State to track current page
    const thesesPerPage = 4; // Number of theses to display per page

    // Filtered and sorted theses based on the search term and upload date
    const filteredSortedTheses = filterTheses(searchTerm)
        .sort((a, b) => new Date(b.uploadDate) - new Date(a.uploadDate));

    // Determine current theses to display
    const indexOfLastThesis = currentPage * thesesPerPage; // Index of the last thesis on the current page
    const indexOfFirstThesis = indexOfLastThesis - thesesPerPage; // Index of the first thesis on the current page
    const currentTheses = filteredSortedTheses.slice(indexOfFirstThesis, indexOfLastThesis); // Theses to display

    // Handle page change event
    const handlePageChange = (event) => {
        setCurrentPage(Number(event.target.value)); // Update current page state
    };

    // Calculate total pages based on the number of filtered theses
    const totalPages = Math.ceil(filteredSortedTheses.length / thesesPerPage);

    return (
        <div className="statistics-dashboard"> {/* Main dashboard container */}
            <main className="statistics-dashboard-content"> {/* Main content area */}
                <section className="thesis-section"> {/* Section for theses */}
                    <h2 className='SearchTitle'>Most Recent</h2> {/* Section title */}
                    <div className="thesis-row"> {/* Container for thesis cards */}
                        {currentTheses.map(thesis => (
                            <ThesisCard
                                key={thesis.id} // Unique key for each thesis
                                thesis={thesis} // Thesis data passed as a prop
                                isTrending={true} // Indicate that theses are trending
                            />
                        ))}
                    </div>
                    <div className="pagination-dropdown"> {/* Dropdown for pagination */}
                        <br></br>
                        <label htmlFor="page-select">Choose a page: </label>
                        <select id="page-select" value={currentPage} onChange={handlePageChange}> {/* Dropdown for selecting page */}
                            {[...Array(totalPages).keys()].map(number => (
                                <option key={number + 1} value={number + 1}>
                                    Page {number + 1} {/* Page number displayed */}
                                </option>
                            ))}
                        </select>
                    </div>
                </section>
            </main>
        </div>
    );
}

// Component for displaying the most downloaded theses
function SPMostDownloaded() {
    const location = useLocation(); // Getting the current location
    const queryParams = new URLSearchParams(location.search); // Extracting query parameters from URL
    const searchTerm = queryParams.get('query')?.toLowerCase() || ''; // Getting the search term

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1); // State to track current page
    const thesesPerPage = 4; // Number of theses to display per page

    // Filter and sort theses based on number of downloads, then paginate
    const filteredSortedTheses = filterTheses(searchTerm)
        .sort((a, b) => b.numberOfDownloads - a.numberOfDownloads);

    // Calculate current theses to display
    const indexOfLastThesis = currentPage * thesesPerPage; // Index of the last thesis on the current page
    const indexOfFirstThesis = indexOfLastThesis - thesesPerPage; // Index of the first thesis on the current page
    const currentTheses = filteredSortedTheses.slice(indexOfFirstThesis, indexOfLastThesis); // Theses to display

    // Change page
    const handlePageChange = (event) => {
        setCurrentPage(Number(event.target.value)); // Update current page state
    };

    // Calculate total pages
    const totalPages = Math.ceil(filteredSortedTheses.length / thesesPerPage);

    return (
        <div className="statistics-dashboard"> {/* Main dashboard container */}
            <main className="statistics-dashboard-content"> {/* Main content area */}
                <section className="thesis-section"> {/* Section for theses */}
                    <h2 className='SearchTitle'>Most Downloaded</h2> {/* Section title */}
                    <div className="thesis-row"> {/* Container for thesis cards */}
                        {currentTheses.map(thesis => (
                            <ThesisCard
                                key={thesis.id} // Unique key for each thesis
                                thesis={thesis} // Thesis data passed as a prop
                                isTrending={true} // Indicate that theses are trending
                            />
                        ))}
                    </div>
                    <div className="pagination-dropdown"> {/* Dropdown for pagination */}
                    <br></br>
                        <label htmlFor="page-select">Choose a page: </label>
                        <select id="page-select" value={currentPage} onChange={handlePageChange}> {/* Dropdown for selecting page */}
                            {[...Array(totalPages).keys()].map(number => (
                                <option key={number + 1} value={number + 1}>
                                    Page {number + 1} {/* Page number displayed */}
                                </option>
                            ))}
                        </select>
                    </div>
                </section>
            </main>
        </div>
    );
}

// Component for displaying the most liked theses
function SPMostLiked() {
    const location = useLocation(); // Getting the current location
    const queryParams = new URLSearchParams(location.search); // Extracting query parameters from URL
    const searchTerm = queryParams.get('query')?.toLowerCase() || ''; // Getting the search term

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1); // State to track current page
    const thesesPerPage = 4; // Number of theses to display per page

    // Filter and sort theses based on number of likes, then paginate
    const filteredSortedTheses = filterTheses(searchTerm)
        .sort((a, b) => b.numberOfLikes - a.numberOfLikes);

    // Calculate current theses to display
    const indexOfLastThesis = currentPage * thesesPerPage; // Index of the last thesis on the current page
    const indexOfFirstThesis = indexOfLastThesis - thesesPerPage; // Index of the first thesis on the current page
    const currentTheses = filteredSortedTheses.slice(indexOfFirstThesis, indexOfLastThesis); // Theses to display

    // Change page
    const handlePageChange = (event) => {
        setCurrentPage(Number(event.target.value)); // Update current page state
    };

    // Calculate total pages
    const totalPages = Math.ceil(filteredSortedTheses.length / thesesPerPage);

    return (
        <div className="statistics-dashboard"> {/* Main dashboard container */}
            <main className="statistics-dashboard-content"> {/* Main content area */}
                <section className="thesis-section"> {/* Section for theses */}
                    <h2 className='SearchTitle'>Most Liked</h2> {/* Section title */}
                    <div className="thesis-row"> {/* Container for thesis cards */}
                        {currentTheses.map(thesis => (
                            <ThesisCard
                                key={thesis.id} // Unique key for each thesis
                                thesis={thesis} // Thesis data passed as a prop
                                isTrending={true} // Indicate that theses are trending
                            />
                        ))}
                    </div>
                    <div className="pagination-dropdown"> {/* Dropdown for pagination */}
                    <br></br>
                        <label htmlFor="page-select">Choose a page: </label>
                        <select id="page-select" value={currentPage} onChange={handlePageChange}> {/* Dropdown for selecting page */}
                            {[...Array(totalPages).keys()].map(number => (
                                <option key={number + 1} value={number + 1}>
                                    Page {number + 1} {/* Page number displayed */}
                                </option>
                            ))}
                        </select>
                    </div>
                </section>
            </main>
        </div>
    );
}

// Main SearchPage component
function SearchPage() {
    return (
        <div>
            <SearchNavbar /> {/* Render the search navigation bar */}
            <br></br>
            <SPMostLiked /> {/* Render the most liked theses section */}
            <SPMostDownloaded /> {/* Render the most downloaded theses section */}
            <SPMostRecent /> {/* Render the most recent theses section */}
            <br></br>
            <Footer /> {/* Render the footer */}
        </div>
    );
}

export default SearchPage; // Export the SearchPage component for use in other files
