import React from 'react';
import './LogoutButtom.css';

const LoginButton = () => {
  const handleLogin = () => {
    // Agrega la lógica de inicio de sesión aquí
    console.log('Iniciar sesión');
  };

  return (
    <button onClick={handleLogin} className="login-button">
      Login
    </button>
  );
};

export default LoginButton;
