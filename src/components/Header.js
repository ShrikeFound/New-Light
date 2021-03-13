import React from 'react'
import { Navbar,Nav,NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header id="header">
      <Navbar variant="dark" className="d-flex justify-content-between">
        <Navbar.Brand>New Light</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/map">Map</Link>
            <Link className="nav-link" to="/">Rules</Link>
            <div className="d-flex">
            <NavDropdown title="People" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">The Characters</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">The NPCs</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Places" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">People</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Places</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Things</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Things</NavDropdown.Item>
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
            </NavDropdown>

            <NavDropdown title="Factions" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">People</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Places</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Things</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Things</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>

            
            <NavDropdown title="Things" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">People</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Places</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Things</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Things</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </div>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default Header
