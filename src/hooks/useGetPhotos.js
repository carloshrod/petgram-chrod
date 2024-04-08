import { gql, useQuery } from '@apollo/client';

const GET_PHOTOS = gql`
	query getPhotos($categoryId: ID) {
		photos(categoryId: $categoryId) {
			id
			categoryId
			src
			likes
			userId
			liked
		}
	}
`;

export const useGetPhotos = ({ categoryId }) => {
	const { data } = useQuery(GET_PHOTOS, { variables: { categoryId } });

	return { data };
};
