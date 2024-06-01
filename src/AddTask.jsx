import React, { useState } from 'react';
import axios from 'axios';
import './addTask.css'; // Importa el archivo CSS de estilos

const AddTask = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    const newTask = { title, description };
    axios.post('http://localhost:8080/saveTask', newTask)
      .then(response => {
        console.log('Task added:', response.data);
        alert("Tarea creada")
        setTitle('');
        setDescription('');
        window.location.href = '/'; 
      })
      .catch(error => {
        console.error('Error adding task:', error);
        alert("Tarea no creada")
      });
  };

  return (
    <div className="add-task-container"> {/* Agrega la clase del contenedor de estilos */}
      <h2>Agregar tarea</h2>
      <input type="text" placeholder="Título" value={title} onChange={e => setTitle(e.target.value)} />
      <input type="text" placeholder="Descripción" value={description} onChange={e => setDescription(e.target.value)} />
      <button onClick={handleSubmit}>Agregar tarea</button>
    </div>
  );
};

export default AddTask;
