import React from 'react';
import '../css/SuperAdminHomePage.css';
import logo from "../images/lo.png";
import '../css/SearchNavBar.css';
import { IoHome } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import Footer from './Footer';
import { Link } from 'react-router-dom';

function SuperAdminHomePage() {
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
                </div>

            </div>

            <main>
                <div className="app-container">
                    <div className="main-content">
                        <div className="row">
                            <Section title="Manage Department Admins" type="admin" />
                            <Section title="Manage Students" type="student" />
                        </div>
                        <div className="row">
                            <Section title="Manage Department Advisors" type="advisor" />
                            <Section title="Manage Thesis" type="thesis" />
                        </div>
                        <div className="row last-row">
                            <InquiryList />
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

function Section({ title, type }) {
    const renderContent = () => {
        if (type === 'admin' || type === 'advisor' || type === 'student') {
            return (
                <>
                    {[1, 2, 3].map((item) => (
                        <div className="button-group" key={item}>
                            <span>{type === 'admin' ? `Admin ${item}` : type === 'advisor' ? `Advisor ${item}` : `Student ${item}`}</span>
                            <div>
                                <button className="action-button">Review Profile</button>
                                <button className="action-button">Manage Access</button>
                            </div>
                        </div>
                    ))}
                </>
            );
        } else if (type === 'thesis') {
            return (
                <>
                    {[1, 2, 3].map((item) => (
                        <div className="button-group" key={item}>
                            <span>Thesis {item}</span>
                            <div>
                                <button className="action-button">Review Thesis</button>
                            </div>
                        </div>
                    ))}
                </>
            );
        } else if (type === 'inquiry') {
            return (
                <>
                    {[1, 2, 3].map((item) => (
                        <div className="button-group" key={item}>
                            <span>Inquiry {item}</span>
                            <div>
                                <button className="action-button">View</button>
                                <button className="action-button">Respond</button>
                            </div>
                        </div>
                    ))}
                </>
            );
        }
    };

    return (
        <div className="section-container">
            <h2 className="section-title">{title}</h2>
            <div className="search-container">
                <input placeholder="Hinted search text" />
                <button className="action-button">Search</button>
            </div>
            {renderContent()}
        </div>
    );
}

function InquiryList() {
    return (
        <div className="section-container">
            <h2 className="section-title">Answer an Inquiry</h2>
            {[201, 202, 203].map((item) => (
                <div className="button-group" key={item}>
                    <a href="/">Inquiry {item}</a>
                </div>
            ))}
        </div>
    );
}

export default SuperAdminHomePage;
