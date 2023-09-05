import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from 'reactstrap';

function NavBar(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
      <Navbar {...args}>
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="#">Help Center</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">
                Sell with us
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">
                Login
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">
                Register
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">
                Orders
              </NavLink>
            </NavItem>
        </Nav>
          <NavbarText>Cart</NavbarText>
        </Collapse>
      </Navbar>
  );
}

export default NavBar;