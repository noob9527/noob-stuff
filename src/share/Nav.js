import React from 'react';
import { Link } from 'react-router';

const Nav = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/topic1">topic1</Link>
  </nav>
);

export default Nav;
