import React, { useState } from "react";

export const ToDoList2 = () => {

    const [task, setTask] = useState("");
    const [taskList, setTaskList] = useState([])

    const handleSubmit = (event) => {
        event.preventDefault()
        if (task.trim() !== "") {
            setTaskList([...taskList, task])
            setTask("")
        }
        setTask("")
    }

    const deletetask = (item) => {
        setTaskList(taskList.filter((element) => element !== item))
    }

    return (
        <div className="container col-10 col-sm-8 col-md-6 col-lg-6 col-xl-6 text-center">
            <h1 className="bg-warning mt-3">To Do List</h1>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1"></label>
                    <input
                        type="text"
                        className="form-control bg-danger text-white"
                        placeholder="Add task"
                        value={task}
                        onChange={(event) => setTask(event.target.value)}
                    />
                </div>
            </form>

            <ul className="list-group">

                {taskList.map((element) =>
                    <li className="list-group-item d-flex justify-content-between">
                        {element}
                        <span title="Delete task"
                            onClick={() => { deletetask(element) }}>
                            <i className="fas fa-trash"></i>
                        </span>
                    </li>
                )}

                <li className="list-group-item"> <strong>{taskList.length} Tasks</strong> </li>

            </ul>
        </div>
    );
};