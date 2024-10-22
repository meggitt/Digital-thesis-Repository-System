/* File written by: Sharma, Kaustubh, Student ID: 1002138514 */
import React, { useRef, useEffect, useState } from 'react';
import '../css/ViewThesis.css';
import Footer from './Footer';
import { FaThumbsUp } from "react-icons/fa";
import { TbMessageReport } from "react-icons/tb";
import { FaDownload } from "react-icons/fa6";
import { Link } from "react-router-dom";
import commentsData from '../comments.json';
import thesesData from '../sample-thesis.json';
import SearchNavbar from './SearchNavBar';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

// Component to display the top theses based on view count
const TopThesis = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const currentThesisId = searchParams.get('query'); // Get the current thesis ID from URL

    // Function to redirect to a selected thesis
    const handleredirect = (id) => {
        navigate(`/view-thesis?query=${id}`); // Navigate to the selected thesis
    };

    // Filter and sort theses to get the top ones, excluding the current thesis
    const topTheses = thesesData
        .filter(thesis => thesis.id.toString() !== currentThesisId)
        .sort((a, b) => b.numberOfViews - a.numberOfViews)
        .slice(0, 5); // Get top 5 theses

    // Return null if no top theses are found
    if (topTheses.length === 0) {
        return null;
    }

    return (
        <div className="topthesis">
            <h2 className="sidebarH2">Top Thesis</h2>
            <ul>
                {topTheses.map(thesis => (
                    <li key={thesis.id}>
                        <button className="sidebar-buttons" onClick={() => handleredirect(thesis.id)}>
                            {thesis.title} {/* Display thesis title */}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

// Component to display other works by the same authors
const FromAuthor = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const currentThesisId = searchParams.get('query'); // Get the current thesis ID

    const currentThesis = thesesData.find(thesis => thesis.id.toString() === currentThesisId); // Find current thesis

    // Return null if the current thesis is not found
    if (!currentThesis) {
        return null;
    }

    const currentAuthors = new Set(currentThesis.authors.split(", ")); // Create a set of authors from the current thesis

    // Filter related theses by matching authors
    const relatedTheses = thesesData.filter(thesis =>
        thesis.id.toString() !== currentThesisId &&
        thesis.authors.split(", ").some(author => currentAuthors.has(author))
    ).sort((a, b) => new Date(b.uploadDate) - new Date(a.uploadDate)).slice(0, 5); // Sort by upload date and get top 5

    // Return null if no related theses are found
    if (relatedTheses.length === 0) {
        return null;
    }

    // Function to redirect to a selected thesis
    const handleRedirect = (id) => {
        navigate(`/view-thesis?query=${id}`); // Navigate to the selected thesis
    };

    return (
        <div className="fromauthor">
            <h2 className="sidebarH2">Other Works by Authors</h2>
            <ul>
                {relatedTheses.map(thesis => (
                    <li key={thesis.id}>
                        <button className="sidebar-buttons" onClick={() => handleRedirect(thesis.id)}>
                            {thesis.title} {/* Display thesis title */}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

// Sidebar component to display top theses and works by authors
const Sidebar = () => (
    <aside className="sidebar">
        <TopThesis />
        <FromAuthor />
    </aside>
);

// Component to display the content of the selected thesis
const ThesisContent = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('query'); // Get the thesis ID from URL
    const thesis = thesesData.find(t => t.id.toString() === id) || thesesData[0]; // Find the thesis or use a default
    const [tab, setTab] = useState('Abstract'); // State to manage which tab is active

    // Function to get content based on the selected tab
    const getContent = () => {
        switch (tab) {
            case 'Abstract':
                return thesis.abstract; // Return abstract content
            case 'Authors':
                return thesis.authors; // Return authors' names
            case 'References':
                return thesis.references; // Return references
            case 'Information':
                return thesis.information; // Return additional information
            case 'Keywords':
                return thesis.keywords; // Return keywords
            default:
                return thesis.abstract; // Default to abstract
        }
    };

    return (
        <div className="thesis-content">
            <h1 className="Thesis-title">{thesis.title}</h1> {/* Display thesis title */}
            <br></br>
            <div className="meta">
                <span>Published by: {thesis.publishedBy}</span> {/* Display publisher */}
                <div className='thesis-buttons'>
                    <button><FaThumbsUp color='white' /> Like</button> {/* Like button */}
                    <div className='divider' />
                    <button><FaDownload color='white' /> Download</button> {/* Download button */}
                </div>
            </div>
            <br />
            <div className="tabs">
                {/* Tab buttons to switch between content types */}
                <button className='thesis-nav-button' onClick={() => setTab('Abstract')}>Abstract</button>
                <div className='tabs-divider' />
                <button className='thesis-nav-button' onClick={() => setTab('Authors')}>Authors</button>
                <div className='tabs-divider' />
                <button className='thesis-nav-button' onClick={() => setTab('Keywords')}>Keywords</button>
                <div className='tabs-divider' />
                <button className='thesis-nav-button' onClick={() => setTab('Information')}>Text</button>
                <div className='tabs-divider' />
                <button className='thesis-nav-button' onClick={() => setTab('References')}>References</button>
            </div>
            <br />
            <div className="Thesis-text">
                {getContent()} {/* Render the content based on selected tab */}
            </div>
        </div>
    );
};

// Component to display comments related to the thesis
const Comments = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const thesisId = searchParams.get('query'); // Get thesis ID from URL
    const relevantComments = commentsData.filter(comment => comment.thesisId.toString() === thesisId); // Filter comments for the current thesis

    return (
        <div className="comments">
            <h2>Comments</h2>
            <div className="comments-container">
                {relevantComments.length > 0 ? (
                    relevantComments.map((comment) => (
                        <div className="comment" key={comment.id}>
                            <p className='commenter-name'>{comment.name}</p> {/* Display commenter's name */}
                            <p className='comment-text'>{comment.text}</p> {/* Display comment text */}
                            <button className='comment-button-like'><FaThumbsUp /> Like</button> {/* Like button for comments */}
                            <button className='comment-button-report'><TbMessageReport /> Report</button> {/* Report button for comments */}
                        </div>
                    ))
                ) : (
                    <p>No Comments</p> // Message if no comments are found
                )}
            </div>
            <form className="comment-form">
                <textarea placeholder="Add a comment..." required></textarea> {/* Text area for adding comments */}
                <button type="submit" className='Comment-submit'>Post Comment</button> {/* Button to post comment */}
            </form>
        </div>
    );
};

// Main Thesis component to organize sidebar, content, and comments
const Thesis = () => (
    <div className="Thesis-container">
        <Sidebar />
        <ThesisContent />
        <Comments />
    </div>
);

// Main ViewThesis component that brings everything together
const ViewThesis = () => (
    <div>
        <SearchNavbar /> {/* Search bar at the top */}
        <br></br>
        <div className="thesis-field">
            <Thesis /> {/* Display the Thesis component */}
        </div>
        <br></br>
        <Footer /> {/* Footer at the bottom */}
    </div>
);

// Export the ViewThesis component for use in other files
export default ViewThesis;
