import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import logo from "../../assets/images/logo-1.png";

import "./styles.css";

const MainNav = () => {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <img src={logo} alt="taza de cafe" />
        </Navbar.Brand>
      </Navbar.Header>
      <Nav style={{ display: "flex" }}>
        <LinkContainer exact eventKey={1} to="/">
          <NavItem eventKey={1}>Registrar</NavItem>
        </LinkContainer>
        <LinkContainer eventKey={2} to="/orders">
          <NavItem eventKey={2}>Compras</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar>
  );
};

export default MainNav;
