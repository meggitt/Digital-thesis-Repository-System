/*File written by: Chavda, Yugamsinh Udayansinh Student ID: 1002069171*/
import React from 'react';
import '../css/SuperAdminHomePage.css';
import NavbarWithoutLinks from './NavbarWithoutLinks';
import Footer from './Footer';
function SuperAdminHomePage() {
    return (
        <div className="dashboard">
            <NavbarWithoutLinks />

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
                                <button className="insidebuttons">Review Profile</button>
                                <button className="insidebuttons">Manage Access</button>
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
                                <button className="insidebuttons">Review Thesis</button>
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
                <button className="action-button button-85">Search</button>
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
                    <a href="/resolve-inquiry">Inquiry {item}</a>
                </div>
            ))}
        </div>
    );
}

export default SuperAdminHomePage;
