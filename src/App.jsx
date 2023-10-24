import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/common/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/common/Footer";
import RutasAdministrador from "./components/routes/RutasAdministrador";
import RutasProtegidas from "./components/routes/RutasProtegidas";
import Contacto from "./components/views/Contacto";
import Error404 from "./components/views/Error404";
import Login from "./components/views/Administrador/Login";
<<<<<<< HEAD
import SobreNosotros from "./components/views/Administrador/SobreNosotros";
=======
import DetalleProductoInicio from "./components/views/DetalleProductoInicio";

>>>>>>> dev



function App() {



  return (
    <BrowserRouter>
      <Menu></Menu>
      <div className="mainSection">
        
        <Routes>

        <Route exact path="/administrador/*" element={
          <RutasProtegidas>
            <RutasAdministrador></RutasAdministrador>
          </RutasProtegidas>
        }></Route>
          <Route exact path="/contacto" element={<Contacto></Contacto>}></Route>
          <Route exact path="/detalle/:id" element={<DetalleProductoInicio></DetalleProductoInicio>}></Route>

          <Route exact path="/login" element={
          <Login>

          </Login>}>
            
          </Route>
        
          <Route exact path="/sobrenosotros" element={
          
          <SobreNosotros>

          </SobreNosotros>}></Route>

<Route exact path="/login" element={
<Login>

</Login>}>
  
</Route>
          {/* <Route path="/" element={<PagPrincipal></PagPrincipal>}></Route>
        <Route exact path="/detalleProducto/:id" element={<DetalleProducto></DetalleProducto>} ></Route>
        <Route path="*" element={<Error404></Error404>}></Route>
        <Route path="/AcercaDe" element={<SobreNosotros></SobreNosotros>}></Route> */}
        <Route path="*" element={<Error404></Error404>}></Route>
        </Routes>
        {/* <Footer usuarioLogueado={usuarioLogueado}></Footer> */}
      </div>
      
      <Footer></Footer>

    </BrowserRouter>
  );
}

export default App;

