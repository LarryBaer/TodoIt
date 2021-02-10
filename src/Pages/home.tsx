import React, { useState, useEffect } from 'react';
import '../App.css';

// Import components
import Form from '../components/Form';
import TodoList from "../components/TodoList";

function Home(){
    const [inputText, setInputText] = useState("");
    const [status, setStatus] = useState('all');
    const [filteredTodos, setFilteredTodos] = useState([]);
    const [todos, setTodos] = useState([]);
    return(
        <div>
            <header>
               <h1>TodoIt</h1>
            </header>

            <Form 
            setStatus={setStatus} 
            todos={todos} 
            setTodos={setTodos} 
            setInputText={setInputText} 
            inputText={inputText}/>

            <TodoList 
            filteredTodos={filteredTodos} 
            setTodos={setTodos} 
            text={inputText} 
            todos={todos}/>
        </div>
    )
}

export default Home;