import React, { useState } from "react";
import classNames from "./Counter.module.scss";

export const Counter = () => {
	const [count, setCount] = useState(0);

	const increment = () => {
		setCount(count + 1);
	};

	return (
		<div>
			{count}
			<button className={classNames.button} onClick={increment}>
				Click
			</button>
		</div>
	);
};
