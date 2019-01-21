import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editDriver } from '../../actions/index';

class AddDriver extends Component {
	//this pushes our inputs to the api
	onsubmitHandler = e => {
		e.preventDefault();
		console.log(e.target.elements[0].value);
		this.props.editDriver(e.target.elements[0].value, e.target.elements[1].value);
	};

	render() {
		return (
			<div className="ui segment">
				<form onSubmit={e => this.onsubmitHandler(e)}>
					<div class="ui big label">Percentage</div>
					<div class="ui input">
						<input type="text" placeholder="Search..." />
					</div>
					<select className="ui dropdown">
						{this.props.legs.map(leg => {
							return <option value={`${leg.legID}`}>{leg.legID}</option>;
						})}
					</select>
					<button className="ui button">Submit</button>
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
