import { Button, Form, Container } from "react-bootstrap"
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { consultaEditarProducto, obtenerProducto } from "../../helpers/queries";
import { useParams, useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";

const DetalleProducto = () => {
    const { id } = useParams()
    const navegacion = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue
    } = useForm();

    const onSubmit = (productoEditado) => {
        console.log("paso la validacion")
        consultaEditarProducto(productoEditado, id).then((respuesta)=>{
                if(respuesta && respuesta.status === 200){
                    Swal.fire("Producto actualizado",
                    `El producto: ${productoEditado.nombrePrenda} fue actualizado corretamente`,
                     "success")
                     navegacion("/administrador")
                } else{
                    Swal.fire("Ocurrio un error",
                    `El producto: ${productoEditado.nombrePrenda} NO fue actualizado. Intente esta operacion luego`,
                     "error")
                }
            
        })
    }

    useEffect(() => {
        obtenerProducto(id).then((respuesta) => {
            setValue("nombrePrenda", respuesta.nombrePrenda)
            setValue("precio", respuesta.precio)
            setValue("imagen", respuesta.imagen)
            setValue("talle", respuesta.talle)
            setValue("color", respuesta.color)
            setValue("categoria", respuesta.categoria)
            setValue("descripcion", respuesta.descripcion)
        })

    }, [])
    return (
        <Container className="my-4">
            <h2>Detalle de prenda</h2>
            <hr />
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3">
                    <Form.Label>Prenda*</Form.Label>
                    <Form.Control disabled  type="text" placeholder="Ej: Remera" maxLength={30} {
                        ...register('nombrePrenda', {
                            required: 'El campo es obligatorio',
                            minLength: {
                                value: 2,
                                message: "Este campo debe tener como minimo 2 caracteres"
                            },
                            maxLength: {
                                value: 30,
                                message: "Este campo debe tener como maximo 30 caracteres"
                            }
                        })
                    } />
                    <Form.Text className="text-danger">
                        {errors.nombrePrenda?.message}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Precio*</Form.Label>
                    <Form.Control disabled  type="number" placeholder="Ej:50" maxLength={5} min={0} max={10000} {
                        ...register('precio', {
                            required: 'El campo es obligatorio',
                            pattern: {
                                value: /^(?:[1-9]\d{0,4}|100000)$/,
                                message: "Debe ingresar un numero entre 1 y 1000000"
                            }
                        })
                    } />
                    <Form.Text className="text-danger">
                        {errors.precio?.message}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Imagen URL*</Form.Label>
                    <Form.Control disabled  type="text" placeholder="Ej: https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1" maxLength={250} {
                        ...register('imagen', {
                            required: 'El campo es obligatorio',
                            minLength: {
                                value: 5,
                                message: "Este campo debe tener como minimo 5 caracteres"
                            },
                            maxLength: {
                                value: 250,
                                message: "Este campo debe tener como maximo 250 caracteres"
                            },
                            pattern: {
                                value: /.*\.(jpg|png|jpeg)$/,
                                message: "La imagen debe estar en formaro .png o .jpg"
                            }
                        })
                    } />
                    <Form.Text className="text-danger">
                        {errors.imagen?.message}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Categoria*</Form.Label>
                    <Form.Select aria-label="Default select example" disabled {
                        ...register('categoria', {
                            required: 'Debe seleccionar una categoria',
                        })}>
                        <option value="">Seleccione una opcion</option>
                        <option value="Remeras">Remeras</option>
                        <option value="Pantalones Cortos">Pantalones Cortos</option>
                        <option value="Pantalones Largos">Pantalones Largos</option>
                        <option value="Conjuntos">Conjuntos</option>
                        <option value="Zapatillas">Zapatillas</option>
                        <option value="Accesorios">Accesorios</option>
                        <option value="Ropa interior">Ropa interior</option>
                        <option value="Abrigos">Abrigos</option>
                    </Form.Select>
                    <Form.Text className="text-danger">
                        {errors.categoria?.message}

                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Color*</Form.Label>
                    <Form.Control disabled  type="color" placeholder="Elija un color" className="w-25" maxLength={30} {
                        ...register('color', {
                            required: 'El campo es obligatorio',
                        })
                    } />
                    <Form.Text className="text-danger">
                        {errors.nombrePrenda?.message}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Talle*</Form.Label>
                    <Form.Control disabled  type="text" placeholder="Ej: L" maxLength={5} {
                        ...register('talle', {
                            required: 'El campo es obligatorio',
                            minLength: {
                                value: 1,
                                message: "Este campo debe tener como minimo 1 caracter"
                            },
                            maxLength: {
                                value: 5,
                                message: "Este campo debe tener como maximo 5 caracteres"
                            }
                        })
                    } />
                    <Form.Text className="text-danger">
                        {errors.talle?.message}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Descripcion*</Form.Label>
                    <Form.Control disabled 
                        as="textarea"
                        placeholder="Ingrese una descripcion del producto"
                        style={{ height: '100px' }}
                        maxLength={500} {
                        ...register('descripcion', {
                            required: 'El campo es obligatorio',
                            minLength: {
                                value: 5,
                                message: "Este campo debe tener como minimo 5 caracteres"
                            },
                            maxLength: {
                                value: 500,
                                message: "Este campo debe tener como maximo 500 caracteres"
                            },
                        })
                        } />
                    <Form.Text className="text-danger">
                        {errors.descripcion?.message}
                    </Form.Text>

                </Form.Group>
                <div className="d-flex justify-content-center">
                  <Link to={"/administrador"} className="btn btn-danger w-25 m-3">
                    Volver
                  </Link>
                </div>
            </Form>
        </Container>
    );
};

export default DetalleProducto;