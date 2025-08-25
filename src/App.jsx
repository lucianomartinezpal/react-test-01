// App.jsx - Componente principal de la aplicación
// Este archivo configura React Router y la estructura del dashboard
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// Importar componentes del dashboard
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Components from './components/Components';
import Hooks from './components/Hooks';
import Routing from './components/Routing';

function App() {
  return (
    // BrowserRouter envuelve toda la aplicación para habilitar el routing
    <BrowserRouter>
      <div className="app">
        {/* Sidebar: Navegación lateral fija */}
        <Sidebar />
        
        {/* Contenido principal: Área donde se renderizan las diferentes secciones */}
        <main className="main-content">
          {/* Routes: Define qué componente mostrar para cada URL */}
          <Routes>
            {/* Ruta raíz - Página de inicio */}
            <Route path="/" element={<Home />} />
            
            {/* Ruta para la sección de componentes */}
            <Route path="/components" element={<Components />} />
            
            {/* Ruta para la sección de hooks */}
            <Route path="/hooks" element={<Hooks />} />
            
            {/* Ruta para la sección de routing */}
            <Route path="/routing" element={<Routing />} />
            
            {/* Ruta catch-all para páginas no encontradas */}
            <Route path="*" element={
              <div className="not-found">
                <h1>404 - Página no encontrada</h1>
                <p>La ruta que buscas no existe en esta aplicación.</p>
                <p>Usa la barra lateral para navegar a las secciones disponibles.</p>
              </div>
            } />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
