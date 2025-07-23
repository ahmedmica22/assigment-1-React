import React from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/framework">START FRAMEWORK</Link>
      </div>

      <ul className={styles.navLinks}>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/protofolio">Portfolio</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
