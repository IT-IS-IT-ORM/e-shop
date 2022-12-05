// React
import React, { useContext, useCallback } from 'react';

// Context
import { DataContext } from '@/App';

// Components
import { Product } from '@/components';

// Scoped style
import classes from './style.module.less';

export default function FavoritePage() {
	const { favortieList } = useContext(DataContext);

	const handleOnFavorite = useCallback(({ isFavorite, product }) => {
		console.log(isFavorite, product);
	}, []);

	return (
		<div className={classes.products}>
			{favortieList.map(product => (
				<Product
					key={product.productType + product.id.toString()}
					className="product"
					product={product}
					onFavorite={handleOnFavorite}
				/>
			))}
		</div>
	);
}
