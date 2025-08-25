// Componente Home - Página principal del dashboard
// Este componente demuestra el uso básico de JSX y estado en React
import React, { useState } from 'react';

function Home() {
  // Hook useState: Permite manejar estado en componentes funcionales
  // count es la variable de estado, setCount es la función para actualizarla
  const [count, setCount] = useState(0);
  
  // Hook useState para manejar el nombre del usuario
  const [userName, setUserName] = useState('');

  return (
    <div className="home-container">
      <h1>🏠 Bienvenido al Dashboard de React</h1>
      
      <div className="welcome-section">
        <h2>¿Qué es React?</h2>
        <p>
          React es una biblioteca de JavaScript para construir interfaces de usuario.
          Permite crear componentes reutilizables y manejar el estado de la aplicación
          de manera eficiente.
        </p>
      </div>

      <div className="demo-section">
        <h3>🎯 Demostración de Estado (useState)</h3>
        <p>Este contador demuestra cómo React maneja el estado:</p>
        
        <div className="counter-demo">
          <button 
            onClick={() => setCount(count + 1)}
            className="counter-btn"
          >
            Incrementar: {count}
          </button>
          
          <button 
            onClick={() => setCount(0)}
            className="reset-btn"
          >
            Reiniciar
          </button>
        </div>
      </div>

      <div className="input-demo">
        <h3>📝 Demostración de Input Controlado</h3>
        <p>Escribe tu nombre para ver cómo React sincroniza el estado:</p>
        
        <input
          type="text"
          placeholder="Escribe tu nombre"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="name-input"
        />
        
        {userName && (
          <p className="greeting">¡Hola, {userName}! 👋</p>
        )}
      </div>

      <div className="concepts-section">
        <h3>🧠 Conceptos Clave de React</h3>
        <ul>
          <li><strong>Componentes:</strong> Bloques reutilizables de UI</li>
          <li><strong>Estado:</strong> Datos que cambian y causan re-renderizado</li>
          <li><strong>Props:</strong> Datos pasados de componente padre a hijo</li>
          <li><strong>JSX:</strong> Sintaxis que permite escribir HTML en JavaScript</li>
          <li><strong>Hooks:</strong> Funciones que permiten usar estado y efectos</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
