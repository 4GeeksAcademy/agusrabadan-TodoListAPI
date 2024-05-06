import React from "react";
import ToDoList from "./ToDoList";
import { ToDoList2 } from "./ToDoList2";
import { Practice } from "./Practice";
import { TodoListAPI } from "./TodoListAPI";


//create your first component
const Home = () => {
	return (
		<div>
			{<TodoListAPI/>}
			{/* <ToDoList />
			<ToDoList2/>
			<Practice/>
			 */}
		</div>
	);
};

export default Home;

