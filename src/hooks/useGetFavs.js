import { gql, useQuery } from '@apollo/client';

const GET_FAVS = gql`
	query getFavs {
		favs {
			id
			categoryId
			src
			likes
			userId
		}
	}
`;

export const useGetFavs = () => {
	const { data, loading } = useQuery(GET_FAVS, {
		fetchPolicy: 'cache-and-network',
	});

	return { data, loading };
};
