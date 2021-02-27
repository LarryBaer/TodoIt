import React, { useState, useEffect } from "react";
import firebase from "firebase";
// Import components
import Form from "../components/Form";
import TodoList from "../components/TodoList";
import Navigation from "../components/Navigation";
import ListCard from "../components/ListCard";
import { Typography, createStyles, Theme, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    greeting_text: {
      fontSize: 30,
      marginLeft: 50,
    },
    home_body: {
      marginLeft: 100,
    },
  })
);

interface HomeProps {
  setLoggedIn: any;
}

function Home({ setLoggedIn }: HomeProps) {
  const classes = useStyles();

  var user = firebase.auth().currentUser;
  var accountName;
  var greetingText;

  if (user != null) {
    accountName = user.displayName;
  }

  function setGreeting() {
    let today = new Date();
    let hour = today.getHours();

    if (hour < 12) {
      greetingText = "Good Morning, ";
    } else if (hour < 18) {
      greetingText = "Good Afternoon, ";
    } else {
      greetingText = "Good Evening, ";
    }
  }

  setGreeting();

  return (
    <div className={classes.home_body}>
      <Navigation setLoggedIn={setLoggedIn} />
      <Typography
        className={classes.greeting_text}
        color="textSecondary"
        gutterBottom
      >
        {greetingText}
        {accountName}
      </Typography>
      <ListCard />
      <ListCard />
      <ListCard />
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

// // Runs once when program starts

// const [inputText, setInputText] = useState("");
// const [status, setStatus] = useState("all");
// const [filteredTodos, setFilteredTodos] = useState([]);
// const [todos, setTodos] = useState([]);

// useEffect(() => {
//   getLocalTodos();
// }, []);

// useEffect(() => {
//   filterHandler();
//   saveLocalTodos();
// }, [todos, status]);

// function filterHandler() {
//   switch (status) {
//     case "completed":
//       setFilteredTodos(todos.filter((todo: any) => todo.completed === true));
//       break;
//     case "uncompleted":
//       setFilteredTodos(todos.filter((todo: any) => todo.completed === false));
//       break;
//     default:
//       setFilteredTodos(todos);
//       break;
//   }
// }

// function saveLocalTodos() {
//   localStorage.setItem("todos", JSON.stringify(todos));
// }

// function getLocalTodos() {
//   if (localStorage.getItem("todos") === null) {
//     localStorage.setItem("todos", JSON.stringify([]));
//   } else {
//     let todoLocal: any = JSON.parse(localStorage.getItem("todos")!);
//     setTodos(todoLocal);
//   }
// }
