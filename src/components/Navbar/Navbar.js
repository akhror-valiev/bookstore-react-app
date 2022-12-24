import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaRegUser } from 'react-icons/fa';
import navCss from './Navbar.module.css';

const Navbar = () => (
  <nav className={navCss.nav}>
    <header>
      <h1>Bookstore CMS</h1>
    </header>

    <NavLink to="/">
      Book
    </NavLink>
    <NavLink to="/categories">
      Categories
    </NavLink>
    <div className={navCss.userIcon}>
      <FaRegUser />
    </div>
  </nav>
);

export default Navbar;
