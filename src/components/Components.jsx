// Componente Components - Explica cómo funcionan los componentes en React
// Los componentes son bloques reutilizables que encapsulan lógica y UI
import React, { useState } from 'react';

// Componente hijo: Tarjeta de usuario
// Este componente recibe props (datos) del componente padre
function UserCard({ user, onDelete, onEdit }) {
  return (
    <div className="user-card">
      <div className="user-avatar">
        {user.name.charAt(0).toUpperCase()}
      </div>
      <div className="user-info">
        <h4>{user.name}</h4>
        <p>{user.email}</p>
        <p className="user-role">{user.role}</p>
      </div>
      <div className="user-actions">
        <button onClick={() => onEdit(user)} className="edit-btn">
          ✏️ Editar
        </button>
        <button onClick={() => onDelete(user.id)} className="delete-btn">
          🗑️ Eliminar
        </button>
      </div>
    </div>
  );
}

// Componente principal: Demuestra el uso de componentes
function Components() {
  // Estado para manejar la lista de usuarios
  const [users, setUsers] = useState([
    { id: 1, name: 'Ana García', email: 'ana@ejemplo.com', role: 'Desarrolladora' },
    { id: 2, name: 'Carlos López', email: 'carlos@ejemplo.com', role: 'Diseñador' },
    { id: 3, name: 'María Rodríguez', email: 'maria@ejemplo.com', role: 'Product Manager' }
  ]);

  // Estado para el formulario de nuevo usuario
  const [newUser, setNewUser] = useState({ name: '', email: '', role: '' });

  // Función para agregar un nuevo usuario
  const addUser = () => {
    if (newUser.name && newUser.email && newUser.role) {
      const user = {
        id: Date.now(), // ID único basado en timestamp
        ...newUser
      };
      setUsers([...users, user]);
      setNewUser({ name: '', email: '', role: '' });
    }
  };

  // Función para eliminar un usuario
  const deleteUser = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  // Función para editar un usuario (simplificada)
  const editUser = (user) => {
    alert(`Editando usuario: ${user.name}`);
  };

  return (
    <div className="components-container">
      <h1>🧩 Componentes en React</h1>
      
      <div className="concept-explanation">
        <h2>¿Qué son los Componentes?</h2>
        <p>
          Los componentes son funciones o clases que retornan JSX. Son como bloques de LEGO
          que puedes reutilizar en toda tu aplicación. Cada componente puede tener su propio
          estado, props y lógica.
        </p>
      </div>

      <div className="component-demo">
        <h3>🎯 Demostración: Lista de Usuarios</h3>
        <p>
          Este ejemplo muestra cómo crear componentes reutilizables y pasar datos entre ellos
          usando props.
        </p>

        {/* Formulario para agregar usuarios */}
        <div className="add-user-form">
          <h4>➕ Agregar Nuevo Usuario</h4>
          <div className="form-row">
            <input
              type="text"
              placeholder="Nombre"
              value={newUser.name}
              onChange={(e) => setNewUser({...newUser, name: e.target.value})}
            />
            <input
              type="email"
              placeholder="Email"
              value={newUser.email}
              onChange={(e) => setNewUser({...newUser, email: e.target.value})}
            />
            <input
              type="text"
              placeholder="Rol"
              value={newUser.role}
              onChange={(e) => setNewUser({...newUser, role: e.target.value})}
            />
            <button onClick={addUser} className="add-btn">
              Agregar Usuario
            </button>
          </div>
        </div>

        {/* Lista de usuarios usando el componente UserCard */}
        <div className="users-list">
          <h4>👥 Usuarios Registrados</h4>
          {users.map(user => (
            <UserCard
              key={user.id}
              user={user}
              onDelete={deleteUser}
              onEdit={editUser}
            />
          ))}
        </div>
      </div>

      <div className="component-benefits">
        <h3>✨ Beneficios de los Componentes</h3>
        <ul>
          <li><strong>Reutilización:</strong> Un componente puede usarse en múltiples lugares</li>
          <li><strong>Mantenibilidad:</strong> Código organizado y fácil de mantener</li>
          <li><strong>Testabilidad:</strong> Cada componente puede probarse independientemente</li>
          <li><strong>Separación de responsabilidades:</strong> Cada componente tiene una función específica</li>
          <li><strong>Composición:</strong> Puedes combinar componentes para crear interfaces complejas</li>
        </ul>
      </div>

      <div className="code-example">
        <h3>💻 Estructura de un Componente</h3>
        <pre className="code-block">
{`// 1. Importar React y hooks necesarios
import React, { useState } from 'react';

// 2. Definir el componente (función)
function MiComponente({ prop1, prop2 }) {
  // 3. Hooks para estado
  const [estado, setEstado] = useState(valorInicial);
  
  // 4. Lógica del componente
  
  // 5. Retornar JSX
  return (
    <div>
      <h1>{prop1}</h1>
      <p>{estado}</p>
    </div>
  );
}

// 6. Exportar el componente
export default MiComponente;`}
        </pre>
      </div>
    </div>
  );
}

export default Components;
