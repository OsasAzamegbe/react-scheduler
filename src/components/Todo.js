import React from 'react';


const Todo = ({todo, todos, setTodos}) => {

    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...item,
                    completed: !item.done
                }
            }
            return item;
        }))
    }

    const deleteHandler = () => {
        setTodos(todos.filter(item => item.id !== todo.id))
    }

    return (
        <div className="todo">
            <li className="todo-item" >{todo.text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div> 
    );
};

export default Todo;