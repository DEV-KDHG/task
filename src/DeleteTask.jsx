import React, { useState } from 'react';
import axios from 'axios';

const DeleteTask = ({ taskId, onDelete }) => {
  const [error, setError] = useState(null);

  const handleDelete = () => {
    axios.delete(`http://localhost:8080/delete/${taskId}`)
      .then(response => {
        console.log('Task deleted:', response.data);
        onDelete();
        window.location.href = '/'; // Llama a la función onDelete para actualizar la lista de tareas después de eliminar
      })
      .catch(error => {
        setError(error.message);
      });
  };

  return (
    <div>
      <h2>Eliminar tarea</h2>
      <button onClick={handleDelete}>Eliminar tarea</button>
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default DeleteTask;
