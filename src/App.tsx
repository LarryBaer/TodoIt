import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Import pages
import LogIn from "./Pages/login";
import Home from './Pages/home';

function App() {
  const [inputText, setInputText] = useState("");
  const [status, setStatus] = useState('all');
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

  function filterHandler(){
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter((todo: any) => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter((todo: any) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  function saveLocalTodos(){
        localStorage.setItem("todos", JSON.stringify(todos));
  }

  function getLocalTodos(){
      if(localStorage.getItem("todos") === null){
        localStorage.setItem("todos", JSON.stringify([]));
      }else{
        let todoLocal: any = JSON.parse(localStorage.getItem("todos")!);
        setTodos(todoLocal);
      }
  }
  
  return (
    
    <BrowserRouter>
      <div className="App">
          <Switch>
           <Route path="/login" exact component={LogIn}/>
           <Route path="/home" exact component={Home}/>
           <Route path="/" render={() => <div>404</div>}></Route>
          </Switch>
      </div>
    </BrowserRouter>
  );
  }

export default App;
