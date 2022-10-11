import React, { Component } from 'react';
import TodoItem from './TodoItem';

const todos = [
	{
		id: 1,
		title: 'Uống một tách trà nóng',
		isCompleted: false
	},
	{
		id: 2,
		title: 'Đến Academy học lập trình',
		isCompleted: false
	},
	{
		id: 3,
		title: 'Ăn trưa cùng crush',
		isCompleted: false
	},
	{
		id: 4,
		title: 'Thực hành lập trình',
		isCompleted: false
	}
];

class TodoList extends Component {
	render() {
		return (
			<div className="todo-list-container">
				{todos.map((todo) => (
					<TodoItem todo={todo} key={todo.id} />
				))}
			</div>
		);
	}
}

export default TodoList;
