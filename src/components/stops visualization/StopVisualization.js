import React from 'react';
import './StopVisualization.scss';

const StopVisualization = props => {
	// create a string of data points from api to plot for visualization
	const createDataHandler = () => {
		const stopDataString = props.stops.map(data => {
			return `${data.x * 2} ${data.y * 2}`;
		});

		return stopDataString.join(',');
	};

	const findRoute = () => {};

	//varaible to give attribute to polyline for dynamic charting
	const dataPoints = { points: `${createDataHandler()}` };

	console.log(props.legs);
	console.log(props.driver);
	console.log(props.stops);

	//if data has loaded from api render svg or else loading...
	const visualize = (
		<svg
			viewBox="0 0 250 250"
			version="1.2"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			className="stopGrid"
		>
			{/* <title id="title">A line chart showing some information</title> */}
			<g className="grid x-grid" id="xGrid">
				<line stroke="black" x1="0" x2="0" y1="0" y2="250" />
				<line stroke="black" x1="0" x2="250" y1="250" y2="250" />
				<line stroke="black" x1="0" x2="250" y1="0" y2="0" />
				<line stroke="black" x1="250" x2="250" y1="0" y2="250" />
			</g>

			<g className="data" data-setname="Our first data set">
				<polyline stroke="red" strokeDasharray="5" strokeWidth="1" fill="none" {...dataPoints} />

				{props.stops.map(stop => {
					return (
						<g>
							<circle cx={`${stop.x * 2}`} cy={`${stop.y * 2}`} data-value="8.1" r="2" />
							{stop.name === 'A' && (
								<text x={`${stop.x * 2 - 18}`} y={`${stop.y * 2}`} fontSize="5px" fontWeight="bold">
									{stop.name}/
								</text>
							)}
							{stop.name === 'C' && (
								<text x={`${stop.x * 2 - 12}`} y={`${stop.y * 2}`} fontSize="5px" fontWeight="bold">
									{stop.name}/
								</text>
							)}
							{stop.name === 'L' && (
								<text x={`${stop.x * 2 - 6}`} y={`${stop.y * 2}`} fontSize="5px" fontWeight="bold">
									{stop.name}
								</text>
							)}
							{stop.name !== 'A' && stop.name !== 'C' && stop.name !== 'L' ? (
								<text x={`${stop.x * 2 - 8}`} y={`${stop.y * 2}`} fontSize="5px" fontWeight="bold">
									{stop.name}
								</text>
							) : null}
						</g>
					);
				})}
			</g>
		</svg>
	);

	return <div className="grid-container">{visualize}</div>;
};

export default StopVisualization;
