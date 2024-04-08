import React from 'react';
import { PhotoCardWithQuery } from '../containers/PhotoCardWithQuery';
import { useParams } from 'react-router-dom';
import { Layout } from '../components/Layout';

const Detail = () => {
	const { detailId } = useParams();

	return (
		<Layout title={`Fotografía ${detailId}`}>
			<PhotoCardWithQuery id={detailId} />
		</Layout>
	);
};

export default Detail;
