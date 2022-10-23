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
				{this.props.filter === "all" ? 

				( this.props.todos.map((todo) => (
					<TodoItem todo={todo} 
					isCompleted={todo.isCompleted} 
					title={todo.title} 
					deleteTodo = {this.props.deleteTodo} 
					changeTitle={this.props.changeTitle}
					toggleStatus={this.props.toggleStatus}/>
				))) : this.props.filter === "active" ?

				( this.props.todosActive.map((todo) => (
					<div className='todo-item-container'>
						<p className='todo-item-content'>{todo.title}</p>
					</div>
				))) : this.props.filter === "completed" ? 
				
				( this.props.todosCompleted.map((todo) => (
					<div className='todo-item-container'>
						<p className='todo-item-content'>{todo.title}</p>
					</div>
				))) : (null)
				}
			</div>
		);
	}
}

export default TodoList;
