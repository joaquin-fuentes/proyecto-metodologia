import { Container, Table, Button, InputGroup, Form, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { obtenerProductos } from "../../helpers/queries";
import Swal from "sweetalert2";

import ItemProducto from "./ItemProducto"

const AdminProductos = () => {

  const [productos, setProductos] = useState([])

  const [nombrePrenda, setNombrePrenda] = useState("");
  const [categoria, setCategoria] = useState("");


  useEffect(()=>{
    obtenerProductos().then((respuesta)=>{
        if (respuesta != null){
            setProductos(respuesta)
        } else{
            Swal.fire("Error", "No se pudo obtener los datos de la API", "error")
            // navegacion("/error404")
        }
    })
},[])

const productosFiltrados = productos.filter((producto) => {
  const nombrePrendaMatches =
    nombrePrenda === "" || producto.nombrePrenda.toLowerCase().includes(nombrePrenda.toLowerCase());

  const categoriaMatches =
    categoria === "" || producto.categoria.toLowerCase().includes(categoria.toLowerCase());

  return nombrePrendaMatches && categoriaMatches;
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
        <Col md="6"><InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Prenda</InputGroup.Text>
          <Form.Control
            placeholder="Buscar por nombre de prenda"
            value={nombrePrenda}
            onChange={(e) => setNombrePrenda(e.target.value)}
          />
        </InputGroup></Col>
        <Col md="6"><InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Categoria</InputGroup.Text>
          <Form.Control
            placeholder="Buscar por categoria de prenda"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          />
        </InputGroup></Col>
      </Row>
      <Table striped bordered hover responsive variant="dark">
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
     {
            productosFiltrados.map((producto) => {
              return <ItemProducto producto={producto} setProductos={setProductos} key={producto.id}></ItemProducto>;
            })
     }
        </tbody>
      </Table>
    </Container>
  );
};

export default AdminProductos;