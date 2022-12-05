// React
import React, { createContext, useState } from 'react';
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
	favortieList: [
		...computerList.filter(item => item.isFavorite),
		...phoneList.filter(item => item.isFavorite),
		...otherList.filter(item => item.isFavorite),
	],
};
export const DataContext = createContext(contextDefaultValue);

export default function App() {
	const [data, setData] = useState(contextDefaultValue);

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
		setFavoriteList(setStateAction) {
			if (isFunction(setStateAction)) {
				setData(prevState => ({
					...prevState,
					favortieList: setStateAction(prevState.favortieList),
				}));
				return;
			}

			setData(prevState => ({
				...prevState,
				favortieList: setStateAction,
			}));
		},
	};

	return (
		<DataContext.Provider value={{ ...data, ...contextSetters }}>
			<BrowserRouter>
				<Layout />
			</BrowserRouter>
		</DataContext.Provider>
	);
}
