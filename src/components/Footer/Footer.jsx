import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

const Footer = () => {
    // Function to handle smooth scroll to top
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Med-Leaf is your trusted source for natural wellness, offering a specialized range of medicinal plants. Discover the benefits of our diverse catalog and embark on a journey to holistic well-being.</p>
                    <div className="footer-social-icons">
                        <a href="https://www.instagram.com/medleaf99/" target="_blank" rel="noopener noreferrer">
                            <img src={assets.facebook_icon} alt="Facebook" />
                        </a>
                        <a href="https://x.com/MedLeaf3343" target="_blank" rel="noopener noreferrer">
                            <img src={assets.twitter_icon} alt="Twitter" />
                        </a>
                        <a href="https://www.linkedin.com/in/med-leaf-732645336/" target="_blank" rel="noopener noreferrer">
                            <img src={assets.linkedin_icon} alt="LinkedIn" />
                        </a>
                    </div>
                </div>

                <div className="footer-content-right">
                    <h2>COMPANY</h2>
                    <ul>
                        <li><Link to="/" onClick={handleScrollToTop}>Home</Link></li>
                        <li><Link to="/About" onClick={handleScrollToTop}>About us</Link></li>
                        <li><Link to="/Privacy" onClick={handleScrollToTop}>Privacy policy</Link></li>
                    </ul>
                </div>

                <div className="footer-content-center">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li><a href="mailto:medleaf99@gmail.com">medleaf99@gmail.com</a></li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">© Copyright 2024 Med-Leaf.com - All Rights Reserved</p>
        </div>
    );
}

export default Footer;
