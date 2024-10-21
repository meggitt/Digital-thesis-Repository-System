import React, { useState } from 'react';
import '../css/ContactUs.css';
import Navbar from './NavBar';
import Footer from './Footer';
import '../css/Faq.css';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Faq = () => {
    const faqData = [
        {
            question: 'What is the Digital Thesis Repository?',
            answer: 'The Digital Thesis Repository is a centralized platform for storing, sharing, and accessing theses and dissertations, allowing collaboration and feedback.'
        },
        {
            question: 'Who can submit a thesis?',
            answer: 'Any registered student or researcher can submit their thesis with the necessary approvals from their academic advisor or department head.'
        },
        {
            question: 'How can I access the most popular theses?',
            answer: 'You can browse our repository by using filters like most viewed, most downloaded, or highest-rated to find trending theses.'
        },
        {
            question: 'Can I edit my thesis after submission?',
            answer: 'Yes, but you will need approval from your advisor or department to ensure that changes align with submission guidelines.'
        },
        {
            question: 'Is there a limit to the file size for thesis uploads?',
            answer: 'Yes, the current file size limit is 50MB. If your thesis exceeds this limit, please contact support for alternative upload options.'
        },
        {
            question: 'What to do if the thesis is rejected?',
            answer: 'If a thesis is rejected by the requested advisor, then the student submits an updated thesis addressing all the comments and requests for a re-review. The updated thesis will have both the old thesis ID and the new thesis ID.'
        },
        {
            question: 'Who can raise an inquiry?',
            answer: 'Any student, visitor, admin, or advisor can raise an inquiry on the thesis.'
        },
        {
            question: 'How long does it take for a thesis to be approved?',
            answer: 'The approval process varies by department. Typically, it can take anywhere from a few days to two weeks, depending on the review by your advisor or department head.'
        },
        {
            question: 'How can I get feedback on my thesis after submission?',
            answer: 'Your thesis will be displayed to peers and advisors. Through the repository\'s commenting feature, they can leave comments or suggestions.'
        },
        {
            question: 'How can a student check the status of their thesis submission?',
            answer: 'You can check the status of your submission by logging into your account. Once logged in, you can see your status in pages such as "Approved & Published Theses", "Approved & Unpublished Theses", and "Declined Theses".'
        },
        {
            question: 'Can I submit multiple theses?',
            answer: 'Yes, you can submit multiple theses if you have more than one project. Each submission must be approved by the relevant department or academic advisor.'
        },
        {
            question: 'How can I increase the visibility of my thesis?',
            answer: 'To increase visibility, ensure your thesis includes relevant keywords, choose categories that align with your research area, and actively share the thesis link on academic platforms or social media.'
        },
        {
            question: 'How long will my thesis remain in the repository?',
            answer: 'Your thesis will remain in the repository indefinitely unless you or your institution request its removal. This ensures long-term preservation and accessibility.'
        }
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div>
            <Navbar />
            <div className='facenter'>
                <fieldset className='fieldsetA'>
                    <legend className='legendF'>
                        <h2>Frequently Asked Questions</h2>
                    </legend>
                    <div className="faq-container">
                        {faqData.map((faq, index) => (
                            <div 
                                key={index} 
                                className="faq-item"
                                onClick={() => toggleFaq(index)}
                            >
                                <div className="faq-question">
                                    {faq.question}
                                    <span className="faq-icon">
                                        {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                                    </span>
                                </div>
                                {openIndex === index && (
                                    <div className="faq-answer">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </fieldset>
            </div>
            <br></br>
            <Footer />
            <br />
            <br />
        </div>
    );
};

export default Faq;
