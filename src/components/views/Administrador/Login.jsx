import React, { useState } from 'react';
import icono_perfil from "../assets/person.png";
import icono_contraseña from "../assets/password.png";
import { login } from "../../helpers/queries"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"


const Login = ({setUsuarioLogueado}) => {

  const navegacion = useNavigate();
  // Estados para el nombre de usuario y la contraseña
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');

  // Manejador de evento para el cambio en el campo de nombre de usuario
  const handleUsuarioChange = (event) => {
    setUsuario(event.target.value);
  }

  // Manejador de evento para el cambio en el campo de contraseña
  const handleContrasenaChange = (event) => {
    setContrasena(event.target.value);
  }

  // Manejador de evento para el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
    const formData = {
      nombreUsuario: usuario,
      password: contrasena
    };
    // Aquí puedes realizar cualquier acción que necesites con el objeto formData
    login(formData).then((respuesta)=>{
      if(respuesta){
        sessionStorage.setItem("usuario", JSON.stringify(respuesta));
        setUsuarioLogueado(respuesta);
        Swal.fire("Bienvenido", "Ha ingresado correctamente", "success");
        navegacion("/administrador");
      } else{
        Swal.fire("Error", "Email o contraseña incorrecto", "error");
      }
    })
    
  }

  return (
    <form className='conteiner mb-4' onSubmit={handleSubmit}>
      <div className='header'>
        <div className='txt'>Login</div>
        <div className='linea'></div>
      </div>

      <div className='inputs'>
        <div className='input'>
          <img src={icono_perfil} alt="" />
          <input
            type="text"
            placeholder='Usuario'
            value={usuario}
            onChange={handleUsuarioChange} // Asigna el manejador de evento
          />
        </div>

        <div className='input'>
          <img src={icono_contraseña} alt="" />
          <input
            type="password"
            placeholder='Contraseña'
            value={contrasena}
            onChange={handleContrasenaChange} // Asigna el manejador de evento
          />
        </div>

        <button type='submit' className='submit'>Ingresar</button>
      </div>
    </form>
  );
};

export default Login;
