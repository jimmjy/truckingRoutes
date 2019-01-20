import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Routes from './routeLink/Routes';
import Header from './header/Header';

import './App.scss';
import CurrentDriver from './currentDriverLink/CurrentDriver';

class App extends Component {
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

export default App;
