import { Container, Row, InputGroup, Form, Col,Spinner } from "react-bootstrap"
import imgBanner from "../../assets/imagenes/bannerInicio.png"
import { useEffect, useState } from "react";
import { obtenerProductos } from "../helpers/queries";
import CardProducto from "./CardProducto";
import { FaSearch } from "react-icons/fa"


const Inicio = () => {
    const [productos, setProductos] = useState([])
    const [nombrePrenda, setNombrePrenda] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true); // Establece isLoading en true al inicio de la carga
        obtenerProductos().then((respuesta) => {
            if (respuesta != null) {
                setProductos(respuesta)
                setIsLoading(false); // Cambia isLoading a false cuando los productos se cargan con éxito
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
                    <InputGroup.Text id="basic-addon1"><FaSearch /></InputGroup.Text>
                    <Form.Control
                        placeholder="Buscar"
                        value={nombrePrenda}
                        onChange={(e) => setNombrePrenda(e.target.value)}
                    />
                </InputGroup>

                {isLoading ? (<div className="d-flex justify-content-center mt-4">
                                 <Spinner className="text-center" animation="border" variant="primary" />
                             </div>) :
                    (
                        <Row className="alineacionProductos">
                            {productosFiltrados.map((producto) => (
                                <CardProducto producto={producto} key={producto.id} />
                            ))}
                        </Row>
                    )}
            </Container>
        </main >
    );
};

export default Inicio;