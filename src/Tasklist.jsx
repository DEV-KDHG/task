import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UpdateTask from './UpdateTask';
import DeleteTask from './DeleteTask';
import './taskList.css'; // Importa los estilos CSS

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:8080/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const handleUpdateTask = async (taskId, updatedTaskData) => {
    try {
      await axios.put(`http://localhost:8080/update/${taskId}`, updatedTaskData);
      fetchTasks(); // Actualiza la lista de tareas después de la actualización
      console.log('Task updated successfully');
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await axios.delete(`http://localhost:8080/delete/${taskId}`);
      fetchTasks(); // Actualiza la lista de tareas después de la eliminación
      console.log('Task deleted successfully');
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div className="task-list-container">
      <h2>Lista de tareas</h2>
      <table className="task-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Descripción</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>
                <UpdateTask taskId={task.id} onUpdate={handleUpdateTask} />
                <DeleteTask taskId={task.id} onDelete={handleDeleteTask} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
