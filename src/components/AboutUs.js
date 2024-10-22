/*File written by: Chevva,Meghana, Student ID: 1002114458*/ 
import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/AboutUs.css';
import '../css/logo.css';
import { IoHome } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
import Navbar from './NavBar';
import Footer from './Footer';

const AboutUs = () => {
    const teamMembers = [
        {
            name: 'Meghana Chevva',
            linkedin: 'https://linkedin.com/in/meghana-chevva',
            github: 'https://github.com/meggitt',
            instagram: 'https://instagram.com/meghana_anahgem',
            website: 'https://meghanachevva.com',
            email: 'mailto:ch.meghanah@gmail.com'
        },
        {
            name: 'Venkata Sri Dheeraj Chintapalli',
            linkedin: 'https://www.linkedin.com/in/dheeraj-chintapalli-1b7564267/',
            github: 'https://github.com/dheeraj29081999',
            instagram: 'https://www.instagram.com/dheeraj_2908/?next=%2F',
            website: '',
            email: 'mailto:dheeraj19c@gmail.com'
        },
        {
            name: 'Dharti Chauhan',
            linkedin: 'http://linkedin.com/in/dharti-chauhan-41809b246',
            github: 'https://github.com/dharti-19',
            Instagram: 'https://www.instagram.com/_dharti1912_/',
            website: '',
            email: 'mailto:dharti13294@gmail.com'
        },
        {
            name: 'Navya Sree Chagamreddy',
            linkedin: 'http://linkedin.com/in/',
            github: '',
            instagram: '',
            website: '',
            email: ''
        },
        {
            name: 'Yugamsinh Chavda',
            linkedin: 'https://www.linkedin.com/in/yugamsinh-chavda/',
            github: 'https://github.com/YugamsinhChavda',
            instagram: 'https://www.instagram.com/yugamsinh_chavda/',
            website: '',
            email: 'mailto:yuchavda@gmail.com'
        },
        {
            name: 'Kaustubh Sharma',
            linkedin: 'www.linkedin.com /in/kaustubhsharma08',
            github: 'https://github.com/Kaustubh-Sharmaaa',
            instagram: 'https://www.instagram.com/kaustubhsharmaaa/',
            website: '',
            email: 'mailto:kxs8514@mavs.uta.edu'
        }
    ];
    return (
        <div>
            <Navbar />

            <div className='fcenter'>
                <fieldset className='fieldsetA'>
                    <legend className='legendA'>
                        <h2>ABOUT US</h2>
                    </legend>
                    <p>
                        Welcome to the Digital Thesis Repository, a centralized platform designed to collect, showcase, and facilitate access to scholarly work, including theses and dissertations. Our mission is to support academic growth by providing a seamless and user-friendly experience for students, researchers, and faculty to store, share, and explore research across a wide range of disciplines.
                        <br /><br />
                        Our repository serves as a hub for peer collaboration and engagement, allowing users to comment, provide feedback, and discuss research topics. By offering submission guidelines and templates, we ensure that the quality and presentation of academic work remains consistent and professional.
                        <br /><br />
                        In addition to enhancing research visibility, we provide statistical insights on the most popular and frequently viewed theses, helping to highlight key trends in various fields of study.
                        <br /><br />
                        
                        <h2>Our History</h2>

                        The Digital Thesis Repository was established in 2024 by a group of passionate graduate students aiming to create a centralized platform for academic research and collaboration. What started as a small-scale project has evolved into a robust system utilized by students and faculty alike. Over the years, we have continuously improved the platform's features and expanded its reach, making it easier for researchers from all disciplines to store, share, and engage with scholarly work.

                        <h2>Meet The Team</h2>
                    </p>
                    <div className='team-container'>
                        {teamMembers.map((member, index) => (
                            <div className='team-member' key={index}>
                                <h4>{member.name}</h4>
                                <div className="social-links">
                                    {member.linkedin && (
                                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                                            <FaLinkedin />
                                        </a>
                                    )}
                                    {member.github && (
                                        <a href={member.github} target="_blank" rel="noopener noreferrer">
                                            <FaGithub />
                                        </a>
                                    )}
                                    {member.instagram && (
                                        <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                                            <FaInstagram />
                                        </a>
                                    )}
                                    {member.website && (
                                        <a href={member.website} target="_blank" rel="noopener noreferrer">
                                            <FaGlobe />
                                        </a>
                                    )}
                                    {member.email && (
                                        <a href={member.email} target="_blank" rel="noopener noreferrer">
                                            <FaEnvelope />
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                    <p>
                        <h2>Who We Are</h2>

                        We are a group of graduate students dedicated to making research more accessible and streamlined for academic communities. Our team consists of tech enthusiasts and aspiring researchers who have come together to build this platform with the goal of fostering academic collaboration. Each of us brings our unique skills to the project, from software development to user experience design, ensuring that the platform is not only functional but also user-friendly. And yes, we're all working hard to ace this project while contributing something meaningful to the academic world!
                        <br></br>

                    </p>
                </fieldset>
            </div>
            <Footer />
            <br></br>
            <br></br>
        </div>
    );
};
export default AboutUs;