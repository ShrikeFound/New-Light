import React from 'react'
import { Navbar,Nav,NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header id="header">
      <Navbar fixed="top" collapseOnSelect expand="lg" variant="dark">
  <Link className="navbar-brand" to='/'>New Light</Link>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            
<NavDropdown title="People" id="basic-nav-dropdown">
                  <Link className="dropdown-item" to="/protagonists">The Protagonists</Link>
                  <Link className="dropdown-item" to="/npcs">The NPCs</Link>
            </NavDropdown>

      <NavDropdown title="Places" id="collasible-nav-dropdown">
        <Link className="dropdown-item" to="/great-lake">The Great Lake</Link>
        <Link className="dropdown-item" to="/iron-desert">The Iron Desert</Link>
        <Link className="dropdown-item disabled" to="/western-teeth">The Western Teeth</Link>
        <Link className="dropdown-item disabled" to="/eastern-teeth">The Eastern Teeth</Link>
        <Link className="dropdown-item disabled" to="/singing-stones">The Land of Singing Stones</Link>
        <Link className="dropdown-item" to="/burnished-plains">The Burnished Plains</Link>
        <Link className="dropdown-item" to="/elyss">Elyss</Link>
        <Link className="dropdown-item" to="/hedge">The Hedge</Link>
        <Link className="dropdown-item" to="/shabara">Shabara</Link>
            </NavDropdown>
            

                        <NavDropdown title="Factions" id="collasible-nav-dropdown">
                  <Link className="dropdown-item" to="/ruling-cities">Ruling Cities</Link>
                  <Link className="dropdown-item" to="/tributaries">Tributaries</Link>
                  <Link className="dropdown-item" to="/unallied-factions">Unallied Factions</Link>
            </NavDropdown>


                        <NavDropdown title="Things" id="collasible-nav-dropdown">
                  <Link className="dropdown-item" to="/artifacts">Artifacts</Link>
            </NavDropdown>


    </Nav>
    <Nav>
      <Link className="nav-link" to="/map">Map</Link>
      <Link className="nav-link" to="/rules">Rules</Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

    </header>
  )
}

export default Header


// <Navbar collapseOnSelect variant="dark" className="d-flex justify-content-between">
//         <div className="container-fluid">
//           <Link className="navbar-brand" to='/'>New Light</Link>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="justify-content-between d-flex w-100">
//             <div className="mr-auto d-flex">
            // <NavDropdown title="People" id="basic-nav-dropdown">
            //       <Link className="dropdown-item" to="/protagonists">The Protagonists</Link>
            //       <Link className="dropdown-item" to="/npcs">The NPCs</Link>
            // </NavDropdown>

//             <NavDropdown title="Places" id="collasible-nav-dropdown">
                  // <Link className="dropdown-item" to="/great-lake">The Great Lake</Link>
                  // <Link className="dropdown-item" to="/iron-desert">The Iron Desert</Link>
                  // <Link className="dropdown-item disabled" to="/western-teeth">The Western Teeth</Link>
                  // <Link className="dropdown-item disabled" to="/eastern-teeth">The Eastern Teeth</Link>
                  // <Link className="dropdown-item disabled" to="/singing-stones">The Land of Singing Stones</Link>
                  // <Link className="dropdown-item" to="/burnished-plains">The Burnished Plains</Link>
                  // <Link className="dropdown-item" to="/elyss">Elyss</Link>
                  // <Link className="dropdown-item" to="/hedge">The Hedge</Link>
                  // <Link className="dropdown-item" to="/shabara">Shabara</Link>
//             </NavDropdown>

            // <NavDropdown title="Factions" id="collasible-nav-dropdown">
            //       <Link className="dropdown-item" to="/ruling-cities">Ruling Cities</Link>
            //       <Link className="dropdown-item" to="/tributaries">Tributaries</Link>
            //       <Link className="dropdown-item" to="/unallied-factions">Unallied Factions</Link>
            // </NavDropdown>

            
            // <NavDropdown align="right" title="Things" id="collasible-nav-dropdown">
            //       <Link className="dropdown-item" to="/artifacts">Artifacts</Link>
            // </NavDropdown>
//               </div>
//             <Link className="nav-link" to="/map">World</Link>
//             <Link className="nav-link" to="/rules">Rules</Link>
//           </Nav>
//           </Navbar.Collapse>
//           </div>
//         </Navbar>