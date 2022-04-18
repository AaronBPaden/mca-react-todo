import { useState } from 'react';
const TodoItems = () => {
	const [items, setItems] = useState([]);
	const [itemText, setItemText] = useState("");
	const addItem = () => {
		setItemText(document.getElementById('textBox').value);
		setItems(prev => [
			...prev,
			<div key={prev.length+1} className="todo-item">
				{itemText}
			</div>
		]);
		document.getElementById('textBox').value='';
	}
	return(
		<section className="todo-items">
			{items}
			<div className="todo-item todo-adder">
				<input id="textBox" type="text" placeholder="enter item" />
				<button onClick={addItem}>+</button>
			</div>
		</section>
	)
}

export default TodoItems;
