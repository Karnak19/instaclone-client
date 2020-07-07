import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navigation() {
  const user = useSelector((state) => state.user);
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
          <NavLink tag={Link} to={`/${user.username}`}>
            <img
              src={user.avatar}
              alt={user.email}
              className="img-fluid rounded-circle"
              style={{ height: 30, border: '1px solid grey' }}
            />
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
}

export default Navigation;
