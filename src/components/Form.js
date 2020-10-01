import React from 'react';
import './Form.css';

const Form = ({setInputText}) => {

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }

    return (
        <div>
            <form>
                <input onChange={inputTextHandler} className="todo-input" type="text" placeholder="new Todo item" />
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
