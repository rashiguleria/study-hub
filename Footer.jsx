import { Link } from 'react-router-dom';
import { FaBookOpen, FaArrowUp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => (
  <footer className="site-footer">
    <div className="site-footer__main">
      <div className="site-footer__about">
        <Link className="brand brand--footer" to="/">
          <span className="brand__mark"><FaBookOpen aria-hidden="true" /></span>
          <span>Study <strong>Hub</strong></span>
        </Link>
        <p>A friendly place to find a starting point, follow a learning path, and keep building your skills.</p>
      </div>
      <div className="site-footer__links">
        <h2>Explore</h2>
        <Link to="/courses">Courses</Link>
        <Link to="/about">About Study Hub</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="site-footer__links">
        <h2>Learning paths</h2>
        <Link to="/courses?category=Web%20foundations">Web foundations</Link>
        <Link to="/courses?category=Frontend%20development">Frontend development</Link>
        <Link to="/courses?category=Programming">Programming</Link>
      </div>
    </div>
    <div className="site-footer__bottom">
      <span>© {new Date().getFullYear()} Study Hub. Independent learning, at your own pace.</span>
      <Link to="/" className="back-to-top">
        Back to top <FaArrowUp aria-hidden="true" />
      </Link>
    </div>
  </footer>
);

export default Footer;
