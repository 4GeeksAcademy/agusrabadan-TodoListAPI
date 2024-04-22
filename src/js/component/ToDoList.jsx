import React, { useState } from "react";

const ToDoList = () => {

    const [input,setInput] = useState(" ")

    return (
        <div>
            <h1>Todo List</h1>
           <ul>
           <li>
                <input 
                type="text" 
                value={input} 
                placeholder="Add Task"
                onChange={(e)=>setInput(e.target.value)}
                
                
                >
                </input>
            </li>
            <li>{input}</li>
           </ul>
        </div>
    );
};

export default ToDoList