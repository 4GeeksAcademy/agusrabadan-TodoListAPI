import React, { useState } from "react";

const ToDoList = () => {
    const [input, setInput] = useState("");
    const [toDo, setToDo] = useState([]);

    return (
        <div className="container mx-auto text-center bg-warning">
            <h1 className="text-success"> My To Do List</h1>
            <ul className="list-group col-4 mx-auto mt-3">
                <li className="list-group-item active">
                    <input
                        type="text"
                        value={input}
                        placeholder="Add Task"
                        onChange={(event) => setInput(event.target.value)}
                        onKeyPress={(event) => {
                            if (event.key === "Enter" && input.trim() !== "") {
                                setToDo([...toDo, input]);
                                setInput("");
                            }
                        }}
                    />
                </li>
                {toDo.map((item, index) => (
                    <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                        <span>{item}</span>
                        <i className="fas fa-trash-alt"
                            style={{ cursor: "pointer" }}
                            title="Eliminar tarea"
                            onClick={() => setToDo(toDo.filter((_, currentIndex) => index !== currentIndex))} />
                    </li>
                ))}

            </ul>
            <strong> {toDo.length} tasks </strong>
        </div>
    );
};

export default ToDoList;