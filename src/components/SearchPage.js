/*File written by: Chagamreddy,Navya Sree, Student ID: 1002197805*/
import React from 'react';
import { useLocation } from 'react-router-dom';
import '../css/SearchPage.css';
import SearchNavbar from './SearchNavBar';
import thesesData from '../sample-thesis.json';
import ThesisCard from './ThesisCard';
import Footer from './Footer';
import { useState } from 'react';


function filterTheses(searchTerm) {
    return thesesData.filter(thesis =>
        thesis.title.toLowerCase().includes(searchTerm) ||
        thesis.authors.toLowerCase().includes(searchTerm) ||
        thesis.publishedBy.toLowerCase().includes(searchTerm) ||
        thesis.uploadDate.includes(searchTerm) ||
        thesis.keywords.toLowerCase().includes(searchTerm)
    );
}

function SPMostRecent() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const searchTerm = queryParams.get('query')?.toLowerCase() || '';

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const thesesPerPage = 4;

    // Filtered and sorted theses
    const filteredSortedTheses = filterTheses(searchTerm)
        .sort((a, b) => new Date(b.uploadDate) - new Date(a.uploadDate));

    // Determine current theses to display
    const indexOfLastThesis = currentPage * thesesPerPage;
    const indexOfFirstThesis = indexOfLastThesis - thesesPerPage;
    const currentTheses = filteredSortedTheses.slice(indexOfFirstThesis, indexOfLastThesis);

    // Handle page change
    const handlePageChange = (event) => {
        setCurrentPage(Number(event.target.value));
    };

    // Calculate total pages
    const totalPages = Math.ceil(filteredSortedTheses.length / thesesPerPage);

    return (
        <div className="statistics-dashboard">
            <main className="statistics-dashboard-content">
                <section className="thesis-section">
                    <h2 className='SearchTitle'>Most Recent</h2>
                    <div className="thesis-row">
                        {currentTheses.map(thesis => (
                            <ThesisCard
                                key={thesis.id}
                                thesis={thesis}
                                isTrending={true}
                            />
                        ))}
                    </div>
                    <div className="pagination-dropdown">
                        <br></br>
                        <label htmlFor="page-select">Choose a page: </label>
                        <select id="page-select" value={currentPage} onChange={handlePageChange}>
                            {[...Array(totalPages).keys()].map(number => (
                                <option key={number + 1} value={number + 1}>
                                    Page {number + 1}
                                </option>
                            ))}
                        </select>
                    </div>
                </section>
            </main>
        </div>
    );
}



function SPMostDownloaded() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const searchTerm = queryParams.get('query')?.toLowerCase() || '';

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const thesesPerPage = 4;

    // Filter and sort theses based on number of downloads, then paginate
    const filteredSortedTheses = filterTheses(searchTerm)
        .sort((a, b) => b.numberOfDownloads - a.numberOfDownloads);

    // Calculate current theses to display
    const indexOfLastThesis = currentPage * thesesPerPage;
    const indexOfFirstThesis = indexOfLastThesis - thesesPerPage;
    const currentTheses = filteredSortedTheses.slice(indexOfFirstThesis, indexOfLastThesis);

    // Change page
    const handlePageChange = (event) => {
        setCurrentPage(Number(event.target.value));
    };

    // Calculate total pages
    const totalPages = Math.ceil(filteredSortedTheses.length / thesesPerPage);

    return (
        <div className="statistics-dashboard">
            <main className="statistics-dashboard-content">
                <section className="thesis-section">
                    <h2 className='SearchTitle'>Most Downloaded</h2>
                    <div className="thesis-row">
                        {currentTheses.map(thesis => (
                            <ThesisCard
                                key={thesis.id}
                                thesis={thesis}
                                isTrending={true}
                            />
                        ))}
                    </div>
                    <div className="pagination-dropdown">
                    <br></br>
                        <label htmlFor="page-select">Choose a page: </label>
                        <select id="page-select" value={currentPage} onChange={handlePageChange}>
                            {[...Array(totalPages).keys()].map(number => (
                                <option key={number + 1} value={number + 1}>
                                    Page {number + 1}
                                </option>
                            ))}
                        </select>
                    </div>
                </section>
            </main>
        </div>
    );
}


function SPMostLiked() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const searchTerm = queryParams.get('query')?.toLowerCase() || '';

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const thesesPerPage = 4;

    // Filter and sort theses based on number of likes, then paginate
    const filteredSortedTheses = filterTheses(searchTerm)
        .sort((a, b) => b.numberOfLikes - a.numberOfLikes);

    // Calculate current theses to display
    const indexOfLastThesis = currentPage * thesesPerPage;
    const indexOfFirstThesis = indexOfLastThesis - thesesPerPage;
    const currentTheses = filteredSortedTheses.slice(indexOfFirstThesis, indexOfLastThesis);

    // Change page
    const handlePageChange = (event) => {
        setCurrentPage(Number(event.target.value));
    };

    // Calculate total pages
    const totalPages = Math.ceil(filteredSortedTheses.length / thesesPerPage);

    return (
        <div className="statistics-dashboard">
            <main className="statistics-dashboard-content">
                <section className="thesis-section">
                    <h2 className='SearchTitle'>Most Liked</h2>
                    <div className="thesis-row">
                        {currentTheses.map(thesis => (
                            <ThesisCard
                                key={thesis.id}
                                thesis={thesis}
                                isTrending={true}
                            />))
                        }
                    </div>
                    <div className="pagination-dropdown">
                    <br></br>
                        <label htmlFor="page-select">Choose a page: </label>
                        <select id="page-select" value={currentPage} onChange={handlePageChange}>
                            {[...Array(totalPages).keys()].map(number => (
                                <option key={number + 1} value={number + 1}>
                                    Page {number + 1}
                                </option>
                            ))}
                        </select>
                    </div>
                </section>
            </main>
        </div>
    );
}

function SearchPage() {
    return (
        <div>
            <SearchNavbar />
            <br></br>
            <SPMostLiked />
            <SPMostDownloaded />
            <SPMostRecent />
            <br></br>
            <Footer />
        </div>
    );
}
export default SearchPage;
