import React, { useEffect, useState } from "react";

export const TodoListAPI = () => {
    const [task, setTask] = useState([]);
    const [name, setName] = useState('');

    const spinner = <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
    </div>

    async function getTask() {
        const response = await fetch("https://playground.4geeks.com/todo/users/AgusRabadan");
        const data = await response.json();
        setTask(data.todos);
        setName(data.name)
        console.log(data.name)
    };

    useEffect(() => {
        getTask();
    }, []);

    return (
        
        <div className="container text-center">

            {!getTask ? spinner : <ul className="list-group">
                <h1>User: {name}</h1>
                {task.map((item) => (
                    <li key={item.id} className="list-group-item"><strong className="text-primary">{item.id}</strong> {item.label} {item.is_done ? <i class="text-success far fa-check-circle"></i> : <i class="text-danger fas fa-times-circle"></i> }</li>
                ))}
                
                
            </ul>}
                
        </div>
        
    );
    
};