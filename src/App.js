import React, {useState} from 'react';
import './App.css';
import Form from './components/Form'
import TodoList from './components/TodoList'


function App() {
  
  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])
  const [id, setId] = useState(0)

  return (
    <div className="App">
      <header>
        <h1>TODO</h1>
      </header>
      <Form 
      inputText={inputText} 
      setInputText={setInputText} 
      todos={todos} 
      setTodos={setTodos}
      id={id} 
      setId={setId} />

      <TodoList/>
    </div>
  );
}

export default App;
