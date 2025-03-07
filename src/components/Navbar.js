import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";

function CustomNavbar() {
  return (
    <Navbar light expand="md" fixed="top">
      <NavbarBrand href="/">
        <FontAwesomeIcon icon={faBookOpen} />
      </NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink to="/" className="nav-link">
            Books List
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/add" className="nav-link">
            Add a Book
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
}

export default CustomNavbar;
