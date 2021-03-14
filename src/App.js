import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Input from './Components/Input';
import Item from './Components/Item'

function App() {

  const todos = useSelector(state => state)


  return (
    <div className="App">
      <Input />
      <h5>My Todos</h5>
      <ul className="item-container">
        {todos.map(todo =>
          <li key={todo.id + todo.item} ><Item todo={todo} /></li>
        )}
      </ul>
    </div>

  );
}

export default App;