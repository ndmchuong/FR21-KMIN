import React, { Component } from 'react';
import TodoFilter from './TodoFilter';
import TodoFooter from './TodoFooter';
import TodoForm from './TodoForm';
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';

class TodoApp extends Component {
	render() {
		return (
			<>
				<div className="app-container">
					<TodoHeader />

					<div className="todo-container">
						<TodoForm />
						<TodoFilter />
						<TodoList />
					</div>
				</div>
				<TodoFooter />
			</>
		);
	}
}

export default TodoApp;
