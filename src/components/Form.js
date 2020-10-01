import React from 'react';
import './Form.css';

const Form = () => {
    return (
        <div>
            <form>
                <input className="todo-input" type="text" placeholder="add an item to your Todo List" />
                <button className="todo-button" type="submit" >
                    <i className="">Add</i>
                </button>
                <div className="select">
                    <select name="todos" className="filter-todos" >
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
