import React from 'react';
import './Form.css';

const Form = () => {
    return (
        <div>
            <form>
                <input className="todo-input" type="text" placeholder="new Todo item" />
                <button className="todo-button" type="submit" >
                    ADD
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
