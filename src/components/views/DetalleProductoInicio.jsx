import { Container, Row, Col, Breadcrumb, Button } from "react-bootstrap"
import Swal from 'sweetalert2';

const DetalleProductoInicio = () => {

   

    return (
        <Container className='mainSection my-3'>

            <h2>Detalle del producto</h2>
            <hr />
            <Row className="m-4">
                <Col xs={12} lg={6} className="text-center " >
                    <img src="https://www.newbalance.com.ar/media/catalog/product/cache/4/thumbnail/9df78eab33525d08d6e5fb8d27136e95/r/e/remera-hombre-new-balancefast-flight-short-sleeve-mt11240cp1_nb_40_i_1.jpg" alt="imagen de milanesa con pure" className="w-100" />
                </Col>
                <Col xs={12} lg={6} >
                    <article className="p-2 py-md-0">
                        <h3>Remera New Balance</h3>
                        <hr />
                        <p className="fw-bold ">Categoria: <span className="fw-normal"> Remeras</span></p>
                        <p className="fw-bold ">Talle: <span className="fw-normal"> L</span></p>
                        <p className="fw-bold ">Descripcion: <span className="fw-normal"> Remera deportiva color salmon, con tela (nombre de tela)</span></p>
                        <p className="fw-bold">Precio: <span className="fw-normal">$7000</span></p>
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