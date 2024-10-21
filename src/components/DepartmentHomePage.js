import React from 'react';
import { Link } from 'react-router-dom';
import '../css/DepartmentHomePage.css';
import logo from '../images/lo.png';

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
      <header>
        <div className="logo-container">
          <img src={logo} className="logo" alt="Logo" />
          <span className="navbar-title">Digital Thesis Repository</span>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Hinted search text" />
        </div>
        <nav>
          <Link to="/#">Home Page</Link>
          <Link to="/#">Contact Us</Link>
          <Link to="/#">About Us</Link>
          <div className="icons">
            <i className="fas fa-bell"></i>
            <i className="fas fa-user"></i>
            <i className="fas fa-sign-out-alt"></i>
          </div>
        </nav>
      </header>

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
    </div>
  );
}

export default DepartmentHomePage;
