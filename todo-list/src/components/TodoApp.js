import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import TodoFilter from './TodoFilter';
import TodoFooter from './TodoFooter';
import TodoForm from './TodoForm';
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';

class TodoApp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [],
			todosActive: [],
			todosCompleted: [],
			filter: "all"
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
		}
		this.handleDelete = (id) => {
			const restListTodos = this.state.todos.filter((value) => id !== value.id);
			const newListTodos = restListTodos.map((item, index) => {
				return {
					id: index + 1,
					title: item.title,
					isCompleted: item.isCompleted
				}
			});
			this.setState({
				todos: newListTodos
			})
		}
		this.handleChangeTitle = (titleNew, id) => {
			const newListTodos = this.state.todos.map((item, index) => {
				if (index === id - 1) {
					return {
						id: item.id,
						title: titleNew,
						isCompleted: item.isCompleted
					}
				}
				else {
					return item
				}
			});
			this.setState({
				todos: newListTodos
			})
		}
		this.handleToggleStatus = (id) => {
			const newListTodos = this.state.todos.map((item, index) => {
				if (index === id - 1) {
					return {
						id: item.id,
						title: item.title,
						isCompleted: !item.isCompleted
					}
				}
				else {
					return item
				}
			});
			this.setState({
				todos: newListTodos
			})
		}
		this.handleFilterActive = (isCompleted) => {
			const listTodosActive = this.state.todos.filter((value) => {
				return isCompleted === value.isCompleted;
			});
			this.setState({
				todosActive: listTodosActive,
				filter: 'active'
			})
		}
		this.handleFilterAll = () => {
			this.setState({
				filter: "all"
			})
		}
		this.handleFilterCompleted = (isCompleted) => {
			const listTodosCompleted = this.state.todos.filter((value) => {
				return isCompleted === value.isCompleted;
			});
			this.setState({
				todosCompleted: listTodosCompleted,
				filter: 'completed'
			})
		}
	}
	render() {
		return (
			<>
				<div className="app-container">
					<TodoHeader />
					<div className="todo-container">
						<Routes>
							<Route path='/' element={
							<>
								<TodoForm addTodo={this.handleAddTodo}/>
								<TodoFilter countTodos = {this.state.todos} filterActive={this.handleFilterActive}
								filterCompleted={this.handleFilterCompleted}
								filterAll={this.handleFilterAll}
								className={{
									all: 'active',
									active: '',
									completed: ''
								}}/>
								<TodoList todos={this.state.todos} deleteTodo = {this.handleDelete} changeTitle = {this.handleChangeTitle}
								toggleStatus = {this.handleToggleStatus} filter={this.state.filter}
								todosActive = {this.state.todosActive}
								todosCompleted = {this.state.todosCompleted}/>
							</> }/>
							<Route path='/active' element={
								<>
								<TodoFilter countTodos = {this.state.todosActive} filterActive={this.handleFilterActive}
								filterCompleted={this.handleFilterCompleted}
								filterAll={this.handleFilterAll}
								className={{
									all: '',
									active: 'active',
									completed: ''
								}}/>
								<TodoList filter={this.state.filter}
								todosActive = {this.state.todosActive}/>
								</>
							}/>
							<Route path='/completed' element={
								<>
								<TodoFilter countTodos = {this.state.todosCompleted} filterActive={this.handleFilterActive}
								filterCompleted={this.handleFilterCompleted}
								filterAll={this.handleFilterAll}
								className={{
									all: '',
									active: '',
									completed: 'active'
								}}/>
								<TodoList filter={this.state.filter}
								todosCompleted = {this.state.todosCompleted}/>
								</>
							}/>
						</Routes>
					</div>
				</div>
				<TodoFooter />
			</>
		);
	}
}

export default TodoApp;
