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
            <li className="todo-item" >{todo.text}</li>
            <button className="complete-btn">
                <i></i>
            </button>
            <button className="trash-btn">
                <i></i>
            </button>
        </div> 
    );
};

export default Todo;