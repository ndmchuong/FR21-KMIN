import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TodoFilter extends Component {
	constructor(props) {
		super(props);
		this.state= {

		}
		this.handleFilterActive = () => {
			const isCompleted = false;
			this.props.filterActive(isCompleted);
		}
		this.handleFilterCompleted = () => {
			const isCompleted = true;
			this.props.filterCompleted(isCompleted);
		}
		this.handleFilterAll = () => {
			this.props.filterAll();
		}
	}
	render() {
		return (
			<div className="todo-footer-container">
				<div className="todo-count">{this.props.countTodos.length} items left</div>
				<div className="todo-menus">
					<Link to="/" >
						<span className={this.props.className.all} onClick={this.handleFilterAll}>All</span>
					</Link>
					<Link to="/active">
						<span className={this.props.className.active} onClick={this.handleFilterActive}>Active</span>
					</Link>
					<Link to="/completed">
						<span className={this.props.className.completed} onClick={this.handleFilterCompleted}>Completed</span>
					</Link>
				</div>
			</div>
		);
	}
}

export default TodoFilter;
