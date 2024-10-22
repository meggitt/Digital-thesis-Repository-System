/*File written by: Chavda, Yugamsinh Udayansinh Student ID: 1002069171*/
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../css/StudentThesisPage.css';
import SearchNavBar from './SearchNavBar';
import Footer from './Footer';

const StudentThesisPage = () => {
    const navigate = useNavigate();

    return (
        <div className="dashboard">
            <SearchNavBar />

            <fieldset className='dashboardfs'>
                <div className='fieldsetDashboard'>
                    <div className='blocksDashboard'>
                        <div className='topLikedThesis'>
                            <Link to="/student-thesis" className='alink'>Approved and Unpublished Theses</Link>
                        </div>
                        <div>
                            <Link to="/student-thesis" className='alink'>Pending Approval Theses</Link>
                        </div>
                        <div>
                            <Link to="/student-thesis" className='alink'>Approved and Published Theses</Link>
                        </div>
                        <div>
                            <Link to="/student-thesis" className='alink'>Declined Theses</Link>
                        </div>
                        <div>
                            <Link to="/student-thesis" className='alink'>Drafted Theses</Link>
                        </div>
                    </div>
                    <div className='input3'>
                        <button className="button-85" onClick={() => navigate('/submit-thesis')}>Submit a new thesis</button>
                    </div>
                </div>
            </fieldset>

            <Footer />
        </div>
    );
}

export default StudentThesisPage;