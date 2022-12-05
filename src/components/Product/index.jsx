// React
import React, { useState, useEffect, useMemo } from 'react';
// Router
import { Link, useHistory } from 'react-router-dom';

// UI Lib
import { Rate } from 'antd';
// Icons
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from 'react-icons/md';

// Scoped style
import classes from './style.module.less';

export default function Product({ product, onFavorite, className }) {
	const history = useHistory();
	const [comments, setComments] = useState([]);

	useEffect(() => {
		fetch('/src/data/comment.json')
			.then(response => response.json())
			.then(data => {
				setComments(data);
			});
	}, []);

	const productRate = useMemo(() => {
		if (comments.length === 0) {
			return 0;
		}

		const totalRate = comments.reduce((prev, curr) => prev + curr.rate, 0);
		const avgRate = totalRate / comments.length;
		const preciseRate = avgRate.toFixed(1);

		switch (preciseRate.at(-1)) {
			case '0':
			case '1':
			case '2':
				return Number(avgRate.toFixed(0));
			case '3':
			case '4':
			case '5':
			case '6':
			case '7':
				return Number(avgRate.toFixed(0)) + 0.5;
			default:
				return Number(avgRate.toFixed(0)) + 1;
		}
	}, [comments]);

	const handleCoverClick = productId => {
		const targetURL = `product/${productId}`;
		history.push(targetURL, { product, comments });
	};

	return (
		<div className={`${classes.product} ${className}`}>
			<div className="cover-wrap">
				{!product.isFavorite && (
					<MdOutlineFavoriteBorder
						className="favorite-icon"
						onClick={() =>
							onFavorite?.({
								isFavorite: true,
								product,
							})
						}
					/>
				)}
				{product.isFavorite && (
					<MdOutlineFavorite
						className="favorite-icon favorite-icon--active"
						onClick={() =>
							onFavorite?.({
								isFavorite: false,
								product,
							})
						}
					/>
				)}

				<img
					src={product.cover}
					alt={product.name}
					className="cover"
					onClick={() => handleCoverClick(product.id)}
				/>

				<div className="favorable">
					{product.canInstallments && (
						<div className="installments">0·0·{product.installments}</div>
					)}
					{product.hasBonus && <div className="bonus">{product.bonus}% Б</div>}
				</div>
			</div>

			<Link
				to={{
					pathname: `product/${product.id}`,
					state: {
						product,
						comments,
					},
				}}>
				{product.name}
			</Link>

			<div className="appraise">
				<Rate className="rate" allowHalf disabled value={productRate} />
				<div className="comment">({comments.length} comment)</div>
			</div>

			<div className="purchasing">
				<div className="price">
					Price:{' '}
					<span className="value">
						{Number(product.price).toLocaleString()} ₸
					</span>
				</div>
			</div>
		</div>
	);
}
