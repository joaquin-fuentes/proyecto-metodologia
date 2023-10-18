import { Button, Container, Form, Col, Row, InputGroup } from "react-bootstrap";
import { useState } from 'react';
import { Link } from "react-router-dom";



const DetalleProducto = () => {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <Container className="d-flex justify-content-center align-items-center flex-column mt-2">
            <h2>Detalle del producto</h2>
            <Form className="border border-primary rounded p-1 my-3" noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="m-3">
                    <Form.Group as={Col} md="6">
                        <Form.Label className="mt-3">Prenda</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Ej. Remera"
                            
                        />
                        <Form.Control.Feedback>Bien hecho!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6">
                        <Form.Label className="mt-3">Categoria</Form.Label>
                        <Form.Select aria-label="Categoria">
                            <option value="">Seleccione una Categoria</option>
                            <option value="pastas">Pastas</option>
                            <option value="sandwich">Sandwich</option>
                            <option value="pizzas">Pizzas</option>
                            <option value="postres">Postres</option>
                            <option value="bebidas">Bebidas</option>
                            <option value="al plato">Al Plato</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                            Debe seleccionar una categoria
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                        <Form.Label className="mt-3">Color</Form.Label>
                        <Form.Control
                            required
                            type="color"
                            className="w-50"
                        />
                        <Form.Control.Feedback>Bien hecho!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                        <Form.Label className="mt-3">Talle</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ej. L"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Debe ingresar un Talle
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                        <Form.Label className="mt-3">Precio</Form.Label>
                        <Form.Control type="number" placeholder="Ej. 500" required />
                        <Form.Control.Feedback type="invalid">
                            Debe ingresar un precio
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="12">
                        <Form.Label className="mt-3">Descripcion</Form.Label>
                        <Form.Control
                            as="textarea"
                            placeholder="Escriba una descripcion del producto"
                            style={{ height: '100px' }}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="12">
                        <Form.Label className="mt-3">URL Imagen</Form.Label>
                        <Form.Control type="text" placeholder="Zip" required />
                        <Form.Control.Feedback type="invalid">
                            Debe ingresar una url válida
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <div className="d-flex justify-content-center">
                <Link to={"/administrador"} className="btn btn-primary w-25 mb-2 ">
                    Volver
                </Link>
                </div>
            </Form>
        </Container>
    );
};

export default DetalleProducto;