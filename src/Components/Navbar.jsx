import React from "react";
import { NavLink } from "react-router-dom";
import "../script";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "navbar-link active" : "navbar-link"
            }
            data-nav-link
          >
            About
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink
            to="/resume"
            className={({ isActive }) =>
              isActive ? "navbar-link active" : "navbar-link"
            }
            data-nav-link
          >
            Resume
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              isActive ? "navbar-link active" : "navbar-link"
            }
            data-nav-link
          >
            Portfolio
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive ? "navbar-link active" : "navbar-link"
            }
            data-nav-link
          >
            Blog
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "navbar-link active" : "navbar-link"
            }
            data-nav-link
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
