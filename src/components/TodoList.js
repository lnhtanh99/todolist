import React from "react";
import Todo from "./Todo";

export default function TodoList({ todos, setTodos, filteredTodos }) {
  return (
    <div>
      <div className="todo-container">
        <ul className="todo-list">
          {filteredTodos.map((todo) => (
            <Todo setTodos={setTodos} key={todo.id} todo={todo} todos={todos} />
          ))}
        </ul>
      </div>
    </div>
  );
}
