/*File written by: Chavda, Yugamsinh Udayansinh Student ID: 1002069171*/
import React from 'react';
import { useLocation } from 'react-router-dom';
import '../css/DepartmentHomePage.css';
import thesesData from '../sample-thesis.json';
import ThesisCard from './ThesisCard';
import Footer from './Footer';
import NavbarWithoutLinks from './NavbarWithoutLinks';

function filterTheses(searchTerm) {
    return thesesData.filter(thesis =>
        thesis.title.toLowerCase().includes(searchTerm) ||
        thesis.authors.toLowerCase().includes(searchTerm) ||
        thesis.publishedBy.toLowerCase().includes(searchTerm) ||
        thesis.uploadDate.includes(searchTerm) ||
        thesis.keywords.toLowerCase().includes(searchTerm)
    );
}


function TrendingThesis() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const searchTerm = queryParams.get('query')?.toLowerCase() || '';

    // Filter and sort theses based on number of downloads
    const filteredSortedTheses = filterTheses(searchTerm)
        .sort((a, b) => b.numberOfDownloads - a.numberOfDownloads)
        .slice(0, 4); // Only take the first 4 theses

    return (
        <div className="statistics-dashboard">
            <main className="statistics-dashboard-content">
                <section className="thesis-section">
                    <h2 className='SearchTitle'>Trending Thesis</h2>
                    <div className="thesis-row">
                        {filteredSortedTheses.map(thesis => (
                            <div key={thesis.id} className="thesis-card-wrapper">
                                <ThesisCard
                                    thesis={thesis}
                                    isTrending={true}
                                />
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}


function PendingReview() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const searchTerm = queryParams.get('query')?.toLowerCase() || '';

    // Filter and sort theses based on number of likes
    const filteredSortedTheses = filterTheses(searchTerm)
        .sort((a, b) => b.numberOfLikes - a.numberOfLikes)
        .slice(0, 4); // Only take the first 4 theses

    return (
        <div className="statistics-dashboard">
            <main className="statistics-dashboard-content">
                <section className="thesis-section">
                    <h2 className='SearchTitle'>Pending Review</h2>
                    <div className="thesis-row">
                        {filteredSortedTheses.map(thesis => (
                            <ThesisCard
                                key={thesis.id}
                                thesis={thesis}
                                isTrending={true}
                            />
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}

function DepartmentHomePage() {
    return (
        <div>
            <NavbarWithoutLinks />
            <br></br>
            <TrendingThesis />
            <PendingReview /> 
            <br></br>
            <Footer />
        </div>
    );
}
export default DepartmentHomePage;
