import { Card, Col, Button } from "react-bootstrap"
import { Link, NavLink } from "react-router-dom"


const CardProducto = ({producto}) => {
    return (
        <Col xs={6} md={4} lg={3}>
            <Card className="m-1">
                <Card.Img variant="top" src={producto.imagen} className="imagenProductoInicio" />
                <Card.Body className="cuerpoProductoInicio">
                    <Card.Title className="nombrePrenda">{producto.nombrePrenda}</Card.Title>
                    <Card.Text className="precioPrenda">
                    $ {producto.precio}
                    </Card.Text>
                    <NavLink end to={`/detalle/${producto.id}`} className={"btn btn-primary botonPrenda"} >Ver detalle</NavLink>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default CardProducto;