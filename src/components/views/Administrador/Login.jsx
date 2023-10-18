import React from 'react';

const Login = () => {

  return (
    
    <div>
                  <h1>hola mundo</h1>
        <Form.Group className="container">
          <Form.Label>Usuario</Form.Label>
          <Form.Control placeholder="Ingrese su usuario"/>
          <Form.Label>Contraseña</Form.Label>
          <Form.Control placeholder="Ingrese su contraseña"/>
        </Form.Group>

    </div>
  );
};

export default Login;