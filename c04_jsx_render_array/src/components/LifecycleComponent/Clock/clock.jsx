import React, { Component } from 'react';

class Clock extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isSuccess: false,
			date: new Date()
		};

		console.log('constructor');
	}

	componentDidMount() {
		console.log('componentDidMount');
		this.dateIntervalID = setInterval(() => {
			this.setState({
				date: new Date()
			});
		}, 1000);
	}

	componentWillUnmount() {
		console.log('componentWillUnmount');
		clearInterval(this.dateIntervalID);
	}

	handleStateChange() {
		this.setState({
			isSuccess: !this.state.isSuccess
		});
	}

	render() {
		return (
			<div>
				<p>Hello, React Lifecycle!</p>
				<p>It is {this.state.date.toLocaleTimeString()}.</p>

				<br />
				<button type="button" onClick={() => this.handleStateChange()}>
					State change - {this.state.isSuccess && 'Mount'}
				</button>
			</div>
		);
	}
}

export default Clock;