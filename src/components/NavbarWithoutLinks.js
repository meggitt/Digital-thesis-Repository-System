/* File written by: Chevva, Meghana, Student ID: 1002114458 */
import React, { useState } from "react"; // Importing React and useState hook
import '../css/SearchNavBar.css'; // Importing CSS for styling the search navbar
import { Link } from 'react-router-dom'; // Importing Link for navigation
import { IoHome } from "react-icons/io5"; // Importing home icon
import { IoLogOutOutline } from "react-icons/io5"; // Importing logout icon
import { useNavigate } from 'react-router-dom'; // Importing useNavigate for programmatic navigation
import { CgProfile } from "react-icons/cg"; // Importing profile icon
import { IoNotificationsCircleOutline } from "react-icons/io5"; // Importing notifications icon

const NavbarWithoutLinks = () => {
    const [searchTerm, setSearchTerm] = useState(''); // State to store the search term
    const navigate = useNavigate(); // Hook to programmatically navigate

    // Handle the change in the search input
    const handleSearch = (e) => {
        setSearchTerm(e.target.value); // Update the search term state
    };

    // Handle key down events in the search input
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            // Redirect to the search page with the search term as a query parameter
            navigate(`/search?query=${searchTerm}`);
        }
    };

    return (
        <div className="searchnavbar"> {/* Main container for the navbar */}
            <div className="left-section"> {/* Left section of the navbar */}
                <img src="images/lo.png" className="color-changing-image" alt="Logo" /> {/* Logo image */}
                <span className="title">Digital Thesis Repository</span> {/* Title of the application */}
                &nbsp;&nbsp;
                <input
                    type="text"
                    className='inputsn' // Input field for searching theses
                    placeholder="Search theses by title or author..."
                    value={searchTerm} // Bind the input value to the search term state
                    onChange={handleSearch} // Update search term on input change
                    onKeyDown={handleKeyDown} // Listen for the Enter key
                />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/statistics"> {/* Link to the statistics page */}
                    View Statistics
                </Link>&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/" className="picons"> {/* Link to the notifications page */}
                    <IoNotificationsCircleOutline />
                </Link>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/" className="picons"> {/* Link to the profile page */}
                    <CgProfile />
                </Link>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/" className="picons"> {/* Link to the logout page */}
                    <IoLogOutOutline />
                </Link>
            </div>
        </div>
    );
};

export default NavbarWithoutLinks; // Exporting the NavbarWithoutLinks component
