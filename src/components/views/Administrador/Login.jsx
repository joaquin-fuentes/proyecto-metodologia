 import React from 'react';
 import icono_perfil from "../assets/person.png";
 import icono_contraseña from "../assets/password.png";


const Login = () => {

  return (
    
    <div className='conteiner'>
          <div className='header'>
           <div className='txt'>Login</div>
           <div className='linea'></div>
          </div>
          
          <div className='inputs'>
            <div className='input'>
              <img src={icono_perfil} alt="" />
              <input type="text" placeholder='Usuario'/>
            </div>

            <div className='input'>
              <img src={icono_contraseña} alt="" />
              <input type="password" placeholder='Contraseña'/>
            </div>

            <div className='submit'>Ingresar</div>
            
          </div>
    </div>
    
  );
};

export default Login;