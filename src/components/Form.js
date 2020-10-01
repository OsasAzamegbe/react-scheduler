import React from 'react';
import './Form.css';

const Form = ({inputText, setInputText, todos, setTodos, id, setId}) => {

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }

    const submitTodoHandler = (e) => {
        e.preventDefault()
        console.log("submited")
        const newTodo = {
            text: inputText,
            done: false,
            id: id
        }
        setTodos([...todos, newTodo])
        setId(id++)
        setInputText("")
    }

    return (
        <div>
            <form onSubmit={submitTodoHandler}>
                <input onChange={inputTextHandler} value={inputText} className="todo-input" type="text" placeholder="new Todo item" />
                <button className="todo-button" type="submit" >
                    ADD
                </button>
                <div className="select">
                    <select name="todos" className="filter-todos form-select" aria-label="select todos" >
                        <option value="all" >All</option>
                        <option value="done" >Done</option>
                        <option value="pending" >Pending</option>
                    </select>
                </div>
            </form>
        </div>
    );
}

export default Form;
