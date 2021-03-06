import React, { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
export function TraficLight() {
	const [color, setColor] = useState("yellow");
	const [hidden, change] = useState("yes");
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
				<div
					className={
						color === "purple"
							? "purple light selected"
							: "purple light"
					}
					style={
						hidden === "yes"
							? { display: "none" }
							: { display: "block" }
					}
					onClick={() => setColor("purple")}></div>
			</div>
			<br />
			<div className="text-center">
				<button
					type="button"
					className="btn btn-success text-center m-3"
					onClick={() =>
						color === "red"
							? setColor("yellow")
							: color === "yellow"
							? setColor("green")
							: color === "purple"
							? setColor("red")
							: hidden === "yes"
							? setColor("red")
							: setColor("purple")
					}>
					Change color
				</button>
				<br />
				<button
					type="button"
					className="btn btn-success text-center"
					onClick={() =>
						hidden === "yes" ? change("no") : change("yes")
					}>
					Purple
				</button>
			</div>
		</div>
	);
}
