// React
import React from 'react';
// Router
import { BrowserRouter } from 'react-router-dom';

// Components
import { Layout } from '@/components';

export default function App() {
	return (
		<BrowserRouter>
			<Layout />
		</BrowserRouter>
	);
}
