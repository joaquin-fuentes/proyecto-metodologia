import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/common/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/common/Footer";



function App() {



  return (
    <BrowserRouter>
      <Menu></Menu>
      <div className="mainSection">



        
        <Routes>
          {/* <Route path="/" element={<PagPrincipal></PagPrincipal>}></Route>
        <Route exact path="/detalleProducto/:id" element={<DetalleProducto></DetalleProducto>} ></Route>
        <Route path="*" element={<Error404></Error404>}></Route>
        <Route path="/AcercaDe" element={<SobreNosotros></SobreNosotros>}></Route> */}
        </Routes>
        {/* <Footer usuarioLogueado={usuarioLogueado}></Footer> */}
      </div>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;