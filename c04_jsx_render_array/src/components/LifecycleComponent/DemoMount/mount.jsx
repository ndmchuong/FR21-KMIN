import React, { Component } from 'react';
import Clock from '../Clock/clock';

class DemoMount extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isMount: true
		};

		this.buttonRef = React.createRef(null);
	}

	handleToggleClick() {
		this.setState({
			isMount: !this.state.isMount
		});
	}

	render() {
		console.log(this.buttonRef);

		return (
			<>
				<button type="button" onClick={() => this.handleToggleClick()}>
					Toggle mount
				</button>
				<br />
				{this.state.isMount && <Clock />}
			</>
		);
	}
}

export default DemoMount;