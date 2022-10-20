import React, { Component } from 'react';
import TodoItem from './TodoItem';



class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			
		}
	}
	render() {
		return (
			<div className="todo-list-container">
				{this.props.todos.map((todo) => (
					<TodoItem todo={todo} key={todo.id} isComplete={todo.isCompleted}/>
				))}
			</div>
		);
	}
}

export default TodoList;
