import { Container, Row, Col, Breadcrumb, Button } from "react-bootstrap"
import { useEffect, useState } from "react";
import { obtenerProducto } from "../helpers/queries";
import { useParams, useNavigate, Link } from "react-router-dom";

import Swal from 'sweetalert2';

const DetalleProductoInicio = () => {

    const { id } = useParams()

    const [producto, setProducto] = useState([])
    const [productoWp, setProductoWp] = useState("")

    useEffect(() => {
        obtenerProducto(id).then((respuesta) => {
            if (respuesta != null) {
                setProducto(respuesta)
                setProductoWp(`${respuesta.nombrePrenda}, código: ${respuesta.id}`)
            } else {
                Swal.fire("Error", "No se pudo obtener los datos de la API", "error")
                // navegacion("/error404")
            }
        })
    }, [])

    return (
        <Container className='mainSection my-3'>

            <h2>Detalle del producto</h2>
            <hr />
            <Row className="m-4">
                <Col xs={12} lg={6} className="text-center " >
                    <img src={producto.imagen} alt="imagen de prenda" className="w-100" />
                </Col>
                <Col xs={12} lg={6} >
                    <article className="p-2 py-md-0">
                        <h3>{producto.nombrePrenda}</h3>
                        <hr />
                        <p className="fw-bold ">Categoria: <span className="fw-normal">{producto.categoria}</span></p>
                        <p className="fw-bold ">Talle: <span className="fw-normal">{producto.talle}</span></p>
                        <p className="fw-bold ">Descripcion: <span className="fw-normal">{producto.descripcion}</span></p>
                        <p className="fw-bold">Color: <span className="fw-normal p-1" style={{ backgroundColor: producto.color}}>{producto.color}</span></p>  
                        <p className="fw-bold">Precio: <span className="fw-normal">${producto.precio}</span></p>
                        <Link className="btn btn-success"
                            target="_blank"
                            to={`https://api.whatsapp.com/send?phone=3816097754&text=¡Hola! Estoy interesado en tu producto:${productoWp}`}>
                            Ir al WP
                        </Link>
                        <Link className="btn btn-primary mx-3"
                            to="/">
                             Volver
                        </Link>
                    </article>

                </Col>
            </Row>
            <Breadcrumb>
                <a href="/" className='volver-atras'>Volver</a>
            </Breadcrumb>
        </Container>
    );
};

export default DetalleProductoInicio;