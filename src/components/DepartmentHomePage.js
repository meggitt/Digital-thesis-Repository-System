import React from 'react';
import { Link } from 'react-router-dom';
import '../css/DepartmentHomePage.css';
import '../css/SearchNavBar.css';
import { IoHome } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import Footer from './Footer';

const theses = [
  { title: 'Thesis Name 1', author: 'Author Name 1', likes: 99 },
  { title: 'Thesis Name 2', author: 'Author Name 2', likes: 85 },
  { title: 'Thesis Name 3', author: 'Author Name 3', likes: 120 },
  { title: 'Thesis Name 4', author: 'Author Name 4', likes: 75 },
];

const pendingTheses = [
  { title: 'Pending Thesis 1', author: 'Author Name 5' },
  { title: 'Pending Thesis 2', author: 'Author Name 6' },
  { title: 'Pending Thesis 3', author: 'Author Name 7' },
];

function ThesisCard({ title, author, likes, isTrending }) {
  return (
    <div className="thesis-card">
      <h3>{title}</h3>
      <p>{isTrending ? `Published by: ${author}` : `Author: ${author}`}</p>
      {isTrending && <p className="likes">{likes} Likes</p>}
      <div className="thesis-actions">
        {isTrending ? (
          <>
            <button className="btn preview-btn">Preview</button>
            <button className="btn view-btn">View</button>
          </>
        ) : (
          <button className="btn view-btn">View</button>
        )}
      </div>
    </div>
  );
}

function DepartmentHomePage() {
  return (
    <div className="dashboard">
      <div className="searchnavbar">
        <div className="right-section">
          <Link to="/" className="logout-icon">
            <IoLogOutOutline />
          </Link>
        </div>
        <div className="left-section">
          <img src="images/lo.png" className="color-changing-image" alt="Logo" />
          <span className="title">Digital Thesis Repository</span>
          &nbsp;&nbsp;
          <input type="text" className='inputsn' placeholder="Type to search" />
          &nbsp;&nbsp;
        </div>

      </div>

      <main className="dashboard-content">
        <section className="thesis-section">
          <h2>Trending Theses</h2>
          <div className="thesis-row">
            {theses.map((thesis, index) => (
              <ThesisCard
                key={index}
                title={thesis.title}
                author={thesis.author}
                likes={thesis.likes}
                isTrending={true}
              />
            ))}
          </div>
        </section>

        <section className="thesis-section">
          <h2>Pending Review</h2>
          <div className="thesis-row">
            {pendingTheses.map((thesis, index) => (
              <ThesisCard
                key={index}
                title={thesis.title}
                author={thesis.author}
                isTrending={false}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default DepartmentHomePage;
