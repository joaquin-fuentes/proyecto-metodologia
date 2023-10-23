import { Routes, Route } from "react-router-dom";
import AdminProductos from "../views/Administrador/AdminProductos"
import CrearProducto from "../views/Administrador/CrearProducto";
import EditarProducto from "../views/Administrador/EditarProducto";
import DetalleProducto from "../views/Administrador/DetalleProducto";

const RutasAdministrador = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AdminProductos></AdminProductos>}></Route>
        <Route path="/crear" element={<CrearProducto></CrearProducto>}></Route>
        <Route path="/editar/:id" element={<EditarProducto></EditarProducto>}></Route>
        <Route path="/detalle/:id" element={<DetalleProducto></DetalleProducto>}></Route>
        {/* <Route path="*" element={<Error404></Error404>} ></Route> */}
      </Routes>
    </>
  );
};

export default RutasAdministrador;