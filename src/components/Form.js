import React from "react";
import shortid from "shortid";

export default function Form({
  inputText,
  setInputText,
  todos,
  setTodos,
  setStatus,
}) {
  const inputHandler = (event) => {
    setInputText(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: shortid.generate() },
    ]);
    setInputText("");
  };

  const statusHandler = (event) => {
    setStatus(event.target.value);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          onChange={inputHandler}
          value={inputText}
          type="text"
          className="todo-input"
        />
        <button className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  );
}
