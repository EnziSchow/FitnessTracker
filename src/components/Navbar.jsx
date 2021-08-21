import React from "react";
import { Link } from "react-router-dom";
import { SiActigraph } from "react-icons/si";
import { Button } from "./Button";
import "./Navbar.css";
import { clearCurrentUser } from "../auth";

const Navbar = ({ user, setUser }) => {
  const handleLogout = () => {
    setUser();
    clearCurrentUser();
    localStorage.clear();
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo">
            <SiActigraph className="navbar-icon" />
            Fitness Tracker
          </Link>
          <ul className="nav-menu">
            {!user && (
              <li className="nav-item">
                <Link to="/register" className="nav-links">
                  Register
                </Link>
              </li>
            )}
            {user && (
              <li className="nav-item">
                <Link to="/usersroutines" className="nav-links">
                  My Routines
                </Link>
              </li>
            )}
            <li className="nav-item">
              <Link to="/routines" className="nav-links">
                Routines
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/activities" className="nav-links">
                Activities
              </Link>
            </li>
            {!user && (
              <li className="nav-btn">
                <Link to="/login" className="btn-link">
                  <Button buttonStyle="btn--outline">Login</Button>
                </Link>
              </li>
            )}
            {user && (
              <li>
                <Link to="/">
                  <Button onClick={handleLogout} buttonStyle="btn--outline">
                    Logout
                  </Button>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
