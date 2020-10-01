import React from 'react';
import './Form.css';

const Form = () => {
    return (
        <div>
            <form>
                <input className="todo-input" type="text" placeholder="add an item to your Todo List" />
                <button className="todo-button" type="submit" >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="50px" height="50px"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg>
                </button>
                <div className="select">
                    <select name="todos" className="filter-todos form-select" aria-label="select todos" >
                        <option value="all" >All</option>
                        <option value="completed" >Completed</option>
                        <option value="uncompleted" >Uncompleted</option>
                    </select>
                </div>
            </form>
        </div>
    );
}

export default Form;
