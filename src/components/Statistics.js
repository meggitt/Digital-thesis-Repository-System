/* File written by: Sharma, Kaustubh, Student ID: 1002138514 */
import React, { useRef, useEffect, useState } from 'react';
import Footer from './Footer';
import '../css/Statistics.css';
import thesesData from '../sample-thesis.json';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ThesisCard from './ThesisCard';
import SearchNavbar from './SearchNavBar';



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

function MostRecent() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const searchTerm = queryParams.get('query')?.toLowerCase() || '';

    const filteredTheses = thesesData.filter(thesis =>
        thesis.title.toLowerCase().includes(searchTerm) ||
        thesis.authors.toLowerCase().includes(searchTerm) ||
        thesis.keywords.toLowerCase().includes(searchTerm)
    );

    // Sort by uploadDate descending
    const mostRecentTheses = [...filteredTheses]
        .sort((a, b) => new Date(b.uploadDate) - new Date(a.uploadDate))
        .slice(0, 4);

    return (
        <div className="statistics-dashboard">
            <main className="statistics-dashboard-content">
                <section className="thesis-section">
                    <h2>Most Recent</h2>
                    <div className="thesis-row">
                        {mostRecentTheses.map((thesis) => (
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

function MostDownloaded() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const searchTerm = queryParams.get('query')?.toLowerCase() || '';

    const mostDownloadedTheses = thesesData.filter(thesis =>
        thesis.title.toLowerCase().includes(searchTerm) ||
        thesis.authors.toLowerCase().includes(searchTerm) ||
        thesis.keywords.toLowerCase().includes(searchTerm)
    ).sort((a, b) => b.numberOfDownloads - a.numberOfDownloads)
        .slice(0, 4);

    return (
        <div className="statistics-dashboard">
            <main className="statistics-dashboard-content">
                <section className="thesis-section">
                    <h2>Most Downloaded</h2>
                    <div className="thesis-row">
                        {mostDownloadedTheses.map((thesis) => (
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

function MostLiked() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const searchTerm = queryParams.get('query')?.toLowerCase() || '';

    const mostLikedTheses = thesesData.filter(thesis =>
        thesis.title.toLowerCase().includes(searchTerm) ||
        thesis.authors.toLowerCase().includes(searchTerm) ||
        thesis.keywords.toLowerCase().includes(searchTerm)
    ).sort((a, b) => b.numberOfLikes - a.numberOfLikes)
        .slice(0, 4);

    return (
        <div className="statistics-dashboard">
            <main className="statistics-dashboard-content">
                <section className="thesis-section">
                    <h2 className='SearchTitle'>Most Liked</h2>
                    <div className="thesis-row">
                        {mostLikedTheses.map((thesis) => (
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

const Statistics = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleSelectCategory = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div className="FullPage">
            <SearchNavbar />
            <br></br>
            <CategoryBlock onSelectCategory={handleSelectCategory} />
            {selectedCategory === 'Most Recent' && <MostRecent />}
            {selectedCategory === 'Most Liked' && <MostLiked />}
            {selectedCategory === 'Most Downloads' && <MostDownloaded />}
            <Footer />
        </div>
    );
};




export default Statistics;
