import { Card, Col } from "react-bootstrap"
import { NavLink, Link } from "react-router-dom"
import { FaWhatsapp } from "react-icons/fa"



const CardProducto = ({ producto }) => {

    return (
        <Col className="fade-in"  xs={6} md={4} lg={3}>
            <Card className="m-1 zoom-on-hover">
                <Card.Img variant="top" src={producto.imagen} className="imagenProductoInicio "/>
                <Card.Body className="cuerpoProductoInicio">
                    <Card.Title className="nombrePrenda">{producto.nombrePrenda} - {producto.categoria}</Card.Title>
                    <Card.Text className="my-1" >
                        <span className="precioPrenda fw-bold rounded p-1">$ {producto.precio}</span>
                    </Card.Text>
                    <div className="contenedorBotonesPrendas">
                        <NavLink end to={`/detalle/${producto.id}`} className={"w-100 my-1 btn btn-primary botonPrenda"} >Ver detalle</NavLink>
                        <Link className="w-100 my-1 btn btn-success botonPrenda"
                            target="_blank"
                            to={`https://api.whatsapp.com/send?phone=3816097754&text=¡Hola! Estoy interesado en tu PRODUCTO: ${producto.nombrePrenda}. CODIGO: ${producto.id}`}>
                            Ir al Whatsapp <FaWhatsapp className="icono-whatsap" />
                        </Link>
                    </div>

                </Card.Body>

            </Card>
        </Col>
    );
};

export default CardProducto;