import "./App.css";
import { useEffect, useState } from "react";
//importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  const filteredTodosHandler = () => {
    if (status === "completed") {
      setFilteredTodos(todos.filter((todo) => todo.completed === true));
    } else if (status === "uncompleted") {
      setFilteredTodos(todos.filter((todo) => todo.completed === false));
    } else {
      setFilteredTodos(todos);
    }
  };
  useEffect(() => {
    filteredTodosHandler();
  }, [todos, status]);

  return (
    <div className="App">
      <header>
        <h1>My todo list</h1>
      </header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
