import React, { useState } from "react";

export const TrafficLight = () => {
	const [light, setlight] = useState("");

	return (
		<div>
			<div className="container">
				<div
					className={"red " + (light === "red" ? "glow" : "")}
					onClick={() => setlight("red")}></div>
				<div
					className={"orange " + (light === "orange" ? "glow" : "")}
					onClick={() => setlight("orange")}></div>
				<div
					className={"green " + (light === "green" ? "glow" : "")}
					onClick={() => setlight("green")}></div>
			</div>
			<div className="poste"></div>
		</div>
	);
};
