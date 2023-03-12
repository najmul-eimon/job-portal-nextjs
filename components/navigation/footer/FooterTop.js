import footerLogo from '../../../assets/images/svg/footer-logo.svg';
import facebook from '../../../assets/images/svg/fb.svg';
import youtube from '../../../assets/images/svg/yt.svg';
import dribbble from '../../../assets/images/svg/dribbble.svg';
import whatsapp from '../../../assets/images/svg/whatsapp.svg';
import { Link } from 'react-router-dom';

const FooterTop = () => {
  return (
    <section className="footer-top">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-5">
            <div className="footer-about">
              <a href="index.html" className="footer-logo">
                <img src={footerLogo} alt="Logo"/>
              </a>
              <p className="about-company">21 Job Interview Tips: How To Make a Great Impression.Our mission is to create the world&rsquo;s most sustainable healthcare company.</p>
              <ul className="social">
                <li>
                  <a href="#!">
                    <img src={facebook} alt="Facebook"/>
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <img src={youtube} alt="Youtube"/>
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <img src={dribbble} alt="Dribbble"/>
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <img src={whatsapp} alt="Whatsapp"/>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-6 col-md-3 col-lg-2 offset-lg-2">
            <div className="footer-title">
              <h4>Resources</h4>
            </div>
            <ul className="footer-links">
              <li><Link to="/pricing">Pricing</Link></li>
              <li><Link to="/job">Find a job</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="col-6 col-md-3 col-lg-3">
            <div className="text-end">
              <div className="footer-title">
                <h4>More</h4>
              </div>
              <ul className="footer-links">
                <li><Link to="">Privacy</Link></li>
                <li><Link to="">Term & Conditions</Link></li>
                <li><Link to="/pricing">FAQ</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FooterTop