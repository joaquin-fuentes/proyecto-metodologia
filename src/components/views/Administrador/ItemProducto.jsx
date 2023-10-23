import { Button } from "react-bootstrap"
import { Link, NavLink } from "react-router-dom"
import Swal from "sweetalert2"
import { consultaBorrarProducto, obtenerProductos } from "../../helpers/queries";

const ItemProducto = ({ producto, setProductos }) => {

    const borrarProducto = () => {
        Swal.fire({
            title: 'Estas seguro?',
            text: "Seguro que deseas borrar el producto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, borrar!',
            cancelButtonText: "Cancelar"
        }).then((result) => {
            if (result.isConfirmed) {

                // aqui tengo que hacer la peticion DELETE 
                consultaBorrarProducto(producto.id).then((respuesta) => {
                    if (respuesta.status === 200) {
                        Swal.fire(
                            'Eliminado!',
                            `El producto ${producto.nombreProducto} fue eliminado`,
                            'success'
                        )
                        //actualizar el sate producto del componente administrador
                        obtenerProductos().then((respuesta)=>{setProductos(respuesta)})
                        
                    } else {
                        Swal.fire("Se produjo un error", "Error, intentelo mas tarde ", "error")
                    }
                })
            }
        })
    }

    return (
        <tr>
            <td>{producto.nombrePrenda}</td>
            <td>{producto.color}</td>
            <td>{producto.talle}</td>
            <td>{producto.categoria}</td>
            <td>${producto.precio}</td>
            <td>
              <Link
                className="btn btn-success mx-1"
                to={`/administrador/detalle/${producto.id}`}
              > Ver detalle
              </Link>
              <Link
                className="btn btn-warning mx-1"
                to={`/administrador/editar/${producto.id}`}
              > Editar
              </Link>
              <Button className="mx-1" variant="danger" onClick={borrarProducto}>Eliminar</Button>
            </td>
        </tr>
    );
};

export default ItemProducto;