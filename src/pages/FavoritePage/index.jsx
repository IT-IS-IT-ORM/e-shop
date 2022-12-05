// React
import React, { useContext } from 'react';

// Context
import { DataContext } from '@/App';

// Components
import { Product } from '@/components';

// Scoped style
import classes from './style.module.less';

export default function FavoritePage() {
	const { favortieList } = useContext(DataContext);

	return (
		<div className={classes.products}>
			{favortieList.map(product => (
				<Product key={product.id} className="product" product={product} />
			))}
		</div>
	);
}
