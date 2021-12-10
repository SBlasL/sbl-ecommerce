import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import CartWidget from './CartWidget'

function NavBar() {
    return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">React-Ecommerce</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Español</Nav.Link>
      <Nav.Link href="#pricing">Lengua y Literatura</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  <CartWidget />
  </Container>
</Navbar>
    )
}
export default NavBar