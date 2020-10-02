import React from 'react';


const Form = ({inputText, setInputText, todos, setTodos, id, setId, setStatus}) => {

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }

    const submitTodoHandler = (e) => {
        e.preventDefault()
        const newTodo = {
            text: inputText,
            done: false,
            id: id
        }
        setTodos([...todos, newTodo])
        setId(id + 1)
        setInputText("")
    }

    const selectHandler = (e) => {
        setStatus(e.target.value)
    }

    return (
        <div>
            <form onSubmit={submitTodoHandler}>
                <input onChange={inputTextHandler} value={inputText} className="todo-input" type="text" placeholder="new Todo item" />
                <button className="todo-button" type="submit" >
                    ADD
                </button>
                <div className="select">
                    <select onChange={selectHandler} name="todos" className="filter-todos form-select" aria-label="select todos" >
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
