import React, { useState } from "react";

export const TrafficLight = () => {
	const [light, setlight] = useState("");

	return (
		<div>
			<div className="semaforo"></div>
			<div className="container">
				<div className="sem">
					<div
						className={
							"light red " + (light === "red" ? "glow" : "")
						}
						onClick={() => setlight("red")}></div>
					<div
						className={
							"light orange " + (light === "orange" ? "glow" : "")
						}
						onClick={() => setlight("orange")}></div>
					<div
						className={
							"light green " + (light === "green" ? "glow" : "")
						}
						onClick={() => setlight("green")}></div>
				</div>
			</div>
			<div className="poste">
				<div className="señal">
					<div className="señal1">Prohibido</div>
				</div>
			</div>
		</div>
	);
};
