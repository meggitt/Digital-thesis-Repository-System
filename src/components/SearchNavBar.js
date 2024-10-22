import '../css/SearchNavBar.css';
import {Link} from 'react-router-dom'
import { IoHome } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
const SearchNavbar = () => {
    return (
        <div className="searchnavbar">
            <div className="right-section">
                    <Link to="/" className="logout-icon">
                    <IoLogOutOutline/>
                    </Link>
                </div>
            <div className="left-section">
                <img src="images/lo.png" className="color-changing-image" alt="Logo" />
                <span className="title">Digital Thesis Repository</span>
                &nbsp;&nbsp;
                    <input type="text" className='inputsn' placeholder="Type to search" />
                &nbsp;&nbsp;
                <Link to="/student-thesis" >
                    My Theses
                    </Link>
            </div>

        </div>
    );
};
export default SearchNavbar;