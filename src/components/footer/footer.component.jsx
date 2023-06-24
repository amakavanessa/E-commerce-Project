import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
import { FooterContainer } from "./footer.style";

const Footer = () => {
  return (
    <FooterContainer>
      <div className="image-bg"></div>
      <div className="footer-section">
        <h2>Customer Care </h2>
        <h4> Contact Us </h4>
        <h4>Shipping</h4>
        <h4>FAQs</h4>
        <h4>Accessibility</h4>
      </div>

      <div className="footer-section">
        <h2> Our Company </h2>
        <h4>Gift Cards</h4>
        <h4>Services</h4>
        <h4>Terms & Conditions</h4>
        <h4>Policies</h4>
      </div>

      <div className="footer-section">
        <h2> Follow us </h2>
        <h4>There is always something more for you to discover</h4>
        <div className="socials">
          <a href="https://facebook.com">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com">
            <FiInstagram />
          </a>
          <a href="https://twitter.com">
            <IoLogoTwitter />
          </a>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;
