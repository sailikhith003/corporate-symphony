 import '../assets/css/Landing.css';
 import image from '../assets/images/logo.png';
 import image3 from'../assets/images/green.png'
 import Sideimage from '../assets/images/side.jpg';
 import CorporateEventCarousel from "../components/CorporateEventCarousel";
import { useNavigate } from "react-router-dom";
import Testimonial from '../components/Testimonals';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

 function Home() {
  const navigate=useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  const { search } = useLocation();
  const loggedIn = new URLSearchParams(search).get('isloggedIn');
    return (

      <>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
        <title>Corporate Symphony</title>
        <link rel="icon" type="image/png" href="assets/img/logo.svg" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" crossOrigin="anonymous" />
        <link rel="stylesheet" href="assets/css/main.css" />
        <div className="container">
          <header>
            <nav className="header__nav w-120">
              <div className="header__logo">
                <img src={image} alt="Logo" />
              </div>
              <div className="header__nav__content">
                <div className="nav-close-icon" />
                <ul className="header__menu">
                  <li className="menu__item">
                    <a href="" className="menu__link active">Home</a>
                  </li>
                  <li className="menu__item">
                    <a href="#" className="menu__link">Services</a>
                  </li>
                 
                  <li className="menu__item">
                    <a href="#" className="menu__link">About Us</a>
                  </li>
                  <li className="menu__item">
                    <a href="#" className="menu__link">Contact</a>
                  </li>
                  <li className="menu__item">
                    <a onClick={()=>{navigate("/eventlist")}} className="menu__link active">Dashboard</a>
                  </li>
                </ul>
                <div className="header__signup">
                {isLoggedIn ? (
              <>
                <Link to="/dashboard" className="btn btn__dashboard">
                  Dashboard
                </Link>
                <button onClick={handleLogout} className="btn btn__logout">
                  Logout
                </button>
              </>
            ) : (
              <Link to="/login-signup" className="btn btn__signup">
                Sign Up
              </Link>
            )}
                </div>
              </div>
              <div className="hamburger-menu-wrap">
                <div className="hamburger-menu">
                  <div className="line" />
                  <div className="line" />
                  <div className="line" />
                </div>
              </div>
            </nav>
          </header>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>           
          
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>           
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>           
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>           
         
          
          <section className="hero w-120">
            <div className="hero__content">
              <div className="hero__text">
                <h1 className="hero__title">Transforming Corporate Events with Excellence</h1>
                <p className="hero__description">
                 Corporate Symphony  provides top-notch services for corporate gatherings, conferences, and more.
                </p>
                 <center><a onClick={()=>{navigate("/eventlist")}} className="btn btn__hero">Explore Services</a></center>
              </div>
              <div className="hero__img">
                <img src={Sideimage} alt="" />
              </div>
            </div>
          </section>
          <section className="opportunities">
            <div className="opportunities__img">
              <img src="assets/img/leaf.png" alt="" />
            </div>
            <div className="opportunities__content w-105">
              <div className="opportunities__head">
                <h2 className="opportunities__title">Why Choose Us</h2>
                <p className="opportunities__description">We are the only platform enabling you to create memorable and successful corporate events.</p>
              </div>
              <div className="opportunities__body">
                <div className="opportunity">
                  <img src="src/assets/images/cheers.png" alt="Icon" className="opportunity__icon" />
                  <h4 className="opportunity__title">Explore Opportunities with Us</h4>
                  <p className="opportunity__description">Discover how partnering with our event management services can bring new possibilities to your corporate events.
                  </p>
                </div>
                <div className="opportunity active">
                  <img src="src/assets/images/party.png" alt="Icon" className="opportunity__icon" />
                  <h4 className="opportunity__title">Connect with Experienced Event Planners</h4>
                  <p className="opportunity__description">
                  Collaborate with our seasoned event planners to create memorable and seamless corporate experiences tailored to your needs.
                  </p>
                </div>
                <div className="opportunity">
                  <img src="src/assets/images/event.png" alt="Icon" className="opportunity__icon" />
                  <h4 className="opportunity__title">Enhance Your Corporate Presence
                  </h4>
                  <p className="opportunity__description">
                  Elevate your business profile through meticulously planned events. Make a lasting impact on your clients and partners.
        </p>
                </div>
              </div>
            </div>
          </section>
          <Testimonial/>
          <section className="farm-invest w-105">
            <h2 className="farm-invest__title">Elevate the <span>Events</span> with us</h2>
            <a href="#" className="btn btn__farm--invest">Contact Us</a>
          </section>
          <footer className="footer">
            <div className="footer__body w-105">
              <nav className="footer__nav">
                <ul className="footer_nav__menu">
                  <li className="footer_nav__item">
                    <h4 className="footer_nav__menu__title">COMPANY</h4>
                  </li>
                  <li className="footer_nav__item">
                    <a href="#" className="footer_nav__link">About Us</a>
                  </li>
                  <li className="footer_nav__item">
                    <a href="#" className="footer_nav__link">Team</a>
                  </li>
                  <li className="footer_nav__item">
                    <a href="#" className="footer_nav__link">Careers</a>
                  </li>
                  <li className="footer_nav__item">
                    <a href="#" className="footer_nav__link">Contact</a>
                  </li>
                </ul>
                <ul className="footer_nav__menu">
                  <li className="footer_nav__item">
                    <h4 className="footer_nav__menu__title">INVEST</h4>
                  </li>
                  <li className="footer_nav__item">
                    <a href="#" className="footer_nav__link">Features</a>
                  </li>
                  <li className="footer_nav__item">
                    <a href="#" className="footer_nav__link">How it works</a>
                  </li>
                  <li className="footer_nav__item">
                    <a href="#" className="footer_nav__link">Pricing</a>
                  </li>
                  <li className="footer_nav__item">
                    <a href="#" className="footer_nav__link">Login</a>
                  </li>
                </ul>
                <ul className="footer_nav__menu">
                  <li className="footer_nav__item">
                    <h4 className="footer_nav__menu__title">LEGAL</h4>
                  </li>
                  <li className="footer_nav__item">
                    <a href="#" className="footer_nav__link">Privacy</a>
                  </li>
                  <li className="footer_nav__item">
                    <a href="#" className="footer_nav__link">Terms</a>
                  </li>
                  <li className="footer_nav__item">
                    <a href="#" className="footer_nav__link">Security</a>
                  </li>
                </ul>
              </nav>
              <div className="footer__contact">
                <h5 className="footer__contact__title">Corporate Symphony</h5>
                <span>Write email to us</span>
                <a href="mailto:info@zoufarm.com" className="email">info@events.com</a>
                <a href="#" className="btn btn__signin">
                  <i className="far fa-user" /> Sign In
                </a>
              </div>
            </div>
            
                <p className="footer_copyright">
                  <center>© Copyright 2021. Corporate Symphony Pvt Ltd</center>
                </p>
             
          </footer>
        </div>
      </>
    );
  };
  export default Home;