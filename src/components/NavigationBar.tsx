import React, { useState, useEffect } from 'react';
import IceCreamLogo from '../assets/Ice Cream (3).png';

export const NavigationBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav className={`nav nav--landing ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__brand">
        <img src={IceCreamLogo} alt="MRVS Logo" className="logo" />
        <span>Kuya Cris Lechon House</span>
      </div>
    </nav>
  );
};

