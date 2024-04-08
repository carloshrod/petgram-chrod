import React from 'react';
import { PhotoCard } from '../components/PhotoCard';
import { gql, useQuery } from '@apollo/client';
import { Loader } from '../components/Loader';

const GET_SINGLE_PHOTO = gql`
	query getSinglePhoto($id: ID!) {
		photo(id: $id) {
			id
			categoryId
			src
			likes
			userId
			liked
		}
	}
`;

export const PhotoCardWithQuery = ({ id }) => {
	const { data, loading, error } = useQuery(GET_SINGLE_PHOTO, {
		variables: { id },
	});

	if (loading) return <Loader minHeight='250px' />;
	if (error) return <p>Error!</p>;

	return <PhotoCard {...data?.photo} />;
};
