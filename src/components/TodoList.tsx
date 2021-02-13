import React from "react";

// Import components
import Todo from "./Todo";

interface TodoListProps {
  todos: any;
  text: any;
  setTodos: any;
  filteredTodos: any;
}

function TodoList({ todos, setTodos, filteredTodos }: TodoListProps) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo: any) => (
          <Todo
            todo={todo}
            setTodos={setTodos}
            todos={todos}
            key={todo.id}
            text={todo.text}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
