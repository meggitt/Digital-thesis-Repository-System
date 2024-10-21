import React from 'react';
import '../css/DepartmentAdminHomePage.css';
import logo from "../images/lo.png";

function DepartmentAdminHomePage() {
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
                    <a href="/#">Home Page</a>
                    <a href="/#">Contact Us</a>
                    <a href="/#">About Us</a>
                    <div className="icons">
                        <i className="fas fa-bell"></i>
                        <i className="fas fa-user"></i>
                        <i className="fas fa-sign-out-alt"></i>
                    </div>
                </nav>
            </header>

            <main>
                <div className="app-container">
                    <div className="main-content">
                        <div className="row">
                            <Section title="Manage Department Advisors" type="advisor" />
                            <Section title="Manage Students" type="student" />
                        </div>
                        <div className="row">

                            <Section title="Manage Thesis" type="thesis" />
                        </div>
                        <div className="row last-row">
                            <InquiryList />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}


function Section({ title, type }) {
    const renderContent = () => {
        if (type === 'advisor' || type === 'student') {
            return (
                <>
                    {[1, 2, 3].map((item) => (
                        <div className="button-group" key={item}>
                            <span>{type === 'advisor' ? `Advisor ${item}` : `Student ${item}`}</span>
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

export default DepartmentAdminHomePage;
