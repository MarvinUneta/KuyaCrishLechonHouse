import React, { useState, useEffect } from 'react';
import IceCreamLogo from '../assets/Ice Cream (3).png';

export const NavigationBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`nav-pill ${scrolled ? 'scrolled' : ''}`}>
      <img src={IceCreamLogo} alt="Logo" className="nav-logo" />
      <span className="nav-brand">Kuya Cris Lechon House</span>
    </nav>
  );
};