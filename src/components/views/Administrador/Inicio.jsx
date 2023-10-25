import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemProducto from "./ItemProducto"
import {useState} from 'react';
import { Container, InputGroup, Form, Row, Col } from "react-bootstrap";
import { obtenerProductos } from "../../helpers/queries";

 const Inicio = () => {

  const [productos, setProductos] = useState([])

  const [nombrePrenda, setNombrePrenda] = useState("");

  const productosFiltrados = productos.filter((producto) => {

    const nombrePrendaMatches =

      nombrePrenda === "" || producto.nombrePrenda.toLowerCase().includes(nombrePrenda.toLowerCase());
  
    return nombrePrendaMatches;

  });

  console.log(productosFiltrados)

  
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
  
  console.log(productos)

   return (

    <div>
      
      <h1 className="">Vero Ropa Deportiva Por Mayor</h1>
      
      <div className="input-group">

          <input placeholder="Buscar por nombre de prenda"
                value={nombrePrenda}
                onChange={(e) => setNombrePrenda(e.target.value)}/>

          <div className="input-group-append">
              <button className="btn btn-primary" type="button">
                Buscar
              </button>
          </div>
      </div>

      <div >
        <ul>
        {
          productosFiltrados.map((producto) =>{
            
            return(
                <li key={producto.id}>
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={producto.imagen}/>
                      <Card.Body>
                        <Card.Title>{producto.nombrePrenda}</Card.Title>
                        <Card.Text> <p>
                          {producto.descripcion}, <span className='bg-success'>${producto.precio}</span>, Talle: {producto.talle}

                        </p>
                        </Card.Text>
                        <Button variant="primary">Saber Mas...</Button>
                      </Card.Body>
                    </Card>
                </li>
            )
          })
        }

        </ul>
      </div>
     
    </div>

      

      

    
/* <div className="contenedor-inicio">

<nav>
    <ul>
      <li><Link to="/categorias/mujeres">Mujeres</Link></li>
      <li><Link to="/categorias/hombres">Hombres</Link></li>
      <li><Link to="/ofertas">Ofertas</Link></li>
    </ul>
</nav>

<div className="cart">Carrito (0)</div>


<div className="input-group">

      <input type="text" className="form-control" placeholder="Click para buscar..."/>

      <div className="input-group-append">
          <button className="btn btn-primary" type="button">
            Buscar
          </button>
      </div>
</div>






<div><Card style={{ width: '18rem' }}>
<Card.Img variant="top" src={""}/>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </Card.Text>
    <Button variant="primary">Saber Mas...</Button>
  </Card.Body>
</Card>
</div>

 
 <div className="productos">
   <h2>Productos destacados</h2>
  </div>



 
  <div className="productos">
   <h2>Todos Los Productos</h2>
  </div>




<div className="contacto">
  <h3>Contacto</h3>
  <p>Email:FacundoJoaGL@gmail.com</p>
  <p>Teléfono:(381)6566750</p>
</div>
<div className="redes-sociales">
  <h3>Síguenos en Redes Sociales</h3>
  <a href="" >Facebook</a>
  <a href="" >Instagram</a>
  <a href="" >Twitter</a>
</div>

</div> */
 
     
   );

 };

export default Inicio

