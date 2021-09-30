import React, { useState, useEffect } from 'react';
import ProgressBar from './ProgressBar.component';
import './App.css';

function App() {
	const [value, setValue] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			// Run this every second
			setValue((oldValue) => {
				// update the value by 10
				const newValue = oldValue + 10;

				if (newValue === 100) {
					// If the value hits 100, clear the interval
					clearInterval(interval);
				}

				return newValue;
			});
		}, 1000);
	}, []);
	return <ProgressBar value={value} />;
}

export default App;
