import React, { useState } from "react";
import '../css/SearchNavBar.css';
import { Link } from 'react-router-dom'
import { IoHome } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { IoNotificationsCircleOutline } from "react-icons/io5";

const NavbarWithoutLinks = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            // Redirect to the search page with the search term as a query parameter
            navigate(`/search?query=${searchTerm}`);
        }
    };
    return (
        <div className="searchnavbar">
            <div className="left-section">
                <img src="images/lo.png" className="color-changing-image" alt="Logo" />
                <span className="title">Digital Thesis Repository</span>
                &nbsp;&nbsp;
                { /*
                <input type="text" className='inputsn' placeholder="Type to search" /> 
                */}
                <input
                    type="text"
                    className='inputsn'
                    placeholder="Search theses by title or author..."
                    value={searchTerm}
                    onChange={handleSearch}
                    onKeyDown={handleKeyDown} // Listen for the Enter key
                />
                &nbsp;&nbsp;
                <Link to="/statistics" >
                    View Statistics
                </Link>&nbsp;&nbsp;
                <Link to="/" className="picons" >
                    <IoNotificationsCircleOutline />
                </Link>
                &nbsp;&nbsp;
                <Link to="/" className="picons">
                    <CgProfile />
                </Link>
                &nbsp;&nbsp;
                <Link to="/" className="picons">
                    <IoLogOutOutline />
                </Link>
            </div>

        </div>
    );
};
export default NavbarWithoutLinks;