import React, { memo, useEffect, useState } from 'react';
import { Category } from '../Category';
import { Item, List } from './styles';
import { Loader } from '../Loader';

const useCategoriesData = () => {
	const [categories, setCategories] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		fetch('https://petgram-jdb-api.vercel.app/categories')
			.then(res => res.json())
			.then(response => {
				setCategories(response);
				setTimeout(() => {
					setLoading(false);
				}, 1000);
			});
	}, []);

	return { categories, loading };
};

const ListOfCategoriesComponent = () => {
	const [showFixed, setShowFixed] = useState(false);
	const { categories, loading } = useCategoriesData();

	useEffect(() => {
		const onScroll = e => {
			const newShowFixed = window.scrollY > 180;
			showFixed !== newShowFixed && setShowFixed(newShowFixed);
		};

		document.addEventListener('scroll', onScroll);

		return () => document.removeEventListener('scroll', onScroll);
	}, [showFixed]);

	const renderList = fixed => (
		<List fixed={fixed}>
			{loading ? (
				<Loader minHeight='96px' />
			) : (
				categories.map(category => (
					<Item key={category.id}>
						<Category {...category} path={`/pet/${category.id}`} />
					</Item>
				))
			)}
		</List>
	);

	return (
		<>
			{renderList()}
			{showFixed && renderList(true)}
		</>
	);
};

export const ListOfCategories = memo(ListOfCategoriesComponent);
