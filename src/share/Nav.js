import React from 'react';
import { Link } from 'react-router';

import styles from './Nav.less';

const Nav = () => (
  <nav className={styles.nav}>
    <Link to="/topic1" className="nav-item">topic1</Link>
  </nav>
);

export default Nav;
