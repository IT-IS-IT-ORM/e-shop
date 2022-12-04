// React
import React, { useState, useEffect } from 'react';

// UI Lib
import {} from 'antd';
// Components
import { Product } from '@/components';

// Scoped style
import classes from './style.module.less';

export default function PhonePage() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch('/src/data/phone.json')
			.then(response => response.json())
			.then(data => {
				setProducts(data);
			});
	}, []);

	return (
		<div className={classes.products}>
			{products.map(product => (
				<Product key={product.id} className="product" product={product} />
			))}
		</div>
	);
}
