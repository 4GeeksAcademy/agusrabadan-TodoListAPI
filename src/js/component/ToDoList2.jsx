import React, { useState } from "react";

export const ToDoList2 = () => {

    const [task, setTask] = useState("");
    const [list, setList] = useState([]);

    const deleteTask = (item)=>{
        setList(list.filter((element)=> element !== item))
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // Evita que el formulario se envíe y recargue la página

        if (task.trim() !== "") {
            setList([...list, task]);
            setTask("");
        }
    }


    return (
        <div className="container text-center">
            <h1>To Do List</h1>

            <form onSubmit= {handleSubmit}>
            <div class="form-group">
                <label htmlFor="exampleInputEmail1">Add Task</label>
                <input type="text" 
                className="form-control mt-2" id="exampleInputEmail1" 
                aria-describedby="emailHelp" 
                placeholder="Enter task"
                value={task}
                onChange={(e)=>setTask(e.target.value)} />
            </div>
            </form>
                <ul>
                {list.map((item,id)=> <li key={id}>
                    {item}
                    <span onClick={()=>deleteTask(item)}>
                        <i className="fas fa-trash"></i>
                    </span>
                </li>)}
                </ul>
        </div>
    );
};