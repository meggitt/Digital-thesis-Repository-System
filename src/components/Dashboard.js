/*File written by: Chavda, Yugamsinh Udayansinh Student ID: 1002069171*/
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Dashboard.css';
import { useNavigate } from 'react-router-dom';
import logo from "../images/lo.png";
import SearchNavBar from "./SearchNavBar";
import Footer from "./Footer";
const Dashboard = () => {
    const navigate = useNavigate();
    return (
        <div className="dashboard">
            <SearchNavBar />
            <br></br>
            <fieldset className='dashboardfs'>
                <div className='fieldsetDashboard'>
                <div className='blocksDashboard'>
                    <div className='topLikedThesis'><a href="/" className='alink'>TopLiked Thesis</a></div>
                    <br></br><div className='subscribedkw1 '><a href="/" className='alink' >SubscribedKeyword Thesis 1</a></div><br></br>
                    <div className='subscribedkw2 '><a href="/" className='alink' >SubscribedKeyword Thesis 2</a></div><br></br>
                    <div className='subscribedkw3 '><a href="/" className='alink' >SubscribedKeyword Thesis 3</a></div>
                    
                </div>
                <br></br>
                <br></br>
                <br></br>
                <div className='input3'>
                            <button className="button-85" onClick={() => navigate('/submit-thesis')}>Submit a new thesis</button>
                        </div>
                    </div>
            </fieldset>
            <br></br>
            <Footer />
        </div>
    );
}

export default Dashboard;
