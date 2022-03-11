import React from "react";
export function TraficLight() {
	return (
		<div className="app">
			<div className="tlTop"></div>
			<div className="tlBody">
				<div className="red light selected"></div>
				<div className="yellow light"></div>
				<div className="green light"></div>
			</div>
		</div>
	);
}
