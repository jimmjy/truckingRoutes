import React, { Component } from 'react';
import StopVisualization from '../stops visualization/StopVisualization';
import { connect } from 'react-redux';
import { fetchStops } from '../../actions/index';

import './Routes.scss';

class Routes extends Component {
	render() {
		const card = this.props.legs.map(leg => {
			return (
				<div className="card">
					<div className="content">
						<div className="card-header">LegID: {leg.legID}</div>
						<div className="description">Starts: {leg.startStop} </div>
						<div className="description">Stops: {leg.endStop}</div>
						<div className="description">Speed limit: {leg.speedLimit}</div>
					</div>
				</div>
			);
		});

		return (
			<div>
				<div className="ui segment">
					<h1 className="legs-title">Legs</h1>
					<div className="ui cards">{card}</div>
				</div>
				<div className="ui segment">
					<h1 className="legs-title">Stops</h1>
					<StopVisualization stops={this.props.stops} legs={this.props.legs} />
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	legs: state.legs,
	stops: state.stops,
});

export default connect(
	mapStateToProps,
	{ fetchStops },
)(Routes);
