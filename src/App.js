import React, { useCallback, useState } from "react";
import Form from "./components/form";
import Lists from "./components/lists";

export default function App() {
	const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");
  
  const handleClick = useCallback((id) => {
    const newTodoData = todoData.filter((data) => data.id !== id);
    setTodoData(newTodoData);
  }, [todoData]);

	const handleSubmit = (e) => {
		e.preventDefault();

		const newTodo = {
			id: Date.now(),
			title: value,
			completed: false,
		};

		setTodoData((prev) => [...prev, newTodo]);
		setValue("");
	};

	return (
		<div className="flex items-center justify-center w-screen h-screen bg-blue-100">
			<div className="w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg">
				<div className="flex justify-between mb-3">
					<h1>할 일 목록</h1>
				</div>

				<Lists todoData={todoData} setTodoData={setTodoData} handleClick={handleClick} />
				<Form handleSubmit={handleSubmit} value={value} setValue={setValue} />
			</div>
		</div>
	);
}
