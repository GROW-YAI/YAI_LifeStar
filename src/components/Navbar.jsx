import React, { useState, useEffect } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    
    const observerOptions = {
      threshold: 0.5,
      rootMargin: '-50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          setActiveSection(id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <nav>
      <a href="#home" className="logo-container" onClick={(e) => handleNavClick(e, 'home')}>
        <img
          src="/assets/images/logo.webp"
          alt="LifeStar Innovation Logo"
          className="nav-logo"
        />
        <h2><span className="nav-sub">LifeStar </span>Innovation</h2>
      </a>
      <button className="mobile-toggle" id="mobileToggle" onClick={toggleMenu}>
        <i className="fas fa-bars"></i>
      </button>
      <div className={`navitems ${isMenuOpen ? 'show' : ''}`} id="navItems">
        <a 
          href="#home" 
          className={activeSection === 'home' ? 'active' : ''}
          onClick={(e) => handleNavClick(e, 'home')}
        >
          Home
        </a>
        <a 
          href="#about" 
          className={activeSection === 'about' ? 'active' : ''}
          onClick={(e) => handleNavClick(e, 'about')}
        >
          About Innovator
        </a>
        <a 
          href="#services" 
          className={activeSection === 'services' ? 'active' : ''}
          onClick={(e) => handleNavClick(e, 'services')}
        >
          Services
        </a>
        <a 
          href="#products" 
          className={activeSection === 'products' ? 'active' : ''}
          onClick={(e) => handleNavClick(e, 'products')}
        >
          Products
        </a>
        <a 
          href="#contact" 
          className={activeSection === 'contact' ? 'active' : ''}
          onClick={(e) => handleNavClick(e, 'contact')}
        >
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;