import React, { Component } from 'react';
import StopVisualization from '../stops visualization/StopVisualization';
import { connect } from 'react-redux';
import { fetchDriver } from '../../actions/index';

import './CurrentDriver.scss';

class CurrentDriver extends Component {
	state = {
		isClicked: false,
		stopCopy: [],
	};

	componentDidMount() {
		this.props.fetchDriver();
	}

	findLegHandler = () => {
		this.setState({ isClicked: !this.state.isClicked });
		//create of copy of data to mutate
		const legCopy = [...this.props.legs];
		const stopCopy = [...this.props.stops];

		//find endpoint of current leg
		const currentLeg = legCopy.find(leg => {
			return leg.legID === this.props.driver[0].activeLegID;
		});

		//get index of end stop to splice stopcopy to map out route dynamically
		const index = stopCopy.findIndex(stop => {
			return stop.name === currentLeg.endStop;
		});

		stopCopy.splice(index);

		this.setState({ stopCopy });
	};

	render() {
		return (
			<div>
				<div className="ui segment">
					<h1 className="legs-title">Driver Status</h1>
					<button onClick={this.findLegHandler}>Active Route</button>
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
						<StopVisualization
							stops={this.props.stops}
							renderActive={this.state.isClicked}
							activeRoute={this.state.stopCopy}
						/>
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
	{ fetchDriver },
)(CurrentDriver);
