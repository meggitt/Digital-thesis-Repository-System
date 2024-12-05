import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from "./Footer";
import SearchNavbar from "./SearchNavBar";
import CommentModal from './CommentModal';
import '../css/DepartmentAdminDashboard.css';
import '../css/PendingRefTheses.css';
import ChatComponent from './ChatComponent';
import PendingRefAdvisorThesisCard from "./PendingRefAdvisorThesisCard";
const PendingReqTheses = () => {
    const navigate = useNavigate();
    const userData = JSON.parse(sessionStorage.getItem('user'));
    const advisorId = userData ? userData.advisorID : null;
    const [thesisReqPending, setThesisReqPending] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
    const [selectedThesisId, setSelectedThesisId] = useState(null); // Store selected thesis ID
    const [selectedStudentId, setSelectedStudentId] = useState(null); // Store selected student ID
    const [actionType, setActionType] = useState(''); // Store action type (approve or decline)
    const [pendingPage, setPendingPage] = useState(1);
    const [pendingSearchTerm, setPendingSearchTerm] = useState('');
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
        fetch('http://localhost:3001/api/pending-req-theses', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ advisorId }),
        })
            .then(response => response.json())
            .then(data => Array.isArray(data) ? setThesisReqPending(data) : setThesisReqPending([]))
            .catch(error => {
                console.error("Error getting referenced thesis:", error);
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

    const handleApprove = (thesisId, studentId) => {
        setSelectedThesisId(thesisId);
        setSelectedStudentId(studentId);
        setActionType('approve');
        setIsModalOpen(true);
    };

    const handleDecline = (thesisId, studentId) => {
        setSelectedThesisId(thesisId);
        setSelectedStudentId(studentId);
        setActionType('decline');
        setIsModalOpen(true);
    };

    const handleModalSubmit = (comment) => {
        const date = new Date().toISOString().slice(0, 19).replace('T', ' '); // Format: YYYY-MM-DD HH:MM:SS

        const thesisReviewAcceptance = {
            studentId: selectedStudentId,
            thesisId: selectedThesisId,
            advisorId: advisorId,
            date: date,
            comment: comment,
        };

        //send notification
        const userData = JSON.parse(sessionStorage.getItem('user'));
        fetch(`http://localhost:3001/api/sendNotifications`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userId: thesisReviewAcceptance.studentId,
                message: `${userData.firstName} ${userData.lastName} has ${actionType}ed thesis ${thesisReviewAcceptance.thesisId}  with comments: "${thesisReviewAcceptance.comment}"`
            }),
        });

        const apiEndpoint = actionType === 'approve' ? '/api/thesis-review-acceptance' : '/api/thesis-review-decline';

        fetch(`http://localhost:3001${apiEndpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(thesisReviewAcceptance),
        })
            .then(response => response.json())
            .then(data => {
                alert(data.message);
                setThesisReqPending(prevTheses => prevTheses.filter(thesis => thesis.thesisId !== selectedThesisId));
            })
            .catch(error => {
                alert('Error: ' + (error.message || 'An unexpected error occurred.'));
            });

        // Clear the selected IDs and close the modal
        setSelectedThesisId(null);
        setSelectedStudentId(null);
        setIsModalOpen(false);
        setActionType('');
    };

    const handlePendingThesisSearch = (e) => {
        const term= e.target.value;
        setPendingSearchTerm(term);
        console.log(pendingSearchTerm);
        if (pendingSearchTerm) {
            fetch(`http://localhost:3001/api/pending-req-theses-search/${advisorId}?searchTerm=${encodeURIComponent(term)}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
            })
                .then(response => response.json())
                .then(data => {
                    if (Array.isArray(data) && data.length > 0) {
                        setThesisReqPending(data);
                    } else {
                        alert("No similar thesis found");
                    }
                })
                .catch(error => {
                    console.log('Error fetching theses :', error);
                    setThesisReqPending([]); // fallback to an empty array on error
                });
        } else {
            fetchData();;
        }
    };

    const handlePendingClearSearch = (e) => {
        setPendingSearchTerm('');
        fetch('http://localhost:3001/api/pending-req-theses', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ advisorId }),
        })
            .then(response => response.json())
            .then(data => Array.isArray(data) ? setThesisReqPending(data) : setThesisReqPending([]))
            .catch(error => {
                console.error("Error getting referenced thesis:", error);
            });

    };


    return (
        <div className="dashboard">
            <SearchNavbar />
            <br />

            <fieldset className='dashboardfs'>
                <div className='VerificationDashboard'>
                    <h2>Thesis Pending Review Verification</h2>
                    {thesisReqPending.length > 0 && (
                        <div className="input33">
                            <input
                                type="text"
                                className="inputsnn"
                                placeholder="Search Thesis by title or abstract"
                                value={pendingSearchTerm}
                                onChange={handlePendingThesisSearch} // Update state on input change
                            />&nbsp;
                            
                            <button className="clearbutton2" onClick={handlePendingClearSearch}>
                                Clear
                            </button>

                        </div>

                    )}
                    <br></br>
                    <div className='PendingRefTheses'>
                        {paginate(thesisReqPending, pendingPage).length > 0 ? (
                            paginate(thesisReqPending, pendingPage).map((thesis) => (
                                <PendingRefAdvisorThesisCard
                                    key={thesis.id}
                                    thesis={thesis}
                                    isTrending={false} // Assuming this is not trending, adjust as needed
                                    handleApprove={() => handleApprove(thesis.thesisId, thesis.studentId)}
                                    handleDecline={() => handleDecline(thesis.thesisId, thesis.studentId)}
                                />
                            ))
                        ) : (
                            <p>No Theses pending review approval.</p>
                        )}
                    </div>
                    {renderPagination(thesisReqPending.length, pendingPage, setPendingPage)}
                    <br /><br /><br />


                </div>
            </fieldset>
            <br />

            <Footer />
            <CommentModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleModalSubmit}
                actionType={actionType} // Pass the action type to the modal
            />
            <ChatComponent />
        </div>
    );
}

export default PendingReqTheses;
