import React from 'react';
import { Link } from 'react-router-dom';
import '../css/StudentThesisPage.css';
import logo from "../images/lo.png";
import { useNavigate } from 'react-router-dom';
import SearchNavbar from './SearchNavBar';
import Footer from './Footer';

const StudentThesisPage = () => {
    return (
        <div className="dashboard">
            <SearchNavbar />

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
