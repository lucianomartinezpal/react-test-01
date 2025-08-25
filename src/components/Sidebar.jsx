// Componente Sidebar - Navegación lateral del dashboard
// Este componente demuestra cómo crear navegación entre diferentes secciones
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

function Sidebar() {
  // Hook useLocation para obtener la ruta actual y aplicar estilos activos
  const location = useLocation();

  // Array de elementos de navegación
  // Cada elemento tiene: path (ruta), icon (emoji), label (texto), description (descripción)
  const navItems = [
    {
      path: '/',
      icon: '🏠',
      label: 'Inicio',
      description: 'Página principal con conceptos básicos'
    },
    {
      path: '/components',
      icon: '🧩',
      label: 'Componentes',
      description: 'Cómo crear y usar componentes'
    },
    {
      path: '/hooks',
      icon: '🎣',
      label: 'Hooks',
      description: 'Estado y efectos en React'
    },
    {
      path: '/routing',
      icon: '🛣️',
      label: 'Routing',
      description: 'Navegación entre páginas'
    }
  ];

  return (
    <aside className="sidebar">
      {/* Header del sidebar */}
      <div className="sidebar-header">
        <div className="logo">
          <span className="logo-icon">⚛️</span>
          <h2 className="logo-text">React Dashboard</h2>
        </div>
        <p className="sidebar-subtitle">
          Aprende React paso a paso
        </p>
      </div>

      {/* Navegación principal */}
      <nav className="sidebar-nav">
        <ul className="nav-list">
          {navItems.map((item) => (
            <li key={item.path} className="nav-item">
              {/* NavLink es como Link pero con estilos activos automáticos */}
              <NavLink
                to={item.path}
                className={({ isActive }) => 
                  `nav-link ${isActive ? 'active' : ''}`
                }
                title={item.description}
              >
                <span className="nav-icon">{item.icon}</span>
                <div className="nav-content">
                  <span className="nav-label">{item.label}</span>
                  <span className="nav-description">{item.description}</span>
                </div>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Información adicional */}
      <div className="sidebar-footer">
        <div className="current-route">
          <h4>📍 Ruta Actual</h4>
          <p className="route-path">{location.pathname}</p>
        </div>
        
        <div className="sidebar-info">
          <h4>ℹ️ Información</h4>
          <p>
            Este dashboard demuestra los conceptos fundamentales de React
            con ejemplos interactivos y explicaciones detalladas.
          </p>
        </div>

        <div className="sidebar-tips">
          <h4>💡 Consejos</h4>
          <ul>
            <li>Navega entre secciones para ver diferentes conceptos</li>
            <li>Interactúa con los ejemplos para entender mejor</li>
            <li>Lee los comentarios en el código</li>
            <li>Experimenta modificando los valores</li>
          </ul>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
