import React, { useRef, useEffect, useState } from 'react';
import '../css/Statistics.css';
import { useNavigate } from 'react-router-dom';

function ApprovedAdvisorThesisCard({ thesis, isTrending,}) {
    const { thesisId, title, authors, firstName, lastName, submittedDatetime, abstract, publishDatetime } = thesis;
    console.log("thesishh:", thesis);
    const navigate = useNavigate();
    const [showAbstract, setShowAbstract] = useState(false);

    const handleViewClick = () => {
        navigate(`/viewthesis?query=${thesisId}`);
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
            <div ref={titleRef} className="thesis-card-title"><h3>{title}</h3></div>
            {showAbstract ? (
                <div>
                    <p><strong>Abstract:</strong></p>
                    <p>{abstract}</p>
                </div>
            ) : (
                <div>
                    <p>
                    Published By : {firstName || "Unknown"} {lastName || "Unknown"}
                    </p>
                    {publishDatetime ? "Published Date: " : "Submitted Date: "}
                    {publishDatetime
                        ? new Date(thesis.publishDatetime).toLocaleDateString('en-CA')
                        : new Date(thesis.submittedDatetime).toLocaleDateString('en-CA')}

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
export default ApprovedAdvisorThesisCard;