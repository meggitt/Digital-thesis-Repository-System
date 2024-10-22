// Importing necessary components for routing and functionality
import RegisterLogin from './components/RegisterLogin'; // Component for user registration/login
import AboutUs from './components/AboutUs'; // Component for the About Us page
import ContactUs from './components/ContactUs'; // Component for the Contact Us page
import ForgotPassword from './components/ForgotPassword'; // Component for password recovery
import Faq from './components/Faq'; // Component for Frequently Asked Questions
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Imports for routing
import Dashboard from './components/Dashboard'; // Dashboard component for authenticated users
import DepartmentHomePage from './components/DepartmentHomePage'; // Home page for departments
import VisitorHomePage from './components/VisitorHomePage'; // Home page for visitors
import StudentThesisPage from './components/StudentThesisPage'; // Page for students' theses
import DepartmentAdminHomePage from './components/DepartmentAdminHomePage'; // Home page for department admins
import SuperAdminHomePage from './components/SuperAdminHomePage'; // Home page for super admins
import SubmitThesis from './components/SubmitThesis'; // Component for submitting a thesis
import ViewThesis from './components/ViewThesis'; // Component for viewing a thesis
import Statistics from './components/Statistics'; // Component for viewing statistics
import SearchPage from './components/SearchPage'; // Component for searching
import ResolveInquiry from './components/ResolveInquiry'; // Component for resolving inquiries

function App() {
  return (
    // Setting up the routing structure for the application
    <BrowserRouter>
      <Routes>
        {/* Defining the route for the home page */}
        <Route path="/" element={<RegisterLogin />} />  {/* User Registration/Login component */}
        
        {/* Other application routes */}
        <Route path="/aboutUs" element={<AboutUs />} /> {/* About Us page */}
        <Route path="/contactUs" element={<ContactUs />} /> {/* Contact Us page */}
        <Route path="/forgotPassword" element={<ForgotPassword />} /> {/* Password recovery page */}
        <Route path="/Faq" element={<Faq />} /> {/* FAQ page */}
        <Route path="/dashboard" element={<Dashboard />} /> {/* User dashboard */}
        <Route path="/department" element={<DepartmentHomePage />} /> {/* Department home page */}
        <Route path="/visitor" element={<VisitorHomePage />} /> {/* Visitor home page */}
        <Route path="/student-thesis" element={<StudentThesisPage />} /> {/* Student thesis page */}
        <Route path="/department-admin" element={<DepartmentAdminHomePage />} /> {/* Department admin page */}
        <Route path="/super-admin" element={<SuperAdminHomePage />} /> {/* Super admin page */}
        <Route path="/submit-thesis" element={<SubmitThesis />} /> {/* Submit thesis page */}
        <Route path="/view-thesis" element={<ViewThesis />} /> {/* View thesis page */}
        <Route path='/statistics' element={<Statistics />} /> {/* Statistics page */}
        <Route path="/search" element={<SearchPage />} /> {/* Search page */}
        <Route path="/resolve-inquiry" element={<ResolveInquiry />} /> {/* Inquiry resolution page */}
        <Route path="*" element={<RegisterLogin />} /> {/* navigate to registerlogin if any link is broken*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App; // Exporting the App component for use in other parts of the application
