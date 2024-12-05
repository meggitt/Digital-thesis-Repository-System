import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from "./Footer";
import SearchNavbar from "./SearchNavBar";
import '../css/DepartmentAdminDashboard.css';
const AdvisorsDeclined = () => {

    const navigate = useNavigate();
    const [advisorsDeclined, setAdvisorsDeclined] = useState([]);

    const [searchTerm, setSearchTerm] = useState('');
    const fetchData = () => {
        

        fetch('http://localhost:3001/api/advisors-declined')
            .then(response => response.json())
            .then(data => Array.isArray(data) ? setAdvisorsDeclined(data) : setAdvisorsDeclined([]))
            .catch(error => {
                console.log('Error fetching advisors:', error);
                setAdvisorsDeclined([]); // fallback to an empty array on error
            });
        

    }
    useEffect(() => {
        const userData = JSON.parse(sessionStorage.getItem('user'));
        if (!userData) {
            navigate('/');
        }
        if (userData && userData.role == "Advisor") {
            navigate('/advisorDashboard')
        }
        fetchData();
    }, []);

    const handlePending = (userId) => {
        fetch(`http://localhost:3001/api/pending-advisor/${userId}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        })
            .then(response => response.json())
            .then(() => {
                fetchData();
            })
            .catch(error => console.error('Error pending Advisor:', error));
    };
    

    // Function to handle input changes in the search bar
    const handleSearch = (e) => {
        const term = e.target.value; // Store the current value in a variable
    setSearchTerm(term); // Update the searchTerm state with the input value
    console.log(term);

    if (term) {
        // If there's a search term, perform the search
        fetch(`http://localhost:3001/api/advisors-declined-search/${term}`)
            .then(response => response.json())
            .then(data => Array.isArray(data) ? setAdvisorsDeclined(data) : setAdvisorsDeclined([]))
            .catch(error => {
                console.log('Error fetching advisors:', error);
                setAdvisorsDeclined([]); // fallback to an empty array on error
            });
    } else {
        // If the search term is empty, call fetchData
        fetchData();
    }
    };

    // Function to handle key down events, specifically for the Enter key
    const handleDeclinedAdvisorsSearchKeyDown = (e) => {
        if (e.key === 'Enter' && searchTerm) {
            fetch(`http://localhost:3001/api/advisors-declined-search/${searchTerm}`)
            .then(response => response.json())
            .then(data => Array.isArray(data) ? setAdvisorsDeclined(data) : setAdvisorsDeclined([]))
            .catch(error => {
                console.log('Error fetching advisors:', error);
                setAdvisorsDeclined([]); // fallback to an empty array on error
            });
        }
    };

    const handleClearSearch = (e) => {
        setSearchTerm('');
            fetch(`http://localhost:3001/api/advisors-declined`)
            .then(response => response.json())
            .then(data => Array.isArray(data) ? setAdvisorsDeclined(data) : setAdvisorsDeclined([]))
            .catch(error => {
                console.log('Error fetching advisors:', error);
                setAdvisorsDeclined([]); // fallback to an empty array on error
            });
        
    };
    const handleDelete = (userId) => {
        const isConfirmed = window.confirm('Are you sure? This action cannot be undone.');

        if (isConfirmed) {
            fetch(`http://localhost:3001/api/delete-advisor/${userId}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
            })
                .then(response => response.json())
                .then(() => {
                    fetchData();
                })
                .catch(error => console.error('Error deleting Advisor:', error));
        } else {
            console.log('Delete action was cancelled.');
        }

    };
    return (
        <div className="dashboard">
            <SearchNavbar />
            <br />

            <fieldset className='dashboardfs'>
                <div className='VerificationDashboard'>
                    <h2>Declined Verification Advisors Accounts</h2>
                    <div className='VerificationA'>
                        <div className='blocksDashboardd'>
                            <input
                                type="text"
                                className='inputsn' // Class for styling the input
                                placeholder="Search Advisor by name or email" // Placeholder text
                                value={searchTerm} // Controlled input value
                                onChange={handleSearch} // Update state on input change
                                onKeyDown={handleDeclinedAdvisorsSearchKeyDown} // Listen for the Enter key
                            />
                            <button onClick={handleClearSearch} className='clearbutton2'>Clear</button>
                            {Array.isArray(advisorsDeclined) && advisorsDeclined.length > 0 ? (
                                advisorsDeclined.map((user,index) => (
                                    <div key={user.id} className="updates-card">
                                        <p>{index+1}</p>
                                        <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
                                        <p><strong>Email:</strong> {user.email}</p>
                                        <p><strong>Education:</strong> {user.education}</p>
                                        <button onClick={() => handlePending(user.id)} className="pendingbutton2">
                                            Pending
                                        </button>
                                        <button onClick={() => handleDelete(user.id)} className="deletebutton2">
                                            Delete
                                        </button>

                                    </div>
                                ))
                            ) : (
                                <p>No advisors declined verification.</p>
                            )}
                        </div>
                    </div>
                    
                    <br /><br /><br />
                </div>
            </fieldset>
            <br />

            <Footer />
        </div>
    );
}

export default AdvisorsDeclined;