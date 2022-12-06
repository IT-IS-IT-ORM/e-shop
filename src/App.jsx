// React
import React, { createContext, useState, useMemo } from 'react';
// Router
import { BrowserRouter } from 'react-router-dom';

// Utils
import { isFunction } from './utils';

// Components
import { Layout } from '@/components';

import computerList from '@/data/computer.json';
import phoneList from '@/data/phone.json';
import otherList from '@/data/other.json';
import commentList from '@/data/comment.json';

const contextDefaultValue = {
	computerList,
	phoneList,
	otherList,
	commentList,
};
export const DataContext = createContext(contextDefaultValue);

export default function App() {
	const [data, setData] = useState(contextDefaultValue);
	const favortieList = useMemo(
		() => [
			...data.computerList.filter(item => item.isFavorite),
			...data.phoneList.filter(item => item.isFavorite),
			...data.otherList.filter(item => item.isFavorite),
		],
		[data],
	);

	const contextSetters = {
		setComputerList(setStateAction) {
			if (isFunction(setStateAction)) {
				setData(prevState => ({
					...prevState,
					computerList: setStateAction(prevState.computerList),
				}));
				return;
			}

			setData(prevState => ({
				...prevState,
				computerList: setStateAction,
			}));
		},
		setPhoneList(setStateAction) {
			if (isFunction(setStateAction)) {
				setData(prevState => ({
					...prevState,
					phoneList: setStateAction(prevState.phoneList),
				}));
				return;
			}

			setData(prevState => ({
				...prevState,
				phoneList: setStateAction,
			}));
		},
		setOtherList(setStateAction) {
			if (isFunction(setStateAction)) {
				setData(prevState => ({
					...prevState,
					otherList: setStateAction(prevState.otherList),
				}));
				return;
			}

			setData(prevState => ({
				...prevState,
				otherList: setStateAction,
			}));
		},
		setCommentList(setStateAction) {
			if (isFunction(setStateAction)) {
				setData(prevState => ({
					...prevState,
					commentList: setStateAction(prevState.commentList),
				}));
				return;
			}

			setData(prevState => ({
				...prevState,
				commentList: setStateAction,
			}));
		},
	};

	const toggleFavorite = product => {
		const reflex = {
			'COMPUTER': contextSetters.setComputerList,
			'PHONE': contextSetters.setPhoneList,
			'OTHER': contextSetters.setOtherList,
		};

		reflex[product.productType](prevProductList =>
			prevProductList.map(item => {
				if (item.id === product.id) {
					return {
						...item,
						isFavorite: !item.isFavorite,
					};
				}

				return item;
			}),
		);
	};

	return (
		<DataContext.Provider
			value={{ ...data, favortieList, ...contextSetters, toggleFavorite }}>
			<BrowserRouter>
				<Layout />
			</BrowserRouter>
		</DataContext.Provider>
	);
}
