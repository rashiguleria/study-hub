import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FaBars, FaBookOpen, FaTimes } from 'react-icons/fa';
import { FiChevronDown, FiGrid } from 'react-icons/fi';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [studentMenuOpen, setStudentMenuOpen] = useState(false);
  const location = useLocation();
  const isStudentPage = ['/dashboard', '/student-info', '/forum', '/daily-goals', '/quiz-zone']
    .some((path) => location.pathname === path);

  useEffect(() => {
    setMenuOpen(false);
    setStudentMenuOpen(false);
  }, [location.pathname]);

  const closeMenu = () => {
    setMenuOpen(false);
    setStudentMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="brand" to="/" onClick={closeMenu} aria-label="Study Hub home">
          <span className="brand__mark"><FaBookOpen aria-hidden="true" /></span>
          <span>Study <strong>Hub</strong></span>
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
        </button>

        <nav
          id="primary-navigation"
          className={`primary-navigation${menuOpen ? ' primary-navigation--open' : ''}`}
          aria-label="Main navigation"
        >
          <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
          <NavLink to="/courses" onClick={closeMenu}>Courses</NavLink>
          <NavLink to="/about" onClick={closeMenu}>About</NavLink>
          <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
          <div className="student-navigation">
            <button
              className={`student-navigation__trigger${studentMenuOpen || isStudentPage ? ' active' : ''}`}
              type="button"
              aria-haspopup="true"
              aria-expanded={studentMenuOpen}
              aria-controls="student-navigation-menu"
              onClick={() => setStudentMenuOpen((open) => !open)}
            >
              <FiGrid aria-hidden="true" />
              <span>Student Hub</span>
              <FiChevronDown className="student-navigation__chevron" aria-hidden="true" />
            </button>
            {studentMenuOpen && (
              <div className="student-navigation__menu" id="student-navigation-menu">
                <NavLink to="/dashboard" onClick={closeMenu}>Dashboard</NavLink>
                <NavLink to="/student-info" onClick={closeMenu}>Student Info</NavLink>
                <NavLink to="/forum" onClick={closeMenu}>Discussion Forum</NavLink>
                <NavLink to="/daily-goals" onClick={closeMenu}>Daily Goals</NavLink>
                <NavLink to="/quiz-zone" onClick={closeMenu}>Quiz Zone</NavLink>
              </div>
            )}
          </div>
          <div className="primary-navigation__auth">
            <Link className="nav-login" to="/login" onClick={closeMenu}>Log in</Link>
            <Link className="button button--small" to="/register" onClick={closeMenu}>Get started</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
