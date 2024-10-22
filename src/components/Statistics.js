/* File written by: Sharma, Kaustubh, Student ID: 1002138514 */
import React, { useState } from 'react'; // Importing necessary hooks from React
import Footer from './Footer'; // Importing Footer component
import '../css/Statistics.css'; // Importing CSS for styling the Statistics page
import thesesData from '../sample-thesis.json'; // Importing sample thesis data
import { useLocation } from 'react-router-dom'; // Importing useLocation for accessing URL parameters
import ThesisCard from './ThesisCard'; // Importing ThesisCard component to display individual thesis
import SearchNavbar from './SearchNavBar'; // Importing SearchNavbar component

// Component for rendering category buttons
function CategoryBlock({ onSelectCategory }) {
    return (
        <div className="category-container">
            <button className="category-block" onClick={() => onSelectCategory('Most Recent')}>
                Most Recent
            </button>
            <button className="category-block" onClick={() => onSelectCategory('Most Liked')}>
                Most Liked
            </button>
            <button className="category-block" onClick={() => onSelectCategory('Most Downloads')}>
                Most Downloads
            </button>
        </div>
    );
}

// Component for displaying the most recent theses
function MostRecent() {
    const location = useLocation(); // Getting the current location
    const queryParams = new URLSearchParams(location.search); // Extracting query parameters from URL
    const searchTerm = queryParams.get('query')?.toLowerCase() || ''; // Getting the search term

    // Filter theses based on search term and sort by upload date
    const filteredTheses = thesesData.filter(thesis =>
        thesis.title.toLowerCase().includes(searchTerm) ||
        thesis.authors.toLowerCase().includes(searchTerm) ||
        thesis.keywords.toLowerCase().includes(searchTerm)
    );

    // Sort filtered theses by upload date and take the most recent 4
    const mostRecentTheses = [...filteredTheses]
        .sort((a, b) => new Date(b.uploadDate) - new Date(a.uploadDate))
        .slice(0, 4);

    return (
        <div className="statistics-dashboard"> {/* Main dashboard container */}
            <main className="statistics-dashboard-content"> {/* Main content area */}
                <section className="thesis-section"> {/* Section for theses */}
                    <h2>Most Recent</h2> {/* Section title */}
                    <div className="thesis-row"> {/* Container for thesis cards */}
                        {mostRecentTheses.map((thesis) => (
                            <ThesisCard
                                key={thesis.id} // Unique key for each thesis
                                thesis={thesis} // Thesis data passed as a prop
                                isTrending={true} // Indicate that theses are trending
                            />
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}

// Component for displaying the most downloaded theses
function MostDownloaded() {
    const location = useLocation(); // Getting the current location
    const queryParams = new URLSearchParams(location.search); // Extracting query parameters from URL
    const searchTerm = queryParams.get('query')?.toLowerCase() || ''; // Getting the search term

    // Filter and sort theses based on the number of downloads
    const mostDownloadedTheses = thesesData.filter(thesis =>
        thesis.title.toLowerCase().includes(searchTerm) ||
        thesis.authors.toLowerCase().includes(searchTerm) ||
        thesis.keywords.toLowerCase().includes(searchTerm)
    ).sort((a, b) => b.numberOfDownloads - a.numberOfDownloads)
        .slice(0, 4); // Get the top 4 most downloaded theses

    return (
        <div className="statistics-dashboard"> {/* Main dashboard container */}
            <main className="statistics-dashboard-content"> {/* Main content area */}
                <section className="thesis-section"> {/* Section for theses */}
                    <h2>Most Downloaded</h2> {/* Section title */}
                    <div className="thesis-row"> {/* Container for thesis cards */}
                        {mostDownloadedTheses.map((thesis) => (
                            <ThesisCard
                                key={thesis.id} // Unique key for each thesis
                                thesis={thesis} // Thesis data passed as a prop
                                isTrending={true} // Indicate that theses are trending
                            />
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}

// Component for displaying the most liked theses
function MostLiked() {
    const location = useLocation(); // Getting the current location
    const queryParams = new URLSearchParams(location.search); // Extracting query parameters from URL
    const searchTerm = queryParams.get('query')?.toLowerCase() || ''; // Getting the search term

    // Filter and sort theses based on the number of likes
    const mostLikedTheses = thesesData.filter(thesis =>
        thesis.title.toLowerCase().includes(searchTerm) ||
        thesis.authors.toLowerCase().includes(searchTerm) ||
        thesis.keywords.toLowerCase().includes(searchTerm)
    ).sort((a, b) => b.numberOfLikes - a.numberOfLikes)
        .slice(0, 4); // Get the top 4 most liked theses

    return (
        <div className="statistics-dashboard"> {/* Main dashboard container */}
            <main className="statistics-dashboard-content"> {/* Main content area */}
                <section className="thesis-section"> {/* Section for theses */}
                    <h2 className='SearchTitle'>Most Liked</h2> {/* Section title */}
                    <div className="thesis-row"> {/* Container for thesis cards */}
                        {mostLikedTheses.map((thesis) => (
                            <ThesisCard
                                key={thesis.id} // Unique key for each thesis
                                thesis={thesis} // Thesis data passed as a prop
                                isTrending={true} // Indicate that theses are trending
                            />
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}

// Main Statistics component
const Statistics = () => {
    const [selectedCategory, setSelectedCategory] = useState(null); // State to track selected category

    // Handle category selection
    const handleSelectCategory = (category) => {
        setSelectedCategory(category); // Update selected category state
    };

    return (
        <div className="FullPage"> {/* Full page container */}
            <SearchNavbar /> {/* Render the search navigation bar */}
            <br></br>
            <CategoryBlock onSelectCategory={handleSelectCategory} /> {/* Render category buttons */}
            {/* Conditionally render sections based on selected category */}
            {selectedCategory === 'Most Recent' && <MostRecent />}
            {selectedCategory === 'Most Liked' && <MostLiked />}
            {selectedCategory === 'Most Downloads' && <MostDownloaded />}
            <Footer /> {/* Render the footer */}
        </div>
    );
};

export default Statistics; // Export the Statistics component for use in other files
