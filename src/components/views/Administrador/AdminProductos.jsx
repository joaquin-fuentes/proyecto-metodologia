import { Container, Table, Button, InputGroup, Form, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import Swal from "sweetalert2";

const AdminProductos = () => {
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
          />
        </InputGroup></Col>
        <Col md="6"><InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Categoria</InputGroup.Text>
          <Form.Control
            placeholder="Buscar por categoria de prenda"
          />
        </InputGroup></Col>
      </Row>
      <Table striped bordered hover responsive variant="dark">
        <thead>
          <tr>
            <th>Prenda</th>
            <th>Color</th>
            <th>Talle</th>
            <th>Categoria</th>
            <th>Precio</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Remera Nike</td>
            <td>Verde</td>
            <td>L</td>
            <td>Remeras</td>
            <td>$5000</td>
            <td>
              <Link
                className="btn btn-success mx-1"
                to={`/administrador/detalle`}
              > Ver detalle
              </Link>
              <Link
                className="btn btn-warning mx-1"
                to={`/administrador/editar`}
              > Editar
              </Link>
              <Button className="mx-1" variant="danger">Eliminar</Button>
            </td>
          </tr>
          <tr>
            <td>Remera Nike</td>
            <td>Verde</td>
            <td>L</td>
            <td>Remeras</td>
            <td>$5000</td>
            <td>
              <Link
                className="btn btn-success mx-1"
                to={`/administrador/detalle`}
              > Ver detalle
              </Link>
              <Link
                className="btn btn-warning mx-1"
                to={`/administrador/editar`}
              >Editar
              </Link>
              <Button className="mx-1" variant="danger">Eliminar</Button>
            </td>
          </tr>
          <tr>
            <td>Remera Nike</td>
            <td>Verde</td>
            <td>L</td>
            <td>Remeras</td>
            <td>$5000</td>
            <td>
              <Link
                className="btn btn-success mx-1"
                to={`/administrador/detalle`}
              > Ver detalle
              </Link>
              <Link
                className="btn btn-warning mx-1"
                to={`/administrador/editar`}
              > Editar
              </Link>
              <Button className="mx-1" variant="danger">Eliminar</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default AdminProductos;