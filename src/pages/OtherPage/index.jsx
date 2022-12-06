// React
import React, { useContext, useCallback } from 'react';

// Context
import { DataContext } from '@/App';

// Components
import { Product } from '@/components';

// Scoped style
import classes from './style.module.less';

export default function OtherPage() {
	const { otherList, toggleFavorite } = useContext(DataContext);

	const handleOnFavorite = useCallback(({ _, product }) => {
		toggleFavorite(product);
	}, []);

	return (
		<div className={classes.products}>
			{otherList.map(product => (
				<Product
					key={product.id}
					className="product"
					product={product}
					onFavorite={handleOnFavorite}
				/>
			))}
		</div>
	);
}
