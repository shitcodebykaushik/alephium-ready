import React from 'react';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Aznet  Ready</div>
      <ul className={styles.navItems}>
        <li><a href="#home">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#about">About</a></li> {/* This links to the footer */}
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className={styles.ctaButton}>
        <a href="#get-started">Get Started</a>
      </div>
    </nav>
  );
};

export default Navbar;