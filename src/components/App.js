import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchLegs, fetchStops, fetchDriver } from '../actions/index';
import Routes from './routeLink/Routes';
import Header from './header/Header';

import './App.scss';
import CurrentDriver from './currentDriverLink/CurrentDriver';

class App extends Component {
	componentDidMount() {
		this.props.fetchDriver();
		this.props.fetchLegs();
		this.props.fetchStops();
	}
	render() {
		return (
			<div>
				<BrowserRouter>
					<div>
						<Header />
						<Route path="/" exact component={Routes} />
						<Route path="/current" component={CurrentDriver} />
					</div>
				</BrowserRouter>
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
)(App);
