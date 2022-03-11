import React, { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
export function TraficLight() {
	const [color, setColor] = useState("yellow");
	return (
		<div className="app">
			<div className="tlTop"></div>
				<div className="tlBody">
					<div
						className={
							color === "red" ? "red light selected" : "red light"
						}
						onClick={() => setColor("red")}></div>
					<div
						className={
							color === "yellow"
								? "yellow light selected"
								: "yellow light"
						}
						onClick={() => setColor("yellow")}></div>
					<div
						className={
							color === "green"
								? "green light selected"
								: "green light"
						}
						onClick={() => setColor("green")}></div>
				</div>
		</div>
	);
}
