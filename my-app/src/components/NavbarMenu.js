import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from "react-router-dom";
import "./NavbarMenu.css"

class NavbarMenu extends Component {
    state = {  }
    render() { 
        return ( 
            <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home" className="nav-brand">LOGO</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home" className="nav-link"><Link to="/" style={{textDecoration: 'none'}}>Home</Link></Nav.Link>
      <Nav.Link href="#link" className="nav-link"><Link to="/task" style={{textDecoration: 'none'}}>Task</Link></Nav.Link>
      
      {
                                localStorage.getItem('login') ?
                                    <Nav.Link href="#link" className="nav-link"><Link to="/logout" style={{textDecoration: 'none'}}>Logout </Link></Nav.Link>

                                    :
                                    <Nav.Link href="#link" className="nav-link"><Link to="/user" style={{textDecoration: 'none'}}>User</Link></Nav.Link>
                            }
    </Nav>
  </Navbar.Collapse>
</Navbar>
         );
    }
}
 
export default NavbarMenu;