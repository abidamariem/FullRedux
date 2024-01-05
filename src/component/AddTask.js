// components/AddTask.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../Redux/actions';

const AddTask = () => {
 const [description, setDescription] = useState('');
 const dispatch = useDispatch();

 const handleSubmit = (e) => {
    e.preventDefault();
    if (!description) return;
    dispatch(addTask(description));
    setDescription('');
 };

 return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit" className="btn btn-primary">
        Add Task
      </button>
    </form>
 );
};

export default AddTask;