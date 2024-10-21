import '../css/AboutUs.css';
import { IoHome } from "react-icons/io5";
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="right-section">
                    <a href="https://mxc4458.uta.cloud" className="home-icon">
                    <IoHome />
                    </a>
                </div>
            <div className="left-section">
                <img src="images/lo.png" className="color-changing-image" alt="Logo" />
                <span className="title">Digital Thesis Repository</span>
            </div>

        </div>
    );
};
export default Navbar;