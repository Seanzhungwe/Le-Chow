
import LechowIcon from '../../assets/Images/hat.svg';  // Adjust this path to where your icon is stored
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-header">
          <a href="#" className="footer-logo">
            <img
              src={LechowIcon}
              className="footer-logo-img"
              alt="Lechow Logo"
            />
            <span className="footer-brand">Lechow</span>
          </a>
          <ul className="footer-links">
            <li><a href="#" className="footer-link">About</a></li>
            <li><a href="#" className="footer-link">Privacy Policy</a></li>
            <li><a href="#" className="footer-link">Licensing</a></li>
            <li><a href="#" className="footer-link">Contact</a></li>
          </ul>
        </div>
        <hr className="footer-divider" />
        <span className="footer-text">
          © 2024 <a href="#" className="footer-link">Lechow</a>. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
