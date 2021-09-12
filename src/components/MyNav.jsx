import { Navbar,Nav } from "react-bootstrap";

const MyNav = () => {

    return (
        <>
        <Navbar bg="light" expand="lg">
        
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">About</Nav.Link>
              <Nav.Link href="#link">Browse</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        
      </Navbar>
      </>
    )
}
export default MyNav