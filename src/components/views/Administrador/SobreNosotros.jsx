 import React from 'react';
 import { Carousel } from 'react-responsive-carousel';
 import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
 import tienda from "../assets/Tienda.png";
 import vendedor1 from "../assets/Vendedor1.jpg"
 import vendedor2 from "../assets/Vendedor2.jpeg"
 import vendedor3 from "../assets/Vendedor3.webp"
 



const SobreNosotros = () => {
  return (
    
  <div className='Contenedor'>
    
    <div className='cont1'>
       <div className='titulo'>
           <h1>
           En nuestra tienda de ropa, nos enorgullece ofrecer productos de alta calidad...
           </h1>
      </div>

      <div className='parrafo'>
        <p>"En nuestra tienda de ropa, combinamos estilo, calidad y comodidad para brindarte una experiencia de compra excepcional. Desde las últimas tendencias de moda hasta clásicos atemporales, nuestra colección está diseñada para satisfacer tus gustos y necesidades. Ya sea que estés buscando prendas elegantes para una ocasión especial o ropa cómoda para el día a día, estamos comprometidos a ofrecerte una amplia variedad de opciones para que puedas expresar tu estilo único. Descubre la moda que te define y déjanos ser tu destino preferido para encontrar prendas que te hagan sentir seguro y a la moda en cualquier ocasión."</p>
      </div>

      <div className=''>
              <img src={tienda} alt="" />
      </div>   
    </div>

    
    <div className='cont2'>
          <div className='titulo2'>
            <h1>Nuestro camino hacia el éxito</h1>
          </div>

        <div className='parrafo2'>
            <p>"El camino hacia el éxito en una tienda de ropa es un viaje emocionante y desafiante que requiere dedicación, pasión y una visión clara. En un mercado competitivo, la clave para triunfar radica en ofrecer productos de alta calidad y seguir las tendencias de la moda. Además, es esencial crear una experiencia de compra única para los clientes, brindando un servicio excepcional y un ambiente atractivo en la tienda. La construcción de una sólida presencia en línea a través de un sitio web atractivo y las redes sociales también desempeña un papel crucial en la promoción de la tienda y la conexión con un público más amplio. La gestión efectiva de inventario, la optimización de costos y la atención a los detalles son fundamentales para mantener una operación rentable. En este camino hacia el éxito, la innovación y la adaptación constante son clave, ya que la industria de la moda evoluciona rápidamente. Con determinación y un enfoque estratégico, una tienda de ropa puede prosperar y alcanzar nuevas alturas en el mercado."</p>
        </div>      

    </div>

    <div className='contenedor-carrusel'>

    <h1>Nuestra Gente</h1>
      <Carousel>
       
        <div>
          <img src={vendedor1} alt=""/>
        </div>

        <div>
          <img src={vendedor2} alt=""/>      
        </div>

        <div>
          <img src={vendedor3} alt="" />        
        </div>
      </Carousel>
    </div>

   

  </div>
 
  
  )
}
export default SobreNosotros