import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Container, Navbar, Nav, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import {useSelector, useDispatch} from 'react-redux'
import {logout, reset} from '../features/auth/authSlice'
import {useNavigate} from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {user} = useSelector((state) => state.auth)
  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }
  return (
    <Navbar bg='default' expand='lg'>
      <Container fluid>
        <Navbar.Brand>Task Setter</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>          
            <LinkContainer to='/'>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            {user ? (              
              <Nav.Link>
                <Button className='btn btn-danger' onClick={onLogout} >Logout <FaSignOutAlt /></Button>
                
              </Nav.Link>            
            ) : (<>
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
            </>)}                  
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
