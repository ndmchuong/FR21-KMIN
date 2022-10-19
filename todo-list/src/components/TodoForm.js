import React, { Component } from 'react';


class TodoForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: ''
		}
		this.handleChange = (event) => {
			const value = event.target.value;
			this.setState({
				title: value
			})
		}
		this.handleSubmit = (event) => {
			event.preventDefault();
			const newTask = this.state.title;
			this.props.addTodo(newTask);
			this.setState({
				title: ''
			})
		}
	}
	render() {
		return (
			<div className="todo-form-container">
				<form onSubmit={this.handleSubmit}>
					<input type="text" value={this.state.title} onChange={this.handleChange} placeholder="What need to be done?"/>
				</form>
			</div>
		);
	}
}

export default TodoForm;


