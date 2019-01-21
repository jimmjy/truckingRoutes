import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editDriver } from '../../actions/index';

class AddDriver extends Component {
	state = {
		data: [],
	};

	onsubmitHandler = e => {
		e.preventDefault();
		console.log(e.target.elements[0].value);
		this.props.editDriver(12);
	};
	listenInputHandler = e => {
		e.preventDefault();
		const name = e.target.value;
		console.log(e.target.name);
	};
	render() {
		return (
			<div className="ui segment">
				<form onSubmit={e => this.onsubmitHandler(e)}>
					<label htmlFor="percent">percent progress</label>
					<input type="text" name="progress" onChange={this.listenInputHandler} />
					<input type="text" name="leg" onChange={this.listenInputHandler} />
					<button>click</button>
				</form>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	legs: state.legs,
	stops: state.stops,
	driver: state.driver,
});

export default connect(
	mapStateToProps,
	{ editDriver },
)(AddDriver);
