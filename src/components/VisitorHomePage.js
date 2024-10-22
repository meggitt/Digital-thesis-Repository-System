import React from 'react';
import { Link } from 'react-router-dom';
import '../css/VisitorHomePage.css';
import logo from "../images/lo.png";

const VisitorHomePage = () => {
    return (
        <div className="visitor-home">
            <header>
                <div className="logo-container">
                    <img src={logo} className="logo" alt="Logo" />
                    <span className="navbar-title">Digital Thesis Repository</span>
                </div>
                <div className="search-bar">
                    <input type="text" placeholder="Hinted search text" />
                </div>
                <nav>
                    <Link to="/#">Home Page</Link>
                    <Link to="/#">Contact Us</Link>
                    <Link to="/#">About Us</Link>
                    <div className="icons">
                        <i className="fas fa-bell"></i>
                        <i className="fas fa-user"></i>
                        <i className="fas fa-sign-out-alt"></i>
                    </div>
                </nav>
            </header>

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
                        <i className="fas fa-question-circle"></i>
                        <span>Frequently Asked Questions</span>
                    </button>
                </div>
            </main>
        </div>
    );
}

export default VisitorHomePage;
