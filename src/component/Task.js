// components/Task.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { completed,edit } from '../ReduxToolkit/todoSlice'

import { toggleTask, removeTask,addTask } from '../Redux/actions';
const Task = ({ task }) => {
 const [isEditing, setIsEditing] = useState(false);
 const [editedDescription, setEditedDescription] = useState(task.description);
 const dispatch = useDispatch();

 const handleToggle = () => {
    dispatch(toggleTask(task.id));
 };

 const handleEdit = () => {

    setIsEditing(!isEditing);
    
 };

 const handleDelete = () => {
    dispatch(removeTask(task.id));
 };

 return (
    <div className="task">
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={handleToggle}
      />
      {isEditing ? (
        <input
          type="text"
          className="form-control"
          value={editedDescription}
          onChange={(e) => setEditedDescription(e.target.value)}
        />
      ) : (
        <h1>{task.description}</h1>
      )}
      {
        isEditing ?<button className="btn btn-secondary" onClick={()=>handleEdit() }>
        save
      </button> : <button className="btn btn-secondary" onClick={()=>handleEdit() }>
        Edit
      </button>
      }
      <button className="btn btn-danger" onClick={handleDelete}>
        Delete
      </button>
    </div>
 );
};

export default Task;