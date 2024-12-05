import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from "./Footer";
import SearchNavbar from "./SearchNavBar";
import '../css/DepartmentAdminDashboard.css';
import '../css/PendingRefTheses.css';
import ChatComponent from './ChatComponent';
import ApprovedAdvisorThesisCard from './ApprovedAdvisorThesisCard';
const ApprovedReqTheses = () => {
    const navigate = useNavigate();
    const userData = JSON.parse(sessionStorage.getItem('user'));
    const advisorId = userData ? userData.advisorID : null;
    const [thesisReqApproved, setThesisReqApproved] = useState([]);
    const [approvePage, setApprovePage] = useState(1);
    const [approvedSearchTerm, setApprovedSearchTerm] = useState('');
    const thesesPerPage = 6;

    const paginate = (theses, currentPage) => {
        const startIndex = (currentPage - 1) * thesesPerPage;
        return theses.slice(startIndex, startIndex + thesesPerPage);
    };

    // Pagination buttons
    const renderPagination = (totalTheses, currentPage, setPage) => {
        const totalPages = Math.ceil(totalTheses / thesesPerPage);
        return totalPages > 1 ? (
            <div className="pagination">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => setPage(index + 1)}
                        className={currentPage === index + 1 ? 'active' : ''}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        ) : null;
    };

    const fetchData = () => {
        fetch('http://localhost:3001/api/approved-req-theses', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ advisorId }),
        })
            .then(response => response.json())
            .then(data => Array.isArray(data) ? setThesisReqApproved(data) : setThesisReqApproved([]))
            .catch(error => {
                console.error("Error getting reviewed thesis:", error);
            });



    }
    useEffect(() => {
        console.log("Data", userData);
        if (!userData) {
            navigate('/');
        }
        if (userData && userData.role == "Student") {
            navigate('/studentDashboard')
        }

        if (userData && userData.role == "Department Admin") {
            navigate('/departmentAdminDashboard')
        }
        fetchData();
    }, []);

    const handleApprovedThesisSearch = (e) => {
        const term= e.target.value;
        setApprovedSearchTerm(term);
        console.log(approvedSearchTerm);
        if (approvedSearchTerm) {
            fetch(`http://localhost:3001/api/approved-req-theses-search/${advisorId}?searchTerm=${encodeURIComponent(term)}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
            })
                .then(response => response.json())
                .then(data => {
                    if (Array.isArray(data) && data.length > 0) {
                        setThesisReqApproved(data);
                    } else {
                        alert("No similar thesis found");
                    }
                })
                .catch(error => {
                    console.log('Error fetching theses :', error);
                    setThesisReqApproved([]); // fallback to an empty array on error
                });
        } else {
            fetchData();;
        }
    };

    const handleApprovedClearSearch = (e) => {
        setApprovedSearchTerm('');
        fetch('http://localhost:3001/api/approved-req-theses', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ advisorId }),
        })
            .then(response => response.json())
            .then(data => Array.isArray(data) ? setThesisReqApproved(data) : setThesisReqApproved([]))
            .catch(error => {
                console.error("Error getting reviewed thesis:", error);
            });

    };



    return (
        <div className="dashboard">
            <SearchNavbar />
            <br />

            <fieldset className='dashboardfs'>
                <div className='VerificationDashboard'>
                    <h2>Thesis Approved Review Verification</h2>
                    {thesisReqApproved.length > 0 && (
                        <div className="input33">
                            <input
                                type="text"
                                className="inputsnn"
                                placeholder="Search Thesis by title or abstract"
                                value={approvedSearchTerm}
                                onChange={handleApprovedThesisSearch} // Update state on input change
                            />&nbsp;
                            
                            <button className="clearbutton2" onClick={handleApprovedClearSearch}>
                                Clear
                            </button>

                        </div>

                    )}
                    <br></br>
                    <div className='PendingRefTheses'>
                        {paginate(thesisReqApproved, approvePage).length > 0 ? (
                            paginate(thesisReqApproved, approvePage).map((thesis) => (
                                <ApprovedAdvisorThesisCard
                                    key={thesis.id}
                                    thesis={thesis}
                                    isTrending={false} // Assuming this is not trending, adjust as needed
                                />
                            ))
                        ) : (
                            <p>No approved request thesis found.</p>
                        )}
                    </div>
                    {renderPagination(thesisReqApproved.length, approvePage, setApprovePage)}
                    <br /><br /><br />


                </div>
            </fieldset>
            <br />

            <Footer />
            {userData && userData?.role != 'Department Admin'? <ChatComponent/>:null}

        </div>
    );
}

export default ApprovedReqTheses;
