import React, { useState, useEffect } from "react";
import firebase from "firebase";
// Import components
import Form from "../components/Form";
import TodoList from "../components/TodoList";
import NavBar from "../components/NavBar";
import SideNavBar from "../components/SideNavBar";
import ListCard from "../components/ListCard";
import { Typography, createStyles, Theme, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    greeting_text: {
      fontSize: 30,
    },
    home_body: {
      paddingLeft: 140,
    },
    home: {},
    greeting_container: {},
    date_container: {
      fontSize: ".7em",
    },
  })
);

interface HomeProps {
  setLoggedIn: any;
}

function Home({ setLoggedIn }: HomeProps) {
  const classes = useStyles();

  // Used for setting name in greeting
  var user = firebase.auth().currentUser;
  var accountName;
  var greetingText;

  // Set todays date
  let today = new Date();
  let hour = today.getHours();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate();
  let date = month + "/" + day + "/" + year;

  // If a user is logged in, set their username
  if (user != null) {
    accountName = user.displayName;
  }

  // Set greeting depending on time of day
  function setGreeting() {
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
    <div className={classes.home}>
      <NavBar />
      <SideNavBar setLoggedIn={setLoggedIn} />
      <div className={classes.home_body}>
        <div className={classes.greeting_container}>
          <Typography
            className={classes.greeting_text}
            color="textSecondary"
            gutterBottom
          >
            {greetingText}
            {accountName}
            <div className={classes.date_container}>{date}</div>
          </Typography>
        </div>
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
