import './App.css'
import React from 'react';
import { Provider } from 'react-redux';
import store from './Redux/store';
import AddTask from './component/AddTask';
import ListTask from './component/ListTask';
const App = () => {
 return(
  <div className='App'>
  <AddTask/>
  <ListTask/>
  </div>
 )
};
 
 export default App;