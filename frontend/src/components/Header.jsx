import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Container, Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <Navbar bg='light' expand='lg'>
      <Container fluid>
        <Navbar.Brand>Task Setter</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <LinkContainer to='/'>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/login'>
              <Nav.Link>
                Sign in <FaSignInAlt />
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/register'>
              <Nav.Link>
                Sign up <FaUser />
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
