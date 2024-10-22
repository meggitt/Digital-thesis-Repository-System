import React from 'react';
import { Link } from 'react-router-dom';
import '../css/VisitorHomePage.css';
import NavbarWithoutLinks from './NavbarWithoutLinks';
import Footer from './Footer';
const VisitorHomePage = () => {
    return (
        <div className="visitor-home">
            <NavbarWithoutLinks />

            <main>
                <div className="button-container">
                    <button className="visitor-button button-85">
                        <i className="fas fa-thumbs-up"></i>
                        <span>Most Liked Theses in 2024</span>
                    </button>
                    <button className="visitor-button button-85">
                        <i className="fas fa-book"></i>
                        <span>A guide on using the site</span>
                    </button>
                    <button className="visitor-button button-85">
                        <i className="fas fa-question-circle"></i>
                        <span>Frequently Asked Questions</span>
                    </button>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default VisitorHomePage;
