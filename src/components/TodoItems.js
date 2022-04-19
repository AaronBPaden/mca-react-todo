import { useState } from 'react';
const TodoItems = () => {
	const [items, setItems] = useState([]);
	const [itemText, setItemText] = useState("");
	const handleChange = (e) => {
		setItemText(e.target.value);
		console.log(itemText);
	};
	const addItem = () => {
		setItems(prev => [
			...prev,
			<div key={prev.length+1} className="todo-item">
				{itemText}
			</div>
		]);
	}
	return(
		<section className="todo-items">
			{items}
			<div className="todo-item todo-adder">
				<input value={itemText} onChange={handleChange} id="textBox" type="text" placeholder="enter item" />
				<button onClick={addItem}>+</button>
			</div>
		</section>
	)
}

export default TodoItems;
