/* File written by: Sharma, Kaustubh, Student ID: 1002138514 */
import React, { useRef, useEffect, useState } from 'react';
import '../css/Statistics.css';
import { useNavigate } from 'react-router-dom';

// Component to display individual thesis information in a card format
function ThesisCard({ thesis, isTrending }) {
    // Destructure thesis details from the props
    const { id, title, authors, publishedBy, uploadDate, abstract } = thesis;
    const navigate = useNavigate(); // Hook for navigation
    const [showAbstract, setShowAbstract] = useState(false); // State to toggle abstract visibility

    // Function to handle the click event for viewing thesis details
    const handleViewClick = () => {
        navigate(`/view-thesis?query=${id}`); // Navigate to the thesis view page with the thesis ID
    };

    // Function to toggle the visibility of the abstract
    const toggleAbstract = () => {
        setShowAbstract(!showAbstract); // Toggle state between showing and hiding the abstract
    };

    const titleRef = useRef(null); // Ref to access the title element

    useEffect(() => {
        // Adjust the font size of the title to fit within the card
        if (titleRef.current) {
            const currentFontSize = window.getComputedStyle(titleRef.current, null).getPropertyValue('font-size');
            let newSize = parseInt(currentFontSize);
            // Decrease font size until the text fits in the card
            while (titleRef.current.scrollWidth > titleRef.current.offsetWidth && newSize > 8) {
                newSize--;
                titleRef.current.style.fontSize = `${newSize}px`;
            }
        }
    }, [title]); // Run effect when the title changes

    return (
        <div className="thesis-card">
            {/* Render title of the thesis */}
            <div ref={titleRef} className="thesis-card-title"><strong>{title}</strong></div>
            {showAbstract ? (
                // Show abstract if state indicates it should be visible
                <div>
                    <p><strong>Abstract:</strong></p>
                    <p>{abstract}</p>
                </div>
            ) : (
                // Show other thesis information if abstract is not visible
                <div>
                    <p>{isTrending ? `Published by: ${publishedBy}` : `Authors: ${authors}`}</p>
                    <br></br>
                    <br></br>
                    <p><strong>Upload Date: </strong>{uploadDate}</p>
                </div>
            )}
            <div className="thesis-actions">
                {/* Button to toggle the abstract preview */}
                <button className="preview-btn" onClick={toggleAbstract}>
                    {showAbstract ? "Back" : "Preview"}
                </button>
                {/* Button to view more details about the thesis */}
                <button className="view-btn" onClick={handleViewClick}>View</button>
            </div>
        </div>
    );
}

// Export the ThesisCard component for use in other files
export default ThesisCard;
