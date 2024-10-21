import React from 'react';
import { Link } from 'react-router-dom';
import '../css/StudentThesisPage.css';
import logo from "../images/lo.png";
import { useNavigate } from 'react-router-dom';

const StudentThesisPage = () => {
    return (
        <div className="dashboard">
            <header>
                <div className="logo-container">
                    <img src={logo} className="logo" alt="Logo" />
                    <span className="navbar-title">Digital Thesis Repository</span>
                </div>
                <div className="search-bar">
                    <input type="text" placeholder="Hinted search text" />
                </div>
                <nav>
                    <Link to="/">Home Page</Link>
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
                <div className="grid-container">
                    <div className="grid-item">
                        Approved & Unpublished Theses
                    </div>
                    <div className="grid-item">
                        Pending Approval Theses
                    </div>
                    <div className="grid-item">
                        Approved & Published Theses
                    </div>
                    <div className="grid-item">
                        Declined Thesis
                    </div>
                    <div className="grid-item">
                        Drafted Theses
                    </div>
                </div>
            </main>

            <section className="submit-section">
                <button className="submit-thesis-btn">
                    <i className="fas fa-plus"></i> Submit a New Thesis
                </button>
            </section>
        </div>
    );
}

export default StudentThesisPage;
