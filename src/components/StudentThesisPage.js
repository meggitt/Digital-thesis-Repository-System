import React from 'react';
import '../css/StudentThesisPage.css';
import '../css/SearchNavBar.css';
import {Link} from 'react-router-dom'
import { IoHome } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import Footer from './Footer';

const StudentThesisPage = () => {
    return (
        <div className="dashboard">
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
                    <Link to="/dashboard" >
                        Home Page
                    </Link>
                </div>

            </div>

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

            <Footer />
        </div>
    );
}

export default StudentThesisPage;
