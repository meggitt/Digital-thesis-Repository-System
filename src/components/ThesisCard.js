import React, { useRef, useEffect, useState } from 'react';
import '../css/Statistics.css';
import { useNavigate } from 'react-router-dom';

function ThesisCard({ thesis, isTrending }) {
    const { id, title, authors, publishedBy, uploadDate, abstract } = thesis;
    const navigate = useNavigate();
    const [showAbstract, setShowAbstract] = useState(false);

    const handleViewClick = () => {
        navigate(`/view-thesis?query=${id}`);
    };

    const toggleAbstract = () => {
        setShowAbstract(!showAbstract);
    };

    const titleRef = useRef(null);

    useEffect(() => {
        if (titleRef.current) {
            const currentFontSize = window.getComputedStyle(titleRef.current, null).getPropertyValue('font-size');
            let newSize = parseInt(currentFontSize);
            while (titleRef.current.scrollWidth > titleRef.current.offsetWidth && newSize > 8) {
                newSize--;
                titleRef.current.style.fontSize = `${newSize}px`;
            }
        }
    }, [title]);

    return (
        <div className="thesis-card">
            <div ref={titleRef} className="thesis-card-title"><strong>{title}</strong></div>
            {showAbstract ? (
                <div>
                    <p><strong>Abstract:</strong></p>
                    <p>{abstract}</p>
                </div>
            ) : (
                <div>
                    <p>{isTrending ? `Published by: ${publishedBy}` : `Authors: ${authors}`}</p>
                    <br></br>
                    <br></br>
                    <p><strong>Upload Date: </strong>{uploadDate}</p>
                </div>
            )}
            <div className="thesis-actions">
                <button className="preview-btn" onClick={toggleAbstract}>
                    {showAbstract ? "Back" : "Preview"}
                </button>
                <button className="view-btn" onClick={handleViewClick}>View</button>
            </div>
        </div>
    );
}
export default ThesisCard;