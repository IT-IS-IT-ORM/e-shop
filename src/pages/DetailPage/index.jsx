// React
import React, { useEffect } from 'react';
// Router
import { useHistory } from 'react-router-dom';

// Components
import { Product } from '@/components';

// Scoped style
import classes from './style.module.less';

export default function DetailPage() {
	const history = useHistory();

	useEffect(() => {
		if (!history.location.state?.product) {
			history.push('/');
		}
	}, []);

	return (
		<div className={classes.detailPage}>
			<Product
				product={history.location.state.product}
				className={classes.product}
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
