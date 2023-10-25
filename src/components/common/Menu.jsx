import { Navbar, Container, Nav, Button, NavDropdown } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/imagenes/logoCatalogo.png";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import {FaWhatsapp} from "react-icons/fa"
import {FaFacebook} from "react-icons/fa"
import {FaInstagramSquare} from "react-icons/fa"


const Menu = ({ usuarioLogueado, setUsuarioLogueado }) => {
    const navegar = useNavigate();

    const logout = () => {
        Swal.fire({
            title: "¿Está seguro?",
            text: "¿Desea cerrar sesión?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sí, cerrar sesión",
            cancelButtonText: "Cancelar",
        }).then((result) => {
            if (result.isConfirmed) {
                sessionStorage.removeItem("usuario");
                setUsuarioLogueado(null); // Actualiza el estado a null o el valor adecuado para indicar que no hay usuario logueado.
                navegar("/");
            }
        });
    };

    return (
        <>
            <Navbar expand="lg" bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/"><img src={logo} alt="Logo de la pagina" className="logoMenu" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="ms-auto">
                            <Nav.Link href="/">Inicio</Nav.Link>
                            <Nav.Link href="/contacto">Contacto</Nav.Link>
                            <Nav.Link href="/sobrenosotros">Sobre nosotros</Nav.Link>
                            {usuarioLogueado ? (
                                <Nav.Link onClick={logout}>Cerrar Sesión</Nav.Link>
                            ) : (
                                null
                            )}
                            <Nav.Link><FaWhatsapp className="icono-whatsap"/></Nav.Link>
                            <Nav.Link><FaFacebook className="icono-facebook"/></Nav.Link>
                            <Nav.Link><FaInstagramSquare className="icono-instagram"/></Nav.Link>


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Menu;
