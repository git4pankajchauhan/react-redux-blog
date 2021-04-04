import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';

const Navbar = ({ isAuth, username }) => {
  return (
    <div className="head">
      <span className="head-title">Posts </span>
      <div className="l-wrap">
        <NavLink className="user" exact to="/">
          Home
        </NavLink>
        <NavLink className="user" exact to="/signup">
          Singup
        </NavLink>
        <NavLink className="user" exact to="/Login">
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
