import React, { Component } from 'react';

class LifeCycle extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isSuccess: false
		};

		console.log('constructor');
	}

	componentDidMount() {
		console.log('componentDidMount');
	}

	componentDidUpdate() {
		console.log('componentDidUpdate');
	}

	componentWillUnmount() {
		console.log('componentWillUnmount');
	}

	handleStateChange() {
		this.setState({
			isSuccess: !this.state.isSuccess
		});
	}

	render() {
		console.log('render');
		return (
			<>
				ReactJS LifeCycle
				<br />
				<button type="button" onClick={() => this.handleStateChange()}>
					State change
				</button>
			</>
		);
	}
}

export default LifeCycle;