import React from 'react';
import { Link } from 'react-router-dom';
import '../css/VisitorHomePage.css';
import '../css/SearchNavBar.css';
import { IoHome } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import Footer from './Footer';

const VisitorHomePage = () => {
    const linkStyle = {
        textDecoration: 'none',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    };
    return (
        <div className="visitor-home">
            <div className="searchnavbar">
                <div className="right-section">
                    <Link to="/" className="logout-icon">
                        <IoLogOutOutline />
                    </Link>
                </div>
                <div className="left-section">
                    <img src="images/lo.png" className="color-changing-image" alt="Logo" />
                    <span className="title">Digital Thesis Repository</span>
                    &nbsp;&nbsp;
                    <input type="text" className='inputsn' placeholder="Type to search" />
                    &nbsp;&nbsp;
                    <Link to="/visitor" >
                        Home Page
                    </Link>
                </div>

            </div>

            <main>
                <div className="button-container">
                    <button className="visitor-button">
                        <i className="fas fa-thumbs-up"></i>
                        <span>Most Liked Theses in 2024</span>
                    </button>
                    <button className="visitor-button">
                        <i className="fas fa-book"></i>
                        <span>A guide on using the site</span>
                    </button>
                    <button className="visitor-button">
                        <Link to="/Faq" style={linkStyle}>
                            <i className="fas fa-question-circle"></i>
                            <span>Frequently Asked Questions</span>
                        </Link>
                    </button>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default VisitorHomePage;
