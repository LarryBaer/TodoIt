import React from 'react';

interface TodoProps{
    text: any;
    todos: any;
    setTodos: any;
    todo: any;
}

function Todo({text, todos, todo, setTodos}: TodoProps){
    function deleteHandler(){
        setTodos(todos.filter((el: any) => el.id !== todo.id));
    }

    function completeHandler(){
        setTodos(todos.map((item: any) => {
            if(item.id === todo.id){
                return{
                    ...item, completed: !item.completed
                }
            }
            return item;
        })
        )
    }
    return(
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : '' }`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn"><i className="fas fa-check"></i></button>
            <button onClick={deleteHandler} className="trash-btn"><i className="fas fa-trash"></i></button>
        </div>
    );
}

export default Todo;