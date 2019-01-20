import React, { Component } from 'react';
import StopVisualization from '../stops visualization/StopVisualization';
import { connect } from 'react-redux';
import { fetchLegs, fetchStops, fetchDriver } from '../../actions';

import './CurrentDriver.scss';

class CurrentDriver extends Component {
	componentDidMount() {
		this.props.fetchDriver();
		this.props.fetchStops();
		this.props.fetchLegs();
		//establish realtime connection
	}

	render() {
		return (
			<div>
				<div className="ui segment">
					<h1 className="legs-title">Driver Status</h1>
					<div className="data-container">
						<svg
							viewBox="0 0 200 200"
							version="1.2"
							xmlns="http://www.w3.org/2000/svg"
							xmlnsXlink="http://www.w3.org/1999/xlink"
							className="legend"
						>
							<text x="30%" y="40" fontSize="2rem">
								Legend
							</text>
							<text x="-20" y="103" fontSize="1rem">
								completed
							</text>
							<line stroke="blue" x1="80" x2="200" y1="100" y2="100" strokeWidth="5" />
						</svg>
						<StopVisualization driver={this.props.driver} stops={this.props.stops} legs={this.props.legs} />
					</div>
				</div>
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
	{ fetchLegs, fetchStops, fetchDriver },
)(CurrentDriver);
