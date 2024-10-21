import RegisterLogin from './components/RegisterLogin';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import ForgotPassword from './components/ForgotPassword';
import Faq from './components/Faq';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './components/Dashboard';
import DepartmentHomePage from './components/DepartmentHomePage';
import VisitorHomePage from './components/VisitorHomePage';
import StudentThesisPage from './components/StudentThesisPage';
import DepartmentAdminHomePage from './components/DepartmentAdminHomePage';
import SuperAdminHomePage from './components/SuperAdminHomePage';
import SubmitThesis from './components/SubmitThesis';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegisterLogin />} />  {/* Use the correct component name */}
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/Faq" element={<Faq />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/department" element={<DepartmentHomePage />} />
        <Route path="/visitor" element={<VisitorHomePage />} />
        <Route path="/student-thesis" element={<StudentThesisPage />} />
        <Route path="/department-admin" element={<DepartmentAdminHomePage />} />
        <Route path="/super-admin" element={<SuperAdminHomePage />} />
        <Route path="/submit-thesis" element={<SubmitThesis />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
