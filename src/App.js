import React, {useState, useEffect} from 'react';
import './App.css';
import './components/Todo.css';
import './components/Form.css';
import Form from './components/Form'
import TodoList from './components/TodoList'


function App() {
  
  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])
  const [id, setId] = useState(0)
  const [status, setStatus] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState([])

  useEffect(() =>{
    const getLocalTodos = () => {
      let localTodos = JSON.parse(localStorage.getItem('todos'))
      setTodos(localTodos)
    }

    getLocalTodos();
  }, [])

  useEffect(() =>{
    const filteredTodosHandler = () => {
      switch(status){
        case "done":
          setFilteredTodos(todos.filter(todo => todo.done))
          break;
        case "pending":
          setFilteredTodos(todos.filter(todo => !todo.done))
          break;
        default:
          setFilteredTodos(todos)
          break;
      }
    }

    const saveToLocalStorage = () => {
      localStorage.setItem('todos', JSON.stringify(todos))
    }

    saveToLocalStorage();
    filteredTodosHandler();
  }, [todos, status])

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
      setId={setId}
      setStatus={setStatus}/>

      <TodoList
      todos={todos}
      setTodos={setTodos}      
      filteredTodos={filteredTodos}  
      />
    </div>
  );
}

export default App;
