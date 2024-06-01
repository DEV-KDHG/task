import React, { useState } from 'react';

const UpdateTask = ({ taskId, onUpdate }) => {
  const [updatedTitle, setUpdatedTitle] = useState('');
  const [updatedDescription, setUpdatedDescription] = useState('');

  const handleUpdate = () => {
    const updatedTaskData = {
      title: updatedTitle,
      description: updatedDescription
      
    };
    onUpdate(taskId, updatedTaskData);
    window.location.href = '/'; 
  };

  return (
    <div>
      <input type="text" value={updatedTitle} onChange={e => setUpdatedTitle(e.target.value)} />
      <input type="text" value={updatedDescription} onChange={e => setUpdatedDescription(e.target.value)} />
      <button onClick={handleUpdate}>Actualizar</button>
    </div>
  );
};

export default UpdateTask;

