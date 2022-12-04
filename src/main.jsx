// React
import React from 'react';
import ReactDOM from 'react-dom';
// App Component
import App from './App';

// Render v-dom to read-dom
ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	// container
	document.getElementById('root'),
);
