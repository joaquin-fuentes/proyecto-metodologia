import React, { useEffect, useState } from 'react';
import { Container, Table, Button, InputGroup, Form, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { obtenerProductos } from "../../helpers/queries";
import Swal from "sweetalert2";
import ItemProducto from "./ItemProducto"

const AdminProductos = () => {
  const [productos, setProductos] = useState([]);
  const [nombrePrenda, setNombrePrenda] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    obtenerProductos().then((respuesta) => {
      if (respuesta != null) {
        setProductos(respuesta);
      } else {
        Swal.fire("Error", "No se pudo obtener los datos de la API", "error");
        // navegacion("/error404")
      }
    });
  }, []);

  const handleIdChange = (e) => {
    const value = e.target.value;
    setId(value);
  };

  const productosFiltrados = productos.filter((producto) => {
    const nombrePrendaMatches =
      nombrePrenda === "" || producto.nombrePrenda.toLowerCase().includes(nombrePrenda.toLowerCase());

    const idMatches = id === "" || producto._id.includes(id);

    return nombrePrendaMatches && idMatches;
  });

  return (
    <Container className="mainSection my-4">
      <h1 className="display-4 text-center">Administrador de Productos</h1>
      <hr></hr>
      <Row>
        <Col md="12">
          <Link to={"/administrador/crear"} className="btn btn-primary mb-3">
            Agregar nuevo producto
          </Link>
        </Col>
        <Col md="6">
          <InputGroup className="mb-3">
            <InputGroup.Text>Prenda</InputGroup.Text>
            <Form.Control
              placeholder="Buscar por nombre de prenda"
              value={nombrePrenda}
              onChange={(e) => setNombrePrenda(e.target.value)}
            />
          </InputGroup>
        </Col>
        <Col md="6">
          <InputGroup className="mb-3">
            <InputGroup.Text>Codigo</InputGroup.Text>
            <Form.Control
              placeholder="Buscar por codigo de prenda"
              value={id}
              onChange={handleIdChange}
            />
          </InputGroup>
        </Col>
      </Row>
      <Table striped bordered hover responsive variant="dark" className="text-center">
        <thead>
          <tr>
            <th>Código</th>
            <th>Prenda</th>
            <th>Color</th>
            <th>Talle</th>
            <th>Categoria</th>
            <th>Imagen</th>
            <th>Precio</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {productosFiltrados.map((producto) => {
            return <ItemProducto producto={producto} setProductos={setProductos} key={producto._id}></ItemProducto>;
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default AdminProductos;
