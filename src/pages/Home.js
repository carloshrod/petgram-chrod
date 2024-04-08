import React from 'react';
import { ListOfCategories } from '../components/ListOfCategories';
import { ListOfPhotoCards } from '../components/ListOfPhotoCards';
import { Layout } from '../components/Layout';
import { useParams } from 'react-router-dom';

const Home = () => {
	const { categoryId } = useParams();

	return (
		<Layout
			title='Tu app de fotos de mascotas'
			subtitle='Con PetGram puedes encontrar fotos de animales domésticos'
		>
			<ListOfCategories />
			<ListOfPhotoCards categoryId={categoryId} />
		</Layout>
	);
};

export default Home;
