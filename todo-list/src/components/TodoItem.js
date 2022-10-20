import React, { Component } from 'react';

class TodoItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isComplete: this.props.isComplete
		}
	}

	handleToggleStatus() {
		this.setState(prevState => ({
			isComplete: !prevState.isComplete
		}));
	}

	handleEditClick() {
		console.log('handleEditClick');
	}

	handleDeleteClick() {
		console.log('handleDeleteClick');
	}

	render() {
		const isComplete = this.state.isComplete;
		return (
			<div className="todo-item-container">
				<span className="todo-item-toggle" onClick={() => this.handleToggleStatus()}>
					{ isComplete ? (
						<img src="assets/complete-tick.svg" alt="tick" />
					) : (
						<img src='assets/active-tick.svg' alt='tick'/>
					)}
				</span>
				{ isComplete ? (
					<div className="todo-item-content completed">{this.props.todo.title}</div>
				) : (
					<div className="todo-item-content">{this.props.todo.title}</div>
				)}
				<div className="todo-item-options">
					<span className="icon-btn" onClick={() => this.handleEditClick()}>
						<img src="assets/edit.svg" alt="edit" />
					</span>
					<span className="icon-btn" onClick={() => this.handleDeleteClick()}>
						<img src="assets/delete.svg" alt="close" />
					</span>
				</div>
			</div>
		);
	}
}

export default TodoItem;
