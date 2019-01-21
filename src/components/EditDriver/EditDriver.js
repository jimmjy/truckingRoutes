import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editDriver } from '../../actions/index';

class AddDriver extends Component {
	state = {
		data: [],
	};

	listenInputHandler = e => {
		const name = e.target.value;
		console.log(name);
	};
	render() {
		return (
			<div className="ui segment">
				<form onSubmit={e => this.props.editDriver()}>
					<label htmlFor="percent">percent progress</label>
					<input type="text" name="progress" onChange={this.listenInputHandler} />
					<input type="text" name="leg" />
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
