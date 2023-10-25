import { Container, Row, InputGroup, Form, Col} from "react-bootstrap"
import imgBanner from "../../assets/imagenes/bannerInicio.png"
import { useEffect, useState } from "react";
import { obtenerProductos } from "../helpers/queries";
import CardProducto from "./CardProducto";

const Inicio = () => {
    const [productos, setProductos] = useState([])
    const [nombrePrenda, setNombrePrenda] = useState("");


    useEffect(() => {
        obtenerProductos().then((respuesta) => {
            if (respuesta != null) {
                setProductos(respuesta)
            } else {
                Swal.fire("Error", "No se pudo obtener los datos de la API", "error")
                // navegacion("/error404")
            }
        })
    }, [])

    const productosFiltrados = productos.filter((producto) => {
        const nombrePrendaMatches =
            nombrePrenda === "" || producto.nombrePrenda.toLowerCase().includes(nombrePrenda.toLowerCase());

        return nombrePrendaMatches;
    });

    return (
        <main>
            <Container fluid className="p-0">
                <Row>
                    <img src={imgBanner} alt="banner de pagina de inicio" className="imgBanner" />
                </Row>
            </Container>
            <Container className="my-4">
                <h1>Nuestros Productos</h1>
                <hr />
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">Buscar</InputGroup.Text>
                    <Form.Control
                        placeholder="Buscar por nombre de prenda"
                        value={nombrePrenda}
                        onChange={(e) => setNombrePrenda(e.target.value)}
                    />
                </InputGroup>

                <Row className="alineacionProductos">
                    {
                        productosFiltrados.map((producto) => {
                            return  <CardProducto producto={producto} key={producto.id}></CardProducto>
                        })
                    }
                </Row>
            </Container>
        </main >
    );
};

export default Inicio;