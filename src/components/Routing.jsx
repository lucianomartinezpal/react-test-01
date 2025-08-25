// Componente Routing - Explica cómo funciona React Router
// React Router permite crear navegación entre páginas sin recargar la aplicación
import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function Routing() {
  // Hook useNavigate: Permite navegar programáticamente
  const navigate = useNavigate();
  
  // Hook useLocation: Obtiene información sobre la ruta actual
  const location = useLocation();
  
  // Estado para demostrar navegación dinámica
  const [selectedPage, setSelectedPage] = useState('home');
  const [customPath, setCustomPath] = useState('');

  // Función para navegar programáticamente
  const handleProgrammaticNavigation = (path) => {
    navigate(path);
    setSelectedPage(path);
  };

  // Función para navegar con parámetros
  const navigateWithParams = (page, id) => {
    navigate(`/${page}/${id}`);
  };

  // Función para navegar con query parameters
  const navigateWithQuery = (page, query) => {
    navigate(`/${page}?${query}`);
  };

  // Función para navegar hacia atrás
  const goBack = () => {
    navigate(-1);
  };

  // Función para navegar hacia adelante
  const goForward = () => {
    navigate(1);
  };

  return (
    <div className="routing-container">
      <h1>🛣️ React Router - Navegación en React</h1>
      
      <div className="concept-explanation">
        <h2>¿Qué es React Router?</h2>
        <p>
          React Router es una biblioteca que permite crear navegación entre páginas
          en aplicaciones de una sola página (SPA). Permite cambiar la URL y mostrar
          diferentes componentes sin recargar la página completa.
        </p>
      </div>

      <div className="routing-demo">
        <h3>🎯 Demostración de Navegación</h3>

        {/* Información de la ruta actual */}
        <div className="current-route-info">
          <h4>📍 Información de la Ruta Actual</h4>
          <div className="route-details">
            <p><strong>Ruta actual:</strong> {location.pathname}</p>
            <p><strong>Búsqueda (query):</strong> {location.search || 'Ninguna'}</p>
            <p><strong>Hash:</strong> {location.hash || 'Ninguno'}</p>
          </div>
        </div>

        {/* Navegación con Links */}
        <div className="navigation-section">
          <h4>🔗 Navegación con Componente Link</h4>
          <p>Los componentes Link crean enlaces de navegación sin recargar la página:</p>
          
          <div className="nav-links">
            <Link to="/" className="nav-link">🏠 Inicio</Link>
            <Link to="/components" className="nav-link">🧩 Componentes</Link>
            <Link to="/hooks" className="nav-link">🎣 Hooks</Link>
            <Link to="/routing" className="nav-link">🛣️ Routing</Link>
          </div>
        </div>

        {/* Navegación programática */}
        <div className="navigation-section">
          <h4>⚙️ Navegación Programática</h4>
          <p>Usando el hook useNavigate para navegar desde JavaScript:</p>
          
          <div className="programmatic-nav">
            <button 
              onClick={() => handleProgrammaticNavigation('home')}
              className="nav-btn"
            >
              🏠 Ir a Inicio
            </button>
            <button 
              onClick={() => handleProgrammaticNavigation('components')}
              className="nav-btn"
            >
              🧩 Ir a Componentes
            </button>
            <button 
              onClick={() => handleProgrammaticNavigation('hooks')}
              className="nav-btn"
            >
              🎣 Ir a Hooks
            </button>
          </div>
        </div>

        {/* Navegación con parámetros */}
        <div className="navigation-section">
          <h4>📝 Navegación con Parámetros</h4>
          <p>Navegar a rutas con parámetros dinámicos:</p>
          
          <div className="params-nav">
            <button 
              onClick={() => navigateWithParams('user', '123')}
              className="nav-btn"
            >
              👤 Ver Usuario 123
            </button>
            <button 
              onClick={() => navigateWithParams('product', 'abc')}
              className="nav-btn"
            >
              📦 Ver Producto ABC
            </button>
            <button 
              onClick={() => navigateWithQuery('search', 'query=react&filter=new')}
              className="nav-btn"
            >
              🔍 Búsqueda con Query
            </button>
          </div>
        </div>

        {/* Navegación del historial */}
        <div className="navigation-section">
          <h4>⏮️⏭️ Navegación del Historial</h4>
          <p>Navegar hacia atrás y adelante en el historial del navegador:</p>
          
          <div className="history-nav">
            <button onClick={goBack} className="nav-btn">
              ⏮️ Atrás
            </button>
            <button onClick={goForward} className="nav-btn">
              ⏭️ Adelante
            </button>
          </div>
        </div>

        {/* Navegación personalizada */}
        <div className="navigation-section">
          <h4>🎨 Navegación Personalizada</h4>
          <p>Navegar a una ruta personalizada:</p>
          
          <div className="custom-nav">
            <input
              type="text"
              placeholder="Escribe una ruta (ej: /mi-pagina)"
              value={customPath}
              onChange={(e) => setCustomPath(e.target.value)}
              className="custom-path-input"
            />
            <button 
              onClick={() => {
                if (customPath) {
                  navigate(customPath);
                  setCustomPath('');
                }
              }}
              className="nav-btn"
            >
              🚀 Navegar
            </button>
          </div>
        </div>
      </div>

      <div className="routing-concepts">
        <h3>🧠 Conceptos Clave de React Router</h3>
        
        <div className="concept-grid">
          <div className="concept-card">
            <h4>🛣️ Routes</h4>
            <p>Definen qué componente mostrar para cada URL</p>
          </div>
          
          <div className="concept-card">
            <h4>🔗 Link</h4>
            <p>Componente para navegación declarativa</p>
          </div>
          
          <div className="concept-card">
            <h4>⚙️ useNavigate</h4>
            <p>Hook para navegación programática</p>
          </div>
          
          <div className="concept-card">
            <h4>📍 useLocation</h4>
            <p>Hook para obtener información de la ruta actual</p>
          </div>
          
          <div className="concept-card">
            <h4>📝 useParams</h4>
            <p>Hook para obtener parámetros de la URL</p>
          </div>
          
          <div className="concept-card">
            <h4>🔍 useSearchParams</h4>
            <p>Hook para manejar query parameters</p>
          </div>
        </div>
      </div>

      <div className="routing-benefits">
        <h3>✨ Beneficios de React Router</h3>
        <ul>
          <li><strong>SPA (Single Page Application):</strong> No hay recargas de página</li>
          <li><strong>Navegación fluida:</strong> Transiciones suaves entre vistas</li>
          <li><strong>URLs amigables:</strong> URLs que reflejan el estado de la app</li>
          <li><strong>Historial del navegador:</strong> Botones atrás/adelante funcionan</li>
          <li><strong>Bookmarks:</strong> Los usuarios pueden guardar URLs específicas</li>
          <li><strong>SEO mejorado:</strong> Cada ruta puede tener su propio título y meta tags</li>
        </ul>
      </div>

      <div className="routing-example">
        <h3>💻 Ejemplo de Configuración</h3>
        <pre className="code-block">
{`// App.jsx - Configuración básica de React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/components" element={<Components />} />
            <Route path="/hooks" element={<Hooks />} />
            <Route path="/routing" element={<Routing />} />
            
            {/* Rutas con parámetros */}
            <Route path="/user/:id" element={<UserProfile />} />
            <Route path="/product/:slug" element={<ProductDetail />} />
            
            {/* Ruta 404 para páginas no encontradas */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}`}
        </pre>
      </div>
    </div>
  );
}

export default Routing;
