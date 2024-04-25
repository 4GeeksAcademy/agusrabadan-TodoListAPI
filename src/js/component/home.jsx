import React from "react";
import ToDoList from "./ToDoList";
import { ToDoList2 } from "./ToDoList2";
import { Practice } from "./Practice";


//create your first component
const Home = () => {
	return (
		<div>
			<ToDoList2/>
			{/* <ToDoList />
			<Practice/>
			 */}
		</div>
	);
};

export default Home;

