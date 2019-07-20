import React from 'react';
import { Link } from 'react-router';

import styles from './Nav.less';

const Nav = () => (
  <nav className={styles.nav}>
    <ul>
      <li>
        <Link to="/javascript" className="nav-item">javascript</Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
