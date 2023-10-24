 import React from 'react';
 import face_logo from "../assets/facebook-logo.png";
 import tiktok_logo from "../assets/tiktok-logo.png";
 import wsp_logo from "../assets/wsp-logo.png";

const SobreNosotros = () => {
  return (
    
    <div className='bg-dark text-light text-center p-4'>
       <div className=''>
           <div>Sobre Nosotros</div>
       </div>
          
          <div className='iconos'>
            <div className='icono'>
              <img src={face_logo} alt="" />
            </div>

            <div className='icono'>
              <img src={tiktok_logo} alt="" />
            </div>

            <div className='icono'>
              <img src={wsp_logo} alt="" />
            </div>

          </div>
    </div>
  )
}

export default SobreNosotros