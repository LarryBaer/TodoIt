import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import firebase from "firebase";

// Import components
import Form from "../components/Form";
import TodoList from "../components/TodoList";

interface HomeProps {
  loggedIn: any;
  setLoggedIn: any;
}

function Home({ loggedIn, setLoggedIn }: HomeProps) {
  const [inputText, setInputText] = useState("");
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [todos, setTodos] = useState([]);

  function test() {
    firebase.auth().signOut();
    setLoggedIn(false);
  }

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
      <header>
        <h1>TodoIt</h1>
      </header>

      <Form
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
      />

      <Button onClick={test} variant="contained" color="primary">
        Log Out
      </Button>
    </div>
  );
}

export default Home;
