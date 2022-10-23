import React, { Component } from 'react';

class TodoItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isCompleted: this.props.isCompleted,
			titleNew: '',
			displayInputEdit: false
		}
		this.handleChange = (event) => {
			const value = event.target.value;
			this.setState({
				titleNew: value
			})
		}
		this.handleSubmit = (event) => {
			event.preventDefault();
			const id = this.props.todo.id;
			this.props.changeTitle(this.state.titleNew, id);
			this.setState({
				displayInputEdit: false
			})
		}
		this.handleToggleStatus = (id) => {
			this.props.toggleStatus(id);
		}
		this.handleDelete = (id) => {
			this.props.deleteTodo(id);
		} 
	}
	handleEditClick() {
		this.setState(prevState => ({
			displayInputEdit: !prevState.displayInputEdit
		}))
	}
	
	render() {
		const isCompleted = this.props.isCompleted;
		const displayInputEdit = this.state.displayInputEdit;
		
		return (
			<div className="todo-item-container">
				<span className="todo-item-toggle" onClick={() => this.handleToggleStatus(this.props.todo.id)}>
					{ isCompleted ? (
						<img src="assets/complete-tick.svg" alt="tick" />
					) : (
						<img src='assets/active-tick.svg' alt='tick'/>
					)}
				</span>
				{ isCompleted ? (
					<div className="todo-item-content completed">{this.props.title}  : <span 			className='todo-item-status'>Completed</span>
					</div>
				) : (
					<div className="todo-item-content">{this.props.title}  : <span className='todo-item-status'>Active</span> 
						{ displayInputEdit ? (
							<form onSubmit={this.handleSubmit}>
								<input className='input-content' type="text" value={this.state.titleNew} onChange={this.handleChange}/>
							</form>
						) : (null)}
					</div>
				)}
				<div className="todo-item-options">
					<span className="icon-btn" onClick={() => this.handleEditClick()}>
						<img src="assets/edit.svg" alt="edit" />
					</span>
					<span className="icon-btn" onClick={() => this.handleDelete(this.props.todo.id)}>
						<img src="assets/delete.svg" alt="close"/>
					</span>
				</div>
			</div>
		);
	}
}

export default TodoItem;

