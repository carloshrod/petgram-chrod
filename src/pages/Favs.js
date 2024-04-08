import React from 'react';
import { useGetFavs } from '../hooks/useGetFavs';
import { ListOfFavs } from '../components/ListOfFavs';
import { Layout } from '../components/Layout';

const Favs = () => {
	const { data, loading } = useGetFavs();
	const { favs } = data ?? {};

	return (
		<Layout
			title='Tus Favoritos'
			subtitle='Aquí puedes encontrar tus mascotas favoritas 🐶🐱🦜'
		>
			<ListOfFavs favs={favs} loading={loading} />
		</Layout>
	);
};

export default Favs;
