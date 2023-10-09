import { Navbar, Container, Nav, Button, NavDropdown } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";


const Menu = () => {


    return (
        <>
            <Navbar expand="lg" bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#inicio">Imagen Perfil</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="ms-auto">
                            <Nav.Link href="#inicio">Inicio</Nav.Link>
                            <Nav.Link href="#contacto">Contacto</Nav.Link>
                            <Nav.Link href="#sobrenosotros">Sobre nosotros</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Menu;