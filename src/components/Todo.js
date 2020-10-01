import React from 'react';


const Todo = ({todo}) => {
    // if (todo.done){
    //     return (
    //         <div className="todo">
    //             <li className="todo-item done" >{todo.text}</li>
    //         </div>            
    //     )
    // }
    return (
        <div className="todo">
            <li className="todo-item" >Hey</li>
            <button className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div> 
    );
};

export default Todo;