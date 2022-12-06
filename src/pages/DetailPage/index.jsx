// React
import React, { useEffect, useCallback, useContext, useMemo } from 'react';
// Router
import { useHistory } from 'react-router-dom';

// Context
import { DataContext } from '@/App';

// Components
import { Product } from '@/components';

// Scoped style
import classes from './style.module.less';

export default function DetailPage() {
	const history = useHistory();
	const { toggleFavorite, computerList, phoneList, otherList } =
		useContext(DataContext);

	const currentProduct = useMemo(() => {
		const productFromLocation = history.location.state.product;

		return [...computerList, ...phoneList, ...otherList].find(
			item =>
				item.id === productFromLocation.id &&
				item.productType === productFromLocation.productType,
		);
	}, [computerList, phoneList, otherList, history]);

	const handleOnFavorite = useCallback(({ _, product }) => {
		toggleFavorite(product);
	}, []);

	useEffect(() => {
		if (!history.location.state?.product) {
			history.push('/');
		}
	}, []);

	return (
		<div className={classes.detailPage}>
			<Product
				product={currentProduct}
				className={classes.product}
				onFavorite={handleOnFavorite}
			/>

			<div className={classes.descriptionWrap}>
				<h5 className="title">About product</h5>

				<p className="description">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo at
					distinctio tempore molestiae adipisci voluptate ad velit. Facere,
					earum minima, fugit, repudiandae odio totam asperiores sint quis omnis
					amet necessitatibus.
				</p>
			</div>

			<div className={classes.commentsWrap}>
				<h5 className="title">Comments</h5>

				<ul className={classes.commentList}>
					{history.location.state.comments.map(comment => (
						<li key={comment.id} className="comment">
							{comment.content} ({comment.rate})
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
