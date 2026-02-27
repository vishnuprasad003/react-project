import { Container, Image, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./Header.css"
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../redux/userRegister";

function Header() {
    const {isAuthentication} = useSelector((state)=> state.userState);
    const { user} = useSelector((state)=> state.userState);
    const dispatch = useDispatch();
    function handleLogout(){
        dispatch(userLogout())
    }
    return (
        <Navbar expand="lg" className="head-bg">
            <Container fluid>
                <Navbar.Brand as={Link} to="/">
                    <Image src="/favicon.png" alt="logo" className="weblogo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/product">product</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                        
                    </Nav>
                </Navbar.Collapse>

                 <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        
                        <Nav.Link as={Link} to="/cart">cart</Nav.Link> 
                        {isAuthentication ? ( <NavDropdown title={user?.fullName?.[0].toUpperCase()} id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="#action/3.1">profile</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/admin/add-product">
                             Add Product
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} onClick={handleLogout} to="/login">
                                LogOut
                            </NavDropdown.Item>
                        </NavDropdown>):(
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        )}                      
                       
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default Header;