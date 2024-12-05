import React, { useState, useEffect } from "react";
import "../css/AdvanceSearch.css";
import ThesisCard from "./ThesisCard";
import SearchNavbar from "./SearchNavBar";
import HomeNavbar from "./HomeNavBar";
import Footer from "./Footer";
import ChatComponent from "./ChatComponent";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
 
const ITEMS_PER_PAGE = 6;
 
const AdvanceSearch = () => {
  const [userData, setUserData] = useState(null);
 
  useEffect(() => {
    const storedUserData = JSON.parse(sessionStorage.getItem("user"));
    if (storedUserData) {
      setUserData(storedUserData);
    }
  }, []);
 
  const [options, setOptions] = useState({
    byTitle: [],
    byAuthor: [],
    byYear: [],
    byKeyword: [],
  });
 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedValues, setSelectedValues] = useState({
    byTitle: [],
    byAuthor: [],
    byYear: [],
    byKeyword: [],
  });
 
  const [visibleOptions, setVisibleOptions] = useState({
    byTitle: false,
    byAuthor: false,
    byYear: false,
    byKeyword: false,
  });
 
  const [combinedResults, setCombinedResults] = useState([]);
 
  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedResults, setPaginatedResults] = useState([]);
 
  const toggleOptionVisibility = (option) => {
    setVisibleOptions((prev) => ({
      ...prev,
      [option]: !prev[option],
    }));
  };
 
  useEffect(() => {
    const fetchOptions = async (searchOption) => {
      if (!visibleOptions[searchOption]) return;
 
      setLoading(true);
      setError("");
 
      let apiUrl;
      if (searchOption === "byTitle") {
        apiUrl = "http://localhost:3001/api/searchThesis/getTitle/:";
      } else if (searchOption === "byAuthor") {
        apiUrl = "http://localhost:3001/api/searchThesis/getAuthor/:";
      } else if (searchOption === "byYear") {
        apiUrl = "http://localhost:3001/api/searchThesis/getYear/:";
      } else if (searchOption === "byKeyword") {
        apiUrl = "http://localhost:3001/api/searchThesis/getKeywords/:";
      }
 
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();
 
        setOptions((prev) => ({
          ...prev,
          [searchOption]:
            searchOption === "byYear"
              ? data.map((item) => item.year)
              : searchOption === "byTitle"
              ? data.map((item) => item.title)
              : searchOption === "byAuthor"
              ? data.map((item) => item.firstName+" "+item.lastName)
              : data.map((item) => item.keywords),
        }));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
 
    Object.keys(visibleOptions).forEach(fetchOptions);
  }, [visibleOptions]);
 
  const handleCheckboxChange = async (e, value, option) => {
    const isChecked = e.target.checked;
 
    setSelectedValues((prev) => {
      const updatedValues = {
        ...prev,
        [option]: isChecked
          ? [...prev[option], value]
          : prev[option].filter((val) => val !== value),
      };
      fetchResults(updatedValues);
      return updatedValues;
    });
  };
 
  
  const fetchResults = async (selected) => {
    try {
      // Construct the query parameters dynamically
      const queryParams = [];
      if(selected.byYear.length == 0 && selected.byAuthor.length == 0 && selected.byTitle.length == 0 && selected.byKeyword.length == 0 ){
        setCombinedResults([]);
        return;
      }

      if (selected.byYear.length > 0) {
        queryParams.push(`year=${selected.byYear.join(",")}`);
      }
      if (selected.byAuthor.length > 0) {
        queryParams.push(`author=${selected.byAuthor.join(",")}`);
      }
      if (selected.byTitle.length > 0) {
        queryParams.push(`title=${selected.byTitle.join(",")}`);
      }
      if (selected.byKeyword.length > 0) {
        queryParams.push(`keywords=${selected.byKeyword.join(",")}`);
      }
  
      // Construct the full query URL
      const queryString = queryParams.length > 0 ? `?${queryParams.join("&")}` : "";
      const apiUrl = `http://localhost:3001/api/searchThesis${queryString}`;
  
      // Fetch the data from the backend
      const response = await fetch(apiUrl);
  
      if (!response.ok) throw new Error("Failed to fetch data");
  
      const data = await response.json();
  
      // Handle pagination and update the results
      setCombinedResults(data);
      setCurrentPage(1); // Reset to the first page when new results are fetched
  
    } catch (error) {
      console.error("Error fetching results:", error);
      setCombinedResults([]);
    }
  };
  
 
  useEffect(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    setPaginatedResults(combinedResults.slice(startIndex, endIndex));
  }, [combinedResults, currentPage]);
 
  const clearFilters = () => {
    setSelectedValues({
      byTitle: [],
      byAuthor: [],
      byYear: [],
      byKeyword: [],
    });
    setCombinedResults([]);
    setCurrentPage(1);
  };
 
  // Generate page numbers based on total pages
  const totalPages = Math.ceil(combinedResults.length / ITEMS_PER_PAGE);
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
 
  return (
    <div>
      {userData ? <SearchNavbar /> : <HomeNavbar />}
      <br />
      <div className="advance-search-container-filter">
        <div className="sidebar-search">
          <h3>Advanced Search</h3>
          <button className="clear-filters-button" onClick={clearFilters}>
            Clear Filters
          </button>
          <div>
            {["byYear", "byTitle", "byAuthor", "byKeyword"].map((option) => (
              <div key={option} className="collapsible-section">
                <button
                  className="collapsible-button"
                  onClick={() => toggleOptionVisibility(option)}
                >
                  {`Search ${option.replace("by", "")}`}
                </button>
                {visibleOptions[option] && (
                  <div className="collapsible-content">
                    {loading && <p>Loading options...</p>}
                    {error && <p style={{ color: "red" }}>{error}</p>}
                    {options[option].length > 0 ? (
                      options[option].map((item, index) => (
                        <div key={index}>
                          <input
                            type="checkbox"
                            value={item}
                            onChange={(e) => handleCheckboxChange(e, item, option)}
                            checked={selectedValues[option]?.includes(item) || false}
                          />
                          <label>{item}</label>
                        </div>
                      ))
                    ) : (
                      <p>No options available</p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="advance-search-results">
          <div className="thesis-row-advance-search">
            {paginatedResults.length > 0 ? (
              paginatedResults.map((thesis) => (
                <ThesisCard key={thesis.thesisId} thesis={thesis} isTrending={true} />
              ))
            ) : (
              <p>Please use filters to view data.</p>
            )}
          </div>
          {/* Pagination Controls */}
          {combinedResults.length > ITEMS_PER_PAGE && (
            <div
              className="pagination-controls"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                style={{
                  background: "none",
                  border: "none",
                  cursor: currentPage > 1 ? "pointer" : "not-allowed",
                  padding: "0",
                  display: "flex",
                  alignItems: "flex-start",
                }}
                aria-label="Go to previous page"
              >
               
              </button>
 
              {/* Page Number Buttons */}
              {pageNumbers.map((pageNumber) => (
                <button
                  key={pageNumber}
                  onClick={() => setCurrentPage(pageNumber)}
                  disabled={pageNumber === currentPage}
                  className={pageNumber === currentPage ? 'paginationbutton active' : 'paginationbutton'}
                >
                  {pageNumber}
                </button>
              ))}
 <br></br>
              
            </div>
          )}
          <br></br>
          <br></br>
        </div>
      </div>
      <ChatComponent />
      <Footer />
    </div>
  );
};
 
export default AdvanceSearch;