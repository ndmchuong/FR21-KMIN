import React, { Component } from 'react';
import TodoFilter from './TodoFilter';
import TodoFooter from './TodoFooter';
import TodoForm from './TodoForm';
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';

class TodoApp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: []
		};
		this.handleAddTodo = (newTask) => {
			const newTodo = {
				id: this.state.todos.length + 1,
				title: newTask,
				isCompleted: false
			}
			const newListTodos = [...this.state.todos];
			newListTodos.push(newTodo);
			this.setState({
				todos: newListTodos
			});
			console.log(this.state);
		}
	}
	render() {
		return (
			<>
				<div className="app-container">
					<TodoHeader />

					<div className="todo-container">
						<TodoForm addTodo={this.handleAddTodo}/>
						<TodoFilter countTodos = {this.state.todos.length}/>
						<TodoList todos={this.state.todos}/>
					</div>
				</div>
				<TodoFooter />
			</>
		);
	}
}

export default TodoApp;
