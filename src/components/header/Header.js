import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

const Header = () => {
	return (
		<div className="header">
			<Link to="/" className="item">
				Routes
			</Link>
			<Link to="/current" className="item">
				Current Driver
			</Link>
			<Link to="/" className="item">
				Add Driver
			</Link>
		</div>
	);
};

export default Header;
