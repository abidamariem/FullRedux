// redux/actions.js
export const addTask = (description) => ({
    type: 'ADD_TASK',
    payload: { id: Date.now(), description, isDone: false },
   });
   
   export const toggleTask = (id) => ({
    type: 'TOGGLE_TASK',
    payload: { id },
   });
   
   export const removeTask = (id) => ({
    type: 'REMOVE_TASK',
    payload: { id },
   });