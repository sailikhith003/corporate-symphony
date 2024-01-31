import { Link } from 'react-router-dom';
import '../assets/css/Nav.css'
import image from '../assets/images/summer.png';


function Nav() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className='nav-icons'>
        <Link to="/" className="logo">
          <img src={image}  className="logo-img" />
          Corporate-Symphony
        </Link>
        </div>

        <div className="nav-links">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/aboutus" className="nav-link">
            About Us
          </Link>
          <Link to="/dashboard" className="nav-link">
            DashBoard
          </Link>
          <Link to="/login-signup" className="nav-link">
            Login/SignUp
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
