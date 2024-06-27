import React from 'react';
import { Link } from 'react-router';

import styles from './Nav.less';

const Nav = () => (
  <nav className={styles.nav}>
    <ul>
      <li><Link to="/javascript" className="nav-item">javascript</Link></li>
      <li><Link to="/kotlin" className="nav-item">kotlin</Link></li>
      <li><Link to="/RAG" className="nav-item">RAG</Link></li>
    </ul>
  </nav>
);

export default Nav;
