import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../assets/pamojalogo.png";

function Navbarx() {
    return (
        <Navbar sticky="top" expand="lg" data-bs-theme="dark" className="bg-body-tertiary text-white text-dark" >
            <Container>
                <Navbar.Brand href="/">
                    <img src={logo} alt="logo" className="w-[140px]" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto ">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/Internet">Internet</Nav.Link>
                        <Nav.Link href="/Services">Services</Nav.Link>
                        <Nav.Link href="/Contact">Contact</Nav.Link>
                        <Nav.Link href="https://pamojafiber.phpradius.com/" target="_blank">Client Portal</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navbarx;