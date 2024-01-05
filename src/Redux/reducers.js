import { combineReducers } from 'redux';

const tasksReducer = (state = [], action) => {
 switch (action.type) {
    case 'ADD_TASK':
      return [...state, action.payload];
    case 'TOGGLE_TASK':
      return state.map((task) =>
        task.id === action.payload.id ? { ...task, isDone: !task.isDone } : task
      );
    case 'REMOVE_TASK':
      return state.filter((task) => task.id !== action.payload.id);
    default:
      return state;
 }
};

const rootReducer = combineReducers({
 tasks: tasksReducer,
});

export default rootReducer;