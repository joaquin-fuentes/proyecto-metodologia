import { FaWhatsapp } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import { FaInstagramSquare } from "react-icons/fa"
import { Nav } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className='bg-dark text-light text-center p-4'>
      <h3>Nuestras redes sociales</h3>
      <div className="d-flex justify-content-center">
        <Nav.Link className="mx-4 mb-4 fs-2"><FaWhatsapp className="icono-whatsap" /></Nav.Link>
        <Nav.Link className="mx-4 mb-4 fs-2"><FaFacebook className="icono-facebook" /></Nav.Link>
        <Nav.Link className="mx-4 mb-4 fs-2"><FaInstagramSquare className="icono-instagram" /></Nav.Link>
      </div>

      <h3>&copy; Todos los derechos reservados</h3>
    </footer>

  );
};

export default Footer;