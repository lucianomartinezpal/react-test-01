// Componente Hooks - Explica cómo funcionan los hooks en React
// Los hooks son funciones que permiten usar estado y efectos en componentes funcionales
import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';

function Hooks() {
  // Hook useState: Maneja estado local en el componente
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  // Hook useRef: Crea una referencia mutable que persiste entre re-renderizados
  const inputRef = useRef(null);
  const previousCountRef = useRef(0);

  // Hook useEffect: Ejecuta código después del renderizado
  // Primer parámetro: función que se ejecuta
  // Segundo parámetro: array de dependencias (cuándo ejecutar)
  useEffect(() => {
    // Este efecto se ejecuta solo una vez al montar el componente
    console.log('Componente montado');
    
    // Simular carga de datos
    setLoading(true);
    setTimeout(() => {
      setPosts([
        { id: 1, title: 'Primer Post', content: 'Contenido del primer post' },
        { id: 2, title: 'Segundo Post', content: 'Contenido del segundo post' },
        { id: 3, title: 'Tercer Post', content: 'Contenido del tercer post' }
      ]);
      setLoading(false);
    }, 2000);

    // Función de limpieza (cleanup) - se ejecuta al desmontar
    return () => {
      console.log('Componente desmontado');
    };
  }, []); // Array vacío = solo al montar

  // useEffect que se ejecuta cada vez que cambia count
  useEffect(() => {
    // Guardar el valor anterior
    previousCountRef.current = count;
    
    // Actualizar el título de la página
    document.title = `Contador: ${count}`;
  }, [count]); // Se ejecuta cuando count cambia

  // useEffect que se ejecuta cuando cambia text
  useEffect(() => {
    // Simular búsqueda en tiempo real
    if (text.length > 2) {
      console.log(`Buscando: ${text}`);
    }
  }, [text]);

  // Hook useCallback: Memoiza funciones para evitar re-creaciones innecesarias
  const handleIncrement = useCallback(() => {
    setCount(prev => prev + 1);
  }, []); // Sin dependencias = función nunca cambia

  const handleDecrement = useCallback(() => {
    setCount(prev => prev - 1);
  }, []);

  // Hook useMemo: Memoiza valores calculados para evitar recálculos innecesarios
  const expensiveCalculation = useMemo(() => {
    console.log('Calculando valor costoso...');
    return count * 2 + 10;
  }, [count]); // Solo recalcula cuando count cambia

  // Función para simular toggle de visibilidad
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  // Función para enfocar el input
  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="hooks-container">
      <h1>🎣 Hooks en React</h1>
      
      <div className="concept-explanation">
        <h2>¿Qué son los Hooks?</h2>
        <p>
          Los hooks son funciones que permiten usar estado y otros recursos de React
          en componentes funcionales. Fueron introducidos en React 16.8 para permitir
          usar estado sin necesidad de clases.
        </p>
      </div>

      <div className="hooks-demo">
        <h3>🎯 Demostración de Hooks</h3>

        {/* useState Demo */}
        <div className="hook-section">
          <h4>1️⃣ useState - Estado Local</h4>
          <p>Contador: {count}</p>
          <div className="button-group">
            <button onClick={handleIncrement} className="btn-primary">
              ➕ Incrementar
            </button>
            <button onClick={handleDecrement} className="btn-secondary">
              ➖ Decrementar
            </button>
            <button onClick={() => setCount(0)} className="btn-reset">
              🔄 Reiniciar
            </button>
          </div>
          <p>Valor anterior: {previousCountRef.current}</p>
        </div>

        {/* useRef Demo */}
        <div className="hook-section">
          <h4>2️⃣ useRef - Referencias Mutable</h4>
          <p>Este hook permite acceder directamente a elementos del DOM:</p>
          <div className="input-group">
            <input
              ref={inputRef}
              type="text"
              placeholder="Escribe algo aquí..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="text-input"
            />
            <button onClick={focusInput} className="btn-focus">
              🎯 Enfocar Input
            </button>
          </div>
          <p>Texto actual: {text}</p>
        </div>

        {/* useEffect Demo */}
        <div className="hook-section">
          <h4>3️⃣ useEffect - Efectos Secundarios</h4>
          <p>Este hook maneja efectos secundarios como llamadas a APIs, suscripciones, etc.</p>
          
          <div className="visibility-demo">
            <button onClick={toggleVisibility} className="btn-toggle">
              {isVisible ? '🙈 Ocultar' : '👁️ Mostrar'}
            </button>
            {isVisible && (
              <div className="visible-content">
                <p>¡Este contenido se muestra/oculta dinámicamente!</p>
                <p>El título de la página también cambia: "{document.title}"</p>
              </div>
            )}
          </div>

          <div className="posts-demo">
            <h5>Posts Cargados (simulado con useEffect):</h5>
            {loading ? (
              <p>🔄 Cargando posts...</p>
            ) : (
              <ul className="posts-list">
                {posts.map(post => (
                  <li key={post.id} className="post-item">
                    <strong>{post.title}</strong>: {post.content}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* useMemo Demo */}
        <div className="hook-section">
          <h4>4️⃣ useMemo - Memoización de Valores</h4>
          <p>Calcula valores costosos solo cuando es necesario:</p>
          <p>Valor calculado: {expensiveCalculation}</p>
          <p>Este valor solo se recalcula cuando el contador cambia.</p>
        </div>
      </div>

      <div className="hooks-rules">
        <h3>📋 Reglas de los Hooks</h3>
        <ul>
          <li><strong>Solo llamar hooks en el nivel superior:</strong> No dentro de loops, condiciones o funciones anidadas</li>
          <li><strong>Solo llamar hooks en componentes de React:</strong> No en funciones JavaScript regulares</li>
          <li><strong>Los hooks siempre se ejecutan en el mismo orden:</strong> Esto es crucial para que React funcione correctamente</li>
        </ul>
      </div>

      <div className="hooks-comparison">
        <h3>🔄 Hooks vs Clases</h3>
        <div className="comparison-table">
          <div className="comparison-row">
            <div className="comparison-col">
              <h4>Antes (Clases)</h4>
              <ul>
                <li>this.state y this.setState</li>
                <li>componentDidMount, componentDidUpdate</li>
                <li>Binding de métodos en constructor</li>
                <li>Lógica duplicada en lifecycle methods</li>
              </ul>
            </div>
            <div className="comparison-col">
              <h4>Ahora (Hooks)</h4>
              <ul>
                <li>useState y setState</li>
                <li>useEffect con dependencias</li>
                <li>No hay binding, funciones normales</li>
                <li>Lógica agrupada por funcionalidad</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hooks;
