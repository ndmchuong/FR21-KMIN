import React, { Component } from 'react';

class TodoFilter extends Component {
	constructor(props) {
		super(props);
		this.state= {

		}
	}
	render() {
		return (
			<div className="todo-footer-container">
				<div className="todo-count">{this.props.countTodos} items left</div>
				<div className="todo-menus">
					<span className="active">All</span>
					<span>Active</span>
					<span>Complete</span>
				</div>
			</div>
		);
	}
}

export default TodoFilter;
