import React, { useState } from 'react';
import './App.css';
import Input from './Components/Input';
import Item from './Components/Item'

function App() {
  const [todos, setTodos] = useState([{
    id: Date(),
    item: "task1",
    isComplete: false
  }, {
    id: Date() + 1,
    item: "task2",
    isComplete: false
  }])



  return (
    <div className="App">
      <Input setTodos={setTodos} />
      <h5> My Todos</h5>
      <ul className="item-container">
        {todos.map((todo) =>
          <li key={todo.id} ><Item todo={todo} setTodos={setTodos} /></li>
        )}
      </ul>
    </div>

  );
}

export default App;