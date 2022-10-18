import React, { Component } from 'react';
import { todos } from '../data/data';
import TodoItem from './TodoItem';



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
