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

const TopThesis = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const currentThesisId = searchParams.get('query');

    const handleredirect = (id) => {
        navigate(`/view-thesis?query=${id}`);
    }
    const topTheses = thesesData
        .filter(thesis => thesis.id.toString() !== currentThesisId)
        .sort((a, b) => b.numberOfViews - a.numberOfViews)
        .slice(0, 5);

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
                            {thesis.title}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};


const FromAuthor = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const currentThesisId = searchParams.get('query');

    const currentThesis = thesesData.find(thesis => thesis.id.toString() === currentThesisId);

    if (!currentThesis) {
        return null;
    }

    const currentAuthors = new Set(currentThesis.authors.split(", "));

    const relatedTheses = thesesData.filter(thesis =>
        thesis.id.toString() !== currentThesisId &&
        thesis.authors.split(", ").some(author => currentAuthors.has(author))
    ).sort((a, b) => new Date(b.uploadDate) - new Date(a.uploadDate)).slice(0, 5);
    if (relatedTheses.length === 0) {
        return null;
    }

    const handleRedirect = (id) => {
        navigate(`/view-thesis?query=${id}`);
    }

    return (
        <div className="fromauthor">
            <h2 className="sidebarH2">Other Works by Authors</h2>
            <ul>
                {relatedTheses.map(thesis => (
                    <li key={thesis.id}>
                        <button className="sidebar-buttons" onClick={() => handleRedirect(thesis.id)}>
                            {thesis.title}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};


const Sidebar = () => (
    <aside className="sidebar">
        <TopThesis />
        <FromAuthor />
    </aside>
);


const ThesisContent = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('query');
    const thesis = thesesData.find(t => t.id.toString() === id) || thesesData[0];
    const [tab, setTab] = useState('Abstract');

    const getContent = () => {
        switch (tab) {
            case 'Abstract':
                return thesis.abstract;
            case 'Authors':
                return thesis.authors;
            case 'References':
                return thesis.references;
            case 'Information':
                return thesis.information;
            case 'Keywords':
                return thesis.keywords;
            default:
                return thesis.abstract;
        }
    };

    return (
        <div className="thesis-content">
            <h1 className="Thesis-title">{thesis.title}</h1>
            <br></br>
            <div className="meta">
                <span>Published by: {thesis.publishedBy}</span>
                <div className='thesis-buttons'>
                    <button><FaThumbsUp color='white' /> Like</button>
                    <div className='divider' />
                    <button><FaDownload color='white' /> Download</button>
                </div>
            </div>
            <br />
            <div className="tabs">
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
                {getContent()}
            </div>
        </div>
    );
};

const Comments = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const thesisId = searchParams.get('query');
    const relevantComments = commentsData.filter(comment => comment.thesisId.toString() === thesisId);

    return (
        <div className="comments">
            <h2>Comments</h2>
            <div className="comments-container">
                {relevantComments.length > 0 ? (
                    relevantComments.map((comment) => (
                        <div className="comment" key={comment.id}>
                            <p className='commenter-name'>{comment.name}</p>
                            <p className='comment-text'>{comment.text}</p>
                            <button className='comment-button-like'><FaThumbsUp /> Like</button>
                            <button className='comment-button-report'><TbMessageReport /> Report</button>
                        </div>
                    ))
                ) : (
                    <p>No Comments</p>
                )}
            </div>
            <form className="comment-form">
                <textarea placeholder="Add a comment..." required></textarea>
                <button type="submit" className='Comment-submit'>Post Comment</button>
            </form>
        </div>
    );
};


const Thesis = () => (
    <div className="Thesis-container">
        <Sidebar />
        <ThesisContent />
        <Comments />
    </div>
);

const ViewThesis = () => (
    <div>
        <SearchNavbar />
        <br></br>
        <div className="thesis-field">
            <Thesis />
        </div>
        <br></br>
        <Footer />
    </div>
);


export default ViewThesis;

