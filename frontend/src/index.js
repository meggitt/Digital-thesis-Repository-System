import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import RegisterLogin from './components/RegisterLogin';
import AboutUs from './components/AboutUs'; // Component for the About Us page
import ContactUs from './components/ContactUs'; // Component for the Contact Us page
import ForgotPassword from './components/ForgotPassword'; // Component for password recovery
import Faq from './components/Faq'; // Component for Frequently Asked Questions
import DepartmentAdminDashboard from './components/DepartmentAdminDashboard';
import SubmitThesis from './components/SubmitThesis';
import AdvisorDashboard from './components/AdvisorDashboard';
import PendingRefTheses from './components/PendingRefDashboard';
import PendingReqTheses from './components/PendingReqDashboard';
import StudentsApproved from './components/StudentApproved';
import StudentsDeclined from './components/StudentsDeclined';
import StudentsPending from './components/StudentsPending';
import AdvisorsPending from './components/AdvisorsPending';
import AdvisorsDeclined from './components/AdvisorsDeclined';
import AdvisorsApproved from './components/AdvisorsApproved';
import AdvanceSearch from './components/AdvanceSearch';
import ProfilePage from './components/ProfilePage';
import ViewThesis from './components/ViewThesis';
import Statistics from './components/Statistics';
import MyTheses from './components/MyTheses';
import SearchThesis from './components/SearchThesis';
import ApprovedRefTheses from './components/ApprovedRefDashboard';
import ApprovedReqTheses from './components/ApprovedReqDashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Imports for routing
import ThesesInquiries from './components/ThesesInquiries';
import AnswerThesisInquiry from './components/AnswerThesisInquiry';
import Chat from './components/Chat';
import OtherInquiries from './components/OtherInquiries';
import AnswerOtherInquiry from './components/AnswerOtherInquiry';
import ViewAnsweredInquiry from './components/ViewAnsweredInquiry';
import HomePage from './components/HomePage';
import HomeNavbar from './components/HomeNavBar';
import SearchNavbar from './components/SearchNavBar';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Defining the route for the home page */}
        <Route path="/aboutUs" element={<AboutUs />} /> {/* About Us page */}
        <Route path="/contactUs" element={<ContactUs />} /> {/* Contact Us page */}
        <Route path="/forgotPassword" element={<ForgotPassword />} /> {/* Password recovery page */}
        <Route path="/Faq" element={<Faq />} /> {/* FAQ page */}
        <Route path="/departmentAdminDashboard" element={<DepartmentAdminDashboard />} /> {/* FAQ page */}
        <Route path="/" element={<HomePage />} />  {/* User Registration/Login component */}
        <Route path="/RegisterLogin" element={<RegisterLogin />} />  {/* User Registration/Login component */}
        <Route path="/studentDashboard" element={<MyTheses />} />  {/* User Registration/Login component */}
        <Route path="/submit-thesis" element={<SubmitThesis />} />
        <Route path="/advisorDashboard" element={<AdvisorDashboard />} />
        <Route path="/pendingRefTheses" element={<PendingRefTheses />} />
        <Route path="/pendingReqTheses" element={<PendingReqTheses />} />
        <Route path="/studentsApproved" element={<StudentsApproved />} />
        <Route path="/studentsDeclined" element={<StudentsDeclined />} />
        <Route path="/studentsPending" element={<StudentsPending />} />
        <Route path="/advisorsPending" element={<AdvisorsPending />} />
        <Route path="/advisorsDeclined" element={<AdvisorsDeclined />} />
        <Route path="/advisorsApproved" element={<AdvisorsApproved />} />
        <Route path="/advance-search" element={<AdvanceSearch />} />
        <Route path="/profilePage" element={<ProfilePage />} />
        <Route path="/viewthesis" element={<ViewThesis />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/student-thesis" element={<MyTheses />}/>
        <Route path="/visitorDashboard" element={<Statistics />} />
        <Route path="/searchThesis" element={<SearchThesis />} />
        <Route path="/approvedRefTheses" element={ <ApprovedRefTheses/>}/>
        <Route path="/approvedReqTheses" element={ <ApprovedReqTheses/>}/>
        <Route path="/thesesInquiries" element={ <ThesesInquiries/>}/>
        <Route path="/thesisinquirydetail/:id" element={<AnswerThesisInquiry />} />
        <Route path="/otherInquiries" element={ <OtherInquiries/>}/>
        <Route path="/otherinquirydetail/:id" element={<AnswerOtherInquiry />} />
        <Route path="/inquiryanswereddetail/:id" element={<ViewAnsweredInquiry />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
