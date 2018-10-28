import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Nav, Navbar, NavItem } from "react-bootstrap";

const MainNav = () => {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>Where is my Coffee?</Navbar.Brand>
      </Navbar.Header>
      <Nav style={{ display: "flex" }}>
        <LinkContainer exact eventKey={1} to="/">
          <NavItem eventKey={1}>Register</NavItem>
        </LinkContainer>
        <LinkContainer eventKey={2} to="/orders">
          <NavItem eventKey={2}>Orders</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar>
  );
};

export default MainNav;
