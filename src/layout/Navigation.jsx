import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <Navbar
      fixed="top"
      color="light"
      light
      expand="xs"
      style={{
        padding: '0.5rem 1rem',
      }}
    >
      <NavbarBrand tag={Link} to="/">
        Instaclone
      </NavbarBrand>

      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink tag={Link} to="/basile_vern">
            Components
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="https://github.com/reactstrap/reactstrap">
            GitHub
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
}

export default Navigation;
