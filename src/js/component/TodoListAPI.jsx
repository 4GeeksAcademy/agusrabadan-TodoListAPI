import React, { useEffect, useState } from "react";

export const TodoListAPI = () => {

    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState("");


    const getTodos = async () => {

        const response = await fetch("https://playground.4geeks.com/todo/users/Agus")

        const data = await response.json();
        setTodos(data.todos)

        if (!response.ok) {
            console.log("Error")
            return
        }
    };


    const createTodo = async () => {

        const todo = { label: task, is_done: true }

        const options = {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(todo)
        }

        const response = await fetch("https://playground.4geeks.com/todo/todos/Agus", options)

        setTask("");
        getTodos();

        if (!response.ok) {
            console.log("Error", response.status, response.statusText)
            return
        };
    };


    useEffect(() => {
        getTodos()
    }, []);

    return (
        <div className="container text-center">
            <input
                type="text"
                value={task}
                onChange={(event) => setTask(event.target.value)}
                placeholder="add task" />


            <button type="button" className="btn btn-success mx-3" onClick={createTodo}>Add Task</button>

            <ul className="list-group">
                {todos.map((item) => (
                    <li className="list-group-item" key={item.id}>{item.label}</li>
                ))}
                <li className="list-group-item"><strong>{todos.length} tasks</strong></li>
            </ul>
        </div>
    )
};
