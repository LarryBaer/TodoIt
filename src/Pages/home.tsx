import React, { useState, useEffect } from "react";

// Import components
import Form from "../components/Form";
import TodoList from "../components/TodoList";
import Navigation from "../components/Navigation";

interface HomeProps {
  setLoggedIn: any;
}

function Home({ setLoggedIn }: HomeProps) {
  const [inputText, setInputText] = useState("");
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [todos, setTodos] = useState([]);

  // Runs once when program starts
  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  function filterHandler() {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo: any) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo: any) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  function saveLocalTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  function getLocalTodos() {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal: any = JSON.parse(localStorage.getItem("todos")!);
      setTodos(todoLocal);
    }
  }

  return (
    <div>
      <Navigation setLoggedIn={setLoggedIn} />
      {/* <Form
        setStatus={setStatus}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        inputText={inputText}
      />

      <TodoList
        filteredTodos={filteredTodos}
        setTodos={setTodos}
        text={inputText}
        todos={todos}
      /> */}
    </div>
  );
}

export default Home;
